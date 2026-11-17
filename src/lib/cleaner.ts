/**
 * Kannada Text Cleaner & Normalizer Engine.
 * 100% Browser-only, zero dependencies.
 * 
 * Features:
 * 1. Fix broken Unicode (duplicate matras, dangling viramas, normalization)
 * 2. Remove extra spaces and excess blank lines
 * 3. Normalize punctuation & quotes
 * 4. Convert legacy Nudi/Baraha font ASCII text to Unicode (Beta)
 */

export interface CleanerOptions {
  fixUnicode: boolean;
  cleanWhitespace: boolean;
  normalizePunctuation: boolean;
  convertLegacy: boolean;
}

export const defaultCleanerOptions: CleanerOptions = {
  fixUnicode: true,
  cleanWhitespace: true,
  normalizePunctuation: true,
  convertLegacy: false, // Default false, opt-in beta
};

/**
 * 1. Fix broken Unicode in Kannada text:
 * - NFC canonical composition
 * - Removes duplicate combining marks (e.g. double dirgha ಾಾ -> ಾ)
 * - Removes double halant/virama (್್ -> ್)
 * - Fixes spaces incorrectly inserted before combining vowel signs or virama
 * - Cleans stray/orphan zero-width joiners/non-joiners that cause tofu boxes
 */
export function fixBrokenUnicode(text: string): string {
  if (!text) return '';

  // 1. Canonical Unicode Normalization (NFC)
  let cleaned = text.normalize('NFC');

  // 2. Remove rogue spaces between a Kannada consonant and a combining vowel or virama
  // e.g. "ಕ ್" -> "ಕ್", "ಕ ಾ" -> "ಕಾ"
  cleaned = cleaned.replace(/([\u0C95-\u0CB9])\s+([\u0CBE-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3])/g, '$1$2');

  // Also remove rogue space between virama (halant) and subscript consonant
  // e.g. "ಕ್ ನ" -> "ಕ್ನ" (forms conjunct vattakshara)
  cleaned = cleaned.replace(/(\u0CCD)\s+([\u0C95-\u0CB9])/g, '$1$2');

  // 3. Deduplicate repeating Kannada combining vowel signs and viramas
  // e.g., ಾಾ -> ಾ, ಿಿ -> ಿ, ್್ -> ್
  cleaned = cleaned.replace(/([\u0CBE-\u0CCD])\1+/g, '$1');

  // 4. Remove isolated/dangling combining vowel signs or viramas preceded by whitespace or start of line
  cleaned = cleaned.replace(/(?:^|\s)([\u0CBE-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3]+)/g, ' ');

  // 5. Clean unnecessary repeated Zero Width Joiner (ZWJ \u200D) and Zero Width Non-Joiner (ZWNJ \u200C)
  cleaned = cleaned.replace(/[\u200C\u200D]{2,}/g, '\u200C');

  // 6. Fix invalid sequences of virama + vowel signs
  cleaned = cleaned.replace(/\u0CCD([\u0CBE-\u0CCC])/g, '$1');

  return cleaned;
}

/**
 * 2. Remove extra spaces, tabs, and duplicate blank lines:
 * - Collapses consecutive spaces/tabs to a single space
 * - Trims trailing whitespace on each line
 * - Collapses 3+ consecutive newlines down to a clean paragraph break (2 newlines)
 * - Trims overall leading and trailing whitespace
 */
export function cleanWhitespace(text: string): string {
  if (!text) return '';

  return text
    // Replace non-breaking spaces with standard space
    .replace(/\u00A0/g, ' ')
    // Collapse multiple horizontal spaces and tabs into a single space
    .replace(/[ \t]+/g, ' ')
    // Remove spaces at the end of lines
    .replace(/[ \t]+$/gm, '')
    // Remove spaces at the beginning of lines
    .replace(/^[ \t]+/gm, '')
    // Collapse 3 or more newlines to max 2 newlines (paragraph break)
    .replace(/\n{3,}/g, '\n\n')
    // Trim entire string
    .trim();
}

/**
 * 3. Normalize punctuation:
 * - Removes spaces before punctuation marks (, . ! ? : ; )
 * - Ensures single space after punctuation
 * - Normalizes smart/curly quotes (“ ” ‘ ’) to clean standard quotes (" ')
 * - Normalizes consecutive punctuation marks (e.g. ???? -> ?, !!!! -> !)
 * - Normalizes multiple dashes (-- or ---) to em-dash (—)
 */
