const fs = require('fs');
const path = require('path');

// Paths
const graphicsDir = path.join(__dirname, '../public/portfolio/graphics');
const outputFile = path.join(__dirname, '../src/data/graphicsList.json');

// Supported image formats
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Scan graphics folder
function scanGraphicsFolder() {
  console.log('🔍 Scanning portfolio/graphics folder...');

  // Check if graphics folder exists
  if (!fs.existsSync(graphicsDir)) {
    console.log('📁 Creating graphics folder...');
    fs.mkdirSync(graphicsDir, { recursive: true });
    console.log('✅ Created: public/portfolio/graphics/');
    console.log('ℹ️  Add your images to this folder and run the script again!');
    
    // Create empty list
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  // Read all files in graphics folder (including subfolders)
  function getAllImages(dir, baseDir = dir) {
    let images = [];
    
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        images = images.concat(getAllImages(fullPath, baseDir));
      } else {
        // Check if it's an image file
        const ext = path.extname(item).toLowerCase();
        if (imageExtensions.includes(ext)) {
          // Get relative path from graphics folder
          const relativePath = path.relative(baseDir, fullPath);
          // Convert to URL path (forward slashes)
          const urlPath = '/portfolio/graphics/' + relativePath.replace(/\\/g, '/');
          images.push(urlPath);
        }
      }
    });
    
    return images;
  }

  const imageList = getAllImages(graphicsDir);

  // Sort alphabetically
  imageList.sort();

  // Save to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(imageList, null, 2));

  console.log(`✅ Found ${imageList.length} images`);
  console.log(`📝 Saved to: src/data/graphicsList.json`);
  
  if (imageList.length > 0) {
    console.log('\n📸 Images found:');
    imageList.forEach((img, idx) => {
      console.log(`   ${idx + 1}. ${img}`);
    });
  } else {
    console.log('\n⚠️  No images found! Add images to public/portfolio/graphics/');
  }
  
  console.log('\n🎉 Done! Your portfolio will display these images.');
}

// Run the scan
try {
  scanGraphicsFolder();
} catch (error) {
  console.error('❌ Error scanning folder:', error.message);
  process.exit(1);
}