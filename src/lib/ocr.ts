/**
 * Client-Side Kannada OCR utilities.
 * Validates files, formats OCR progress states, and triggers client-side downloads.
 */

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB max limit

export interface ValidationResult {
  valid: boolean;
  error?: {
    kn: string;
    en: string;
  };
}

/**
 * Validates user-uploaded image for type and size
 */
export function validateImageFile(file: File | null): ValidationResult {
  if (!file) {
    return {
      valid: false,
      error: {
        kn: 'ದಯವಿಟ್ಟು ಒಂದು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ (JPG ಅಥವಾ PNG).',
        en: 'Please select an image file (JPG or PNG).',
      },
    };
  }

  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    return {
      valid: false,
      error: {
        kn: 'ಅಮಾನ್ಯ ಚಿತ್ರ ಸ್ವರೂಪ. ದಯವಿಟ್ಟು JPG ಅಥವಾ PNG ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
        en: 'Invalid image format. Please upload a JPG or PNG image.',
      },
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: {
        kn: 'ಚಿತ್ರದ ಗಾತ್ರವು ೫ MB ಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ. ದಯವಿಟ್ಟು ಚಿಕ್ಕ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
        en: 'Image size exceeds 5 MB limit. Please upload a smaller image.',
      },
    };
  }

  return { valid: true };
}

/**
 * Maps Tesseract.js raw logger status into human-readable bilingual strings
 */
export function formatOcrStatus(status: string, progress: number, lang: 'kn' | 'en' = 'kn'): string {
  const percent = Math.min(100, Math.max(0, Math.round((progress || 0) * 100)));

  switch (status) {
    case 'loading tesseract core':
      return lang === 'kn'
        ? `OCR ಎಂಜಿನ್ ಸಿದ್ಧಗೊಳ್ಳುತ್ತಿದೆ... (${percent}%)`
        : `Loading OCR engine... (${percent}%)`;
    case 'loaded tesseract core':
      return lang === 'kn' ? 'OCR ಎಂಜಿನ್ ಸಿದ್ಧವಾಗಿದೆ.' : 'OCR engine ready.';
    case 'initializing tesseract':
      return lang === 'kn' ? 'ಆರಂಭಿಸಲಾಗುತ್ತಿದೆ...' : 'Initializing...';
    case 'initialized tesseract':
      return lang === 'kn' ? 'ಆರಂಭಿಸಲಾಗಿದೆ.' : 'Initialized.';
    case 'loading language traineddata':
      return lang === 'kn'
        ? `ಕನ್ನಡ ಭಾಷಾ ಮಾದರಿ ಡೌನ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ... (${percent}%)`
        : `Downloading Kannada model data... (${percent}%)`;
    case 'loaded language traineddata':
      return lang === 'kn' ? 'ಕನ್ನಡ ಮಾದರಿ ಸಿದ್ಧವಾಗಿದೆ.' : 'Kannada model loaded.';
    case 'initializing api':
      return lang === 'kn' ? 'API ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...' : 'Preparing API...';
    case 'initialized api':
      return lang === 'kn' ? 'API ಸಿದ್ಧವಾಗಿದೆ.' : 'API ready.';
    case 'recognizing text':
      return lang === 'kn'
        ? `ಕನ್ನಡ ಪಠ್ಯ ಗುರುತಿಸಲಾಗುತ್ತಿದೆ... (${percent}%)`
        : `Recognizing Kannada text... (${percent}%)`;
    default:
      return lang === 'kn'
        ? `ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ... (${percent}%)`
        : `Processing... (${percent}%)`;
  }
}

/**
 * Triggers in-browser download of a text string as a .txt file
 */
export function downloadTextAsFile(content: string, filename: string = 'kannada-ocr-text.txt') {
  if (typeof window === 'undefined') return;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

