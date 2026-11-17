/**
 * Browser-based English to Kannada phonetic transliteration engine.
 * Powered by @indic-transliteration/sanscript with an intuitive phonetic layer
 * optimized for conversational typing (e.g. "namaskara" -> "ನಮಸ್ಕಾರ").
 */

// @ts-ignore - CommonJS/ESM interop for sanscript
import sanscriptPkg from '@indic-transliteration/sanscript';
const Sanscript = sanscriptPkg.default || sanscriptPkg;

export type TransliterationScheme = 'intuitive' | 'itrans';

// Fast lookup dictionary for high-frequency Kannada words & casual English spellings
const COMMON_WORDS_MAP: Record<string, string> = {
  namaskara: 'ನಮಸ್ಕಾರ',
  namaskar: 'ನಮಸ್ಕಾರ',
  namaskaara: 'ನಮಸ್ಕಾರ',
  namasthe: 'ನಮಸ್ತೆ',
  kannada: 'ಕನ್ನಡ',
  kannadada: 'ಕನ್ನಡದ',
  kannadiga: 'ಕನ್ನಡಿಗ',
  kannadigaru: 'ಕನ್ನಡಿಗರು',
  bengaluru: 'ಬೆಂಗಳೂರು',
  bangalore: 'ಬೆಂಗಳೂರು',
  mysuru: 'ಮೈಸೂರು',
  mysore: 'ಮೈಸೂರು',
  mangalore: 'ಮಂಗಳೂರು',
  mangaluru: 'ಮಂಗಳೂರು',
  karnataka: 'ಕರ್ನಾಟಕ',
  karnatakada: 'ಕರ್ನಾಟಕದ',
  dhanyavada: 'ಧನ್ಯವಾದ',
  dhanyavadagalu: 'ಧನ್ಯವಾದಗಳು',
  dhanyavaada: 'ಧನ್ಯವಾದ',
  shubhadina: 'ಶುಭದಿನ',
  shubhodaya: 'ಶುಭೋದಯ',
  hegiddeera: 'ಹೇಗಿದ್ದೀರಾ',
  hegiddira: 'ಹೇಗಿದ್ದೀರಾ',
  hegidiya: 'ಹೇಗಿದ್ದೀಯಾ',
  chennagiddene: 'ಚೆನ್ನಾಗಿದ್ದೇನೆ',
  chennagide: 'ಚೆನ್ನಾಗಿದೆ',
  sirigannadam: 'ಸಿರಿಗನ್ನಡಂ',
  sirigannada: 'ಸಿರಿಗನ್ನಡ',
  rajyotsava: 'ರಾಜ್ಯೋತ್ಸವ',
  sahitya: 'ಸಾಹಿತ್ಯ',
  preethi: 'ಪ್ರೀತಿ',
  sneha: 'ಸ್ನೇಹ',
  amma: 'ಅಮ್ಮ',
  appa: 'ಅಪ್ಪ',
  mane: 'ಮನೆ',
  ooru: 'ಊರು',
  nadu: 'ನಾಡು',
  naadu: 'ನಾಡು',
  nudi: 'ನುಡಿ',
  bharatha: 'ಭಾರತ',
  india: 'ಭಾರತ',
};

/**
 * Phonetic preprocessor converting casual English typing into strict ITRANS representations
 */
function preprocessIntuitivePhonetics(word: string): string {
  const lower = word.toLowerCase();
  if (COMMON_WORDS_MAP[lower]) {
    return COMMON_WORDS_MAP[lower];
  }

  let w = word;

  // Normalize common phonetic patterns
  w = w
    .replace(/bengal/gi, 'beMgal')
    .replace(/mangalo/gi, 'maMgaLU')
    .replace(/mys/gi, 'mYs')
    .replace(/karnat/gi, 'karnAT')
    .replace(/kannad/gi, 'kannaD')
    .replace(/dhanyav/gi, 'dhanyAv')
    .replace(/namaskar/gi, 'namaskAr')
    .replace(/shubh/gi, 'shubh')
    .replace(/ee/g, 'I')
    .replace(/oo/g, 'U')
    .replace(/aa/g, 'A');

  // Convert using Sanscript
  try {
    return Sanscript.t(w, 'itrans', 'kannada');
  } catch (err) {
    return w;
  }
}

/**
 * Main transliteration function.
 * Transliterates English text (words, sentences, or paragraphs) into Kannada script.
 * Preserves punctuation, digits, spaces, and newline formatting.
 */
export function transliterate(text: string, scheme: TransliterationScheme = 'intuitive'): string {
  if (!text) return '';

  if (scheme === 'itrans') {
    try {
      return Sanscript.t(text, 'itrans', 'kannada');
    } catch {
      return text;
    }
  }

  // Intuitive mode: Tokenize words and non-words to preserve spacing and punctuation
  return text.replace(/([A-Za-z]+|[^A-Za-z]+)/g, (segment) => {
    // If not alphabetical, return as is (numbers, punctuation, whitespace, emojis)
    if (!/^[A-Za-z]+$/.test(segment)) {
      return segment;
    }

    const lower = segment.toLowerCase();
    if (COMMON_WORDS_MAP[lower]) {
      return COMMON_WORDS_MAP[lower];
    }

    return preprocessIntuitivePhonetics(segment);
  });
}

