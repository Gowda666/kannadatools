"""
Hugging Face Space: Kannada Speech-to-Text API
Free Gradio application powered by a Kannada-tuned Whisper model.
Zero-cost deployment on Hugging Face Spaces (CPU Basic tier).
"""

import os
import gradio as gr
import torch
from transformers import pipeline

# Use a lightweight, high-accuracy Kannada-tuned Whisper model or whisper-small
# 'vasista22/whisper-kannada-base' is specifically fine-tuned on the Kannada Common Voice dataset
MODEL_NAME = "vasista22/whisper-kannada-base"

print(f"Loading Kannada Speech-to-Text model: {MODEL_NAME}...")
device = "cuda:0" if torch.cuda.is_available() else "cpu"

try:
    asr_pipeline = pipeline(
        "automatic-speech-recognition",
        model=MODEL_NAME,
        chunk_length_s=30,
        device=device,
    )
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading {MODEL_NAME}, falling back to openai/whisper-tiny: {e}")
    asr_pipeline = pipeline(
        "automatic-speech-recognition",
        model="openai/whisper-tiny",
        chunk_length_s=30,
        device=device,
    )

def transcribe_kannada_audio(audio_file):
    """
    Transcribes uploaded audio (max 2 minutes) into Kannada script.
    """
    if audio_file is None:
        return "ದಯವಿಟ್ಟು ಆಡಿಯೋ ಕಡತವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. (Please upload an audio file.)"

    try:
        # Run inference
        result = asr_pipeline(
            audio_file,
            generate_kwargs={"language": "kannada", "task": "transcribe"}
        )
        transcription = result.get("text", "").strip()
        if not transcription:
            return "ಯಾವುದೇ ಧ್ವನಿ ಗುರುತಿಸಲಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಆಡಿಯೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ."
        return transcription
    except Exception as err:
        return f"ದೋಷ ಸಂಭವಿಸಿದೆ (Error during transcription): {str(err)}"

# Build clean Gradio interface with API endpoints
demo = gr.Interface(
    fn=transcribe_kannada_audio,
    inputs=gr.Audio(sources=["upload", "microphone"], type="filepath", label="ಕನ್ನಡ ಆಡಿಯೋ (Audio)"),
    outputs=gr.Textbox(label="ಹೊರತೆಗೆದ ಕನ್ನಡ ಪಠ್ಯ (Kannada Transcription)", lines=6),
    title="ಕನ್ನಡ ಧ್ವನಿಯಿಂದ ಪಠ್ಯ | Kannada Speech-to-Text",
    description="ಉಚಿತ ಮತ್ತು ಮುಕ್ತ ತಂತ್ರಾಂಶ ಕನ್ನಡ ಸ್ಪೀಚ್-ಟು-ಟೆಕ್ಸ್ಟ್ API (Free Kannada Whisper ASR). ಗರಿಷ್ಠ ೨ ನಿಮಿಷಗಳ ಆಡಿಯೋ.",
    api_name="predict",
)

if __name__ == "__main__":
    demo.queue().launch()

