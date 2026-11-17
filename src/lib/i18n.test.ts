import { describe, it, expect } from 'vitest';
import { t, translations } from './i18n';

describe('i18n helper', () => {
  it('returns authentic Kannada text for default language', () => {
    expect(t('siteName', 'kn')).toBe('ಕನ್ನಡಟೂಲ್ಸ್');
    expect(t('navTransliterate', 'kn')).toBe('ಲಿಪ್ಯಂತರಣ');
    expect(t('homeHeadline', 'kn')).toContain('ಉಚಿತ ಕನ್ನಡ ಪರಿಕರಗಳು');
  });

  it('returns clean English text when toggled to en', () => {
    expect(t('siteName', 'en')).toBe('KannadaTools');
    expect(t('navTransliterate', 'en')).toBe('Transliteration');
    expect(t('homeHeadline', 'en')).toBe('Free Kannada tools: speak, scan, type, clean');
  });

  it('verifies all 4 tool cards have valid bilingual titles and descriptions', () => {
    const tools = ['toolTransliterate', 'toolCleaner', 'toolOcr', 'toolSpeech'];
    for (const tool of tools) {
      const titleKey = `${tool}Title`;
      const descKey = `${tool}Desc`;

      expect(translations[titleKey]).toBeDefined();
      expect(translations[titleKey].kn.length).toBeGreaterThan(0);
      expect(translations[titleKey].en.length).toBeGreaterThan(0);

      expect(translations[descKey]).toBeDefined();
      expect(translations[descKey].kn.length).toBeGreaterThan(0);
      expect(translations[descKey].en.length).toBeGreaterThan(0);
    }
  });

  it('verifies newsletter and custom plan keys exist in both languages', () => {
    const keys = [
      'newsletterHeading',
      'newsletterDesc',
      'newsletterPlaceholder',
      'newsletterButton',
      'newsletterSuccess',
      'customRequestHeading',
      'customRequestBtn',
    ];

    for (const key of keys) {
      expect(translations[key]).toBeDefined();
      expect(translations[key].kn.length).toBeGreaterThan(0);
      expect(translations[key].en.length).toBeGreaterThan(0);
    }
  });
});
