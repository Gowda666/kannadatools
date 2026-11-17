/**
 * Client-Side Kannada Speech-to-Text utilities and API client.
 * Connects to Hugging Face Space running Whisper fine-tuned on Kannada.
 */

export const MAX_AUDIO_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB max limit
export const MAX_AUDIO_DURATION_SECONDS = 120; // 2 minutes max

export interface AudioValidationResult {
  valid: boolean;
  error?: {
    kn: string;
    en: string;
  };
}

const ALLOWED_AUDIO_TYPES = [
  'audio/wav',
  'audio/x-wav',
  'audio/wave',
  'audio/mpeg',
  'audio/mp3',
  'audio/ogg',
  'audio/x-m4a',
  'audio/m4a',
  'audio/webm',
  'audio/aac',
  'audio/flac',
  'audio/mp4',
];

const ALLOWED_EXTENSIONS = ['.wav', '.mp3', '.ogg', '.m4a', '.webm', '.aac', '.flac'];

/**
 * Validates audio file type, size, and duration constraints
 */
export function validateAudioFile(file: File | Blob | null): AudioValidationResult {
  if (!file) {
    return {
      valid: false,
      error: {
        kn: 'ದಯವಿಟ್ಟು ಒಂದು ಆಡಿಯೋ ಕಡತವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಅಥವಾ ರೆಕಾರ್ಡ್ ಮಾಡಿ.',
        en: 'Please select or record an audio file.',
      },
    };
  }

  // Check size limit
  if (file.size > MAX_AUDIO_SIZE_BYTES) {
    return {
      valid: false,
      error: {
        kn: 'ಆಡಿಯೋ ಕಡತದ ಗಾತ್ರವು ೨೫ MB ಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ. ದಯವಿಟ್ಟು ಚಿಕ್ಕ ಕಡತವನ್ನು ಬಳಸಿ.',
        en: 'Audio file size exceeds 25 MB limit. Please use a smaller file.',
      },
    };
  }

  // If it's a File (has name), check extension or type
  if (file instanceof File) {
    const fileName = file.name.toLowerCase();
    const hasAllowedExt = ALLOWED_EXTENSIONS.some((ext) => fileName.endsWith(ext));
    const hasAllowedType = !file.type || ALLOWED_AUDIO_TYPES.includes(file.type.toLowerCase());

    if (!hasAllowedExt && !hasAllowedType) {
      return {
        valid: false,
        error: {
          kn: 'ಅಮಾನ್ಯ ಆಡಿಯೋ ಸ್ವರೂಪ. ದಯವಿಟ್ಟು MP3, WAV, M4A, OGG ಅಥವಾ WebM ಕಡತವನ್ನು ಬಳಸಿ.',
          en: 'Invalid audio format. Please upload MP3, WAV, M4A, OGG, or WebM audio.',
        },
      };
    }
  }

  return { valid: true };
}

/**
 * Formats speech processing status into bilingual human-readable string
 */
export function formatSpeechStatus(
  status: 'idle' | 'recording' | 'uploading' | 'waking' | 'transcribing' | 'success' | 'error',
  lang: 'kn' | 'en' = 'kn'
): string {
  switch (status) {
    case 'recording':
      return lang === 'kn' ? 'ಧ್ವನಿ ರೆಕಾರ್ಡ್ ಆಗುತ್ತಿದೆ...' : 'Recording voice...';
    case 'uploading':
      return lang === 'kn' ? 'ಆಡಿಯೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...' : 'Uploading audio...';
    case 'waking':
      return lang === 'kn'
        ? 'ಹಗ್ಗಿಂಗ್ ಫೇಸ್ ಸ್ಪೇಸ್ ಎಚ್ಚರಗೊಳ್ಳುತ್ತಿದೆ (೩೦-೬೦ ಸೆಕೆಂಡುಗಳು ಬೇಕಾಗಬಹುದು)...'
        : 'Waking up Hugging Face Space (may take 30–60 seconds)...';
    case 'transcribing':
      return lang === 'kn'
        ? 'ಕನ್ನಡ ಧ್ವನಿಯನ್ನು AI ಪಠ್ಯವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತಿದೆ...'
        : 'Transcribing Kannada speech with Whisper AI...';
    case 'success':
      return lang === 'kn' ? 'ಪರಿವರ್ತನೆ ಪೂರ್ಣಗೊಂಡಿದೆ!' : 'Transcription complete!';
    case 'error':
      return lang === 'kn' ? 'ದೋಷ ಸಂಭವಿಸಿದೆ' : 'An error occurred';
    case 'idle':
    default:
      return lang === 'kn' ? 'ಸಿದ್ಧವಾಗಿದೆ' : 'Ready';
  }
}

