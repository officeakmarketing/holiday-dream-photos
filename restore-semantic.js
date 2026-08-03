const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content;

      newContent = newContent.replace(/text-\[var\(--brand-dark\)\]/g, 'text-brand-dark');
      newContent = newContent.replace(/bg-\[var\(--brand-dark\)\]/g, 'bg-brand-dark');
      newContent = newContent.replace(/border-\[var\(--brand-dark\)\]/g, 'border-brand-dark');
      newContent = newContent.replace(/fill-\[var\(--brand-dark\)\]/g, 'fill-brand-dark');
      newContent = newContent.replace(/decoration-\[var\(--brand-dark\)\]/g, 'decoration-brand-dark');
      newContent = newContent.replace(/from-\[var\(--brand-dark\)\]/g, 'from-brand-dark');
      newContent = newContent.replace(/via-\[var\(--brand-dark\)\]/g, 'via-brand-dark');
      newContent = newContent.replace(/to-\[var\(--brand-dark\)\]/g, 'to-brand-dark');
      newContent = newContent.replace(/hover:text-\[var\(--brand-dark\)\]/g, 'hover:text-brand-dark');
      newContent = newContent.replace(/hover:bg-\[var\(--brand-dark\)\]/g, 'hover:bg-brand-dark');
      
      newContent = newContent.replace(/text-\[var\(--brand-light\)\]/g, 'text-brand-light');
      newContent = newContent.replace(/bg-\[var\(--brand-light\)\]/g, 'bg-brand-light');
      newContent = newContent.replace(/border-\[var\(--brand-light\)\]/g, 'border-brand-light');
      newContent = newContent.replace(/fill-\[var\(--brand-light\)\]/g, 'fill-brand-light');
      newContent = newContent.replace(/hover:text-\[var\(--brand-light\)\]/g, 'hover:text-brand-light');
      newContent = newContent.replace(/hover:bg-\[var\(--brand-light\)\]/g, 'hover:bg-brand-light');
      
      newContent = newContent.replace(/text-\[var\(--brand-red\)\]/g, 'text-brand-red');
      newContent = newContent.replace(/bg-\[var\(--brand-red\)\]/g, 'bg-brand-red');
      newContent = newContent.replace(/border-\[var\(--brand-red\)\]/g, 'border-brand-red');
      newContent = newContent.replace(/hover:text-\[var\(--brand-red\)\]/g, 'hover:text-brand-red');
      newContent = newContent.replace(/hover:bg-\[var\(--brand-red\)\]/g, 'hover:bg-brand-red');
      newContent = newContent.replace(/hover:border-\[var\(--brand-red\)\]/g, 'hover:border-brand-red');

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
      }
    }
  }
}

replaceInDir(__dirname);
console.log('Restored semantic classes!');
