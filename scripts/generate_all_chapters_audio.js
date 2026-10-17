// scripts/generate_all_chapters_audio.js
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_DIR_DIALOGUES = path.join(__dirname, '../public/audio/dialogues');
const OUTPUT_DIR_READING = path.join(__dirname, '../public/audio/reading');
const TEMP_DIR = path.join(__dirname, '../temp_audio_build');
const TIMESTAMPS_OUTPUT = path.join(__dirname, '../src/data/studioAudioTimestamps.json');

if (!fs.existsSync(OUTPUT_DIR_DIALOGUES)) fs.mkdirSync(OUTPUT_DIR_DIALOGUES, { recursive: true });
if (!fs.existsSync(OUTPUT_DIR_READING)) fs.mkdirSync(OUTPUT_DIR_READING, { recursive: true });
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

const VOICE_MAP = {
  // Male (Maarten)
  'Verteller': 'nl-NL-MaartenNeural',
  'Buurman': 'nl-NL-MaartenNeural',
  'Ning': 'nl-NL-MaartenNeural',
  'Andres': 'nl-NL-MaartenNeural',
  'Ober': 'nl-NL-MaartenNeural',
  'Bert': 'nl-NL-MaartenNeural',
  'Hans': 'nl-NL-MaartenNeural',
  'Jasper': 'nl-NL-MaartenNeural',
  'Makelaar': 'nl-NL-MaartenNeural',
  'Meneer Smit': 'nl-NL-MaartenNeural',
  'Fietsenmaker': 'nl-NL-MaartenNeural',
  'Tom': 'nl-NL-MaartenNeural',
  'Peter': 'nl-NL-MaartenNeural',
  'Voorbijganger': 'nl-NL-MaartenNeural',
  'Buschauffeur': 'nl-NL-MaartenNeural',
  'Portier': 'nl-NL-MaartenNeural',
  'Paul': 'nl-NL-MaartenNeural',
  'Bas': 'nl-NL-MaartenNeural',
  'Tjeerd': 'nl-NL-MaartenNeural',
  'Sam': 'nl-NL-MaartenNeural',
  'Politieagent': 'nl-NL-MaartenNeural',

  // Female 1 (Colette - mature, clear, teacher, doctor)
  'Docent': 'nl-NL-ColetteNeural',
  'Edit': 'nl-NL-ColetteNeural',
  'Christine': 'nl-NL-ColetteNeural',
  'Verkoopster': 'nl-NL-ColetteNeural',
  'Mevrouw Kirbas': 'nl-NL-ColetteNeural',
  'Huisarts': 'nl-NL-ColetteNeural',
  'Vrouw': 'nl-NL-ColetteNeural',
  'Tina': 'nl-NL-ColetteNeural',

  // Female 2 (Fenna - vibrant, young, student)
  'Susy': 'nl-NL-FennaNeural',
  'Cursist': 'nl-NL-FennaNeural',
  'Serveerster': 'nl-NL-FennaNeural',
  'Sandra': 'nl-NL-FennaNeural',
  'Patricia': 'nl-NL-FennaNeural',
  'Marit': 'nl-NL-FennaNeural',
  'Kirsten': 'nl-NL-FennaNeural',
  'Janine': 'nl-NL-FennaNeural',
  'Amira': 'nl-NL-FennaNeural',
  'Caissière': 'nl-NL-FennaNeural',
  'Meisje en jongen': 'nl-NL-FennaNeural',
  'Susy en Andres': 'nl-NL-FennaNeural'
};

function getVoiceForSpeaker(speaker) {
  return VOICE_MAP[speaker] || 'nl-NL-MaartenNeural';
}

function generateSilence(durationSec, outputPath) {
  execSync(`ffmpeg -y -f lavfi -i anullsrc=r=24000:cl=mono -t ${durationSec} -q:a 9 -acodec libmp3lame "${outputPath}"`, { stdio: 'ignore' });
}

