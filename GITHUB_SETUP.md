# How to Add This Project to GitHub

## ✅ EASIEST METHOD: GitHub Desktop (Recommended)

1. **Download GitHub Desktop**:
   - Go to: https://desktop.github.com/
   - Download and install the Windows version
   - Sign in with your GitHub account (create one at github.com if needed)

2. **Publish Your Repository**:
   - Open GitHub Desktop
   - Click **File** → **Add Local Repository**
   - Click **Choose...** and select your `C:\Users\deves\GNG` folder
   - Click **Add Repository**
   - You'll see your files listed as "Uncommitted changes"
   - Click **"Publish repository"** button at the top
   - Choose a name for your repository (e.g., "grain-and-gosips")
   - Check "Keep this code private" if you want it private
   - Click **Publish Repository**

That's it! Your code will be on GitHub.

---

## Alternative Method: Install Git Command Line

If you prefer using command line:

1. **Download Git for Windows**:
   - Go to: https://git-scm.com/download/win
   - Download the installer (64-bit Windows)
   - Run the installer
   - **IMPORTANT**: During installation, on the "Adjusting PATH environment" screen, select:
     **"Git from the command line and also from 3rd-party software"**
   - Complete the installation

2. **Restart your terminal/PowerShell** (close and reopen)

3. **Then run these commands**:
```powershell
cd C:\Users\deves\GNG
git init
git add .
git commit -m "Initial commit: Grain & Gosips menu website"
```

4. **Create a repository on GitHub**:
   - Go to github.com and click the "+" icon → "New repository"
   - Name it (e.g., "grain-and-gosips")
   - **Don't** initialize with README (you already have one)
   - Click "Create repository"

5. **Connect and push**:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Method 3: Using VS Code (if you have it)

1. Open VS Code
2. Open the folder: `C:\Users\deves\GNG`
3. Click the **Source Control** icon (left sidebar, looks like branches)
4. Click **"Initialize Repository"**
5. Click the **+** next to "Changes" to stage all files
6. Type a commit message: "Initial commit"
7. Click the checkmark (✓) to commit
8. Click **"Publish to GitHub"** button
9. Sign in to GitHub when prompted
10. Choose public/private and repository name
11. Click **Publish**

---

**Recommendation**: Use **GitHub Desktop** - it's the easiest and most user-friendly!