export function normalizePunctuation(text: string): string {
  if (!text) return '';

  return text
    // Smart quotes to straight quotes
    .replace(/[“”«»]/g, '"')
    .replace(/[‘’‹›`]/g, "'")
    // Multiple hyphens to em dash
    .replace(/--+/g, '—')
    // Remove spaces before punctuation marks
    .replace(/\s+([,.:;!?])/g, '$1')
    // Ensure space after punctuation if followed by a letter/word (not another punctuation or digit)
    .replace(/([,.:;!?])([^\s\d,.:;!?"'’)\]}])/g, '$1 $2')
    // Deduplicate excessive question marks and exclamation marks
    .replace(/\?{2,}/g, '?')
    .replace(/!{2,}/g, '!')
    // Normalize Kannada danda spaces
    .replace(/\s*([।॥])\s*/g, ' $1 ');
}

/**
 * 4. Convert legacy Nudi / Baraha font text to Unicode (Beta):
 * Maps commonly used ASCII characters in legacy Baraha/Nudi font encodings to Kannada Unicode.
 */
const NUDI_TO_UNICODE_MAP: [RegExp, string][] = [
  // Vowels
  [/ಅ/g, 'ಅ'],
  [/D/g, 'ಅ'],
  [/D/g, 'ಆ'],
  [/E/g, 'ಇ'],
  [/F/g, 'ಈ'],
  [/G/g, 'ಉ'],
  [/H/g, 'ಊ'],
  [/I/g, 'ಋ'],
  [/J/g, 'ಎ'],
  [/K/g, 'ಏ'],
  [/L/g, 'ಐ'],
  [/M/g, 'ಒ'],
  [/N/g, 'ಓ'],
  [/O/g, 'ಔ'],
  
  // Consonants
  [/P/g, 'ಕ'],
  [/Q/g, 'ಖ'],
  [/R/g, 'ಗ'],
  [/S/g, 'ಘ'],
  [/T/g, 'ಙ'],
  [/U/g, 'ಚ'],
  [/V/g, 'ಛ'],
  [/W/g, 'ಜ'],
  [/X/g, 'ಝ'],
  [/Y/g, 'ಞ'],
  [/Z/g, 'ಟ'],
  [/\[/g, 'ಠ'],
  [/\\/g, 'ಡ'],
  [/\]/g, 'ಢ'],
  [/\^/g, 'ಣ'],
  [/_/g, 'ತ'],
  [/`/g, 'ಥ'],
  [/a/g, 'ದ'],
  [/b/g, 'ಧ'],
  [/c/g, 'ನ'],
  [/d/g, 'ಪ'],
  [/e/g, 'ಫ'],
  [/f/g, 'ಬ'],
  [/g/g, 'ಭ'],
  [/h/g, 'ಮ'],
  [/i/g, 'ಯ'],
  [/j/g, 'ರ'],
  [/k/g, 'ಲ'],
  [/l/g, 'ವ'],
  [/m/g, 'ಶ'],
  [/n/g, 'ಷ'],
  [/o/g, 'ಸ'],
  [/p/g, 'ಹ'],
  [/q/g, 'ಳ'],

  // Vowel signs (Matras)
  [/Á/g, 'ಾ'],
  [/Â/g, 'ಿ'],
  [/Ã/g, 'ೀ'],
  [/Ä/g, 'ು'],
  [/Å/g, 'ೂ'],
  [/Æ/g, 'ೃ'],
  [/Ç/g, 'ೆ'],
  [/È/g, 'ೇ'],
  [/É/g, 'ೈ'],
  [/Ê/g, 'ೊ'],
  [/Ë/g, 'ೋ'],
  [/Ì/g, 'ೌ'],
  [/Í/g, '್'],
  [/Î/g, 'ಂ'],
  [/Ï/g, 'ಃ'],
];

export function convertLegacyNudiBaraha(text: string): string {
  if (!text) return '';
  let result = text;
  for (const [regex, replacement] of NUDI_TO_UNICODE_MAP) {
    result = result.replace(regex, replacement);
  }
  // Run unicode fix on converted text to assemble conjuncts correctly
  return fixBrokenUnicode(result);
}

/**
 * Main cleaning pipeline based on selected options
 */
export function cleanKannadaText(text: string, options: Partial<CleanerOptions> = {}): string {
  if (!text) return '';

  const opts: CleanerOptions = { ...defaultCleanerOptions, ...options };
  let result = text;

  // 1. Convert legacy Nudi/Baraha if enabled (runs first before unicode rules)
  if (opts.convertLegacy) {
    result = convertLegacyNudiBaraha(result);
  }

  // 2. Fix broken Unicode
  if (opts.fixUnicode) {
    result = fixBrokenUnicode(result);
  }

  // 3. Normalize punctuation
  if (opts.normalizePunctuation) {
    result = normalizePunctuation(result);
  }

  // 4. Clean extra spaces and duplicate lines
  if (opts.cleanWhitespace) {
    result = cleanWhitespace(result);
  }

  return result;
}
