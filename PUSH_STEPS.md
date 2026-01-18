# Push Your Code to GitHub - Quick Steps

I can't push without your GitHub credentials, but here's the FASTEST way:

## ⚡ EASIEST METHOD: Use GitHub Desktop

1. Download: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. File → Add Local Repository → Select `C:\Users\sapta\portfolio`
4. Click "Publish repository"
5. DONE! ✅

## 🔑 OR Use Personal Access Token

1. **Create Token:**
   - Go to: https://github.com/settings/tokens/new
   - Name: "Portfolio Push"
   - Expiration: "No expiration" (or 90 days)
   - ✅ Check "repo" checkbox
   - Click "Generate token" (green button at bottom)
   - **COPY THE TOKEN** (starts with `ghp_`)

2. **Paste token here and I'll push for you!**
   
   OR run this command yourself:
   ```
   cd C:\Users\sapta\portfolio
   git push -u origin main
   ```
   When asked:
   - Username: `SAPTAK99`
   - Password: **paste your token** (not your GitHub password!)

---

**Which method do you prefer?**
- GitHub Desktop = Easiest (no commands)
- Token = Fast (I can do it if you paste token here)
