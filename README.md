# Deploy CV to GitHub Pages

This project is a React-based CV application. Follow these instructions to deploy it to GitHub Pages.

## Prerequisites

- [Git](https://git-scm.com/) installed
- A GitHub account

## Steps to Deploy

1.  **Initialize Git Repository (Already done locally)**
    
    If you haven't already:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a Blank Repository on GitHub**
    
    - Go to [github.com/new](https://github.com/new)
    - Name your repository (e.g., `my_cv`)
    - Do NOT initialize with README, .gitignore, or license (we have them already)

3.  **Push to GitHub**
    
    Replace `USER` with your GitHub username and `REPO` with your repository name:
    ```bash
    git remote add origin https://github.com/USER/REPO.git
    git branch -M main
    git push -u origin main
    ```

4.  **Deploy to GitHub Pages**
    
    Run the following command to deploy:
    ```bash
    npm run deploy
    ```
    
    This command will build the project and push the `dist` folder to the `gh-pages` branch.

5.  **Enable GitHub Pages in Settings**
    
    - Go to your repository **Settings** > **Pages**
    - Under **Build and deployment**, ensure **Source** is set to **Deploy from a branch**
    - Select **Branch**: `gh-pages` and folder: `/(root)`
    - Click **Save**

Your site will be live at `https://USER.github.io/REPO/`.

## Local Development

To run the project locally:
```bash
npm run dev
```
