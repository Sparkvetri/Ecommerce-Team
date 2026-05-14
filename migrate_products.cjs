const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'data', 'products.js');
const destPath = path.join(__dirname, 'server', 'data', 'products.js');

const content = fs.readFileSync(srcPath, 'utf8');

// Use a regex to find the array part
const match = content.match(/\[\s*\{[\s\S]*\}\s*\]/);
if (!match) {
    console.error('Could not find products array in src/data/products.js');
    process.exit(1);
}

const productsJson = match[0];

// Parse it to add missing fields
const products = JSON.parse(productsJson);
const updatedProducts = products.map(p => ({
  name: p.name,
  price: p.price,
  oldPrice: p.oldPrice,
  rating: p.rating,
  reviews: p.reviews,
  image: p.image,
  category: p.category,
  isFlashSale: p.isFlashSale,
  discount: p.discount,
  isNewItem: p.isNew,
  stock: 10,
  description: `${p.name} is a high-performance ${p.category} product designed for modern lifestyle. Featuring premium materials and state-of-the-art technology.`
}));

const finalContent = `const products = ${JSON.stringify(updatedProducts, null, 2)};\n\nmodule.exports = products;`;
fs.writeFileSync(destPath, finalContent);
console.log(`Successfully migrated ${updatedProducts.length} products to server/data/products.js!`);
