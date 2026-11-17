/**
 * Internationalization (i18n) definitions and helpers for KannadaTools.
 * Kannada-first with full English toggle support.
 * All keys provide authentic Kannada and natural English strings.
 */

export type Language = 'kn' | 'en';

export interface Translations {
  [key: string]: {
    kn: string;
    en: string;
  };
}

export const translations: Translations = {
  // Brand & Site Meta
  siteName: {
    kn: 'ಕನ್ನಡಟೂಲ್ಸ್',
    en: 'KannadaTools',
  },
  siteTagline: {
    kn: 'ಉಚಿತ ಮತ್ತು ಮುಕ್ತ ತಂತ್ರಾಂಶ ಕನ್ನಡ ಡಿಜಿಟಲ್ ಉಪಕರಣಗಳು',
    en: 'Free & Open Source Kannada Digital Tools',
  },

  // Navigation Links
  navHome: {
    kn: 'ಮುಖಪುಟ',
    en: 'Home',
  },
  navTransliterate: {
    kn: 'ಲಿಪ್ಯಂತರಣ',
    en: 'Transliteration',
  },
  navCleaner: {
    kn: 'ಪಠ್ಯ ಶುದ್ಧೀಕರಣ',
    en: 'Text Cleaner',
  },
  navOcr: {
    kn: 'ಚಿತ್ರದಿಂದ ಪಠ್ಯ (OCR)',
    en: 'Image to Text (OCR)',
  },
  navSpeech: {
    kn: 'ಧ್ವನಿಯಿಂದ ಪಠ್ಯ',
    en: 'Speech-to-Text',
  },
  navAbout: {
    kn: 'ನಮ್ಮ ಬಗ್ಗೆ',
    en: 'About',
  },
  navContact: {
    kn: 'ಸಂಪರ್ಕಿಸಿ',
    en: 'Contact',
  },
  navCustomTool: {
    kn: 'ಕಸ್ಟಮ್ ಟೂಲ್ ವಿನಂತಿ',
    en: 'Request Tool',
  },
  navReportMistake: {
    kn: 'ದೋಷ ವರದಿ',
    en: 'Report Mistake',
  },

  // Language Toggle
  toggleLanguageButton: {
    kn: 'English',
    en: 'ಕನ್ನಡ',
  },
  currentLanguageLabel: {
    kn: 'ಕನ್ನಡ',
    en: 'English',
  },

  // Common UI actions and badges
  comingSoonBadge: {
    kn: 'ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ',
    en: 'Coming soon',
  },
  openSourceBadge: {
    kn: '೧೦೦% ಮುಕ್ತ ಹಾಗೂ ಉಚಿತ',
    en: '100% Free & Open Source',
  },
  copyBtn: {
    kn: 'ನಕಲಿಸಿ (Copy)',
    en: 'Copy Text',
  },
  copiedBtn: {
    kn: 'ನಕಲಿಸಲಾಗಿದೆ!',
    en: 'Copied!',
  },
  clearBtn: {
    kn: 'ತೆರವುಗೊಳಿಸಿ (Clear)',
    en: 'Clear',
  },
  downloadBtn: {
    kn: 'ಡೌನ್‌ಲೋಡ್ (.txt)',
    en: 'Download (.txt)',
  },
  feedbackLink: {
    kn: 'ತಪ್ಪು ಕಂಡಿತೇ? ದೋಷ ವರದಿ ಮಾಡಿ',
    en: 'Found an error? Report a mistake',
  },
  openToolBtn: {
    kn: 'ಉಪಕರಣ ತೆರೆಯಿರಿ',
    en: 'Open Tool',
  },

  // Home Page (Phase 2)
  homeHeadline: {
    kn: 'ಉಚಿತ ಕನ್ನಡ ಪರಿಕರಗಳು: ಮಾತನಾಡಿ, ಸ್ಕ್ಯಾನ್ ಮಾಡಿ, ಟೈಪ್ ಮಾಡಿ, ಶುದ್ಧಗೊಳಿಸಿ',
    en: 'Free Kannada tools: speak, scan, type, clean',
  },
  homeSubhead: {
    kn: 'ಯಾವುದೇ ಸರ್ವರ್ ವೆಚ್ಚವಿಲ್ಲದೆ ಸಂಪೂರ್ಣ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ವೇಗವಾದ, ಸುರಕ್ಷಿತ ಮತ್ತು ಮೊಬೈಲ್ ಸ್ನೇಹಿ ಕನ್ನಡ ಡಿಜಿಟಲ್ ಪರಿಕರಗಳು.',
    en: 'Fast, private, and mobile-friendly digital tools running entirely in your browser with zero server latency and zero cost.',
  },

  // Tool 1: Transliteration
  toolTransliterateTitle: {
    kn: 'ಲಿಪ್ಯಂತರಣ (Transliteration)',
    en: 'Transliteration (Type in English)',
  },
  toolTransliterateDesc: {
    kn: 'ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ (ಉದಾಹರಣೆಗೆ "namaskara") ಮತ್ತು ತಕ್ಷಣವೇ ಶುದ್ಧ ಕನ್ನಡ ಲಿಪಿಯನ್ನು ಪಡೆಯಿರಿ.',
    en: 'Type in English letters (e.g. "namaskara") and get authentic Kannada script live while typing.',
  },

  // Tool 2: Text Cleaner
  toolCleanerTitle: {
    kn: 'ಪಠ್ಯ ಶುದ್ಧೀಕರಣ (Text Cleaner)',
    en: 'Text Cleaner & Normalizer',
  },
  toolCleanerDesc: {
    kn: 'ಹರಿದುಹೋದ ಯೂನಿಕೋಡ್ ಸರಿಪಡಿಸಿ, ಹೆಚ್ಚುವರಿ ಖಾಲಿ ಸಾಲುಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಹಳೆಯ ನುಡಿ/ಬರಹ ಫಾಂಟ್ ಪಠ್ಯವನ್ನು ಪರಿವರ್ತಿಸಿ.',
    en: 'Fix broken Unicode, remove duplicate spaces & blank lines, normalize punctuation, and convert legacy Nudi/Baraha fonts.',
  },

  // Tool 3: OCR
  toolOcrTitle: {
    kn: 'ಚಿತ್ರದಿಂದ ಪಠ್ಯ (OCR)',
    en: 'Image to Kannada Text (OCR)',
  },
  toolOcrDesc: {
    kn: 'ಪುಸ್ತಕದ ಪುಟಗಳು, ದಾಖಲೆಗಳು ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳಿಂದ ಕನ್ನಡ ಪಠ್ಯವನ್ನು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ನಿಖರವಾಗಿ ಗುರುತಿಸಿ.',
    en: 'Extract printed Kannada text from photos, book pages, and documents right inside your browser.',
  },

  // Tool 4: Speech-to-Text
  toolSpeechTitle: {
    kn: 'ಧ್ವನಿಯಿಂದ ಪಠ್ಯ (Speech-to-Text)',
    en: 'Kannada Speech-to-Text',
  },
  toolSpeechDesc: {
    kn: 'ಕನ್ನಡ ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳು ಮತ್ತು ಆಡಿಯೋ ಕಡತಗಳನ್ನು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (AI) ಮಾದರಿಯೊಂದಿಗೆ ಲಿಖಿತ ಪಠ್ಯವಾಗಿ ಪರಿವರ್ತಿಸಿ.',
    en: 'Transcribe spoken Kannada audio recordings and voice notes into written text using Kannada AI models.',
  },

  // Phase 3: Transliteration
  transliterateHeading: {
    kn: 'ಇಂಗ್ಲಿಷ್‌ನಿಂದ ಕನ್ನಡ ನೇರ ಲಿಪ್ಯಂತರಣ',
    en: 'Live English to Kannada Transliteration',
  },
  transliterateSubheading: {
    kn: 'ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ (ಉದಾ: namaskara), ನೇರವಾಗಿ ನೈಜ ಸಮಯದಲ್ಲಿ ಕನ್ನಡ ಲಿಪಿ ಪಡೆಯಿರಿ. ೧೦೦% ಬ್ರೌಸರ್‌ನಲ್ಲಿಯೇ ನಡೆಯುತ್ತದೆ.',
    en: 'Type English phonetics live to generate authentic Kannada script in real time. Runs 100% inside your browser.',
  },
  inputBoxLabel: {
    kn: 'ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ (Type in English):',
    en: 'Type in English phonetics:',
  },
  inputPlaceholder: {
    kn: 'ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ... ಉದಾಹರಣೆಗೆ: namaskara, kannada nanna thaye...',
    en: 'Type here... e.g.: namaskara, kannada nanna thaye...',
  },
  outputBoxLabel: {
    kn: 'ಕನ್ನಡ ಲಿಪಿ (Kannada Script Output):',
    en: 'Kannada Script Output:',
  },
  outputPlaceholder: {
    kn: 'ನಿಮ್ಮ ಕನ್ನಡ ಪಠ್ಯವು ಇಲ್ಲಿ ನೇರವಾಗಿ ಮೂಡುತ್ತದೆ...',
    en: 'Your Kannada text will appear here automatically...',
  },
  sampleChipsLabel: {
    kn: 'ಉದಾಹರಣೆ ಪದಗಳು (ಕ್ಲಿಕ್ ಮಾಡಿ):',
    en: 'Example words (click to try):',
  },
  schemeSelectorLabel: {
    kn: 'ಲಿಪ್ಯಂತರಣ ಶೈಲಿ:',
    en: 'Typing Scheme:',
  },
  reportMistakePrompt: {
    kn: 'ತಪ್ಪು ಲಿಪ್ಯಂತರಣ ಕಂಡಿತೇ? ದೋಷ ವರದಿ ಮಾಡಿ',
    en: 'Found an incorrect transliteration? Report a mistake',
  },

  // Phase 4: Text Cleaner
  cleanerHeading: {
    kn: 'ಕನ್ನಡ ಪಠ್ಯ ಶುದ್ಧೀಕರಣ ಮತ್ತು ಯೂನಿಕೋಡ್ ಸರಿಪಡಿಸುವಿಕೆ',
    en: 'Kannada Text Cleaner & Normalizer',
  },
  cleanerSubheading: {
    kn: 'ಕನ್ನಡ ಪಠ್ಯದಲ್ಲಿನ ಯೂನಿಕೋಡ್ ದೋಷಗಳು, ಹೆಚ್ಚುವರಿ ಖಾಲಿ ಜಾಗಗಳು, ಸಾಲುಗಳು ಮತ್ತು ವಿರಾಮಚಿಹ್ನೆಗಳನ್ನು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಸರಿಪಡಿಸಿ.',
    en: 'Fix broken Unicode, strip unwanted spaces & blank lines, normalize punctuation, and convert legacy fonts live in your browser.',
  },
  optFixUnicode: {
    kn: 'ಯೂನಿಕೋಡ್ ದೋಷ ನಿವಾರಣೆ (Fix Broken Unicode)',
    en: 'Fix Broken Unicode & Matras',
  },
  optFixUnicodeDesc: {
    kn: 'ಪುನರಾವರ್ತಿತ ಒತ್ತಕ್ಷರಗಳು, ದ್ವಿಗುಣ ಸ್ವರ ಚಿಹ್ನೆಗಳು (ಾಾ -> ಾ) ಮತ್ತು ಹರಿದುಹೋದ ಸಂಯೋಜಕಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ.',
    en: 'Fixes repeated vowel signs, duplicate viramas, and stray zero-width joiners.',
  },
  optCleanWhitespace: {
    kn: 'ಹೆಚ್ಚುವರಿ ಜಾಗ & ಖಾಲಿ ಸಾಲು ತೆಗೆಯಿರಿ (Clean Whitespace)',
    en: 'Remove Extra Spaces & Blank Lines',
  },
  optCleanWhitespaceDesc: {
    kn: 'ಹೆಚ್ಚುವರಿ ಸ್ಪೇಸ್‌ಗಳು, ಟ್ಯಾಬ್‌ಗಳು ಮತ್ತು ಸತತ ಖಾಲಿ ಸಾಲುಗಳನ್ನು ಸಂಕ್ಷಿಪ್ತಗೊಳಿಸುತ್ತದೆ.',
    en: 'Collapses multiple spaces to one, trims line ends, and reduces excess blank lines.',
  },
  optNormalizePunctuation: {
    kn: 'ವಿರಾಮಚಿಹ್ನೆ ಸಾಮಾನ್ಯೀಕರಣ (Normalize Punctuation)',
    en: 'Normalize Punctuation & Quotes',
  },
  optNormalizePunctuationDesc: {
    kn: 'ಕರ್ಲಿ ಉಲ್ಲೇಖ ಚಿಹ್ನೆಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ ಮತ್ತು ವಿರಾಮಚಿಹ್ನೆಗಳ ಹಿಂದಿನ ಅನಗತ್ಯ ಸ್ಪೇಸ್ ತೆಗೆಯುತ್ತದೆ.',
    en: 'Straightens curly quotes, cleans spaces before commas/periods, and formats dashes.',
  },
  optConvertLegacy: {
    kn: 'ನುಡಿ / ಬರಹ ಆಸ್ಕಿ ಪರಿವರ್ತನೆ (Convert Legacy Fonts)',
    en: 'Convert Legacy Nudi / Baraha (ASCII)',
  },
  optConvertLegacyDesc: {
    kn: 'ಹಳೆಯ ನುಡಿ/ಬರಹ ಆಸ್ಕಿ ಫಾಂಟ್‌ಗಳ ಪಠ್ಯವನ್ನು ಯೂನಿಕೋಡ್‌ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ. (ಸಂಕೀರ್ಣ ಒತ್ತಕ್ಷರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ).',
    en: 'Converts legacy ASCII-encoded Nudi/Baraha font text to Unicode. (Review complex conjuncts).',
  },
  cleanerBeforeLabel: {
    kn: 'ಮೂಲ ಪಠ್ಯ (Before / Original Input):',
    en: 'Original Text (Before):',
  },
  cleanerAfterLabel: {
    kn: 'ಶುದ್ಧೀಕರಿಸಿದ ಪಠ್ಯ (After / Cleaned Output):',
    en: 'Cleaned Text (After):',
  },
  cleanerInputPlaceholder: {
    kn: 'ಇಲ್ಲಿ ಕನ್ನಡ ಪಠ್ಯವನ್ನು ಅಂಟಿಸಿ (Paste your messy Kannada text here)...',
    en: 'Paste messy Kannada text here...',
  },
  cleanerOutputPlaceholder: {
    kn: 'ಶುದ್ಧೀಕರಿಸಿದ ಫಲಿತಾಂಶ ಇಲ್ಲಿ ತಕ್ಷಣವೇ ಕಾಣಿಸುತ್ತದೆ...',
    en: 'Cleaned result will appear here live...',
  },
  cleanNowBtn: {
    kn: 'ಈಗಲೇ ಶುದ್ಧೀಕರಿಸಿ',
    en: 'Clean Text Now',
  },

  // Phase 5: OCR Specific
  ocrHeading: {
    kn: 'ಚಿತ್ರದಿಂದ ಕನ್ನಡ ಪಠ್ಯ ಹೊರತೆಗೆಯುವಿಕೆ (Kannada OCR)',
    en: 'Kannada Image to Text (OCR)',
  },
  ocrSubheading: {
    kn: 'ಪುಸ್ತಕದ ಪುಟಗಳು, ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ಕಡತಗಳು ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಕನ್ನಡ ಅಕ್ಷರಗಳನ್ನು ನೇರವಾಗಿ ಹೊರತೆಗೆಯಿರಿ.',
    en: 'Upload Kannada photos, documents, or screenshots to extract editable Kannada text using browser-based Tesseract OCR.',
  },
  ocrBestWithPrintedNote: {
    kn: 'ಸ್ಪಷ್ಟ ಮತ್ತು ಮುದ್ರಿತ ಕನ್ನಡ ಪಠ್ಯದಲ್ಲಿ ಅತ್ಯುತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
    en: 'Works best with clear, printed text.',
  },
  uploadAreaTitle: {
    kn: 'ಚಿತ್ರವನ್ನು ಇಲ್ಲಿ ಎಳೆದು ಹಾಕಿ ಅಥವಾ ಬ್ರೌಸ್ ಮಾಡಿ',
    en: 'Drag and drop an image here or click to browse',
  },
  uploadAreaSubtitle: {
    kn: 'ಬೆಂಬಲಿತ ಸ್ವರೂಪಗಳು: JPG, PNG (ಗರಿಷ್ಠ ೫ MB)',
    en: 'Supported formats: JPG, PNG (Max 5 MB)',
  },
  selectFileBtn: {
    kn: 'ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ',
    en: 'Select Image',
  },
  removeImageBtn: {
    kn: 'ಚಿತ್ರ ತೆಗೆದುಹಾಕಿ',
    en: 'Remove Image',
  },
  startOcrBtn: {
    kn: 'ಕನ್ನಡ ಪಠ್ಯ ಹೊರತೆಗೆಯಿರಿ (Extract Text)',
    en: 'Extract Kannada Text',
  },
  ocrOutputLabel: {
    kn: 'ಹೊರತೆಗೆದ ಕನ್ನಡ ಪಠ್ಯ (Extracted Kannada Text):',
    en: 'Extracted Kannada Text:',
  },
  ocrOutputPlaceholder: {
    kn: 'ಗುರುತಿಸಲಾದ ಕನ್ನಡ ಪಠ್ಯವು ಇಲ್ಲಿ ಸಂಪಾದಿಸಬಹುದಾದ ರೀತಿಯಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ...',
    en: 'Extracted Kannada text will appear here and can be edited...',
  },
  downloadTxtBtn: {
    kn: 'ಡೌನ್‌ಲೋಡ್ (.txt)',
    en: 'Download as .txt',
  },
  trySampleImageBtn: {
    kn: 'ಮಾದರಿ ಕನ್ನಡ ಚಿತ್ರ ಪರೀಕ್ಷಿಸಿ',
    en: 'Try Sample Kannada Image',
  },

  // Phase 6: Speech-to-Text Specific
  speechHeading: {
    kn: 'ಕನ್ನಡ ಧ್ವನಿಯಿಂದ ಪಠ್ಯ ಪರಿವರ್ತಕ (Kannada Speech-to-Text)',
    en: 'Kannada Speech-to-Text (ASR)',
  },
  speechSubheading: {
    kn: 'ಕನ್ನಡ ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಅಥವಾ ಆಡಿಯೋ ಕಡತವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (Whisper AI) ಮಾದರಿಯೊಂದಿಗೆ ಕ್ಷಣಾರ್ಧದಲ್ಲಿ ಕನ್ನಡ ಪಠ್ಯವಾಗಿ ಪರಿವರ್ತಿಸಿ.',
    en: 'Upload Kannada audio recordings or record your voice to transcribe them into written Kannada text using free Whisper AI models.',
  },
  speechMaxDurationNote: {
    kn: 'ಗರಿಷ್ಠ ಅವಧಿ: ೨ ನಿಮಿಷಗಳು. ಬೆಂಬಲಿತ ಸ್ವರೂಪಗಳು: MP3, WAV, M4A, OGG, WebM (ಗರಿಷ್ಠ ೨೫ MB).',
    en: 'Max duration: 2 minutes. Supported formats: MP3, WAV, M4A, OGG, WebM (Max 25 MB).',
  },
  audioUploadLabel: {
    kn: 'ಆಡಿಯೋ ಕಡತವನ್ನು ಇಲ್ಲಿ ಎಳೆದು ಹಾಕಿ ಅಥವಾ ಬ್ರೌಸ್ ಮಾಡಿ',
    en: 'Drag and drop audio file here or browse',
  },
  audioUploadSubtitle: {
    kn: 'MP3, WAV, M4A, OGG ಅಥವಾ WebM ಕಡತಗಳು',
    en: 'MP3, WAV, M4A, OGG, or WebM audio files',
  },
  selectAudioBtn: {
    kn: 'ಆಡಿಯೋ ಆಯ್ಕೆಮಾಡಿ',
    en: 'Choose Audio File',
  },
  recordVoiceBtn: {
    kn: 'ಧ್ವನಿ ರೆಕಾರ್ಡ್ ಮಾಡಿ',
    en: 'Record Voice',
  },
  stopRecordBtn: {
    kn: 'ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ',
    en: 'Stop Recording',
  },
  recordingActive: {
    kn: 'ರೆಕಾರ್ಡ್ ಆಗುತ್ತಿದೆ...',
    en: 'Recording voice...',
  },
  startTranscribeBtn: {
    kn: 'ಪಠ್ಯವಾಗಿ ಪರಿವರ್ತಿಸಿ (Transcribe)',
    en: 'Transcribe to Kannada',
  },
  speechOutputLabel: {
    kn: 'ಹೊರತೆಗೆದ ಕನ್ನಡ ಪಠ್ಯ (Transcribed Kannada Text):',
    en: 'Transcribed Kannada Text:',
  },
  speechOutputPlaceholder: {
    kn: 'ಪರಿವರ್ತಿತ ಕನ್ನಡ ಪಠ್ಯವು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ ಮತ್ತು ಸಂಪಾದಿಸಬಹುದು...',
    en: 'Transcribed Kannada text will appear here and can be edited...',
  },
  speechLoadingNote: {
    kn: 'ಸೂಚನೆ: ಉಚಿತ ಹೋಸ್ಟಿಂಗ್ (Hugging Face Spaces) ನಿಧಾನವಾಗಿರಬಹುದು. ಸರ್ವರ್ ನಿದ್ರಾವಸ್ಥೆಯಲ್ಲಿದ್ದರೆ (Cold Start) ಎಚ್ಚರಗೊಳ್ಳಲು ೩೦-೬೦ ಸೆಕೆಂಡುಗಳು ಬೇಕಾಗಬಹುದು. ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ.',
    en: 'Note: Free Hugging Face Spaces can be slow. If the server is asleep (Cold Start), it may take 30–60 seconds to wake up. Please be patient.',
  },
  speechSleepingSpaceError: {
    kn: 'ಹಗ್ಗಿಂಗ್ ಫೇಸ್ ಸ್ಪೇಸ್ ಪ್ರಸ್ತುತ ನಿದ್ರಾವಸ್ಥೆಯಲ್ಲಿದೆ ಅಥವಾ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಸುಮಾರು ೩೦-೬೦ ಸೆಕೆಂಡುಗಳ ನಂತರ ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.',
    en: 'The Hugging Face Space is currently sleeping or waking up. Please wait ~30-60 seconds and try again.',
  },
  speechPrivacyNote: {
    kn: 'ಖಾಸಗಿತನ ರಕ್ಷಣೆ: ಆಡಿಯೋ ಕಡತವನ್ನು ಕೇವಲ ಪಠ್ಯ ಪರಿವರ್ತನೆಗಾಗಿ ಉಚಿತ Hugging Face Space ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಯಾವುದೇ ಆಡಿಯೋವನ್ನು ಶಾಶ್ವತವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ.',
    en: 'Privacy note: Audio is sent to the free Hugging Face Space solely for transcription. No audio recordings are permanently stored.',
  },
  speechDemoAudioBtn: {
    kn: 'ಮಾದರಿ ಆಡಿಯೋ ಪರೀಕ್ಷಿಸಿ',
    en: 'Try Sample Audio',
  },
  speechAudioDuration: {
    kn: 'ಆಡಿಯೋ ಅವಧಿ',
    en: 'Audio Duration',
  },

  // Phase 7: Supporting Pages - About & How It Works
  aboutHeading: {
    kn: 'ಕನ್ನಡಟೂಲ್ಸ್ ಬಗ್ಗೆ & ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    en: 'About KannadaTools & How It Works',
  },
  aboutSubheading: {
    kn: 'ಯಾವುದೇ ಸರ್ವರ್ ವೆಚ್ಚವಿಲ್ಲದೆ, ಎಲ್ಲರಿಗೂ ಉಚಿತವಾಗಿ ಲಭ್ಯವಾಗುವ ಮುಕ್ತ ತಂತ್ರಾಂಶ ಕನ್ನಡ ಡಿಜಿಟಲ್ ಪರಿಕರಗಳು.',
    en: 'A 100% free, open-source Kannada digital toolbox operating with zero server hosting costs.',
  },
  aboutMissionTitle: {
    kn: 'ನಮ್ಮ ಧ್ಯೇಯೋದ್ದೇಶ (Our Mission)',
    en: 'Our Mission & Philosophy',
  },
  aboutMissionDesc: {
    kn: 'ಕನ್ನಡ ಭಾಷೆಯು ಡಿಜಿಟಲ್ ಜಗತ್ತಿನಲ್ಲಿ ಸಮೃದ್ಧವಾಗಿ ಬೆಳೆಯಬೇಕು ಎಂಬುದು ನಮ್ಮ ಆಶಯ. ವಿದ್ಯಾರ್ಥಿಗಳು, ಲೇಖಕರು, ಸಂಶೋಧಕರು ಮತ್ತು ಪ್ರತಿಯೊಬ್ಬ ಕನ್ನಡಿಗರಿಗೆ ದುಬಾರಿ ಚಂದಾದಾರಿಕೆ ಅಥವಾ ಲಾಗಿನ್ ಇಲ್ಲದೆ, ಉಚಿತವಾಗಿ ಅತ್ಯುನ್ನತ ಗುಣಮಟ್ಟದ ಭಾಷಾ ತಂತ್ರಜ್ಞಾನ ಒದಗಿಸುವುದು ನಮ್ಮ ಗುರಿ.',
    en: 'We believe Kannada language technology should be free and accessible to every student, writer, researcher, and speaker without paywalls, subscriptions, or complex logins.',
  },
  howItWorksTitle: {
    kn: 'ಉಪಕರಣಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ? (How It Works)',
    en: 'How the Tools Work (Under the Hood)',
  },
  howTransliterateDesc: {
    kn: 'Sanscript ಎಂಜಿನ್ ಬಳಸಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳನ್ನು ಕನ್ನಡ ಯೂನಿಕೋಡ್ ಅಕ್ಷರಗಳಾಗಿ ತಕ್ಷಣವೇ ಬದಲಾಯಿಸುತ್ತದೆ. ಯಾವುದೇ ಸರ್ವರ್ ಸಂಪರ್ಕ ಬೇಕಾಗಿಲ್ಲ.',
    en: 'Runs entirely in your browser using the Sanscript transliteration engine, instantly mapping phonetic English keystrokes to Kannada Unicode.',
  },
  howCleanerDesc: {
    kn: 'ಮುರಿದ ವತ್ತಕ್ಷರಗಳು, ಅನಗತ್ಯ ಜಾಗಗಳು ಮತ್ತು ನುಡಿ/ಬರಹ ಹಳೆಯ ಫಾಂಟ್ ಅಕ್ಷರಗಳನ್ನು ನಿಯಮಿತ ಕೋಡ್ ಮೂಲಕ ಆಧುನಿಕ ಯೂನಿಕೋಡ್‌ಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ.',
    en: 'Applies optimized regex pipelines to fix disjointed halants, redundant whitespaces, and legacy ASCII Nudi/Baraha characters into modern Unicode.',
  },
  howOcrDesc: {
    kn: 'Tesseract.js ಮತ್ತು WebAssembly ಮೂಲಕ ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್ ಅಥವಾ ಮೊಬೈಲ್‌ನಲ್ಲೇ ನೇರವಾಗಿ ಚಿತ್ರಗಳಿಂದ ಕನ್ನಡ ಪಠ್ಯವನ್ನು ಹೊರತೆಗೆಯುತ್ತದೆ.',
    en: 'Uses client-side WebAssembly (Tesseract.js) and the official Kannada neural model data right on your device, uploading zero images to any server.',
  },
  howSpeechDesc: {
    kn: 'Mozilla Common Voice ಕನ್ನಡ ಡೇಟಾಸೆಟ್‌ನಲ್ಲಿ ತರಬೇತಿ ಪಡೆದ Whisper AI ಮುಕ್ತ ಮಾದರಿಯನ್ನು ಉಚಿತ Hugging Face Space ನಲ್ಲಿ ಚಲಾಯಿಸಿ ಧ್ವನಿಯನ್ನು ಪಠ್ಯವಾಗಿಸುತ್ತದೆ.',
    en: 'Utilizes an open-source Whisper model fine-tuned on the Kannada Common Voice dataset hosted on a zero-cost Hugging Face Space.',
  },
  openSourceTitle: {
    kn: 'ಮುಕ್ತ ತಂತ್ರಾಂಶ ಮತ್ತು ಸಹಯೋಗ (Open Source & GitHub)',
    en: 'Open Source & Community Collaboration',
  },
  openSourceDesc: {
    kn: 'ಕನ್ನಡಟೂಲ್ಸ್ ಸಂಪೂರ್ಣವಾಗಿ ಮುಕ್ತ ಮೂಲದ್ದಾಗಿದೆ (MIT License). ಯಾವುದೇ ಶುಲ್ಕವಿಲ್ಲದೆ ಕೋಡ್ ನೋಡಬಹುದು, ಮಾರ್ಪಡಿಸಬಹುದು ಅಥವಾ ನಿಮ್ಮ ಯೋಜನೆಗಳಿಗೆ ಬಳಸಿಕೊಳ್ಳಬಹುದು.',
    en: 'KannadaTools is completely open-source under the permissive MIT License. Anyone can inspect, contribute to, or extend the codebase.',
  },
  viewOnGithubBtn: {
    kn: 'GitHub ನಲ್ಲಿ ಕೋಡ್ ವೀಕ್ಷಿಸಿ',
    en: 'View on GitHub',
  },
  freeHostingLimitsTitle: {
    kn: 'ಉಚಿತ ಹೋಸ್ಟಿಂಗ್ ಮಿತಿಗಳ ಪ್ರಾಮಾಣಿಕ ವಿವರಣೆ (Honest Hosting Limits)',
    en: 'An Honest Note on Free-Hosting Limits',
  },
  freeHostingLimitsDesc: {
    kn: 'ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಶೂನ್ಯ ವೆಚ್ಚದಲ್ಲಿ (Zero Hosting Cost) ಕಾರ್ಯನಿರ್ವಹಿಸುವುದರಿಂದ, ಕೆಲವು ನೈಸರ್ಗಿಕ ಮಿತಿಗಳಿವೆ. ನಾವು ಬಳಕೆದಾರರಿಗೆ ಮುಕ್ತವಾಗಿ ಈ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತೇವೆ:',
    en: 'Because KannadaTools operates with a $0/month budget on free platforms, there are transparent trade-offs you should know:',
  },
  limitCpuTitle: {
    kn: 'ಸಾಧನದ ಪ್ರೊಸೆಸರ್ ಬಳಕೆ (Device Processing)',
    en: 'Client-Side Device Computing',
  },
  limitCpuDesc: {
    kn: 'OCR ಮತ್ತು ಲಿಪ್ಯಂತರಣ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ರನ್ ಆಗುವುದರಿಂದ, ಹಳೆಯ ಅಥವಾ ಕಡಿಮೆ ಸಾಮರ್ಥ್ಯದ ಸಾಧನಗಳಲ್ಲಿ ದೊಡ್ಡ ಚಿತ್ರಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಕೆಲವು ಸೆಕೆಂಡುಗಳು ತಗುಲಬಹುದು.',
    en: 'OCR and text cleaning run on your device. Older phones may take a few seconds when processing high-resolution images.',
  },
  limitColdStartTitle: {
    kn: 'ಸ್ಪೀಚ್-ಟು-ಟೆಕ್ಸ್ಟ್ ಕೋಲ್ಡ್ ಸ್ಟಾರ್ಟ್ (Cold Starts)',
    en: 'Speech-to-Text Cold Starts',
  },
  limitColdStartDesc: {
    kn: 'ಉಚಿತ Hugging Face Space ಬಳಕೆಯಾಗದೆ ಇದ್ದಾಗ ನಿದ್ರಾವಸ್ಥೆಗೆ (Sleep) ಜಾರುತ್ತದೆ. ಮೊದಲ ವಿನಂತಿಗೆ ಎಚ್ಚರಗೊಳ್ಳಲು ೩೦-೬೦ ಸೆಕೆಂಡುಗಳು ಬೇಕಾಗಬಹುದು.',
    en: 'The free Hugging Face Space pauses when inactive. The first audio transcription after sleep may take 30–60 seconds while the container spins up.',
  },
  limitFilesTitle: {
    kn: 'ಕಡತದ ಗಾತ್ರದ ಮಿತಿ (File Size Limits)',
    en: 'File Size & Duration Limits',
  },
  limitFilesDesc: {
    kn: 'ಚಿತ್ರಗಳು ಗರಿಷ್ಠ ೫ MB ಮತ್ತು ಆಡಿಯೋ ಕಡತಗಳು ಗರಿಷ್ಠ ೨ ನಿಮಿಷಗಳಿಗೆ (೨೫ MB) ಸೀಮಿತವಾಗಿರುತ್ತವೆ.',
    en: 'Images are limited to 5 MB and audio files are limited to 2 minutes (25 MB) to ensure fast and reliable execution.',
  },

  // Phase 7: Contact Page
  contactHeading: {
    kn: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ (Contact Us)',
    en: 'Contact & Support',
  },
  contactSubheading: {
    kn: 'ಪ್ರಶ್ನೆಗಳು, ಪ್ರತಿಕ್ರಿಯೆಗಳು, ಸಲಹೆಗಳು ಅಥವಾ ಸಹಯೋಗಕ್ಕಾಗಿ ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ.',
    en: 'Questions, feedback, bug reports, or sponsorship inquiries — send us a message.',
  },
  contactNameLabel: {
    kn: 'ನಿಮ್ಮ ಹೆಸರು (Full Name)',
    en: 'Your Name',
  },
  contactEmailLabel: {
    kn: 'ಇಮೇಲ್ ವಿಳಾಸ (Email Address)',
    en: 'Email Address',
  },
  contactSubjectLabel: {
    kn: 'ವಿಷಯ / ವರ್ಗ (Subject / Topic)',
    en: 'Subject / Category',
  },
  contactSubjectGeneral: {
    kn: 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ (General Inquiry)',
    en: 'General Inquiry',
  },
  contactSubjectBug: {
    kn: 'ದೋಷ ವರದಿ (Bug Report)',
    en: 'Bug Report',
  },
  contactSubjectFeature: {
    kn: 'ಹೊಸ ವೈಶಿಷ್ಟ್ಯ ಸಲಹೆ (Feature Request)',
    en: 'Feature Request',
  },
  contactSubjectCustom: {
    kn: 'ಕಸ್ಟಮ್ ಪರಿಕರ / API ಯೋಜನೆ (Custom Tool or API)',
    en: 'Custom Tool or API Solution',
  },
  contactSubjectSponsor: {
    kn: 'ಪ್ರಾಯೋಜಕತ್ವ / ಪಾಲುದಾರಿಕೆ (Sponsorship)',
    en: 'Sponsorship or Partnership',
  },
  contactMessageLabel: {
    kn: 'ನಿಮ್ಮ ಸಂದೇಶ (Your Message)',
    en: 'Your Message',
  },
  contactSubmitBtn: {
    kn: 'ಸಂದೇಶ ಕಳುಹಿಸಿ (Send Message)',
    en: 'Send Message',
  },
  contactSubmitting: {
    kn: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
    en: 'Sending message...',
  },
  contactSuccessMsg: {
    kn: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಸಂದೇಶ ನಮಗೆ ತಲುಪಿದೆ. ಶೀಘ್ರದಲ್ಲೇ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ.',
    en: 'Thank you! Your message has been received. We will get back to you shortly.',
  },
  contactErrorMsg: {
    kn: 'ಸಂದೇಶ ಕಳುಹಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.',
    en: 'Could not send message. Please try again later.',
  },

  // Phase 7: Request Custom Tool Page
  requestToolHeading: {
    kn: 'ಕಸ್ಟಮ್ ಕನ್ನಡ ಪರಿಕರ ಅಥವಾ ಬೃಹತ್ API ವಿನಂತಿ',
    en: 'Request a Custom Tool or Bulk API',
  },
  requestToolSubheading: {
    kn: 'ಸಂಸ್ಥೆಗಳು, ವ್ಯಾಪಾರಗಳು ಮತ್ತು ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಿಗೆ ವಿಶೇಷ ಕನ್ನಡ ಭಾಷಾ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ದೊಡ್ಡ ಪ್ರಮಾಣದ API ಪರಿಹಾರಗಳು.',
    en: 'Custom Kannada language models, dedicated private deployments, and high-volume batch APIs for teams and organizations.',
  },
  requestToolOrgLabel: {
    kn: 'ಸಂಸ್ಥೆ / ಕಂಪನಿಯ ಹೆಸರು (Organization / Company)',
    en: 'Organization or Company Name',
  },
  requestToolTypeLabel: {
    kn: 'ವಿನಂತಿಯ ಪ್ರಕಾರ (Service Required)',
    en: 'Type of Service Needed',
  },
  requestToolType1: {
    kn: 'ಕಸ್ಟಮ್ ಕನ್ನಡ ಪರಿಕರ ಅಭಿವೃದ್ಧಿ (Custom Tool Development)',
    en: 'Custom Tool Development',
  },
  requestToolType2: {
    kn: 'ದೊಡ್ಡ ಪ್ರಮಾಣದ ಬೃಹತ್ API (Bulk Batch API)',
    en: 'High-Volume Batch API',
  },
  requestToolType3: {
    kn: 'ಖಾಸಗಿ ಸರ್ವರ್ ಹೋಸ್ಟಿಂಗ್ (Dedicated Server Setup)',
    en: 'Dedicated Server Hosting (No Cold Starts)',
  },
  requestToolType4: {
    kn: 'ಕಾರ್ಪೊರೇಟ್ ಪ್ರಾಯೋಜಕತ್ವ (Sponsorship)',
    en: 'Corporate Sponsorship',
  },
  requestToolVolumeLabel: {
    kn: 'ನಿರೀಕ್ಷಿತ ಮಾಸಿಕ ಬಳಕೆ (Expected Monthly Volume)',
    en: 'Expected Monthly Volume',
  },
  requestToolDescLabel: {
    kn: 'ನಿಮ್ಮ ಯೋಜನೆ ಮತ್ತು ಅಗತ್ಯತೆಗಳ ವಿವರ (Project Requirements)',
    en: 'Project Details & Requirements',
  },
  requestToolSubmitBtn: {
    kn: 'ಪ್ರಸ್ತಾವನೆ ಕಳುಹಿಸಿ (Submit Request)',
    en: 'Submit Custom Request',
  },
  requestToolSuccessMsg: {
    kn: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಕಸ್ಟಮ್ ವಿನಂತಿ ದಾಖಲಾಗಿದೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲಿದೆ.',
    en: 'Thank you! Your custom request has been recorded. We will contact you soon.',
  },

  // Phase 7: Shared Report Mistake Modal
  reportModalTitle: {
    kn: 'ದೋಷ ವರದಿ ಮಾಡಿ (Report a Mistake)',
    en: 'Report a Mistake or Bug',
  },
  reportModalDesc: {
    kn: 'ಯಾವುದಾದರೂ ಪದ ಅಥವಾ ಚಿತ್ರ ಸರಿಯಾಗಿ ಪರಿವರ್ತನೆಯಾಗದಿದ್ದರೆ ತಿಳಿಸಿ. ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ ಕನ್ನಡಟೂಲ್ಸ್ ಸುಧಾರಿಸಲು ನೆರವಾಗುತ್ತದೆ.',
    en: 'Help us improve KannadaTools by reporting incorrect transliterations, OCR misreadings, or audio glitches.',
  },
  reportToolLabel: {
    kn: 'ಯಾವ ಉಪಕರಣದಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ? (Tool Name)',
    en: 'Which tool has the issue?',
  },
  reportMistakeInputLabel: {
    kn: 'ನೀವು ನೀಡಿದ ಇನ್‌ಪುಟ್ (What did you enter / upload?)',
    en: 'What did you enter or upload?',
  },
  reportMistakeExpectedLabel: {
    kn: 'ನಿರೀಕ್ಷಿತ ಸರಿಯಾದ ಫಲಿತಾಂಶ (Expected Result)',
    en: 'What was the expected result?',
  },
  reportMistakeDetailsLabel: {
    kn: 'ಹೆಚ್ಚುವರಿ ವಿವರಣೆ (Additional Details)',
    en: 'Additional Details (Optional)',
  },
  reportEmailOptional: {
    kn: 'ನಿಮ್ಮ ಇಮೇಲ್ (ಐಚ್ಛಿಕ - Optional)',
    en: 'Your Email (Optional)',
  },
  reportSubmitBtn: {
    kn: 'ದೋಷ ವರದಿ ಸಲ್ಲಿಸಿ (Submit Report)',
    en: 'Submit Report',
  },
  reportSuccessMsg: {
    kn: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವರದಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಪರಿಶೀಲಿಸುತ್ತೇವೆ.',
    en: 'Thank you! Your report has been submitted. We will review it promptly.',
  },
  reportCloseBtn: {
    kn: 'ಮುಚ್ಚಿ (Close)',
    en: 'Close',
  },

  // Newsletter Section
  newsletterHeading: {
    kn: 'ಹೊಸ ಪರಿಕರಗಳು ಬಿಡುಗಡೆಯಾದಾಗ ಮಾಹಿತಿ ಪಡೆಯಿರಿ',
    en: 'Get notified when new tools launch',
  },
  newsletterDesc: {
    kn: 'ನಾವು ಹೊಸ ಕನ್ನಡ ಪರಿಕರಗಳು, API ಬೆಂಬಲ ಮತ್ತು ಮುಕ್ತ ತಂತ್ರಾಂಶ ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿದಾಗ ಇಮೇಲ್ ಮೂಲಕ ತಿಳಿಸುತ್ತೇವೆ. ಯಾವುದೇ ಸ್ಪ್ಯಾಮ್ ಇರುವುದಿಲ್ಲ.',
    en: 'Be the first to know when new Kannada tools, API features, and community updates launch. Zero spam, unsubscribe anytime.',
  },
  newsletterPlaceholder: {
    kn: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ (name@example.com)',
    en: 'Enter your email address (name@example.com)',
  },
  newsletterButton: {
    kn: 'ಉಚಿತ ಚಂದಾದಾರರಾಗಿ',
    en: 'Subscribe for Free',
  },
  newsletterSuccess: {
    kn: 'ಧನ್ಯವಾದಗಳು! ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಚಂದಾದಾರರಾಗಿದ್ದೀರಿ.',
    en: 'Thank you! You are subscribed for new tool releases.',
  },
  newsletterPrivacy: {
    kn: 'ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತ. ಯಾವುದೇ ಜಾಹೀರಾತುದಾರರಿಗೆ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.',
    en: 'Your privacy is protected. No spam, ever.',
  },

  // Custom Requests / Commercial Plan Prep
  customRequestHeading: {
    kn: 'ನಿಮ್ಮ ಸಂಸ್ಥೆಗೆ ಕಸ್ಟಮ್ ಪರಿಕರ ಅಥವಾ ಬೃಹತ್ API ಬೇಕೇ?',
    en: 'Need a custom tool, sponsorship, or bulk API plan?',
  },
  customRequestDesc: {
    kn: 'ವ್ಯಾಪಾರಗಳು, ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು ಅಥವಾ ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಸಂಸ್ಕರಣೆಗಾಗಿ ಕಸ್ಟಮ್ ಕನ್ನಡ ಪರಿಕರಗಳು, ಸ್ಪಾನ್ಸರ್‌ಶಿಪ್ ಮತ್ತು ವಿಶೇಷ API ಸೌಲಭ್ಯ ಒದಗಿಸುತ್ತೇವೆ.',
    en: 'We build custom Kannada NLP solutions, high-volume batch APIs, and corporate sponsorships for organizations and businesses.',
  },
  customRequestBtn: {
    kn: 'ಕಸ್ಟಮ್ ಪರಿಹಾರ ಕೇಳಿ',
    en: 'Request Custom Plan',
  },

  // Footer
  footerDescription: {
    kn: 'ಕನ್ನಡ ಡಿಜಿಟಲ್ ಜಗತ್ತಿಗೆ ಮುಕ್ತ ಕೊಡುಗೆ. ಯಾವುದೇ ಸರ್ವರ್ ವೆಚ್ಚವಿಲ್ಲದೆ ಸಂಪೂರ್ಣ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
    en: 'Free open-source contribution to the Kannada digital ecosystem. Runs entirely in your browser with zero server costs.',
  },
  footerLicense: {
    kn: 'MIT ಪರವಾನಗಿ ಅಡಿಯಲ್ಲಿ ಬಿಡುಗಡೆ ಮಾಡಲಾಗಿದೆ',
    en: 'Released under the MIT License',
  },
  footerSourceCode: {
    kn: 'ಮೂಲ ಕೋಡ್ (GitHub)',
    en: 'Source Code (GitHub)',
  },
  footerZeroCostNote: {
    kn: 'ಯಾವುದೇ ಜಾಹೀರಾತು ವೆಚ್ಚ ಅಥವಾ ಶುಲ್ಕವಿಲ್ಲದೆ ನಿರ್ವಹಿಸಲಾಗಿದೆ.',
    en: 'Self-hosted and maintained with zero hosting costs.',
  },
  footerRights: {
    kn: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಸಮುದಾಯಕ್ಕೆ ಮುಕ್ತವಾಗಿ ನೀಡಲಾಗಿದೆ.',
    en: 'Free and open to the community.',
  },
};

/**
 * Returns translated string for a given key and language.
 * Falls back to Kannada if missing in English or vice-versa.
 */
export function t(key: string, lang: Language = 'kn'): string {
  const item = translations[key];
  if (!item) return key;
  return item[lang] || item['kn'] || key;
}
