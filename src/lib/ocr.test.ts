import { describe, it, expect } from 'vitest';
import { validateImageFile, formatOcrStatus, MAX_FILE_SIZE_BYTES } from './ocr';

describe('OCR Utilities', () => {
  describe('validateImageFile', () => {
    it('rejects null or undefined file', () => {
      const res = validateImageFile(null);
      expect(res.valid).toBe(false);
      expect(res.error?.en).toContain('Please select an image');
    });

    it('rejects unsupported file formats like pdf or text', () => {
      const fakePdf = new File(['fake content'], 'doc.pdf', { type: 'application/pdf' });
      const res = validateImageFile(fakePdf);
      expect(res.valid).toBe(false);
      expect(res.error?.en).toContain('Invalid image format');
    });

    it('rejects images larger than 5 MB', () => {
      // Create a fake file larger than 5MB
      const oversizedBlob = new Blob([new Uint8Array(MAX_FILE_SIZE_BYTES + 100)], { type: 'image/jpeg' });
      const oversizedFile = new File([oversizedBlob], 'large.jpg', { type: 'image/jpeg' });
      const res = validateImageFile(oversizedFile);
      expect(res.valid).toBe(false);
      expect(res.error?.en).toContain('5 MB limit');
    });

    it('accepts valid JPG and PNG images within 5 MB limit', () => {
      const validJpg = new File([new Uint8Array(1000)], 'test.jpg', { type: 'image/jpeg' });
      const validPng = new File([new Uint8Array(1000)], 'test.png', { type: 'image/png' });

      expect(validateImageFile(validJpg).valid).toBe(true);
      expect(validateImageFile(validPng).valid).toBe(true);
    });
  });

  describe('formatOcrStatus', () => {
    it('formats recognizing text status in Kannada and English', () => {
      expect(formatOcrStatus('recognizing text', 0.5, 'kn')).toBe('ಕನ್ನಡ ಪಠ್ಯ ಗುರುತಿಸಲಾಗುತ್ತಿದೆ... (50%)');
      expect(formatOcrStatus('recognizing text', 0.85, 'en')).toBe('Recognizing Kannada text... (85%)');
    });

    it('formats loading language traineddata status', () => {
      expect(formatOcrStatus('loading language traineddata', 0.3, 'kn')).toContain('ಕನ್ನಡ ಭಾಷಾ ಮಾದರಿ ಡೌನ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ... (30%)');
    });
  });
});