function getDuration(filePath) {
  const out = execSync(`ffprobe -i "${filePath}" -show_entries format=duration -v quiet -of json`).toString();
  const data = JSON.parse(out);
  return parseFloat(data.format.duration);
}

async function generateClipWithRetry(voice, text, outDir, finalPath, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true });
      fs.mkdirSync(outDir, { recursive: true });

      const tts = new MsEdgeTTS();
      await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      await tts.toFile(outDir, text);
      tts.close();

      const generated = path.join(outDir, 'audio.mp3');
      if (fs.existsSync(generated)) {
        fs.copyFileSync(generated, finalPath);
        return;
      }
    } catch (err) {
      if (attempt === maxRetries) throw err;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}

function cleanDialogueText(text) {
  if (!text) return '';
  let clean = text.trim();
  // Handle (even later), (een poosje later), etc.
  if (/^\([^\)]+\)$/.test(clean)) {
    clean = clean.replace(/^\(|\)$/g, '').trim();
    if (clean.length > 0) {
      clean = clean.charAt(0).toUpperCase() + clean.slice(1) + '.';
    }
  }
  clean = clean.replace(/\(\.\.\.\)/g, '... ');
  return clean;
}

async function processChapter(chNum, dData, rData, silenceShort, silencePause, silenceLong, silenceShortDur, silencePauseDur, silenceLongDur) {
  console.log(`\n⏳ === Starting Chapter ${chNum} ===`);

  // 1. DIALOGUE
  const dFiles = [];
  const dTimestamps = [];
  let curDTime = 0.0;
  const chTempDir = path.join(TEMP_DIR, `ch_${chNum}`);
  if (fs.existsSync(chTempDir)) fs.rmSync(chTempDir, { recursive: true, force: true });
  fs.mkdirSync(chTempDir, { recursive: true });

  for (let i = 0; i < dData.lines.length; i++) {
    const item = dData.lines[i];
    const clipPath = path.join(chTempDir, `d_line_${i}.mp3`);
    const lineTemp = path.join(chTempDir, `temp_d_${i}`);

    const isPause = !item.text || item.text.trim() === '(...)' || item.text.trim() === '';
    if (isPause) {
      dFiles.push(silencePause);
      const start = parseFloat(curDTime.toFixed(2));
      curDTime += silencePauseDur;
      const end = parseFloat(curDTime.toFixed(2));
      dTimestamps.push({ idx: item.idx, start, end, duration: parseFloat((end - start).toFixed(2)) });
    } else {
      const voice = getVoiceForSpeaker(item.speaker);
      const clean = cleanDialogueText(item.text);
      await generateClipWithRetry(voice, clean, lineTemp, clipPath);
      const dur = getDuration(clipPath);
      dFiles.push(clipPath);
      const start = parseFloat(curDTime.toFixed(2));
      curDTime += dur;
      const end = parseFloat(curDTime.toFixed(2));
      dTimestamps.push({ idx: item.idx, start, end, duration: parseFloat((end - start).toFixed(2)) });
    }

    if (i < dData.lines.length - 1) {
      dFiles.push(silenceShort);
      curDTime += silenceShortDur;
    }
  }

  const concatListD = path.join(chTempDir, 'concat_d.txt');
  fs.writeFileSync(concatListD, dFiles.map(f => `file '${f}'`).join('\n'));
  const finalDialoguePath = path.join(OUTPUT_DIR_DIALOGUES, `ch${chNum}.mp3`);
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatListD}" -c copy "${finalDialoguePath}"`, { stdio: 'ignore' });
  const totalDDur = getDuration(finalDialoguePath);
  console.log(`✅ Chapter ${chNum} Dialogue created (${totalDDur.toFixed(2)}s)`);

  // 2. READING
  const rFiles = [];
  const rTimestamps = [];
  let curRTime = 0.0;

  for (let i = 0; i < rData.paragraphs.length; i++) {
    const text = rData.paragraphs[i];
    const clipPath = path.join(chTempDir, `r_para_${i}.mp3`);
    const paraTemp = path.join(chTempDir, `temp_r_${i}`);

    await generateClipWithRetry("nl-NL-ColetteNeural", text, paraTemp, clipPath);
    const dur = getDuration(clipPath);
    rFiles.push(clipPath);
    const start = parseFloat(curRTime.toFixed(2));
    curRTime += dur;
    const end = parseFloat(curRTime.toFixed(2));
    rTimestamps.push({ idx: i, start, end, duration: parseFloat((end - start).toFixed(2)) });

    if (i < rData.paragraphs.length - 1) {
      rFiles.push(silenceLong);
      curRTime += silenceLongDur;
    }
  }

  const concatListR = path.join(chTempDir, 'concat_r.txt');
  fs.writeFileSync(concatListR, rFiles.map(f => `file '${f}'`).join('\n'));
  const finalReadingPath = path.join(OUTPUT_DIR_READING, `ch${chNum}.mp3`);
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatListR}" -c copy "${finalReadingPath}"`, { stdio: 'ignore' });
  const totalRDur = getDuration(finalReadingPath);
  console.log(`✅ Chapter ${chNum} Reading created (${totalRDur.toFixed(2)}s)`);

  // Cleanup ch temp dir
  try {
    fs.rmSync(chTempDir, { recursive: true, force: true });
  } catch (e) {}

  return {
    chapter: chNum,
    dialogue: {
      chapter: chNum,
      sectionId: dData.sectionId,
      audioSrc: `/audio/dialogues/ch${chNum}.mp3`,
      totalDuration: parseFloat(totalDDur.toFixed(2)),
      lines: dTimestamps
    },
    reading: {
      chapter: chNum,
      sectionId: rData.sectionId,
      audioSrc: `/audio/reading/ch${chNum}.mp3`,
      totalDuration: parseFloat(totalRDur.toFixed(2)),
      paragraphs: rTimestamps
    }
  };
}

