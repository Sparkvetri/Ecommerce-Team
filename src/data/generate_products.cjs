const fs = require('fs');

const categoryData = {
  "Electronics": [
    { name: "iPhone 15 Pro Max 512GB", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600" },
    { name: "Samsung Galaxy S24 Ultra", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600" },
    { name: "Sony WH-1000XM5 ANC", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { name: "MacBook Air M3 13-inch", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" },
    { name: "iPad Pro 12.9 M2 Chip", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600" },
    { name: "Sony Alpha A7 IV Camera", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600" },
    { name: "DJI Mini 4 Pro Drone", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600" },
    { name: "Bose QuietComfort Ultra", img: "https://images.unsplash.com/photo-1588423770574-91993ca06f42?w=600" },
    { name: "Apple Watch Series 9", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
    { name: "Nintendo Switch OLED", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "GoPro HERO12 Black", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600" },
    { name: "Sonos Era 300 Speaker", img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600" },
    { name: "Kindle Paperwhite 16GB", img: "https://images.unsplash.com/photo-1592434151720-a52d9c444f6d?w=600" },
    { name: "Samsung 990 Pro 2TB SSD", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600" },
    { name: "Logitech MX Master 3S", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600" },
    { name: "Asus ROG Swift Monitor", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600" },
    { name: "Razer BlackWidow V4", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "Canon EOS R6 Mark II", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600" },
    { name: "Steam Deck 512GB OLED", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600" },
    { name: "Google Pixel 8 Pro", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600" }
  ],
  "Computers": [
    { name: "Alienware Aurora R16", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600" },
    { name: "HP Spectre x360 Laptop", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb96?w=600" },
    { name: "Dell XPS 15 9530", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600" },
    { name: "Mac Studio M2 Ultra", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" },
    { name: "Microsoft Surface Laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600" },
    { name: "Lenovo Legion Pro 7i", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600" },
    { name: "Razer Blade 16 Gaming", img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600" },
    { name: "MSI Stealth 14 Studio", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600" },
    { name: "MacBook Pro 16 M3 Max", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" },
    { name: "Acer Predator Helios", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb96?w=600" },
    { name: "iMac 24-inch M3 Blue", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" },
    { name: "NZXT Player One PC", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600" },
    { name: "Corsair One i500", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600" },
    { name: "Intel NUC 13 Extreme", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600" },
    { name: "Surface Pro 9 Tablet", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600" },
    { name: "LG Gram SuperSlim", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb96?w=600" },
    { name: "Framework Laptop 16", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb96?w=600" },
    { name: "ThinkPad X1 Carbon", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600" },
    { name: "HP Omen 45L Desktop", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600" },
    { name: "Mac mini M2 Pro", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" }
  ],
  "Accessories": [
    { name: "Apple Magic Keyboard", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "Dell WD22TB4 Dock", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600" },
    { name: "Samsung T7 Shield SSD", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600" },
    { name: "Logitech Brio 4K Web", img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600" },
    { name: "SteelSeries Rival 3", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600" },
    { name: "HyperX Cloud II Pro", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
    { name: "Elgato Stream Deck", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "Seagate Expansion 5TB", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600" },
    { name: "Belkin BoostCharge Pro", img: "https://images.unsplash.com/photo-1619130771181-543f88a0b3f7?w=600" },
    { name: "Anker 737 Power Bank", img: "https://images.unsplash.com/photo-1619130771181-543f88a0b3f7?w=600" },
    { name: "Wacom Intuos Pro S", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
    { name: "Blue Yeti USB Mic", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600" },
    { name: "TP-Link Deco XE75", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600" },
    { name: "Corsair MM700 RGB", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "Logitech Z407 Spks", img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600" },
    { name: "Keychron K2 Wireless", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "Twelve South Curve", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600" },
    { name: "Nomad Base Station", img: "https://images.unsplash.com/photo-1619130771181-543f88a0b3f7?w=600" },
    { name: "Orbital2 Joystiq", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" },
    { name: "CalDigit TS4 Dock", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600" }
  ]
};

const products = [];
let idCounter = 1;

for (const cat in categoryData) {
  const items = categoryData[cat];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const price = Math.floor(Math.random() * 2000) + 100;
    const rating = Math.floor(Math.random() * 2) + 4;
    const reviews = Math.floor(Math.random() * 5000) + 100;
    
    products.push({
      id: idCounter++,
      name: item.name,
      price: price,
      oldPrice: Math.floor(price * 1.2),
      rating: rating,
      reviews: reviews,
      image: item.img,
      category: cat,
      isFlashSale: i < 5,
      discount: i < 5 ? "-" + (Math.floor(Math.random() * 20) + 10) + "%" : null,
      isNew: i > 15
    });
  }
}

const content = "export const products = " + JSON.stringify(products, null, 2) + ";";
fs.writeFileSync('src/data/products.js', content);
console.log("Successfully generated Electronics & Computers focused product catalog.");
