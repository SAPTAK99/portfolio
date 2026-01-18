# Portfolio Website - React Version

A modern, responsive portfolio website built with React and Vite.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173` (or another port if 5173 is busy)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Main App component
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles
│   └── App.css             # App styles
├── index.html              # HTML template
├── package.json            # Dependencies
└── vite.config.js          # Vite configuration
```

## 🎨 Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Change "Your Name" to your actual name
- Update the subtitle and description

**About Section** (`src/components/About.jsx`):
- Edit the about text paragraphs
- Update the stats (Projects, Years Experience, Happy Clients)

**Contact Section** (`src/components/Contact.jsx`):
- Update email, phone number
- Add your LinkedIn, GitHub, and other social links

### 2. Update Skills

Edit `src/components/Skills.jsx` - modify the `skills` array:
```javascript
const skills = [
  {
    icon: '💻',
    title: 'Frontend',
    description: 'Your skills here'
  },
  // Add more skills...
]
```

### 3. Update Projects

Edit `src/components/Projects.jsx` - modify the `projects` array:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    demoLink: 'https://your-demo.com',
    githubLink: 'https://github.com/your-repo'
  },
  // Add more projects...
]
```

### 4. Change Colors

Edit `src/index.css` - modify the CSS variables:
```css
:root {
  --primary-color: #667eea;    /* Change to your primary color */
  --secondary-color: #764ba2;   /* Change to your secondary color */
  /* ... other variables */
}
```

### 5. Add Your Photo

Replace the SVG placeholder in `src/components/Hero.jsx`:
```jsx
<div className="hero-image">
  <img src="/your-photo.jpg" alt="Your Name" className="image-placeholder" />
</div>
```

And update the CSS in `src/components/Hero.css`:
```css
.image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover; /* Add this */
}
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Scroll animations
- ✅ Interactive contact form
- ✅ Modern gradient design
- ✅ Mobile-friendly hamburger menu
- ✅ Active section highlighting

## 🐛 Troubleshooting

**Port already in use?**
- Vite will automatically use the next available port
- Check the terminal output for the actual URL

**Styles not loading?**
- Make sure all CSS files are imported in their respective components
- Check browser console for any errors

**Build errors?**
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## 📝 Notes

- The contact form currently shows an alert on submit. To make it functional, you'll need to:
  1. Set up a backend API endpoint
  2. Use a service like Formspree, EmailJS, or similar
  3. Update the `handleSubmit` function in `Contact.jsx`

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy to [Netlify](https://netlify.com)

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

Made with ❤️ using React and Vite
