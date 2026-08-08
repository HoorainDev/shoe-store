const products = [
  // --- WOMEN COLLECTION: HEELS ---
  {
    id: 1,
    name: "Luxury Leather Heels",
    category: "heels",
    gender: "Women",
    price: 120,
    oldPrice: 150,
    badge: "Best Seller",
    image: "/heel.jpg", 
    images: ["/heel.jpg", "/heel3.jpg", "/heel4.jpg", "/heel5.jpg", "/heel6.jpg", "/heel7.jpg"]
  },
  {
    id: 11,
    name: "Crystal Strap Heels",
    category: "heels",
    gender: "Women",
    price: 145,
    oldPrice: 180,
    badge: "New",
    image: "/heel3.jpg", 
    images: ["/heel3.jpg", "/heel.jpg", "/heel4.jpg", "/heel5.jpg", "/heel6.jpg", "/heel7.jpg"]
  },
  {
    id: 12,
    name: "Stiletto Party Heels",
    category: "heels",
    gender: "Women",
    price: 135,
    oldPrice: 165,
    badge: "Trending",
    image: "/heel4.jpg", 
    images: ["/heel4.jpg", "/heel.jpg", "/heel3.jpg", "/heel5.jpg", "/heel6.jpg", "/heel7.jpg"]
  },
  {
    id: 13,
    name: "Velvet High Heels",
    category: "heels",
    gender: "Women",
    price: 150,
    oldPrice: 190,
    badge: "Exclusive",
    image: "/heel5.jpg", 
    images: ["/heel5.jpg", "/heel.jpg", "/heel3.jpg", "/heel4.jpg", "/heel6.jpg", "/heel7.jpg"]
  },
  {
    id: 14,
    name: "Golden Buckle Heels",
    category: "heels",
    gender: "Women",
    price: 125,
    oldPrice: 160,
    badge: "Popular",
    image: "/heel6.jpg", 
    images: ["/heel6.jpg", "/heel.jpg", "/heel3.jpg", "/heel4.jpg", "/heel5.jpg", "/heel7.jpg"]
  },
  {
    id: 15,
    name: "Classic Platform Heels",
    category: "heels",
    gender: "Women",
    price: 155,
    oldPrice: 195,
    badge: "Premium",
    image: "/heel7.jpg", 
    images: ["/heel7.jpg", "/heel.jpg", "/heel3.jpg", "/heel4.jpg", "/heel5.jpg", "/heel6.jpg"]
  },

  // --- WOMEN COLLECTION: FLATS ---
  {
    id: 2,
    name: "Classic Flat",
    category: "flat",
    gender: "Women",
    price: 90,
    oldPrice: 120,
    badge: "Trending",
    image: "/flat.jpg",
    images: ["/flat.jpg", "/flat2.jpg", "/flat3.jpg", "/flat4.jpg", "/flat5.jpg", "/flat6.jpg"]
  },
  {
    id: 21,
    name: "Designer Casual Flat",
    category: "flat",
    gender: "Women",
    price: 85,
    oldPrice: 110,
    badge: "Sale",
    image: "/flat2.jpg",
    images: ["/flat2.jpg", "/flat.jpg", "/flat3.jpg", "/flat4.jpg", "/flat5.jpg", "/flat6.jpg"]
  },
  {
    id: 22,
    name: "Comfort Walk Flat",
    category: "flat",
    gender: "Women",
    price: 95,
    oldPrice: 125,
    badge: "Popular",
    image: "/flat3.jpg",
    images: ["/flat3.jpg", "/flat.jpg", "/flat2.jpg", "/flat4.jpg", "/flat5.jpg", "/flat6.jpg"]
  },
  {
    id: 23,
    name: "Beaded Summer Flat",
    category: "flat",
    gender: "Women",
    price: 100,
    oldPrice: 130,
    badge: "New",
    image: "/flat4.jpg",
    images: ["/flat4.jpg", "/flat.jpg", "/flat2.jpg", "/flat3.jpg", "/flat5.jpg", "/flat6.jpg"]
  },
  {
    id: 24,
    name: "Elegant Office Flat",
    category: "flat",
    gender: "Women",
    price: 105,
    oldPrice: 140,
    badge: "Best Seller",
    image: "/flat5.jpg",
    images: ["/flat5.jpg", "/flat.jpg", "/flat2.jpg", "/flat3.jpg", "/flat4.jpg", "/flat6.jpg"]
  },
  {
    id: 25,
    name: "Pearl Embellished Flat",
    category: "flat",
    gender: "Women",
    price: 110,
    oldPrice: 145,
    badge: "Exclusive",
    image: "/flat6.jpg",
    images: ["/flat6.jpg", "/flat.jpg", "/flat2.jpg", "/flat3.jpg", "/flat4.jpg", "/flat5.jpg"]
  },

  // --- WOMEN COLLECTION: KHUSSA ---
  {
    id: 3,
    name: "Royal Khussa",
    category: "khosa",
    gender: "Women",
    price: 110,
    oldPrice: 140,
    badge: "Exclusive",
    image: "/khosa.jpg",
    images: ["/khosa.jpg", "/khosa1.jpg", "/khosa2.jpg", "/khosa3.jpg", "/khosa4.jpg", "/khosa5.jpg"]
  },
  {
    id: 31,
    name: "Golden Thread Khussa",
    category: "khosa",
    gender: "Women",
    price: 95,
    oldPrice: 125,
    badge: "Traditional",
    image: "/khosa1.jpg",
    images: ["/khosa1.jpg", "/khosa.jpg", "/khosa2.jpg", "/khosa3.jpg", "/khosa4.jpg", "/khosa5.jpg"]
  },
  {
    id: 32,
    name: "Bridal Khussa",
    category: "khosa",
    gender: "Women",
    price: 130,
    oldPrice: 170,
    badge: "Best Seller",
    image: "/khosa2.jpg",
    images: ["/khosa2.jpg", "/khosa.jpg", "/khosa1.jpg", "/khosa3.jpg", "/khosa4.jpg", "/khosa5.jpg"]
  },
  {
    id: 33,
    name: "Handcrafted Khussa",
    category: "khosa",
    gender: "Women",
    price: 105,
    oldPrice: 135,
    badge: "Trending",
    image: "/khosa3.jpg",
    images: ["/khosa3.jpg", "/khosa.jpg", "/khosa1.jpg", "/khosa2.jpg", "/khosa4.jpg", "/khosa5.jpg"]
  },
  {
    id: 34,
    name: "Velvet Embroidered Khussa",
    category: "khosa",
    gender: "Women",
    price: 115,
    oldPrice: 150,
    badge: "New",
    image: "/khosa4.jpg",
    images: ["/khosa4.jpg", "/khosa.jpg", "/khosa1.jpg", "/khosa2.jpg", "/khosa3.jpg", "/khosa5.jpg"]
  },
  {
    id: 35,
    name: "Ethnic Party Khussa",
    category: "khosa",
    gender: "Women",
    price: 120,
    oldPrice: 155,
    badge: "Exclusive",
    image: "/khosa5.jpg",
    images: ["/khosa5.jpg", "/khosa.jpg", "/khosa1.jpg", "/khosa2.jpg", "/khosa3.jpg", "/khosa4.jpg"]
  },

  // --- WOMEN COLLECTION: FORMAL SHOES ---
  {
    id: 4,
    name: "Formal Shoe",
    category: "formal",
    gender: "Women",
    price: 160,
    oldPrice: 190,
    badge: "Premium",
    image: "/formal1.jpg",
    images: ["/formal1.jpg", "/formal2.jpg", "/formal3.jpg", "/formal4.jpg", "/formal5.jpg", "/formal6.jpg"]
  },
  {
    id: 41,
    name: "Executive Office Shoe",
    category: "formal",
    gender: "Women",
    price: 145,
    oldPrice: 175,
    badge: "Popular",
    image: "/formal2.jpg",
    images: ["/formal2.jpg", "/formal1.jpg", "/formal3.jpg", "/formal4.jpg", "/formal5.jpg", "/formal6.jpg"]
  },
  {
    id: 42,
    name: "Classic Oxford Formal",
    category: "formal",
    gender: "Women",
    price: 165,
    oldPrice: 200,
    badge: "Best Seller",
    image: "/formal3.jpg",
    images: ["/formal3.jpg", "/formal1.jpg", "/formal2.jpg", "/formal4.jpg", "/formal5.jpg", "/formal6.jpg"]
  },
  {
    id: 43,
    name: "Glossy Formal Pump",
    category: "formal",
    gender: "Women",
    price: 150,
    oldPrice: 185,
    badge: "Trending",
    image: "/formal4.jpg",
    images: ["/formal4.jpg", "/formal1.jpg", "/formal2.jpg", "/formal3.jpg", "/formal5.jpg", "/formal6.jpg"]
  },
  {
    id: 44,
    name: "Smart Business Shoe",
    category: "formal",
    gender: "Women",
    price: 155,
    oldPrice: 190,
    badge: "New",
    image: "/formal5.jpg",
    images: ["/formal5.jpg", "/formal1.jpg", "/formal2.jpg", "/formal3.jpg", "/formal4.jpg", "/formal6.jpg"]
  },
  {
    id: 45,
    name: "Luxe Black Formal",
    category: "formal",
    gender: "Women",
    price: 170,
    oldPrice: 210,
    badge: "Exclusive",
    image: "/formal6.jpg",
    images: ["/formal6.jpg", "/formal1.jpg", "/formal2.jpg", "/formal3.jpg", "/formal4.jpg", "/formal5.jpg"]
  },

  // --- WOMEN COLLECTION: LADIES BOOT ---
  {
    id: 5,
    name: "Ladies Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 180,
    oldPrice: 220,
    badge: "Winter",
    image: "/bootgirls.jpg",
    images: ["/bootgirls.jpg", "/ladiesboot1.jpg", "/ladiesboot2.jpg", "/ladiesboot3.jpg", "/ladiesboot4.jpg", "/ladiesboot5.jpg"]
  },
  {
    id: 51,
    name: "Ankle Leather Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 170,
    oldPrice: 210,
    badge: "Trending",
    image: "/ladiesboot1.jpg",
    images: ["/ladiesboot1.jpg", "/bootgirls.jpg", "/ladiesboot2.jpg", "/ladiesboot3.jpg", "/ladiesboot4.jpg", "/ladiesboot5.jpg"]
  },
  {
    id: 52,
    name: "Long Winter Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 200,
    oldPrice: 245,
    badge: "Popular",
    image: "/ladiesboot2.jpg",
    images: ["/ladiesboot2.jpg", "/bootgirls.jpg", "/ladiesboot1.jpg", "/ladiesboot3.jpg", "/ladiesboot4.jpg", "/ladiesboot5.jpg"]
  },
  {
    id: 53,
    name: "Suede Fashion Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 190,
    oldPrice: 230,
    badge: "Exclusive",
    image: "/ladiesboot3.jpg",
    images: ["/ladiesboot3.jpg", "/bootgirls.jpg", "/ladiesboot1.jpg", "/ladiesboot2.jpg", "/ladiesboot4.jpg", "/ladiesboot5.jpg"]
  },
  {
    id: 54,
    name: "Buckle Accent Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 185,
    oldPrice: 225,
    badge: "New",
    image: "/ladiesboot4.jpg",
    images: ["/ladiesboot4.jpg", "/bootgirls.jpg", "/ladiesboot1.jpg", "/ladiesboot2.jpg", "/ladiesboot3.jpg", "/ladiesboot5.jpg"]
  },
  {
    id: 55,
    name: "High Heel Winter Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 210,
    oldPrice: 260,
    badge: "Premium",
    image: "/ladiesboot5.jpg",
    images: ["/ladiesboot5.jpg", "/bootgirls.jpg", "/ladiesboot1.jpg", "/ladiesboot2.jpg", "/ladiesboot3.jpg", "/ladiesboot4.jpg"]
  },

  // --- MEN COLLECTION: CHAPPAL ---
  {
    id: 6,
    name: "Traditional Chappal",
    category: "chappal",
    gender: "Men",
    price: 95,
    oldPrice: 130,
    badge: "Popular",
    image: "/chapal.jpg",
    images: ["/chapal.jpg", "/chappal1.jpg", "/chappal2.jpg", "/chappal3.jpg", "/chappal4.jpg", "/chappal5.jpg"]
  },
  {
    id: 61,
    name: "Peshawari Chappal Deluxe",
    category: "chappal",
    gender: "Men",
    price: 110,
    oldPrice: 145,
    badge: "Best Seller",
    image: "/chappal1.jpg",
    images: ["/chappal1.jpg", "/chapal.jpg", "/chappal2.jpg", "/chappal3.jpg", "/chappal4.jpg", "/chappal5.jpg"]
  },
  {
    id: 62,
    name: "Classic Leather Chappal",
    category: "chappal",
    gender: "Men",
    price: 100,
    oldPrice: 135,
    badge: "Trending",
    image: "/chappal2.jpg",
    images: ["/chappal2.jpg", "/chapal.jpg", "/chappal1.jpg", "/chappal3.jpg", "/chappal4.jpg", "/chappal5.jpg"]
  },
  {
    id: 63,
    name: "Royal Stitch Chappal",
    category: "chappal",
    gender: "Men",
    price: 115,
    oldPrice: 150,
    badge: "Exclusive",
    image: "/chappal3.jpg",
    images: ["/chappal3.jpg", "/chapal.jpg", "/chappal1.jpg", "/chappal2.jpg", "/chappal4.jpg", "/chappal5.jpg"]
  },
  {
    id: 64,
    name: "Comfort Sole Chappal",
    category: "chappal",
    gender: "Men",
    price: 90,
    oldPrice: 120,
    badge: "New",
    image: "/chappal4.jpg",
    images: ["/chappal4.jpg", "/chapal.jpg", "/chappal1.jpg", "/chappal2.jpg", "/chappal3.jpg", "/chappal5.jpg"]
  },
  {
    id: 65,
    name: "Embossed Men Chappal",
    category: "chappal",
    gender: "Men",
    price: 120,
    oldPrice: 160,
    badge: "Premium",
    image: "/chappal5.jpg",
    images: ["/chappal5.jpg", "/chapal.jpg", "/chappal1.jpg", "/chappal2.jpg", "/chappal3.jpg", "/chappal4.jpg"]
  },

  // --- MEN COLLECTION: KHERI ---
  {
    id: 7,
    name: "Premium Kheri",
    category: "kheri",
    gender: "Men",
    price: 115,
    oldPrice: 145,
    badge: "Luxury",
    image: "/kheri1.jpg",
    images: ["/kheri1.jpg", "/kheri2.jpg", "/kheri3.jpg", "/kheri4.jpg", "/kheri5.jpg", "/kheri6.jpg"]
  },
  {
    id: 71,
    name: "Handmade Royal Kheri",
    category: "kheri",
    gender: "Men",
    price: 125,
    oldPrice: 160,
    badge: "Best Seller",
    image: "/kheri2.jpg",
    images: ["/kheri2.jpg", "/kheri1.jpg", "/kheri3.jpg", "/kheri4.jpg", "/kheri5.jpg", "/kheri6.jpg"]
  },
  {
    id: 72,
    name: "Classic Brown Kheri",
    category: "kheri",
    gender: "Men",
    price: 110,
    oldPrice: 140,
    badge: "Popular",
    image: "/kheri3.jpg",
    images: ["/kheri3.jpg", "/kheri1.jpg", "/kheri2.jpg", "/kheri4.jpg", "/kheri5.jpg", "/kheri6.jpg"]
  },
  {
    id: 73,
    name: "Traditional Formal Kheri",
    category: "kheri",
    gender: "Men",
    price: 130,
    oldPrice: 170,
    badge: "Exclusive",
    image: "/kheri4.jpg",
    images: ["/kheri4.jpg", "/kheri1.jpg", "/kheri2.jpg", "/kheri3.jpg", "/kheri5.jpg", "/kheri6.jpg"]
  },
  {
    id: 74,
    name: "Designer Ethnic Kheri",
    category: "kheri",
    gender: "Men",
    price: 120,
    oldPrice: 155,
    badge: "Trending",
    image: "/kheri5.jpg",
    images: ["/kheri5.jpg", "/kheri1.jpg", "/kheri2.jpg", "/kheri3.jpg", "/kheri4.jpg", "/kheri6.jpg"]
  },
  {
    id: 75,
    name: "Elite Black Kheri",
    category: "kheri",
    gender: "Men",
    price: 140,
    oldPrice: 180,
    badge: "Premium",
    image: "/kheri6.jpg",
    images: ["/kheri6.jpg", "/kheri1.jpg", "/kheri2.jpg", "/kheri3.jpg", "/kheri4.jpg", "/kheri5.jpg"]
  },

  // --- MEN COLLECTION: BOOTS ---
  {
    id: 8,
    name: "Mens Boot",
    category: "boot",
    gender: "Men",
    price: 210,
    oldPrice: 250,
    badge: "Winter",
    image: "/bootboys.jpg",
    images: ["/bootboys.jpg", "/boot1.jpg", "/boot2.jpg", "/boot3.jpg", "/boot4.jpg", "/boot5.jpg"]
  },
  {
    id: 81,
    name: "Rugged Leather Boot",
    category: "boot",
    gender: "Men",
    price: 195,
    oldPrice: 240,
    badge: "Popular",
    image: "/boot1.jpg",
    images: ["/boot1.jpg", "/bootboys.jpg", "/boot2.jpg", "/boot3.jpg", "/boot4.jpg", "/boot5.jpg"]
  },
  {
    id: 82,
    name: "Urban Casual Boot",
    category: "boot",
    gender: "Men",
    price: 185,
    oldPrice: 230,
    badge: "Trending",
    image: "/boot2.jpg",
    images: ["/boot2.jpg", "/bootboys.jpg", "/boot1.jpg", "/boot3.jpg", "/boot4.jpg", "/boot5.jpg"]
  },
  {
    id: 83,
    name: "Classic Ankle Boot",
    category: "boot",
    gender: "Men",
    price: 205,
    oldPrice: 250,
    badge: "Best Seller",
    image: "/boot3.jpg",
    images: ["/boot3.jpg", "/bootboys.jpg", "/boot1.jpg", "/boot2.jpg", "/boot4.jpg", "/boot5.jpg"]
  },
  {
    id: 84,
    name: "Heavy Duty Work Boot",
    category: "boot",
    gender: "Men",
    price: 220,
    oldPrice: 270,
    badge: "Exclusive",
    image: "/boot4.jpg",
    images: ["/boot4.jpg", "/bootboys.jpg", "/boot1.jpg", "/boot2.jpg", "/boot3.jpg", "/boot5.jpg"]
  },
  {
    id: 85,
    name: "Hiker Style Boot",
    category: "boot",
    gender: "Men",
    price: 215,
    oldPrice: 260,
    badge: "New",
    image: "/boot5.jpg",
    images: ["/boot5.jpg", "/bootboys.jpg", "/boot1.jpg", "/boot2.jpg", "/boot3.jpg", "/boot4.jpg"]
  },

  // --- MEN COLLECTION: SANDALS ---
  {
    id: 9,
    name: "Casual Sandal",
    category: "sandal",
    gender: "Men",
    price: 105,
    oldPrice: 135,
    badge: "Comfort",
    image: "/sandal.jpg",
    images: ["/sandal.jpg", "/sandal1.jpg", "/sandal2.jpg", "/sandal3.jpg", "/sandal4.jpg", "/sandal5.jpg"]
  },
  {
    id: 91,
    name: "Sporty Men Sandal",
    category: "sandal",
    gender: "Men",
    price: 115,
    oldPrice: 145,
    badge: "Popular",
    image: "/sandal1.jpg",
    images: ["/sandal1.jpg", "/sandal.jpg", "/sandal2.jpg", "/sandal3.jpg", "/sandal4.jpg", "/sandal5.jpg"]
  },
  {
    id: 92,
    name: "Outdoor Grip Sandal",
    category: "sandal",
    gender: "Men",
    price: 120,
    oldPrice: 150,
    badge: "Trending",
    image: "/sandal2.jpg",
    images: ["/sandal2.jpg", "/sandal.jpg", "/sandal1.jpg", "/sandal3.jpg", "/sandal4.jpg", "/sandal5.jpg"]
  },
  {
    id: 93,
    name: "Leather Strap Sandal",
    category: "sandal",
    gender: "Men",
    price: 110,
    oldPrice: 140,
    badge: "Best Seller",
    image: "/sandal3.jpg",
    images: ["/sandal3.jpg", "/sandal.jpg", "/sandal1.jpg", "/sandal2.jpg", "/sandal4.jpg", "/sandal5.jpg"]
  },
  {
    id: 94,
    name: "Beach Walk Sandal",
    category: "sandal",
    gender: "Men",
    price: 95,
    oldPrice: 125,
    badge: "New",
    image: "/sandal4.jpg",
    images: ["/sandal4.jpg", "/sandal.jpg", "/sandal1.jpg", "/sandal2.jpg", "/sandal3.jpg", "/sandal5.jpg"]
  },
  {
    id: 95,
    name: "Executive Comfort Sandal",
    category: "sandal",
    gender: "Men",
    price: 125,
    oldPrice: 160,
    badge: "Premium",
    image: "/sandal5.jpg",
    images: ["/sandal5.jpg", "/sandal.jpg", "/sandal1.jpg", "/sandal2.jpg", "/sandal3.jpg", "/sandal4.jpg"]
  },

  // --- MEN COLLECTION: SNEAKERS ---
  {
    id: 10,
    name: "Stylish Sneakers",
    category: "sneakers",
    gender: "Men",
    price: 140,
    oldPrice: 175,
    badge: "New",
    image: "/sneaker1.jpg",
    images: ["/sneaker1.jpg", "/sneaker2.jpg", "/sneaker3.jpg", "/sneaker4.jpg", "/sneaker5.jpg", "/sneaker6.jpg"]
  },
  {
    id: 101,
    name: "Urban Street Sneaker",
    category: "sneakers",
    gender: "Men",
    price: 150,
    oldPrice: 190,
    badge: "Trending",
    image: "/sneaker2.jpg",
    images: ["/sneaker2.jpg", "/sneaker1.jpg", "/sneaker3.jpg", "/sneaker4.jpg", "/sneaker5.jpg", "/sneaker6.jpg"]
  },
  {
    id: 102,
    name: "Athletic Runner",
    category: "sneakers",
    gender: "Men",
    price: 160,
    oldPrice: 200,
    badge: "Best Seller",
    image: "/sneaker3.jpg",
    images: ["/sneaker3.jpg", "/sneaker1.jpg", "/sneaker2.jpg", "/sneaker4.jpg", "/sneaker5.jpg", "/sneaker6.jpg"]
  },
  {
    id: 103,
    name: "Minimalist White Sneaker",
    category: "sneakers",
    gender: "Men",
    price: 135,
    oldPrice: 170,
    badge: "Popular",
    image: "/sneaker4.jpg",
    images: ["/sneaker4.jpg", "/sneaker1.jpg", "/sneaker2.jpg", "/sneaker3.jpg", "/sneaker5.jpg", "/sneaker6.jpg"]
  },
  {
    id: 104,
    name: "High-Top Fashion Sneaker",
    category: "sneakers",
    gender: "Men",
    price: 175,
    oldPrice: 220,
    badge: "Exclusive",
    image: "/sneaker5.jpg",
    images: ["/sneaker5.jpg", "/sneaker1.jpg", "/sneaker2.jpg", "/sneaker3.jpg", "/sneaker4.jpg", "/sneaker6.jpg"]
  },
  {
    id: 105,
    name: "Classic Retro Sneaker",
    category: "sneakers",
    gender: "Men",
    price: 145,
    oldPrice: 180,
    badge: "Premium",
    image: "/sneaker6.jpg",
    images: ["/sneaker6.jpg", "/sneaker1.jpg", "/sneaker2.jpg", "/sneaker3.jpg", "/sneaker4.jpg", "/sneaker5.jpg"]
  }
];

export default products;