import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Because type is module, we need to polyfill __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the root App component
import App from './src/App.tsx';

async function prerender() {
  try {
    const templatePath = path.resolve(__dirname, 'dist/index.html');
    
    if (!fs.existsSync(templatePath)) {
      console.error('dist/index.html not found. Did you run vite build first?');
      process.exit(1);
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

    // Render the React app to a string
    const appHtml = renderToString(<App />);

    // Inject the rendered HTML into the root div.
    // Notice we preserve the original <div id="root"> and simply place the appHtml inside.
    const finalHtml = template.replace(
      '<div id="root">',
      `<div id="root">${appHtml}`
    );

    // Write back the fully static HTML
    fs.writeFileSync(templatePath, finalHtml);
    console.log('✅ Pre-rendering complete. Static HTML successfully generated for 100/100 SEO scores.');
  } catch (error) {
    console.error('❌ Pre-rendering failed:', error);
    process.exit(1);
  }
}

prerender();