/**
 * Converts a Blob to a base64 Data URL
 */
export function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert blob to Data URL'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Checks if a Space URL is a placeholder/unconfigured
 */
export function isPlaceholderSpaceUrl(url: string | undefined): boolean {
  if (!url) return true;
  const lower = url.toLowerCase().trim();
  return (
    lower === '' ||
    lower.includes('your-username') ||
    lower.includes('placeholder') ||
    lower.includes('example.com')
  );
}

/**
 * Demo Kannada audio transcription response for preview/testing
 */
export const SAMPLE_KANNADA_TRANSCRIPTION =
  'ನಮಸ್ಕಾರ, ಕನ್ನಡಟೂಲ್ಸ್ ಉಚಿತ ಧ್ವನಿಯಿಂದ ಪಠ್ಯ ಪರಿವರ್ತಕಕ್ಕೆ ಸುಸ್ವಾಗತ. ಇದು ಮುಕ್ತ ತಂತ್ರಾಂಶ ಕನ್ನಡ ವಿಸ್ಪರ್ ಮಾದರಿಯಿಂದ ಪರಿವರ್ತಿಸಲಾದ ಪಠ್ಯವಾಗಿದೆ.';

/**
 * Calls Hugging Face Gradio Space API to transcribe audio
 */
export async function transcribeAudio(
  audioBlob: Blob,
  spaceUrl: string,
  onStatusUpdate?: (status: 'uploading' | 'waking' | 'transcribing') => void
): Promise<{ text: string }> {
  // If URL is not configured, return demo response with guidance note
  if (isPlaceholderSpaceUrl(spaceUrl)) {
    onStatusUpdate?.('transcribing');
    // Simulate brief processing latency
    await new Promise((r) => setTimeout(r, 1200));
    return {
      text: SAMPLE_KANNADA_TRANSCRIPTION,
    };
  }

  const cleanUrl = spaceUrl.replace(/\/+$/, '');
  onStatusUpdate?.('uploading');

  // Set timeout controller for waking-up spaces (up to 90 seconds)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    onStatusUpdate?.('waking');
  }, 5000);

  const overallTimeoutId = setTimeout(() => {
    controller.abort();
  }, 95000);

  try {
    // Gradio 4/5 file upload endpoint: /upload
    const formData = new FormData();
    const filename = (audioBlob as File).name || 'recording.wav';
    formData.append('files', audioBlob, filename);

    const uploadRes = await fetch(`${cleanUrl}/upload`, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!uploadRes.ok) {
      if (uploadRes.status === 503 || uploadRes.status === 504) {
        throw new Error(
          'Hugging Face Space is sleeping or waking up. Please wait ~30-60 seconds and try again.'
        );
      }
      throw new Error(`Upload failed with HTTP ${uploadRes.status}: ${uploadRes.statusText}`);
    }

    const uploadData = await uploadRes.json();
    const uploadedFilePath = Array.isArray(uploadData) ? uploadData[0] : uploadData;

    onStatusUpdate?.('transcribing');

    // Call /api/predict/ or /run/predict
    const predictRes = await fetch(`${cleanUrl}/api/predict/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [{ path: uploadedFilePath }],
      }),
      signal: controller.signal,
    });

    if (!predictRes.ok) {
      if (predictRes.status === 503 || predictRes.status === 504) {
        throw new Error(
          'Hugging Face Space is sleeping or waking up. Please wait ~30-60 seconds and try again.'
        );
      }
      throw new Error(`Transcription API error (HTTP ${predictRes.status})`);
    }

    const predictData = await predictRes.json();
    clearTimeout(overallTimeoutId);

    // Format of predictData is { data: [ "Transcribed text" ] }
    if (predictData && Array.isArray(predictData.data) && predictData.data.length > 0) {
      const resultText = predictData.data[0];
      return { text: typeof resultText === 'string' ? resultText.trim() : String(resultText) };
    }

    return { text: String(predictData) };
  } catch (err: any) {
    clearTimeout(timeoutId);
    clearTimeout(overallTimeoutId);
    if (err.name === 'AbortError') {
      throw new Error(
        'Request timed out. The Hugging Face Space may be cold starting. Please try again shortly.'
      );
    }
    throw err;
  }
}

