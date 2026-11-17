import { describe, it, expect } from 'vitest';
import {
  validateAudioFile,
  formatSpeechStatus,
  isPlaceholderSpaceUrl,
  MAX_AUDIO_SIZE_BYTES,
  SAMPLE_KANNADA_TRANSCRIPTION,
} from './speech';

describe('Speech-to-Text Utilities', () => {
  describe('validateAudioFile', () => {
    it('rejects null or undefined audio input', () => {
      const res = validateAudioFile(null);
      expect(res.valid).toBe(false);
      expect(res.error?.en).toContain('Please select or record');
      expect(res.error?.kn).toContain('ಆಡಿಯೋ');
    });

    it('rejects non-audio file formats like exe, txt, or pdf', () => {
      const fakePdf = new File(['fake content'], 'test.pdf', { type: 'application/pdf' });
      const res = validateAudioFile(fakePdf);
      expect(res.valid).toBe(false);
      expect(res.error?.en).toContain('Invalid audio format');
    });

    it('rejects audio files exceeding 25 MB limit', () => {
      const largeBlob = new Blob([new Uint8Array(MAX_AUDIO_SIZE_BYTES + 500)], {
        type: 'audio/wav',
      });
      const largeFile = new File([largeBlob], 'big.wav', { type: 'audio/wav' });
      const res = validateAudioFile(largeFile);
      expect(res.valid).toBe(false);
      expect(res.error?.en).toContain('25 MB limit');
      expect(res.error?.kn).toContain('೨೫ MB');
    });

    it('accepts valid audio files like WAV, MP3, OGG, and WebM', () => {
      const wav = new File([new Uint8Array(1000)], 'audio.wav', { type: 'audio/wav' });
      const mp3 = new File([new Uint8Array(1000)], 'speech.mp3', { type: 'audio/mpeg' });
      const webm = new File([new Uint8Array(1000)], 'voice.webm', { type: 'audio/webm' });
      const m4a = new File([new Uint8Array(1000)], 'note.m4a', { type: 'audio/m4a' });

      expect(validateAudioFile(wav).valid).toBe(true);
      expect(validateAudioFile(mp3).valid).toBe(true);
      expect(validateAudioFile(webm).valid).toBe(true);
      expect(validateAudioFile(m4a).valid).toBe(true);
    });
  });

  describe('formatSpeechStatus', () => {
    it('formats statuses correctly in Kannada and English', () => {
      expect(formatSpeechStatus('recording', 'kn')).toBe('ಧ್ವನಿ ರೆಕಾರ್ಡ್ ಆಗುತ್ತಿದೆ...');
      expect(formatSpeechStatus('recording', 'en')).toBe('Recording voice...');
      expect(formatSpeechStatus('transcribing', 'kn')).toContain('ಕನ್ನಡ ಧ್ವನಿಯನ್ನು');
      expect(formatSpeechStatus('transcribing', 'en')).toContain('Transcribing');
      expect(formatSpeechStatus('waking', 'kn')).toContain('ಎಚ್ಚರಗೊಳ್ಳುತ್ತಿದೆ');
      expect(formatSpeechStatus('waking', 'en')).toContain('Waking up');
    });
  });

  describe('isPlaceholderSpaceUrl', () => {
    it('detects unconfigured or placeholder Hugging Face Space URLs', () => {
      expect(isPlaceholderSpaceUrl('')).toBe(true);
      expect(isPlaceholderSpaceUrl(undefined)).toBe(true);
      expect(isPlaceholderSpaceUrl('https://your-username-kannada-stt.hf.space')).toBe(true);
      expect(isPlaceholderSpaceUrl('https://example.com/api')).toBe(true);
      expect(isPlaceholderSpaceUrl('https://kannadatools-stt.hf.space')).toBe(false);
    });
  });

  describe('SAMPLE_KANNADA_TRANSCRIPTION', () => {
    it('provides valid Kannada text for demo preview', () => {
      expect(SAMPLE_KANNADA_TRANSCRIPTION).toContain('ನಮಸ್ಕಾರ');
      expect(SAMPLE_KANNADA_TRANSCRIPTION).toContain('ಕನ್ನಡಟೂಲ್ಸ್');
    });
  });
});

