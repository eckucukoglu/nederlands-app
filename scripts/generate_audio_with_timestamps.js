const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_DIR_DIALOGUES = path.join(__dirname, '../public/audio/dialogues');
const OUTPUT_DIR_READING = path.join(__dirname, '../public/audio/reading');
const TEMP_DIR = path.join(__dirname, '../temp_audio_build');

if (!fs.existsSync(OUTPUT_DIR_DIALOGUES)) fs.mkdirSync(OUTPUT_DIR_DIALOGUES, { recursive: true });
if (!fs.existsSync(OUTPUT_DIR_READING)) fs.mkdirSync(OUTPUT_DIR_READING, { recursive: true });
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

// All 20 lines from chapter1.js
const chapter1DialogueLines = [
  { idx: 0, speaker: "Verteller", voice: "nl-NL-MaartenNeural", text: "De cursus begint." },
  { idx: 1, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Goedemorgen allemaal. Welkom in de cursus Nederlands. Ik ben Karin Dijkstra en ik ben jullie docent. Jullie hebben twee docenten. De andere docent is Paul de Vries. Hij geeft twee dagen les en ik drie. We beginnen met kennismaken. Wie ben jij? Wat is jouw naam?" },
  { idx: 2, speaker: "Cursist", voice: "nl-NL-FennaNeural", text: "Ik ben Susy. Mijn naam is Susy." },
  { idx: 3, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Dag Susy. Susy is je voornaam. En wat is je achternaam?" },
  { idx: 4, speaker: "Susy", voice: "nl-NL-FennaNeural", text: "Mijn achternaam is Wall." },
  { idx: 5, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Uit welk land kom je?" },
  { idx: 6, speaker: "Susy", voice: "nl-NL-FennaNeural", text: "Ik kom uit Engeland." },
  { idx: 7, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "De buurman van Susy: Wie ben jij? Hoe heet jij?" },
  { idx: 8, speaker: "Buurman", voice: "nl-NL-MaartenNeural", text: "Ik heet Ning." },
  { idx: 9, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Dag Ning. En waar kom je vandaan?" },
  { idx: 10, speaker: "Ning", voice: "nl-NL-MaartenNeural", text: "Ik kom uit China." },
  { idx: 11, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Waar woon je?" },
  { idx: 12, speaker: "Ning", voice: "nl-NL-MaartenNeural", text: "Ik woon nu in Utrecht." },
  { idx: 13, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Wat is je adres?" },
  { idx: 14, speaker: "Ning", voice: "nl-NL-MaartenNeural", text: "Mijn adres is Hofstraat 22." },
  { idx: 15, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Op welk nummer? Wat is je antwoord? 23?" },
  { idx: 16, speaker: "Ning", voice: "nl-NL-MaartenNeural", text: "Nee, op 22. En mijn postcode is 3581 TW in Utrecht. En u, mevrouw? Woont u ook in Utrecht?" },
  { idx: 17, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "Zeg maar jij, hoor. Ja, ik woon hier al twintig jaar. Oké, we gaan verder met de les. Heeft iedereen het boek? We beginnen met tekst 1 op bladzijde 8. We gaan naar de tekst luisteren. We gaan de tekst ook lezen." },
  { idx: 18, speaker: "Verteller", voice: "nl-NL-MaartenNeural", text: "", isPauseOnly: true },
  { idx: 19, speaker: "Docent", voice: "nl-NL-ColetteNeural", text: "We stoppen even, het is pauze. Tot straks." }
];

const chapter1ReadingParagraphs = [
  "Het is maandagochtend negen uur en de cursus Nederlands begint. De docent staat voor de klas en zegt: \"Goedemorgen allemaal, welkom in Utrecht!\" De docent heet meneer De Vries en hij komt uit Nederland. In het lokaal zitten veertien cursisten uit verschillende landen. De cursisten luisteren aandachtig naar de docent.",
  "Eerst stelt iedereen zich voor: wat is je naam, waar kom je vandaan en waar woon je? Een jonge vrouw begint: \"Hallo, ik ben Selin, ik ben vierentwintig jaar en ik kom uit Turkije.\" Selin woont nu in Amsterdam, in de Kerkstraat op nummer achttien. Ze spreekt al goed Engels en Turks, en nu leert ze Nederlands voor haar werk. Meneer De Vries vraagt: \"Kun je jouw achternaam spellen, Selin?\" Selin antwoordt rustig: \"Ja hoor, Y - I - L - M - A - Z, met een Griekse ij aan het begin.\"",
  "Naast Selin zit Lucas; hij komt uit Spanje en woont samen met een vriend in Utrecht. Lucas werkt in een internationaal restaurant en zijn hobby is de krant lezen en hardlopen. Om half elf hebben de studenten een korte pauze van twintig minuten. In de kantine drinken Selin en Lucas een kopje koffie en praten over hun huiswerk. Lucas vraagt vriendelijk: \"Hoe gaat het met jou, Selin?\" en zij antwoordt met een glimlach: \"Alles goed, dank je wel!\"",
  "Na de pauze luisteren de studenten naar een dialoog en maken ze opdrachten in het boek. Om twaalf uur is de les klaar en meneer De Vries zegt: \"Goed gewerkt allemaal, tot morgen!\""
];

function generateSilence(durationSec, outputPath) {
  execSync(`ffmpeg -y -f lavfi -i anullsrc=r=24000:cl=mono -t ${durationSec} -q:a 9 -acodec libmp3lame "${outputPath}"`, { stdio: 'ignore' });
}

function getDuration(filePath) {
  const out = execSync(`ffprobe -i "${filePath}" -show_entries format=duration -v quiet -of json`).toString();
  const data = JSON.parse(out);
  return parseFloat(data.format.duration);
}

async function generateClip(voice, text, outDir, finalPath) {
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  await tts.toFile(outDir, text);
  tts.close();

  const generated = path.join(outDir, 'audio.mp3');
  if (fs.existsSync(generated)) {
    fs.copyFileSync(generated, finalPath);
  }
}

async function main() {
  console.log("Generating silence clips...");
  const silenceShort = path.join(TEMP_DIR, 'silence_short.mp3');
  const silencePause = path.join(TEMP_DIR, 'silence_pause.mp3');
  const silenceLong = path.join(TEMP_DIR, 'silence_long.mp3');
  generateSilence(0.40, silenceShort);
  generateSilence(0.80, silencePause);
  generateSilence(0.70, silenceLong);
  const silenceShortDur = getDuration(silenceShort);
  const silencePauseDur = getDuration(silencePause);
  const silenceLongDur = getDuration(silenceLong);

  console.log("Generating dialogue lines and computing exact timestamps...");
  const dialogueFiles = [];
  const dialogueTimestamps = [];
  let currentTime = 0.0;

  for (let i = 0; i < chapter1DialogueLines.length; i++) {
    const item = chapter1DialogueLines[i];
    const clipPath = path.join(TEMP_DIR, `d_line_${i}.mp3`);
    const lineTempDir = path.join(TEMP_DIR, `temp_d_${i}`);

    if (item.isPauseOnly) {
      dialogueFiles.push(silencePause);
      const start = parseFloat(currentTime.toFixed(2));
      currentTime += silencePauseDur;
      const end = parseFloat(currentTime.toFixed(2));
      dialogueTimestamps.push({ idx: item.idx, start, end, duration: parseFloat((end - start).toFixed(2)) });
    } else {
      await generateClip(item.voice, item.text, lineTempDir, clipPath);
      const dur = getDuration(clipPath);
      dialogueFiles.push(clipPath);
      const start = parseFloat(currentTime.toFixed(2));
      currentTime += dur;
      const end = parseFloat(currentTime.toFixed(2));
      dialogueTimestamps.push({ idx: item.idx, start, end, duration: parseFloat((end - start).toFixed(2)) });
    }

    if (i < chapter1DialogueLines.length - 1) {
      dialogueFiles.push(silenceShort);
      currentTime += silenceShortDur;
    }
  }

  const concatListD = path.join(TEMP_DIR, 'concat_dialogue.txt');
  fs.writeFileSync(concatListD, dialogueFiles.map(f => `file '${f}'`).join('\n'));
  const finalDialoguePath = path.join(OUTPUT_DIR_DIALOGUES, 'ch1.mp3');
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatListD}" -c copy "${finalDialoguePath}"`);
  console.log("✅ Final Dialogue MP3 created at:", finalDialoguePath);

  console.log("Generating reading paragraphs and computing exact timestamps...");
  const readingFiles = [];
  const readingTimestamps = [];
  let currentReadingTime = 0.0;

  for (let i = 0; i < chapter1ReadingParagraphs.length; i++) {
    const text = chapter1ReadingParagraphs[i];
    const clipPath = path.join(TEMP_DIR, `r_para_${i}.mp3`);
    const paraTempDir = path.join(TEMP_DIR, `temp_r_${i}`);

    await generateClip("nl-NL-ColetteNeural", text, paraTempDir, clipPath);
    const dur = getDuration(clipPath);
    readingFiles.push(clipPath);
    const start = parseFloat(currentReadingTime.toFixed(2));
    currentReadingTime += dur;
    const end = parseFloat(currentReadingTime.toFixed(2));
    readingTimestamps.push({ idx: i, start, end, duration: parseFloat((end - start).toFixed(2)) });

    if (i < chapter1ReadingParagraphs.length - 1) {
      readingFiles.push(silenceLong);
      currentReadingTime += silenceLongDur;
    }
  }

  const concatListR = path.join(TEMP_DIR, 'concat_reading.txt');
  fs.writeFileSync(concatListR, readingFiles.map(f => `file '${f}'`).join('\n'));
  const finalReadingPath = path.join(OUTPUT_DIR_READING, 'ch1.mp3');
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatListR}" -c copy "${finalReadingPath}"`);
  console.log("✅ Final Reading MP3 created at:", finalReadingPath);

  // Write out timestamps JSON
  const outputJson = {
    dialogue: {
      chapter: 1,
      sectionId: '1.1',
      audioSrc: '/audio/dialogues/ch1.mp3',
      totalDuration: parseFloat(currentTime.toFixed(2)),
      lines: dialogueTimestamps
    },
    reading: {
      chapter: 1,
      sectionId: 'Reading-1',
      audioSrc: '/audio/reading/ch1.mp3',
      totalDuration: parseFloat(currentReadingTime.toFixed(2)),
      paragraphs: readingTimestamps
    }
  };

  fs.writeFileSync(path.join(__dirname, '../src/data/chapter1Timestamps.json'), JSON.stringify(outputJson, null, 2));
  console.log("✅ Saved chapter1Timestamps.json!");

  // Cleanup
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });
}

main().catch(console.error);

