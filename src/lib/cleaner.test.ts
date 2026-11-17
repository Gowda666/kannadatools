import { describe, it, expect } from 'vitest';
import {
  fixBrokenUnicode,
  cleanWhitespace,
  normalizePunctuation,
  convertLegacyNudiBaraha,
  cleanKannadaText,
} from './cleaner';

describe('Kannada Text Cleaner Engine', () => {
  describe('fixBrokenUnicode', () => {
    it('deduplicates repeating vowel signs (e.g. ಾಾ -> ಾ)', () => {
      const broken = 'ಕನ್ನಡಾಾ ಸಾಹಿತ್ಯ';
      expect(fixBrokenUnicode(broken)).toBe('ಕನ್ನಡಾ ಸಾಹಿತ್ಯ');
    });

    it('deduplicates double halants/viramas (್್ -> ್)', () => {
      const broken = 'ಕರ್ನಾಟ್್್ಕ';
      expect(fixBrokenUnicode(broken)).toBe('ಕರ್ನಾಟ್ಕ');
    });

    it('fixes rogue space before combining vowel sign or virama', () => {
      const brokenVowel = 'ಕ ಾನನ ಮತ್ತು ಕ ್ಲಿಷ್ಟ';
      expect(fixBrokenUnicode(brokenVowel)).toBe('ಕಾನನ ಮತ್ತು ಕ್ಲಿಷ್ಟ');
    });
  });

  describe('cleanWhitespace', () => {
    it('collapses multiple spaces and tabs into a single space', () => {
      const input = 'ಕನ್ನಡ      ನಾಡು     ಮತ್ತು       ನುಡಿ';
      expect(cleanWhitespace(input)).toBe('ಕನ್ನಡ ನಾಡು ಮತ್ತು ನುಡಿ');
    });

    it('collapses 3 or more blank lines into max 2 blank lines (paragraph break)', () => {
      const input = 'ಪ್ಯಾರಾ ೧\n\n\n\n\nಪ್ಯಾರಾ ೨';
      expect(cleanWhitespace(input)).toBe('ಪ್ಯಾರಾ ೧\n\nಪ್ಯಾರಾ ೨');
    });

    it('trims leading and trailing whitespace on each line', () => {
      const input = '  ಕನ್ನಡ ಸಾಹಿತ್ಯ   \n   ಬೆಂಗಳೂರು  ';
      expect(cleanWhitespace(input)).toBe('ಕನ್ನಡ ಸಾಹಿತ್ಯ\nಬೆಂಗಳೂರು');
    });
  });

  describe('normalizePunctuation', () => {
    it('removes space before punctuation and ensures space after', () => {
      const input = 'ನಮಸ್ಕಾರ ,ಹೇಗಿದ್ದೀರಾ ?ಚೆನ್ನಾಗಿದ್ದೇನೆ .';
      expect(normalizePunctuation(input)).toBe('ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಾ? ಚೆನ್ನಾಗಿದ್ದೇನೆ.');
    });

    it('converts curly/smart quotes to straight quotes', () => {
      const input = '“ಕನ್ನಡ” ಮತ್ತು ‘ಕರ್ನಾಟಕ’';
      expect(normalizePunctuation(input)).toBe('"ಕನ್ನಡ" ಮತ್ತು \'ಕರ್ನಾಟಕ\'');
    });

    it('normalizes multiple dashes to em-dash', () => {
      const input = 'ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ--ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ';
      expect(normalizePunctuation(input)).toBe('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ—ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ');
    });
  });

  describe('convertLegacyNudiBaraha (Beta)', () => {
    it('converts legacy ASCII font encoded characters to Unicode', () => {
      // P = ಕ, Á = ಾ, j = ರ -> ಕಾರ
      const legacy = 'PÁj';
      expect(convertLegacyNudiBaraha(legacy)).toBe('ಕಾರ');
    });
  });

  describe('cleanKannadaText (Combined)', () => {
    it('cleans messy real-world text with all options enabled', () => {
      const dirty = '  “ಕನ್ನಡ”   ನಾಡು   , ಮತ್ತು    ನುಡಿ  ! ! \n\n\n\n  ಸಿರಿಗನ್ನಡಂ   ಗೆಲ್ಗೆ  ';
      const cleaned = cleanKannadaText(dirty, {
        fixUnicode: true,
        cleanWhitespace: true,
        normalizePunctuation: true,
        convertLegacy: false,
      });

      expect(cleaned).toBe('"ಕನ್ನಡ" ನಾಡು, ಮತ್ತು ನುಡಿ!\n\nಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ');
    });

    it('respects option toggles when some are disabled', () => {
      const dirty = 'ಕನ್ನಡ     ನಾಡು';
      // Disable cleanWhitespace
      const result = cleanKannadaText(dirty, {
        cleanWhitespace: false,
      });
      expect(result).toBe('ಕನ್ನಡ     ನಾಡು');
    });
  });
});
