# Deploy to Vercel - Quick Guide

## Method 1: Deploy via Vercel Website (Recommended - Easiest)

1. **Go to Vercel**: Visit https://vercel.com
2. **Sign up/Login**: Create an account or login (you can use GitHub, GitLab, or email)
3. **Create New Project**:
   - Click "Add New Project" or "New Project"
   - If you have GitHub connected, you can import from there
   - OR use "Deploy" button and drag your `portfolio` folder
4. **Configure**:
   - Framework Preset: Vite (should auto-detect)
   - Root Directory: `./` (current directory)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
5. **Deploy**: Click "Deploy"
6. **Get Your Link**: After deployment (takes 1-2 minutes), you'll get a live URL!

## Method 2: Deploy via CLI

1. **Login to Vercel**:
   ```bash
   cd C:\Users\sapta\portfolio
   vercel login
   ```
   - This will open a browser for authentication
   - Follow the prompts

2. **Deploy**:
   ```bash
   vercel --prod
   ```
   - This will deploy to production
   - You'll get a live URL immediately

## Method 3: Deploy via GitHub (Best for Updates)

1. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., "portfolio")
   - Don't initialize with README

2. **Push Your Code**:
   ```bash
   cd C:\Users\sapta\portfolio
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Connect to Vercel**:
   - Go to Vercel dashboard
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

## Your Portfolio is Ready!

After deployment, you'll get a URL like:
- `https://portfolio-xxxxx.vercel.app`
- Or a custom domain if you set one up

The build is already complete in the `dist` folder, so deployment will be fast!
