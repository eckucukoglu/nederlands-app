// src/utils/speech.test.js
import { 
  parseTextTokens, 
  findTokenIndexAtChar, 
  buildSpeechChunks, 
  detectSpeakerGender,
  isRealDutchVoice,
  getDutchAudioUrl,
  speakDutch
} from './speech';

describe('Speech Synthesis Robustness & Chunking Tests', () => {
  const sampleLongText = 
    "Het is maandagochtend negen uur en de cursus Nederlands begint. " +
    "De docent staat voor de klas en zegt: \"Goedemorgen allemaal, welkom in Utrecht!\" " +
    "De docent heet meneer De Vries en hij komt uit Nederland. " +
    "In het lokaal zitten veertien cursisten uit verschillende landen. " +
    "De cursisten luisteren aandachtig naar de docent.";

  test('parseTextTokens generates valid tokens with character offsets and sentence indices', () => {
    const tokens = parseTextTokens(sampleLongText);
    expect(tokens.length).toBeGreaterThan(30);

    // Tokens must be strictly sequential in character offsets
    for (let i = 0; i < tokens.length - 1; i++) {
      expect(tokens[i].startChar).toBeLessThan(tokens[i].endChar);
      expect(tokens[i].endChar).toBeLessThanOrEqual(tokens[i + 1].startChar);
      expect(tokens[i].sentenceIndex).toBeLessThanOrEqual(tokens[i + 1].sentenceIndex);
    }

    // Must detect multiple sentences
    const lastToken = tokens[tokens.length - 1];
    expect(lastToken.sentenceIndex).toBeGreaterThanOrEqual(4);
  });

  test('buildSpeechChunks divides long text into chunks preventing the 15-second browser cutoff', () => {
    const tokens = parseTextTokens(sampleLongText);
    const chunks = buildSpeechChunks(sampleLongText, tokens, 140);

    expect(chunks.length).toBeGreaterThanOrEqual(4);

    // Each chunk must not exceed safe threshold
    chunks.forEach((chunk, idx) => {
      expect(chunk.text.length).toBeLessThan(180);
      expect(chunk.startTokenIdx).toBeLessThanOrEqual(chunk.endTokenIdx);
      expect(chunk.startChar).toBeLessThan(chunk.endChar);
      expect(chunk.sentenceIndex).toBeDefined();
    });

    // Verify token coverage across chunks: every token must be included
    const allChunkTokenIndices = [];
    chunks.forEach(chunk => {
      for (let t = chunk.startTokenIdx; t <= chunk.endTokenIdx; t++) {
        allChunkTokenIndices.push(t);
      }
    });

    expect(allChunkTokenIndices.length).toBe(tokens.length);
    for (let i = 0; i < tokens.length; i++) {
      expect(allChunkTokenIndices[i]).toBe(i);
    }
  });

  test('buildSpeechChunks handles single short sentence without unnecessary splits', () => {
    const short = "Hallo, hoe gaat het?";
    const tokens = parseTextTokens(short);
    const chunks = buildSpeechChunks(short, tokens, 160);

    expect(chunks.length).toBe(1);
    expect(chunks[0].text).toBe(short);
    expect(chunks[0].startTokenIdx).toBe(0);
    expect(chunks[0].endTokenIdx).toBe(tokens.length - 1);
  });

  test('findTokenIndexAtChar accurately maps character offsets to tokens', () => {
    const text = "Hallo allemaal in Utrecht.";
    const tokens = parseTextTokens(text);

    // Char 0 -> "Hallo" (token 0)
    expect(findTokenIndexAtChar(tokens, 0)).toBe(0);
    // Char 6 -> "allemaal" (token 1)
    expect(findTokenIndexAtChar(tokens, 6)).toBe(1);
    // Char 15 -> "in" (token 2)
    expect(findTokenIndexAtChar(tokens, 15)).toBe(2);
    // Char 18 -> "Utrecht." (token 3)
    expect(findTokenIndexAtChar(tokens, 18)).toBe(3);
  });

  test('detectSpeakerGender correctly identifies male, female, and neutral roles', () => {
    expect(detectSpeakerGender('Selin')).toBe('female');
    expect(detectSpeakerGender('Lucas')).toBe('male');
    expect(detectSpeakerGender('Mevrouw De Vries')).toBe('female');
    expect(detectSpeakerGender('Dokter Jansen')).toBe('male');
    expect(detectSpeakerGender('Verteller')).toBe('male');
    expect(detectSpeakerGender('Onbekend')).toBe('neutral');
  });

  test('isRealDutchVoice strictly identifies genuine Dutch voices and rejects English or other voices', () => {
    // Gerçek Hollandaca sesler kabul edilmeli
    expect(isRealDutchVoice({ lang: 'nl-NL', name: 'Google Nederlands' })).toBe(true);
    expect(isRealDutchVoice({ lang: 'nl-BE', name: 'Ellen' })).toBe(true);
    expect(isRealDutchVoice({ lang: 'nld', name: 'Flemish Speaker' })).toBe(true);

    // İngilizce sesler (adı dutch içerse dahi) KESİNLİKLE reddedilmeli
    expect(isRealDutchVoice({ lang: 'en-US', name: 'Microsoft David' })).toBe(false);
    expect(isRealDutchVoice({ lang: 'en-US', name: 'English (Dutch Antilles)' })).toBe(false);
    expect(isRealDutchVoice({ lang: 'en-GB', name: 'Google UK English' })).toBe(false);

    // Türkçe ve diğer diller reddedilmeli
    expect(isRealDutchVoice({ lang: 'tr-TR', name: 'Yelda' })).toBe(false);
    expect(isRealDutchVoice({ lang: 'de-DE', name: 'Google Deutsch' })).toBe(false);
    expect(isRealDutchVoice(null)).toBe(false);
  });

  test('getDutchAudioUrl generates valid Google Dutch audio streaming URL with tl=nl', () => {
    const url = getDutchAudioUrl('Goedemorgen, hoe gaat het?');
    expect(url).toContain('https://translate.google.com/translate_tts');
    expect(url).toContain('tl=nl');
    expect(url).toContain('client=tw-ob');
    expect(url).toContain('q=Goedemorgen%2C%20hoe%20gaat%20het%3F');
  });

  test('speakDutch only speaks once per word without duplicate playback', () => {
    const speakMock = jest.fn();
    const cancelMock = jest.fn();

    global.SpeechSynthesisUtterance = function(text) {
      this.text = text;
      this.volume = 1.0;
      this.rate = 1.0;
      this.pitch = 1.0;
      this.lang = 'nl-NL';
    };

    window.speechSynthesis = {
      speak: speakMock,
      cancel: cancelMock,
      getVoices: jest.fn().mockReturnValue([{ lang: 'nl-NL', name: 'Google Nederlands' }]),
      speaking: false,
      paused: false
    };

    speakDutch('welkom');

    expect(speakMock).toHaveBeenCalledTimes(1);
    expect(speakMock.mock.calls[0][0].text).toBe('welkom');
  });
});

