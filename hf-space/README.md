---
title: Kannada Speech to Text (ASR)
emoji: 🎙️
colorFrom: red
colorTo: yellow
sdk: gradio
sdk_version: 4.44.0
app_file: app.py
pinned: false
license: mit
---

# Kannada Speech-to-Text API (ಕನ್ನಡ ಧ್ವನಿಯಿಂದ ಪಠ್ಯ)

Free, open-source Kannada Automatic Speech Recognition (ASR) backend for **[KannadaTools](https://kannadatools.pages.dev)**.
Runs on Hugging Face Spaces with **zero hosting cost** using the free CPU Basic tier.

---

## 🚀 Model Details
- **Primary Model**: [`vasista22/whisper-kannada-base`](https://huggingface.co/vasista22/whisper-kannada-base)
  - Fine-tuned on Mozilla Common Voice Kannada audio dataset
  - Native Kannada Unicode text output
  - Robust to accents and conversational speech
- **Fallback**: `openai/whisper-tiny` (used automatically if the base model is unavailable)
- **Max Audio Length**: 2 minutes (120 seconds) per transcription request

---

## 🛠️ Free Deployment Guide on Hugging Face Spaces

You can host this backend for **free ($0/month)** on Hugging Face:

### Step 1: Create a Free Hugging Face Space
1. Sign in or register at [huggingface.co](https://huggingface.co).
2. Visit [huggingface.co/new-space](https://huggingface.co/new-space).
3. Fill in the details:
   - **Space name**: `kannada-speech-to-text` (or your choice)
   - **License**: `mit`
   - **Space SDK**: Select **Gradio**
   - **Space hardware**: Select **CPU Basic • 2 vCPU • 16GB • Free**
   - **Visibility**: Public (required for free API access)
4. Click **Create Space**.

### Step 2: Upload Space Files
In your new Space repository, upload the following files from this `hf-space/` folder:
- `app.py`
- `requirements.txt`
- `README.md` (this file, including the YAML frontmatter at the top)

Alternatively, clone and push via Git:
```bash
git clone https://huggingface.co/spaces/<YOUR-USERNAME>/kannada-speech-to-text
cp hf-space/* kannada-speech-to-text/
cd kannada-speech-to-text
git add .
git commit -m "Deploy Kannada Whisper ASR Space"
git push
```

### Step 3: Wait for Build & Verify
1. Hugging Face will automatically install packages and download the Whisper model (~290 MB).
2. Once the status shows **Running**, test the web UI directly in your browser.
3. Your public Space URL will be:
   `https://<YOUR-USERNAME>-kannada-speech-to-text.hf.space`

### Step 4: Connect to KannadaTools Frontend
Set the Space URL in your KannadaTools environment:

In `.env`:
```env
PUBLIC_HF_SPACE_URL=https://<YOUR-USERNAME>-kannada-speech-to-text.hf.space
```

Or in **Cloudflare Pages Dashboard**:
1. Go to **Settings** > **Environment variables**.
2. Add variable `PUBLIC_HF_SPACE_URL` with your Space URL.
3. Trigger a redeploy.

---

## 💻 Running Locally (Optional)

To test or run locally on your own machine:

```bash
cd hf-space
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python app.py
```
Then open `http://localhost:7860` in your browser.

---

## ⚠️ Notes on Free-Tier Limitations
- **Cold Start / Sleeping**: Free Spaces may pause (sleep) after 48 hours of inactivity. When a user sends a request to a sleeping Space, it will take **30–60 seconds** to wake up.
- **Queueing**: If multiple users transcribe audio simultaneously, requests are queued automatically by Gradio.
- **Audio Duration**: Audio longer than 2 minutes should be trimmed before submitting to prevent CPU timeouts.

---

## 📄 License
MIT License. Free for open-source and commercial use.

