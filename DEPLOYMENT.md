# Deployment Guide

This guide explains how to deploy your **TechStore** application to GitHub and Vercel.

> [!WARNING]
> **Critical Architectural Limitations on Vercel/Serverless**
>
> You requested an app using **Local JSON Data** and **Local File Uploads**. While this works perfectly on your local computer, **it will have issues on Vercel**:
>
> 1.  **File Uploads**: Vercel has a "Read-Only" file system. You **cannot** save uploaded images to `backend/uploads` directly on Vercel. They will fail or disappear immediately.
> 2.  **Data Persistence**: Your `items.json` file will "reset" to its original state every time the app redeploys or the server restarts. New items added via the website will be lost.
>
> **Solution for Production**:
> To fix this for a real live site, you would typically need:
> -   **Database**: MongoDB, PostgreSQL, etc. (instead of `items.json`)
> -   **Storage**: AWS S3, Cloudinary, or Vercel Blob (instead of `backend/uploads`)
>
> However, for this submission, you can deploy the current code to demonstrate the *functionality*, but be aware that data won't persist.

---

## 1. Prepare for GitHub

Ensure your project ignores unnecessary files.

1.  **Check `.gitignore`**:
    Make sure it contains:
    ```
    node_modules
    .next
    backend/uploads
    .env
    ```

2.  **Push to GitHub**:
    Run these commands in your VS Code terminal:

    ```bash
    git init
    git add .
    git commit -m "Initial commit - TechStore Complete"

    # Replace URL_BELOW with your actual new repository URL from GitHub
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

## 2. Deploy to Vercel

Since your project has a **custom Express backend** and a **Next.js frontend**, deploying to Vercel directly requires special configuration because Vercel is designed primarily for Next.js.

### Option A: Standard Deployment (Frontend Only)
If you deploy just the Next.js app, the backend server won't handle requests unless also deployed.

### Option B: Deploying Both (Requires Configuration)
To deploy the Express backend alongside Next.js on Vercel, we need to configure `vercel.json` to turn the Express app into a Serverless Function.

1.  **Create `vercel.json`** in the root directory:
    ```json
    {
      "version": 2,
      "rewrites": [
        { "source": "/api/(.*)", "destination": "/backend/server.js" }
      ],
      "functions": {
        "backend/server.js": { "memory": 1024, "maxDuration": 10 }
      }
    }
    ```
    *Note: You might need to modify `server.js` to handle serverless environments (exporting the app) if standard `app.listen` doesn't work as expected in Vercel's specific serverless wrapper.*

### Option C: The Recommended "Easy" Way (Two Services)
1.  **Frontend**: Deploy the Next.js app to **Vercel**.
2.  **Backend**: Deploy the server to **Render** or **Railway** (services that support long-running Node.js servers).
    *   Change the API URL in your frontend code (`http://localhost:5000`) to the live URL of your backend.

---

## Submission Checklist

- [ ] GitHub Repository Created & Code Pushed.
- [ ] README.md includes setup instructions.
- [ ] Video/Walkthrough created (since the live site might reset data).
