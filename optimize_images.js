const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/sequence');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function optimizeImages() {
  console.log(`Found ${files.length} PNG files. Starting optimization...`);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const webpPath = filePath.replace('.png', '.webp');
    
    await sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 60, effort: 6 })
      .toFile(webpPath);
      
    // Delete the original PNG to save space
    fs.unlinkSync(filePath);
    
    console.log(`Optimized ${file} -> ${file.replace('.png', '.webp')}`);
  }
  console.log('All images optimized to WebP successfully!');
}

optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
