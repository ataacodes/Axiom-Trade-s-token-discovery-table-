# Complete Setup and Deployment Guide

This guide will walk you through setting up, running, and deploying the Axiom Token Discovery Table application.

## 📋 Table of Contents

1. [Initial Setup](#initial-setup)
2. [Running the Application](#running-the-application)
3. [GitHub Setup](#github-setup)
4. [Vercel Deployment](#vercel-deployment)
5. [Creating a Demo Video](#creating-a-demo-video)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Initial Setup

### Step 1: Verify Prerequisites

Make sure you have the following installed:

```bash
# Check Node.js version (should be 18.x or higher)
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

If any are missing, install them:
- **Node.js**: Download from [nodejs.org](https://nodejs.org/)
- **Git**: Download from [git-scm.com](https://git-scm.com/)

### Step 2: Navigate to Project Directory

```bash
cd /Users/ahsan.arif/Desktop/eterna_FE
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Query
- Radix UI components
- And more...

**Expected time**: 2-5 minutes depending on your internet connection.

---

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:3000`

**What you should see:**
- Terminal output showing "Ready" message
- Browser automatically opens (or navigate manually)
- Token discovery table with loading skeleton
- After ~1 second, tokens appear with real-time updates

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Run Production Build Locally

```bash
npm run start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

---

## 📦 GitHub Setup

### Step 1: Initialize Git Repository

If Git is not already initialized:

```bash
git init
```

### Step 2: Create .gitignore (Already Created)

The `.gitignore` file is already set up to exclude:
- `node_modules/`
- `.next/`
- `.env.local`
- Build files
- And more...

### Step 3: Stage All Files

```bash
git add .
```

### Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Axiom Token Discovery Table

- Next.js 14 with App Router
- TypeScript strict mode
- Redux Toolkit for state management
- React Query for data fetching
- Real-time WebSocket mock
- Atomic architecture
- Responsive design (320px+)
- Comprehensive error handling"
```

### Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in:
   - **Repository name**: `axiom-token-discovery` (or your preferred name)
   - **Description**: "Pixel-perfect replica of Axiom Trade's token discovery table"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 6: Connect Local Repository to GitHub

GitHub will show you commands. Use these:

```bash
# Add remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you get authentication errors:**
- Use a Personal Access Token instead of password
- Generate one at: GitHub → Settings → Developer settings → Personal access tokens
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

### Step 7: Verify on GitHub

1. Refresh your GitHub repository page
2. You should see all your files
3. The README.md should be visible

### Future Commits

When you make changes:

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## 🌐 Vercel Deployment

### Method 1: Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser for authentication.

#### Step 3: Deploy

From your project directory:

```bash
vercel
```

**Follow the prompts:**
1. **Set up and deploy?** → Yes
2. **Which scope?** → Select your account
3. **Link to existing project?** → No (first time)
4. **Project name?** → `axiom-token-discovery` (or press Enter for default)
5. **Directory?** → `./` (press Enter)
6. **Override settings?** → No (press Enter)

**First deployment** will be a preview. You'll get a URL like:
`https://axiom-token-discovery-xxxxx.vercel.app`

#### Step 4: Deploy to Production

```bash
vercel --prod
```

This creates your production URL:
`https://axiom-token-discovery.vercel.app`

### Method 2: GitHub Integration (Easier)

#### Step 1: Push Code to GitHub

Follow the GitHub setup steps above first.

#### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Click **"Add New Project"**
4. Click **"Import Git Repository"**
5. Select your GitHub repository
6. Click **"Import"**

#### Step 3: Configure Project

Vercel auto-detects Next.js, so:
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

#### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes
3. Your app will be live at: `https://your-project-name.vercel.app`

#### Step 5: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Automatic Deployments

With GitHub integration:
- **Every push to `main`** → Production deployment
- **Pull requests** → Preview deployments
- **All automatic!**

---

## 🎥 Creating a Demo Video

### Requirements
- **Length**: 1-2 minutes
- **Platform**: YouTube (public)
- **Content**: Show all functionality

### What to Show

1. **Introduction (10 seconds)**
   - "This is the Axiom Token Discovery Table"
   - Show the main interface

2. **Core Features (60 seconds)**
   - **Token Table**: Scroll through tokens
   - **Sorting**: Click column headers to sort
   - **Filtering**: Click category buttons (New Pairs, Final Stretch, Migrated)
   - **Search**: Type in search box
   - **Real-time Updates**: Point out price changes with color transitions
   - **Hover Effects**: Hover over rows
   - **Popover**: Click info icon to show popover
   - **Modal**: Click a row to open modal
   - **Tooltip**: Hover over external link icon
   - **Loading States**: Refresh to show skeleton loader
   - **Responsive**: Resize browser or use mobile view

3. **Closing (10 seconds)**
   - Show GitHub and Vercel links
   - "Built with Next.js 14, TypeScript, and Tailwind CSS"

### Recording Tools

**Option 1: Loom** (Easiest)
1. Install [Loom](https://www.loom.com/)
2. Click record
3. Show features
4. Upload directly to YouTube

**Option 2: OBS Studio** (Free, Professional)
1. Download [OBS Studio](https://obsproject.com/)
2. Set up screen recording
3. Record your demo
4. Edit if needed
5. Upload to YouTube

**Option 3: QuickTime** (Mac)
1. Open QuickTime Player
2. File → New Screen Recording
3. Record
4. Export and upload to YouTube

### Upload to YouTube

1. Go to [youtube.com](https://youtube.com)
2. Click **"Create"** → **"Upload video"**
3. Select your video file
4. Fill in:
   - **Title**: "Axiom Token Discovery Table - Demo"
   - **Description**: Include GitHub and Vercel links
   - **Visibility**: Public
5. Click **"Publish"**
6. Copy the video URL
7. Add to README.md

### Add Video to README

Add this to your README.md:

```markdown
## 🎥 Demo Video

[![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
```

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try again
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: TypeScript errors

**Solution:**
```bash
# Check for errors
npm run type-check

# If errors persist, try:
rm -rf .next
npm run build
```

### Issue: Build fails on Vercel

**Common causes:**
1. **Node version mismatch**
   - Add `engines` to package.json:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

2. **Missing dependencies**
   - Ensure all dependencies are in `dependencies`, not `devDependencies`

3. **Environment variables**
   - Add them in Vercel Dashboard → Settings → Environment Variables

### Issue: Git push fails

**Solution:**
```bash
# Check remote
git remote -v

# If wrong, update:
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Pull first (if repo exists)
git pull origin main --allow-unrelated-histories

# Then push
git push -u origin main
```

### Issue: Vercel deployment fails

**Solution:**
1. Check build logs in Vercel Dashboard
2. Common issues:
   - TypeScript errors → Fix locally first
   - Missing environment variables → Add in Vercel
   - Build timeout → Optimize build process

---

## ✅ Final Checklist

Before submitting:

- [ ] Application runs locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No linting errors (`npm run lint`)
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Vercel URL is accessible
- [ ] Demo video created and uploaded to YouTube
- [ ] Video URL added to README
- [ ] README includes all setup instructions
- [ ] Responsive design tested (320px, 768px, 1024px, 1920px)

---

## 📞 Need Help?

If you encounter issues not covered here:

1. Check the main README.md
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
4. Review GitHub documentation: [docs.github.com](https://docs.github.com)

---

**Good luck with your deployment! 🚀**

