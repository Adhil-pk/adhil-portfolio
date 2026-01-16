# Adhil's Cyber Security Portfolio

A modern, animated portfolio website built with React and Framer Motion, showcasing cyber security expertise and ethical hacking skills.

## Features

- ✨ Smooth animations and transitions using Framer Motion
- 🎨 Glassmorphism design with cyberpunk aesthetics
- 📱 Fully responsive design for all devices
- 🚀 Fast and optimized performance
- 💼 Sections: Home, About, Journey, Skills, Contact
- 🎯 Interactive navigation with smooth scrolling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Extract the zip file to your desired location

2. Open terminal/command prompt and navigate to the project folder:
   ```bash
   cd adhil-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit: `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

## Project Structure

```
adhil-portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js          # Main component with all sections
│   ├── styles.css      # All styling
│   ├── index.js        # Entry point
│   └── index.css       # Base styles
├── package.json
├── .gitignore
└── README.md
```

## Customization

### Updating Personal Information

Edit the content in `src/App.js`:
- **Hero Section**: Update name, title, and description
- **About Section**: Modify the about text
- **Journey Section**: Update the `journeyItems` array with your timeline
- **Skills Section**: Modify the `skills` array with your expertise
- **Contact Form**: Currently shows a success message; integrate with a backend for real functionality

### Styling

All styles are in `src/styles.css`. Key variables are defined at the top:
```css
:root {
  --primary-color: #00ffff;
  --secondary-color: #0080ff;
  --dark-bg: #0a0e27;
  --darker-bg: #050814;
}
```

### Adding Your Profile Image

Replace the placeholder in the Hero section:
1. Add your image to the `public` folder (e.g., `public/profile.jpg`)
2. Update the `Hero` component in `src/App.js`:
   ```jsx
   <div className="profile-image-placeholder">
     <img src="/profile.jpg" alt="Adhil" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
   </div>
   ```

## Deployment

### Deploy to Netlify
1. Build your project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/adhil-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## Technologies Used

- React 18
- Framer Motion (animations)
- CSS3 (styling with glassmorphism)
- React Scripts (Create React App)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 already in use
If you get an error that port 3000 is already in use:
- Windows: Run `netstat -ano | findstr :3000` and kill the process
- Mac/Linux: Run `lsof -ti:3000 | xargs kill`
- Or start on a different port: `PORT=3001 npm start`

### Dependencies installation fails
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, feel free to reach out through the contact form on the website.

---

**Note**: This is a demo portfolio. Customize it with your own information, projects, and achievements!
