# 🚀 KannadaTools Deployment Guide (Zero-Cost Hosting)

> Complete, step-by-step instructions to host **KannadaTools** permanently for **₹0 / $0 per month** using **Cloudflare Pages** and **Hugging Face Spaces**.

---

## 💰 Zero-Cost Architecture Overview

| Component | Service | Cost | What it does |
| :--- | :--- | :--- | :--- |
| **Frontend & Tools** | **Cloudflare Pages** | **$0 / free** | Fast static site delivery, unlimited bandwidth, global edge CDN, automatic SSL. |
| **Speech ASR Backend** | **Hugging Face Spaces** | **$0 / free** | Hosts the Kannada Whisper AI model on free CPU Basic tier (2 vCPU, 16GB RAM). |
| **Contact & Feedback Forms** | **Formspree / Web3Forms** | **$0 / free** | Free tier form handler for bug reports, custom tool requests, and newsletter signups. |

---

## 📦 Part 1: Push Project to GitHub

### Step 1: Initialize Git Repository
In PowerShell, navigate to the project directory:

```powershell
cd "C:\Users\Pavan\OneDrive\Tài liệu\Kannada"
```

Initialize git and review status:
```bash
git init
git add .
git commit -m "feat: complete KannadaTools release 1.0 (all 4 tools, bilingual i18n, SEO)"
```

> **Note**: Verify that `node_modules/` and `dist/` are ignored by `.gitignore`.

### Step 2: Create a New GitHub Repository
1. Open [github.com/new](https://github.com/new).
2. Set **Repository name**: `kannadatools` (or your preferred name).
3. Choose **Public** (recommended for open source).
4. Leave *Initialize this repository with a README* **unchecked**.
5. Click **Create repository**.

### Step 3: Push Local Code to GitHub
Link and push your local commits:

```bash
git remote add origin https://github.com/Gowda666/kannadatools.git
git branch -M main
git push -u origin main
```

---

## ☁️ Part 2: Deploy Frontend on Cloudflare Pages

### Step 1: Create Cloudflare Account
1. Visit [cloudflare.com](https://dash.cloudflare.com/sign-up) and create a free account.
2. In the left navigation, click **Workers & Pages**.
3. Click the **Create application** button, then select the **Pages** tab.
4. Click **Connect to Git** and authorize your GitHub account.

### Step 2: Select Repository & Build Settings
1. Select your `kannadatools` repository and click **Begin setup**.
2. Configure the build parameters:
   - **Project name**: `kannadatools`
   - **Production branch**: `main`
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

### Step 3: Set Environment Variables
Under **Environment variables (advanced)**, add:

| Variable Name | Value | Purpose |
| :--- | :--- | :--- |
| `NODE_VERSION` | `20` | Ensures modern Node.js runtime for Astro 5 |
| `ASTRO_TELEMETRY_DISABLED` | `1` | Disables telemetry for clean CI/CD builds |
| `PUBLIC_HF_SPACE_URL` | `https://<YOUR-USERNAME>-kannada-speech-to-text.hf.space` | Connects the Speech-to-Text tool to your backend |

### Step 4: Deploy
Click **Save and Deploy**. Cloudflare Pages will build the site in ~45 seconds.  
Your site is now live at:  
👉 **`https://kannadatools.pages.dev`**

*(Optional)* You can connect a custom domain (e.g. `kannadatools.org`) under **Custom domains** with free automated SSL certificate generation.

---

## 🎙️ Part 3: Deploy Hugging Face Speech-to-Text Backend

### Step 1: Create a Free Hugging Face Space
1. Sign in or register at [huggingface.co](https://huggingface.co).
2. Navigate to [huggingface.co/new-space](https://huggingface.co/new-space).
3. Set the configuration:
   - **Space Name**: `kannada-speech-to-text`
   - **License**: `mit`
   - **Space SDK**: **Gradio**
   - **Space hardware**: **CPU Basic • 2 vCPU • 16GB • Free**
   - **Space visibility**: **Public**
4. Click **Create Space**.

### Step 2: Upload Files from `hf-space/`
Upload the three files located in your local `hf-space/` directory:
- `hf-space/app.py`
- `hf-space/requirements.txt`
- `hf-space/README.md`

You can upload them directly in the Hugging Face web interface via **Files** > **Add file** > **Upload files**, or clone the space using Git:

```bash
git clone https://huggingface.co/spaces/<YOUR-USERNAME>/kannada-speech-to-text
cp hf-space/* kannada-speech-to-text/
cd kannada-speech-to-text
git add .
git commit -m "Deploy Kannada Whisper ASR API"
git push
```

### Step 3: Wait for Build
1. Hugging Face will install dependencies and download the model (`vasista22/whisper-kannada-base`).
2. Once the status badge displays **Running**, your backend is active!
3. Your API endpoint URL will be:  
   `https://<YOUR-USERNAME>-kannada-speech-to-text.hf.space`

### Step 4: Link Space URL to Cloudflare Pages
1. Return to your Cloudflare Pages dashboard for `kannadatools`.
2. Go to **Settings** > **Environment variables**.
3. Set `PUBLIC_HF_SPACE_URL` to your live Space URL.
4. Go to **Deployments** and click **Retry deployment** (or trigger a new build) to activate!

---

## 📬 Part 4: Connect Free Forms (Formspree / Web3Forms)

The codebase is pre-configured with placeholder form endpoints. To receive emails when users submit contact inquiries, mistake reports, custom tool requests, or newsletter signups:

1. Register for a free account at [formspree.io](https://formspree.io) or [web3forms.com](https://web3forms.com) ($0/month, 50 free submissions).
2. Create your forms and copy your form endpoints.
3. Replace the placeholder URLs in these files:
   - **Contact Form**: [`src/pages/contact.astro`](file:///c:/Users/Pavan/OneDrive/Tài%20liệu/Kannada/src/pages/contact.astro)
   - **Custom Tool Form**: [`src/pages/request-tool.astro`](file:///c:/Users/Pavan/OneDrive/Tài%20liệu/Kannada/src/pages/request-tool.astro)
   - **Report Mistake Modal**: [`src/components/ReportMistakeModal.astro`](file:///c:/Users/Pavan/OneDrive/Tài%20liệu/Kannada/src/components/ReportMistakeModal.astro)
   - **Newsletter**: [`src/components/NewsletterSignup.astro`](file:///c:/Users/Pavan/OneDrive/Tài%20liệu/Kannada/src/components/NewsletterSignup.astro)

---

## 🔄 Automated Updates

Whenever you make improvements to KannadaTools:
```bash
git add .
git commit -m "feat: add new feature"
git push
```
Cloudflare Pages automatically detects the commit, runs `npm run build`, and updates your live site worldwide within seconds!
