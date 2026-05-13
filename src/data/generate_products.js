const fs = require('fs');

const categoryData = {
  "Woman’s Fashion": [
    "Floral Summer Dress", "Leather Crossbody Bag", "Silk Evening Gown", "Designer High Heels", 
    "Classic Trench Coat", "High-Waisted Skinny Jeans", "Cashmere Sweater", "Gold Pendant Necklace",
    "Boho Maxi Skirt", "Velvet Party Blazer", "Wide-Leg Trousers", "Lace Cocktail Dress",
    "Denim Jacket", "Ankle Suede Boots", "Pearl Earrings Set", "Satin Blouse",
    "Wool Fedora Hat", "Graphic Print Tee", "Activewear Leggings", "Designer Sunglasses"
  ],
  "Men’s Fashion": [
    "Tailored Slim-Fit Suit", "Leather Chronograph Watch", "Premium Denim Jeans", "Classic Oxford Shirt",
    "Urban Canvas Sneakers", "Minimalist Leather Wallet", "Quilted Bomber Jacket", "Silk Necktie",
    "Italian Leather Belt", "Modern Polo Shirt", "Suede Chelsea Boots", "Professional Briefcase",
    "Luxury Cufflinks", "Cotton Crewneck Tee", "Performance Joggers", "Aviator Sunglasses",
    "Wool Winter Coat", "Linen Summer Shorts", "Gym Training Hoodie", "Leather Loafers"
  ],
  "Electronics": [
    "Ultra-Slim 5G Smartphone", "Next-Gen Gaming Laptop", "4K OLED Smart TV", "Noise-Cancelling Headphones",
    "Professional DSLR Camera", "Portable Bluetooth Speaker", "High-Speed Wi-Fi Router", "Wireless Charging Pad",
    "Smart Home Assistant", "Ergonomic Mechanical Keyboard", "Ultra-Wide Gaming Monitor", "Compact Mirrorless Camera",
    "Active Noise Buds", "Smart Fitness Tracker", "VR Gaming Headset", "External 2TB SSD",
    "Premium Soundbar", "Dual-Band Wi-Fi Extender", "Digital Drawing Tablet", "Foldable Drone with 4K"
  ],
  "Home & Lifestyle": [
    "Mid-Century Velvet Sofa", "Minimalist Coffee Table", "Smart LED Floor Lamp", "Bohemian Pattern Rug",
    "Ceramic Decorative Vase", "Luxury Bedding Set", "Professional Chef Knife", "Modern Wall Art",
    "Indoor Monstera Plant", "Scented Soy Candle", "Abstract Sculptural Piece", "Bamboo Dining Set",
    "Velvet Blackout Curtains", "Ergonomic Office Chair", "Smart Aroma Diffuser", "Floating Wall Shelves",
    "Handwoven Storage Basket", "Premium Cotton Towels", "Electric Standing Desk", "Designer Wall Clock"
  ],
  "Medicine": [
    "Multivitamin Complex", "Advanced First Aid Kit", "Digital Thermometer", "Premium Face Masks",
    "Omega-3 Fish Oil", "Herbal Sleep Support", "Rapid Pain Relief", "Elastic Support Bandage",
    "Blood Pressure Monitor", "Vitamin C Gummies", "Probiotic Supplement", "Cooling Gel Patch",
    "Antiseptic Liquid", "Joint Health Support", "Hand Sanitizer Gel", "Zinc Immunity Boost",
    "Muscle Rub Cream", "Allergy Relief Meds", "Hydration Electrolytes", "Eye Care Drops"
  ],
  "Sports & Outdoor": [
    "Non-Slip Yoga Mat", "Adjustable Dumbbell Set", "4-Person Camping Tent", "Carbon Fiber Bicycle",
    "Hydration Hiking Pack", "Professional Running Shoes", "Breathable Team Jersey", "Official Size Football",
    "Polarized Sports Shades", "Stainless Water Bottle", "Resistance Bands Set", "Portable Camping Stove",
    "Inflatable Paddle Board", "Ski & Snowboard Goggles", "Tennis Racket Pro", "Lightweight Sleeping Bag",
    "Electronic Dartboard", "Kettlebell Weight", "Outdoor Pickleball Set", "Digital Jump Rope"
  ],
  "Baby’s & Toys": [
    "Convertible Baby Stroller", "Wooden Building Blocks", "Giant Teddy Bear", "Educational Shape Sorter",
    "Interactive Robot Toy", "Soft Plush Doll", "Remote Control Car", "Eco-Friendly Diapers",
    "Organic Cotton Onesie", "Musical Baby Mobile", "Bath Time Toy Set", "Foldable Playpen",
    "Magnetic Tile Set", "Safety Baby Gate", "Teething Toy Ring", "Kids Digital Camera",
    "Toddler Learning Tablet", "Animal Print Blanket", "Baby Food Maker", "Children's Book Set"
  ],
  "Groceries & Pets": [
    "Organic Roasted Coffee", "Grain-Free Cat Food", "Premium Dog Treats", "Extra Virgin Olive Oil",
    "Whole Grain Cereal", "International Snack Box", "Interactive Pet Toy", "Pet Grooming Kit",
    "Natural Peanut Butter", "Luxury Cat Tree", "Durable Dog Leash", "Organic Green Tea",
    "Acacia Honey Jar", "Artisan Pasta Set", "Catnip Infused Toy", "Orthopedic Pet Bed",
    "Fresh Fruit Basket", "Gourmet Chocolate Box", "Automatic Pet Feeder", "Natural Soy Milk"
  ],
  "Health & Beauty": [
    "Matte Liquid Lipstick", "Hyaluronic Acid Serum", "Luxury Oud Perfume", "Argan Oil Shampoo",
    "SPF 50 Sunscreen", "Revitalizing Face Mask", "Ionic Hair Dryer", "Makeup Brush Set",
    "Anti-Aging Night Cream", "Charcoal Face Wash", "Electric Toothbrush", "Eyeliner Pen Jet Black",
    "Body Shimmer Oil", "Lavender Bath Salts", "Nail Polish Collection", "Beard Grooming Oil",
    "Sonic Cleansing Brush", "Moisturizing Hand Cream", "Volume Boost Mascara", "Professional Flat Iron"
  ]
};

