# Deployment Guide

## Local Development
The portfolio is currently running at http://localhost:5173

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
- Go to [Netlify](https://www.netlify.com/)
- Drag and drop the `dist` folder
- Or connect your GitHub repository for automatic deployments

## Deploy to Vercel

1. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Install gh-pages:
```bash
npm install -D gh-pages
```

3. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure
```
Personal_Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Features Implemented
✅ Dark theme with modern tech style
✅ Fully responsive (mobile + laptop)
✅ Smooth animations and transitions
✅ Hero section with name, title, tagline, and CTA buttons
✅ About Me section
✅ Skills section with categories
✅ Projects section with 4 projects and filtering
✅ Experience/Internship section
✅ Contact section with form
✅ Download resume button
✅ Hover effects on cards
✅ Smooth scrolling
✅ SEO-friendly meta tags
✅ Navigation with mobile menu
