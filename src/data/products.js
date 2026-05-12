export const products = [
  // --- FLASH SALES ---
  {
    id: 1,
    name: "Havic HV G-92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?w=500",
    category: "Gaming",
    isFlashSale: true,
    discount: "-40%"
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    category: "Computers",
    isFlashSale: true,
    discount: "-35%"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    category: "Computers",
    isFlashSale: true,
    discount: "-30%"
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500",
    category: "Gaming",
    isFlashSale: true,
    discount: "-25%"
  },

  // --- SMARTPHONES ---
  { id: 5, name: "iPhone 15 Pro", price: 999, rating: 5, reviews: 1200, image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500", category: "Phones" },
  { id: 6, name: "Samsung Galaxy S24", price: 899, rating: 5, reviews: 850, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500", category: "Phones" },
  { id: 7, name: "Google Pixel 8", price: 699, rating: 4, reviews: 430, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500", category: "Phones" },
  { id: 8, name: "OnePlus 12", price: 799, rating: 4, reviews: 210, image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500", category: "Phones" },

  // --- LAPTOPS ---
  { id: 9, name: "MacBook Air M3", price: 1099, rating: 5, reviews: 900, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", category: "Computers" },
  { id: 10, name: "Dell XPS 13", price: 1200, rating: 4, reviews: 340, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500", category: "Computers" },
  { id: 11, name: "HP Spectre x360", price: 1100, rating: 4, reviews: 180, image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=500", category: "Computers" },
  { id: 12, name: "Lenovo Legion 5", price: 1350, rating: 5, reviews: 260, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500", category: "Computers" },

  // --- AUDIO ---
  { id: 13, name: "Sony WH-1000XM5", price: 348, rating: 5, reviews: 1500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", category: "HeadPhones" },
  { id: 14, name: "Bose QuietComfort", price: 299, rating: 5, reviews: 800, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", category: "HeadPhones" },
  { id: 15, name: "AirPods Pro 2", price: 249, rating: 5, reviews: 2200, image: "https://images.unsplash.com/photo-1588423770574-91993ca06f42?w=500", category: "HeadPhones" },
  { id: 16, name: "JBL Flip 6", price: 129, rating: 4, reviews: 600, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500", category: "HeadPhones" },

  // --- WATCHES ---
  { id: 17, name: "Apple Watch Series 9", price: 399, rating: 5, reviews: 1100, image: "https://images.unsplash.com/photo-1544117518-30dd057534e2?w=500", category: "SmartWatch" },
  { id: 18, name: "Samsung Galaxy Watch 6", price: 299, rating: 4, reviews: 500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", category: "SmartWatch" },
  { id: 19, name: "Garmin Fenix 7", price: 650, rating: 5, reviews: 300, image: "https://images.unsplash.com/photo-1508685096489-775b1c147748?w=500", category: "SmartWatch" },
  { id: 20, name: "Fitbit Charge 6", price: 159, rating: 4, reviews: 900, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500", category: "SmartWatch" },

  // --- CAMERAS ---
  { id: 21, name: "Canon EOS R6", price: 2499, rating: 5, reviews: 150, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500", category: "Camera" },
  { id: 22, name: "Sony A7 IV", price: 2300, rating: 5, reviews: 210, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500", category: "Camera" },
  { id: 23, name: "Fujifilm X-T5", price: 1699, rating: 5, reviews: 85, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500", category: "Camera" },
  { id: 24, name: "GoPro Hero 12", price: 399, rating: 4, reviews: 400, image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500", category: "Camera" },

  // --- GAMING ---
  { id: 25, name: "PlayStation 5", price: 499, rating: 5, reviews: 5000, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500", category: "Gaming" },
  { id: 26, name: "Xbox Series X", price: 499, rating: 5, reviews: 3200, image: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca09a?w=500", category: "Gaming" },
  { id: 27, name: "Nintendo Switch OLED", price: 349, rating: 5, reviews: 2800, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500", category: "Gaming" },
  { id: 28, name: "Steam Deck", price: 399, rating: 5, reviews: 1500, image: "https://images.unsplash.com/photo-1660074128531-90a618c76020?w=500", category: "Gaming" },

  // --- ACCESSORIES & OTHERS ---
  { id: 29, name: "Logitech MX Master 3S", price: 99, rating: 5, reviews: 2500, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", category: "Computers" },
  { id: 30, name: "Razer DeathAdder V3", price: 69, rating: 4, reviews: 1200, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500", category: "Gaming" },
  { id: 31, name: "Seagate 2TB HDD", price: 59, rating: 4, reviews: 3000, image: "https://images.unsplash.com/photo-1531492746377-ad6d29c71bb4?w=500", category: "Computers" },
  { id: 32, name: "Samsung 990 Pro SSD", price: 170, rating: 5, reviews: 800, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500", category: "Computers" },
  { id: 33, name: "Kindle Paperwhite", price: 149, rating: 5, reviews: 4000, image: "https://images.unsplash.com/photo-1594980596229-6acd9564a781?w=500", category: "Phones" },
  { id: 34, name: "Roku Streaming Stick", price: 49, rating: 4, reviews: 5000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", category: "Computers" },
  { id: 35, name: "Dyson V15 Vacuum", price: 749, rating: 5, reviews: 600, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500", category: "Home" },
  { id: 36, name: "Instant Pot Duo", price: 99, rating: 5, reviews: 10000, image: "https://images.unsplash.com/photo-1585250001966-97992982d618?w=500", category: "Home" },
  { id: 37, name: "Philips Hue Starter Kit", price: 199, rating: 4, reviews: 2000, image: "https://images.unsplash.com/photo-1550985092-1663d3f96ca4?w=500", category: "Home" },
  { id: 38, name: "Ring Video Doorbell", price: 179, rating: 4, reviews: 3500, image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=500", category: "Home" },
  { id: 39, name: "Beats Studio Pro", price: 349, rating: 4, reviews: 450, image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500", category: "HeadPhones" },
  { id: 40, name: "SteelSeries Arctis 7", price: 169, rating: 5, reviews: 1200, image: "https://images.unsplash.com/photo-1612444533732-b834f5b61839?w=500", category: "Gaming" },
  { id: 41, name: "Asus ROG Ally", price: 699, rating: 4, reviews: 500, image: "https://images.unsplash.com/photo-1685413155792-74892c9082da?w=500", category: "Gaming" },
  { id: 42, name: "Elgato Stream Deck", price: 149, rating: 5, reviews: 900, image: "https://images.unsplash.com/photo-1626330332328-949433a152bc?w=500", category: "Gaming" },
  { id: 43, name: "Blue Yeti Microphone", price: 129, rating: 5, reviews: 7000, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500", category: "Computers" },
  { id: 44, name: "Wacom Intuos Pro", price: 379, rating: 5, reviews: 400, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", category: "Computers" },
  { id: 45, name: "Netgear Nighthawk Router", price: 299, rating: 4, reviews: 1500, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500", category: "Computers" },
  { id: 46, name: "SanDisk 128GB SD Card", price: 20, rating: 5, reviews: 8000, image: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=500", category: "Camera" },
  { id: 47, name: "DJI Mavic 3 Pro", price: 2199, rating: 5, reviews: 120, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", category: "Camera" },
  { id: 48, name: "Nikon Z9", price: 5499, rating: 5, reviews: 50, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500", category: "Camera" },
  { id: 49, name: "Marshall Emberton II", price: 169, rating: 5, reviews: 300, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500", category: "HeadPhones" },
  { id: 50, name: "Anker 737 Power Bank", price: 149, rating: 5, reviews: 600, image: "https://images.unsplash.com/photo-1619130771181-543f88a0b3f7?w=500", category: "Phones" }
];