const products = [];
let id = 1;

for (const cat in categoryData) {
  const names = categoryData[cat];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = Math.floor(Math.random() * 500) + 20;
    const rating = Math.floor(Math.random() * 2) + 4;
    const reviews = Math.floor(Math.random() * 1000) + 10;
    
    let finalUrl = "";
    if (cat === "Woman’s Fashion") finalUrl = `https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&fashion&sig=${id}`;
    if (cat === "Men’s Fashion") finalUrl = `https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&men&sig=${id}`;
    if (cat === "Electronics") finalUrl = `https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&tech&sig=${id}`;
    if (cat === "Home & Lifestyle") finalUrl = `https://images.unsplash.com/photo-1513519247388-4e2826db089c?w=500&home&sig=${id}`;
    if (cat === "Medicine") finalUrl = `https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&medical&sig=${id}`;
    if (cat === "Sports & Outdoor") finalUrl = `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&fitness&sig=${id}`;
    if (cat === "Baby’s & Toys") finalUrl = `https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=500&toys&sig=${id}`;
    if (cat === "Groceries & Pets") finalUrl = `https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&groceries&sig=${id}`;
    if (cat === "Health & Beauty") finalUrl = `https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&beauty&sig=${id}`;

    products.push({
      id: id++,
      name: name,
      price: price,
      oldPrice: Math.floor(price * 1.3),
      rating: rating,
      reviews: reviews,
      image: finalUrl,
      category: cat,
      isFlashSale: i < 2,
      discount: i < 2 ? `-${Math.floor(Math.random() * 30) + 20}%` : null,
      isNew: i > 15
    });
  }
}

const content = `export const products = ${JSON.stringify(products, null, 2)};`;
fs.writeFileSync('src/data/products.js', content);
console.log("Successfully generated 180 meaningful products.");