async function main() {
  console.log("Preparing silence clips...");
  const silenceShort = path.join(TEMP_DIR, 'silence_short.mp3');
  const silencePause = path.join(TEMP_DIR, 'silence_pause.mp3');
  const silenceLong = path.join(TEMP_DIR, 'silence_long.mp3');
  generateSilence(0.40, silenceShort);
  generateSilence(0.80, silencePause);
  generateSilence(0.70, silenceLong);
  const silenceShortDur = getDuration(silenceShort);
  const silencePauseDur = getDuration(silencePause);
  const silenceLongDur = getDuration(silenceLong);

  const extracted = require('/home/deck/.gemini/antigravity/brain/986fb9db-887a-4413-a53f-922ee90fe5cc/scratch/all_extracted_content.json');
  const ch1Data = require('../src/data/chapter1Timestamps.json');

  const allTimestamps = {
    dialogues: {
      1: ch1Data.dialogue
    },
    reading: {
      1: ch1Data.reading
    }
  };

  // Process chapters 2 to 18 sequentially or in small concurrency
  for (let ch = 2; ch <= 18; ch++) {
    const dData = extracted.dialogues[ch];
    const rData = extracted.readings[ch];
    const result = await processChapter(
      ch,
      dData,
      rData,
      silenceShort,
      silencePause,
      silenceLong,
      silenceShortDur,
      silencePauseDur,
      silenceLongDur
    );

    allTimestamps.dialogues[ch] = result.dialogue;
    allTimestamps.reading[ch] = result.reading;

    // Periodically save progress to json
    fs.writeFileSync(TIMESTAMPS_OUTPUT, JSON.stringify(allTimestamps, null, 2));
    console.log(`💾 Timestamps saved up to Chapter ${ch}`);
  }

  console.log("\n🎉 ALL 18 CHAPTERS AUDIO & TIMESTAMPS GENERATION COMPLETE!");
  console.log("Master timestamps file:", TIMESTAMPS_OUTPUT);
}

main().catch(err => {
  console.error("FATAL ERROR in generation:", err);
  process.exit(1);
});

