import { describe, it, expect } from 'vitest';
import { transliterate } from './transliterate';

describe('Kannada Transliteration Engine', () => {
  // Explicit test requirement: 5 sample words
  describe('5 Sample Words Verification', () => {
    it('transliterates "namaskara" to "ನಮಸ್ಕಾರ"', () => {
      expect(transliterate('namaskara')).toBe('ನಮಸ್ಕಾರ');
    });

    it('transliterates "kannada" to "ಕನ್ನಡ"', () => {
      expect(transliterate('kannada')).toBe('ಕನ್ನಡ');
    });

    it('transliterates "karnataka" to "ಕರ್ನಾಟಕ"', () => {
      expect(transliterate('karnataka')).toBe('ಕರ್ನಾಟಕ');
    });

    it('transliterates "dhanyavada" to "ಧನ್ಯವಾದ"', () => {
      expect(transliterate('dhanyavada')).toBe('ಧನ್ಯವಾದ');
    });

    it('transliterates "bengaluru" to "ಬೆಂಗಳೂರು"', () => {
      expect(transliterate('bengaluru')).toBe('ಬೆಂಗಳೂರು');
    });
  });

  describe('Sentences & Formatting', () => {
    it('preserves spaces, punctuation and multiple words in a sentence', () => {
      const input = 'namaskara! kannada sahitya.';
      const output = transliterate(input);
      expect(output).toContain('ನಮಸ್ಕಾರ!');
      expect(output).toContain('ಸಾಹಿತ್ಯ.');
    });

    it('handles empty input gracefully', () => {
      expect(transliterate('')).toBe('');
      expect(transliterate(null as any)).toBe('');
    });

    it('supports standard ITRANS scheme mode', () => {
      expect(transliterate('namaskaara', 'itrans')).toBe('ನಮಸ್ಕಾರ');
    });
  });
});

