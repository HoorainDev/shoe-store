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
    image: process.env.PUBLIC_URL + "/heel.jpg", 
    images: [process.env.PUBLIC_URL + "/heel.jpg", process.env.PUBLIC_URL + "/heel3.jpg", process.env.PUBLIC_URL + "/heel4.jpg", process.env.PUBLIC_URL + "/heel5.jpg", process.env.PUBLIC_URL + "/heel6.jpg", process.env.PUBLIC_URL + "/heel7.jpg"]
  },
  {
    id: 11,
    name: "Crystal Strap Heels",
    category: "heels",
    gender: "Women",
    price: 145,
    oldPrice: 180,
    badge: "New",
    image: process.env.PUBLIC_URL + "/heel3.jpg", 
    images: [process.env.PUBLIC_URL + "/heel3.jpg", process.env.PUBLIC_URL + "/heel.jpg", process.env.PUBLIC_URL + "/heel4.jpg", process.env.PUBLIC_URL + "/heel5.jpg", process.env.PUBLIC_URL + "/heel6.jpg", process.env.PUBLIC_URL + "/heel7.jpg"]
  },
  {
    id: 12,
    name: "Stiletto Party Heels",
    category: "heels",
    gender: "Women",
    price: 135,
    oldPrice: 165,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/heel4.jpg", 
    images: [process.env.PUBLIC_URL + "/heel4.jpg", process.env.PUBLIC_URL + "/heel.jpg", process.env.PUBLIC_URL + "/heel3.jpg", process.env.PUBLIC_URL + "/heel5.jpg", process.env.PUBLIC_URL + "/heel6.jpg", process.env.PUBLIC_URL + "/heel7.jpg"]
  },
  {
    id: 13,
    name: "Velvet High Heels",
    category: "heels",
    gender: "Women",
    price: 150,
    oldPrice: 190,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/heel5.jpg", 
    images: [process.env.PUBLIC_URL + "/heel5.jpg", process.env.PUBLIC_URL + "/heel.jpg", process.env.PUBLIC_URL + "/heel3.jpg", process.env.PUBLIC_URL + "/heel4.jpg", process.env.PUBLIC_URL + "/heel6.jpg", process.env.PUBLIC_URL + "/heel7.jpg"]
  },
  {
    id: 14,
    name: "Golden Buckle Heels",
    category: "heels",
    gender: "Women",
    price: 125,
    oldPrice: 160,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/heel6.jpg", 
    images: [process.env.PUBLIC_URL + "/heel6.jpg", process.env.PUBLIC_URL + "/heel.jpg", process.env.PUBLIC_URL + "/heel3.jpg", process.env.PUBLIC_URL + "/heel4.jpg", process.env.PUBLIC_URL + "/heel5.jpg", process.env.PUBLIC_URL + "/heel7.jpg"]
  },
  {
    id: 15,
    name: "Classic Platform Heels",
    category: "heels",
    gender: "Women",
    price: 155,
    oldPrice: 195,
    badge: "Premium",
    image: process.env.PUBLIC_URL + "/heel7.jpg", 
    images: [process.env.PUBLIC_URL + "/heel7.jpg", process.env.PUBLIC_URL + "/heel.jpg", process.env.PUBLIC_URL + "/heel3.jpg", process.env.PUBLIC_URL + "/heel4.jpg", process.env.PUBLIC_URL + "/heel5.jpg", process.env.PUBLIC_URL + "/heel6.jpg"]
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
    image: process.env.PUBLIC_URL + "/flat.jpg",
    images: [process.env.PUBLIC_URL + "/flat.jpg", process.env.PUBLIC_URL + "/flat2.jpg", process.env.PUBLIC_URL + "/flat3.jpg", process.env.PUBLIC_URL + "/flat4.jpg", process.env.PUBLIC_URL + "/flat5.jpg", process.env.PUBLIC_URL + "/flat6.jpg"]
  },
  {
    id: 21,
    name: "Designer Casual Flat",
    category: "flat",
    gender: "Women",
    price: 85,
    oldPrice: 110,
    badge: "Sale",
    image: process.env.PUBLIC_URL + "/flat2.jpg",
    images: [process.env.PUBLIC_URL + "/flat2.jpg", process.env.PUBLIC_URL + "/flat.jpg", process.env.PUBLIC_URL + "/flat3.jpg", process.env.PUBLIC_URL + "/flat4.jpg", process.env.PUBLIC_URL + "/flat5.jpg", process.env.PUBLIC_URL + "/flat6.jpg"]
  },
  {
    id: 22,
    name: "Comfort Walk Flat",
    category: "flat",
    gender: "Women",
    price: 95,
    oldPrice: 125,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/flat3.jpg",
    images: [process.env.PUBLIC_URL + "/flat3.jpg", process.env.PUBLIC_URL + "/flat.jpg", process.env.PUBLIC_URL + "/flat2.jpg", process.env.PUBLIC_URL + "/flat4.jpg", process.env.PUBLIC_URL + "/flat5.jpg", process.env.PUBLIC_URL + "/flat6.jpg"]
  },
  {
    id: 23,
    name: "Beaded Summer Flat",
    category: "flat",
    gender: "Women",
    price: 100,
    oldPrice: 130,
    badge: "New",
    image: process.env.PUBLIC_URL + "/flat4.jpg",
    images: [process.env.PUBLIC_URL + "/flat4.jpg", process.env.PUBLIC_URL + "/flat.jpg", process.env.PUBLIC_URL + "/flat2.jpg", process.env.PUBLIC_URL + "/flat3.jpg", process.env.PUBLIC_URL + "/flat5.jpg", process.env.PUBLIC_URL + "/flat6.jpg"]
  },
  {
    id: 24,
    name: "Elegant Office Flat",
    category: "flat",
    gender: "Women",
    price: 105,
    oldPrice: 140,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/flat5.jpg",
    images: [process.env.PUBLIC_URL + "/flat5.jpg", process.env.PUBLIC_URL + "/flat.jpg", process.env.PUBLIC_URL + "/flat2.jpg", process.env.PUBLIC_URL + "/flat3.jpg", process.env.PUBLIC_URL + "/flat4.jpg", process.env.PUBLIC_URL + "/flat6.jpg"]
  },
  {
    id: 25,
    name: "Pearl Embellished Flat",
    category: "flat",
    gender: "Women",
    price: 110,
    oldPrice: 145,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/flat6.jpg",
    images: [process.env.PUBLIC_URL + "/flat6.jpg", process.env.PUBLIC_URL + "/flat.jpg", process.env.PUBLIC_URL + "/flat2.jpg", process.env.PUBLIC_URL + "/flat3.jpg", process.env.PUBLIC_URL + "/flat4.jpg", process.env.PUBLIC_URL + "/flat5.jpg"]
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
    image: process.env.PUBLIC_URL + "/khosa.jpg",
    images: [process.env.PUBLIC_URL + "/khosa.jpg", process.env.PUBLIC_URL + "/khosa1.jpg", process.env.PUBLIC_URL + "/khosa2.jpg", process.env.PUBLIC_URL + "/khosa3.jpg", process.env.PUBLIC_URL + "/khosa4.jpg", process.env.PUBLIC_URL + "/khosa5.jpg"]
  },
  {
    id: 31,
    name: "Golden Thread Khussa",
    category: "khosa",
    gender: "Women",
    price: 95,
    oldPrice: 125,
    badge: "Traditional",
    image: process.env.PUBLIC_URL + "/khosa1.jpg",
    images: [process.env.PUBLIC_URL + "/khosa1.jpg", process.env.PUBLIC_URL + "/khosa.jpg", process.env.PUBLIC_URL + "/khosa2.jpg", process.env.PUBLIC_URL + "/khosa3.jpg", process.env.PUBLIC_URL + "/khosa4.jpg", process.env.PUBLIC_URL + "/khosa5.jpg"]
  },
  {
    id: 32,
    name: "Bridal Khussa",
    category: "khosa",
    gender: "Women",
    price: 130,
    oldPrice: 170,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/khosa2.jpg",
    images: [process.env.PUBLIC_URL + "/khosa2.jpg", process.env.PUBLIC_URL + "/khosa.jpg", process.env.PUBLIC_URL + "/khosa1.jpg", process.env.PUBLIC_URL + "/khosa3.jpg", process.env.PUBLIC_URL + "/khosa4.jpg", process.env.PUBLIC_URL + "/khosa5.jpg"]
  },
  {
    id: 33,
    name: "Handcrafted Khussa",
    category: "khosa",
    gender: "Women",
    price: 105,
    oldPrice: 135,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/khosa3.jpg",
    images: [process.env.PUBLIC_URL + "/khosa3.jpg", process.env.PUBLIC_URL + "/khosa.jpg", process.env.PUBLIC_URL + "/khosa1.jpg", process.env.PUBLIC_URL + "/khosa2.jpg", process.env.PUBLIC_URL + "/khosa4.jpg", process.env.PUBLIC_URL + "/khosa5.jpg"]
  },
  {
    id: 34,
    name: "Velvet Embroidered Khussa",
    category: "khosa",
    gender: "Women",
    price: 115,
    oldPrice: 150,
    badge: "New",
    image: process.env.PUBLIC_URL + "/khosa4.jpg",
    images: [process.env.PUBLIC_URL + "/khosa4.jpg", process.env.PUBLIC_URL + "/khosa.jpg", process.env.PUBLIC_URL + "/khosa1.jpg", process.env.PUBLIC_URL + "/khosa2.jpg", process.env.PUBLIC_URL + "/khosa3.jpg", process.env.PUBLIC_URL + "/khosa5.jpg"]
  },
  {
    id: 35,
    name: "Ethnic Party Khussa",
    category: "khosa",
    gender: "Women",
    price: 120,
    oldPrice: 155,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/khosa5.jpg",
    images: [process.env.PUBLIC_URL + "/khosa5.jpg", process.env.PUBLIC_URL + "/khosa.jpg", process.env.PUBLIC_URL + "/khosa1.jpg", process.env.PUBLIC_URL + "/khosa2.jpg", process.env.PUBLIC_URL + "/khosa3.jpg", process.env.PUBLIC_URL + "/khosa4.jpg"]
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
    image: process.env.PUBLIC_URL + "/formal1.jpg",
    images: [process.env.PUBLIC_URL + "/formal1.jpg", process.env.PUBLIC_URL + "/formal2.jpg", process.env.PUBLIC_URL + "/formal3.jpg", process.env.PUBLIC_URL + "/formal4.jpg", process.env.PUBLIC_URL + "/formal5.jpg", process.env.PUBLIC_URL + "/formal6.jpg"]
  },
  {
    id: 41,
    name: "Executive Office Shoe",
    category: "formal",
    gender: "Women",
    price: 145,
    oldPrice: 175,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/formal2.jpg",
    images: [process.env.PUBLIC_URL + "/formal2.jpg", process.env.PUBLIC_URL + "/formal1.jpg", process.env.PUBLIC_URL + "/formal3.jpg", process.env.PUBLIC_URL + "/formal4.jpg", process.env.PUBLIC_URL + "/formal5.jpg", process.env.PUBLIC_URL + "/formal6.jpg"]
  },
  {
    id: 42,
    name: "Classic Oxford Formal",
    category: "formal",
    gender: "Women",
    price: 165,
    oldPrice: 200,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/formal3.jpg",
    images: [process.env.PUBLIC_URL + "/formal3.jpg", process.env.PUBLIC_URL + "/formal1.jpg", process.env.PUBLIC_URL + "/formal2.jpg", process.env.PUBLIC_URL + "/formal4.jpg", process.env.PUBLIC_URL + "/formal5.jpg", process.env.PUBLIC_URL + "/formal6.jpg"]
  },
  {
    id: 43,
    name: "Glossy Formal Pump",
    category: "formal",
    gender: "Women",
    price: 150,
    oldPrice: 185,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/formal4.jpg",
    images: [process.env.PUBLIC_URL + "/formal4.jpg", process.env.PUBLIC_URL + "/formal1.jpg", process.env.PUBLIC_URL + "/formal2.jpg", process.env.PUBLIC_URL + "/formal3.jpg", process.env.PUBLIC_URL + "/formal5.jpg", process.env.PUBLIC_URL + "/formal6.jpg"]
  },
  {
    id: 44,
    name: "Smart Business Shoe",
    category: "formal",
    gender: "Women",
    price: 155,
    oldPrice: 190,
    badge: "New",
    image: process.env.PUBLIC_URL + "/formal5.jpg",
    images: [process.env.PUBLIC_URL + "/formal5.jpg", process.env.PUBLIC_URL + "/formal1.jpg", process.env.PUBLIC_URL + "/formal2.jpg", process.env.PUBLIC_URL + "/formal3.jpg", process.env.PUBLIC_URL + "/formal4.jpg", process.env.PUBLIC_URL + "/formal6.jpg"]
  },
  {
    id: 45,
    name: "Luxe Black Formal",
    category: "formal",
    gender: "Women",
    price: 170,
    oldPrice: 210,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/formal6.jpg",
    images: [process.env.PUBLIC_URL + "/formal6.jpg", process.env.PUBLIC_URL + "/formal1.jpg", process.env.PUBLIC_URL + "/formal2.jpg", process.env.PUBLIC_URL + "/formal3.jpg", process.env.PUBLIC_URL + "/formal4.jpg", process.env.PUBLIC_URL + "/formal5.jpg"]
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
    image: process.env.PUBLIC_URL + "/bootgirls.jpg",
    images: [process.env.PUBLIC_URL + "/bootgirls.jpg", process.env.PUBLIC_URL + "/ladiesboot1.jpg", process.env.PUBLIC_URL + "/ladiesboot2.jpg", process.env.PUBLIC_URL + "/ladiesboot3.jpg", process.env.PUBLIC_URL + "/ladiesboot4.jpg", process.env.PUBLIC_URL + "/ladiesboot5.jpg"]
  },
  {
    id: 51,
    name: "Ankle Leather Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 170,
    oldPrice: 210,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/ladiesboot1.jpg",
    images: [process.env.PUBLIC_URL + "/ladiesboot1.jpg", process.env.PUBLIC_URL + "/bootgirls.jpg", process.env.PUBLIC_URL + "/ladiesboot2.jpg", process.env.PUBLIC_URL + "/ladiesboot3.jpg", process.env.PUBLIC_URL + "/ladiesboot4.jpg", process.env.PUBLIC_URL + "/ladiesboot5.jpg"]
  },
  {
    id: 52,
    name: "Long Winter Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 200,
    oldPrice: 245,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/ladiesboot2.jpg",
    images: [process.env.PUBLIC_URL + "/ladiesboot2.jpg", process.env.PUBLIC_URL + "/bootgirls.jpg", process.env.PUBLIC_URL + "/ladiesboot1.jpg", process.env.PUBLIC_URL + "/ladiesboot3.jpg", process.env.PUBLIC_URL + "/ladiesboot4.jpg", process.env.PUBLIC_URL + "/ladiesboot5.jpg"]
  },
  {
    id: 53,
    name: "Suede Fashion Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 190,
    oldPrice: 230,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/ladiesboot3.jpg",
    images: [process.env.PUBLIC_URL + "/ladiesboot3.jpg", process.env.PUBLIC_URL + "/bootgirls.jpg", process.env.PUBLIC_URL + "/ladiesboot1.jpg", process.env.PUBLIC_URL + "/ladiesboot2.jpg", process.env.PUBLIC_URL + "/ladiesboot4.jpg", process.env.PUBLIC_URL + "/ladiesboot5.jpg"]
  },
  {
    id: 54,
    name: "Buckle Accent Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 185,
    oldPrice: 225,
    badge: "New",
    image: process.env.PUBLIC_URL + "/ladiesboot4.jpg",
    images: [process.env.PUBLIC_URL + "/ladiesboot4.jpg", process.env.PUBLIC_URL + "/bootgirls.jpg", process.env.PUBLIC_URL + "/ladiesboot1.jpg", process.env.PUBLIC_URL + "/ladiesboot2.jpg", process.env.PUBLIC_URL + "/ladiesboot3.jpg", process.env.PUBLIC_URL + "/ladiesboot5.jpg"]
  },
  {
    id: 55,
    name: "High Heel Winter Boot",
    category: "ladiesboot",
    gender: "Women",
    price: 210,
    oldPrice: 260,
    badge: "Premium",
    image: process.env.PUBLIC_URL + "/ladiesboot5.jpg",
    images: [process.env.PUBLIC_URL + "/ladiesboot5.jpg", process.env.PUBLIC_URL + "/bootgirls.jpg", process.env.PUBLIC_URL + "/ladiesboot1.jpg", process.env.PUBLIC_URL + "/ladiesboot2.jpg", process.env.PUBLIC_URL + "/ladiesboot3.jpg", process.env.PUBLIC_URL + "/ladiesboot4.jpg"]
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
    image: process.env.PUBLIC_URL + "/chapal.jpg",
    images: [process.env.PUBLIC_URL + "/chapal.jpg", process.env.PUBLIC_URL + "/chappal1.jpg", process.env.PUBLIC_URL + "/chappal2.jpg", process.env.PUBLIC_URL + "/chappal3.jpg", process.env.PUBLIC_URL + "/chappal4.jpg", process.env.PUBLIC_URL + "/chappal5.jpg"]
  },
  {
    id: 61,
    name: "Peshawari Chappal Deluxe",
    category: "chappal",
    gender: "Men",
    price: 110,
    oldPrice: 145,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/chappal1.jpg",
    images: [process.env.PUBLIC_URL + "/chappal1.jpg", process.env.PUBLIC_URL + "/chapal.jpg", process.env.PUBLIC_URL + "/chappal2.jpg", process.env.PUBLIC_URL + "/chappal3.jpg", process.env.PUBLIC_URL + "/chappal4.jpg", process.env.PUBLIC_URL + "/chappal5.jpg"]
  },
  {
    id: 62,
    name: "Classic Leather Chappal",
    category: "chappal",
    gender: "Men",
    price: 100,
    oldPrice: 135,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/chappal2.jpg",
    images: [process.env.PUBLIC_URL + "/chappal2.jpg", process.env.PUBLIC_URL + "/chapal.jpg", process.env.PUBLIC_URL + "/chappal1.jpg", process.env.PUBLIC_URL + "/chappal3.jpg", process.env.PUBLIC_URL + "/chappal4.jpg", process.env.PUBLIC_URL + "/chappal5.jpg"]
  },
  {
    id: 63,
    name: "Royal Stitch Chappal",
    category: "chappal",
    gender: "Men",
    price: 115,
    oldPrice: 150,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/chappal3.jpg",
    images: [process.env.PUBLIC_URL + "/chappal3.jpg", process.env.PUBLIC_URL + "/chapal.jpg", process.env.PUBLIC_URL + "/chappal1.jpg", process.env.PUBLIC_URL + "/chappal2.jpg", process.env.PUBLIC_URL + "/chappal4.jpg", process.env.PUBLIC_URL + "/chappal5.jpg"]
  },
  {
    id: 64,
    name: "Comfort Sole Chappal",
    category: "chappal",
    gender: "Men",
    price: 90,
    oldPrice: 120,
    badge: "New",
    image: process.env.PUBLIC_URL + "/chappal4.jpg",
    images: [process.env.PUBLIC_URL + "/chappal4.jpg", process.env.PUBLIC_URL + "/chapal.jpg", process.env.PUBLIC_URL + "/chappal1.jpg", process.env.PUBLIC_URL + "/chappal2.jpg", process.env.PUBLIC_URL + "/chappal3.jpg", process.env.PUBLIC_URL + "/chappal5.jpg"]
  },
  {
    id: 65,
    name: "Embossed Men Chappal",
    category: "chappal",
    gender: "Men",
    price: 120,
    oldPrice: 160,
    badge: "Premium",
    image: process.env.PUBLIC_URL + "/chappal5.jpg",
    images: [process.env.PUBLIC_URL + "/chappal5.jpg", process.env.PUBLIC_URL + "/chapal.jpg", process.env.PUBLIC_URL + "/chappal1.jpg", process.env.PUBLIC_URL + "/chappal2.jpg", process.env.PUBLIC_URL + "/chappal3.jpg", process.env.PUBLIC_URL + "/chappal4.jpg"]
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
    image: process.env.PUBLIC_URL + "/kheri1.jpg",
    images: [process.env.PUBLIC_URL + "/kheri1.jpg", process.env.PUBLIC_URL + "/kheri2.jpg", process.env.PUBLIC_URL + "/kheri3.jpg", process.env.PUBLIC_URL + "/kheri4.jpg", process.env.PUBLIC_URL + "/kheri5.jpg", process.env.PUBLIC_URL + "/kheri6.jpg"]
  },
  {
    id: 71,
    name: "Handmade Royal Kheri",
    category: "kheri",
    gender: "Men",
    price: 125,
    oldPrice: 160,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/kheri2.jpg",
    images: [process.env.PUBLIC_URL + "/kheri2.jpg", process.env.PUBLIC_URL + "/kheri1.jpg", process.env.PUBLIC_URL + "/kheri3.jpg", process.env.PUBLIC_URL + "/kheri4.jpg", process.env.PUBLIC_URL + "/kheri5.jpg", process.env.PUBLIC_URL + "/kheri6.jpg"]
  },
  {
    id: 72,
    name: "Classic Brown Kheri",
    category: "kheri",
    gender: "Men",
    price: 110,
    oldPrice: 140,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/kheri3.jpg",
    images: [process.env.PUBLIC_URL + "/kheri3.jpg", process.env.PUBLIC_URL + "/kheri1.jpg", process.env.PUBLIC_URL + "/kheri2.jpg", process.env.PUBLIC_URL + "/kheri4.jpg", process.env.PUBLIC_URL + "/kheri5.jpg", process.env.PUBLIC_URL + "/kheri6.jpg"]
  },
  {
    id: 73,
    name: "Traditional Formal Kheri",
    category: "kheri",
    gender: "Men",
    price: 130,
    oldPrice: 170,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/kheri4.jpg",
    images: [process.env.PUBLIC_URL + "/kheri4.jpg", process.env.PUBLIC_URL + "/kheri1.jpg", process.env.PUBLIC_URL + "/kheri2.jpg", process.env.PUBLIC_URL + "/kheri3.jpg", process.env.PUBLIC_URL + "/kheri5.jpg", process.env.PUBLIC_URL + "/kheri6.jpg"]
  },
  {
    id: 74,
    name: "Designer Ethnic Kheri",
    category: "kheri",
    gender: "Men",
    price: 120,
    oldPrice: 155,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/kheri5.jpg",
    images: [process.env.PUBLIC_URL + "/kheri5.jpg", process.env.PUBLIC_URL + "/kheri1.jpg", process.env.PUBLIC_URL + "/kheri2.jpg", process.env.PUBLIC_URL + "/kheri3.jpg", process.env.PUBLIC_URL + "/kheri4.jpg", process.env.PUBLIC_URL + "/kheri6.jpg"]
  },
  {
    id: 75,
    name: "Elite Black Kheri",
    category: "kheri",
    gender: "Men",
    price: 140,
    oldPrice: 180,
    badge: "Premium",
    image: process.env.PUBLIC_URL + "/kheri6.jpg",
    images: [process.env.PUBLIC_URL + "/kheri6.jpg", process.env.PUBLIC_URL + "/kheri1.jpg", process.env.PUBLIC_URL + "/kheri2.jpg", process.env.PUBLIC_URL + "/kheri3.jpg", process.env.PUBLIC_URL + "/kheri4.jpg", process.env.PUBLIC_URL + "/kheri5.jpg"]
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
    image: process.env.PUBLIC_URL + "/bootboys.jpg",
    images: [process.env.PUBLIC_URL + "/bootboys.jpg", process.env.PUBLIC_URL + "/boot1.jpg", process.env.PUBLIC_URL + "/boot2.jpg", process.env.PUBLIC_URL + "/boot3.jpg", process.env.PUBLIC_URL + "/boot4.jpg", process.env.PUBLIC_URL + "/boot5.jpg"]
  },
  {
    id: 81,
    name: "Rugged Leather Boot",
    category: "boot",
    gender: "Men",
    price: 195,
    oldPrice: 240,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/boot1.jpg",
    images: [process.env.PUBLIC_URL + "/boot1.jpg", process.env.PUBLIC_URL + "/bootboys.jpg", process.env.PUBLIC_URL + "/boot2.jpg", process.env.PUBLIC_URL + "/boot3.jpg", process.env.PUBLIC_URL + "/boot4.jpg", process.env.PUBLIC_URL + "/boot5.jpg"]
  },
  {
    id: 82,
    name: "Urban Casual Boot",
    category: "boot",
    gender: "Men",
    price: 185,
    oldPrice: 230,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/boot2.jpg",
    images: [process.env.PUBLIC_URL + "/boot2.jpg", process.env.PUBLIC_URL + "/bootboys.jpg", process.env.PUBLIC_URL + "/boot1.jpg", process.env.PUBLIC_URL + "/boot3.jpg", process.env.PUBLIC_URL + "/boot4.jpg", process.env.PUBLIC_URL + "/boot5.jpg"]
  },
  {
    id: 83,
    name: "Classic Ankle Boot",
    category: "boot",
    gender: "Men",
    price: 205,
    oldPrice: 250,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/boot3.jpg",
    images: [process.env.PUBLIC_URL + "/boot3.jpg", process.env.PUBLIC_URL + "/bootboys.jpg", process.env.PUBLIC_URL + "/boot1.jpg", process.env.PUBLIC_URL + "/boot2.jpg", process.env.PUBLIC_URL + "/boot4.jpg", process.env.PUBLIC_URL + "/boot5.jpg"]
  },
  {
    id: 84,
    name: "Heavy Duty Work Boot",
    category: "boot",
    gender: "Men",
    price: 220,
    oldPrice: 270,
    badge: "Exclusive",
    image: process.env.PUBLIC_URL + "/boot4.jpg",
    images: [process.env.PUBLIC_URL + "/boot4.jpg", process.env.PUBLIC_URL + "/bootboys.jpg", process.env.PUBLIC_URL + "/boot1.jpg", process.env.PUBLIC_URL + "/boot2.jpg", process.env.PUBLIC_URL + "/boot3.jpg", process.env.PUBLIC_URL + "/boot5.jpg"]
  },
  {
    id: 85,
    name: "Hiker Style Boot",
    category: "boot",
    gender: "Men",
    price: 215,
    oldPrice: 260,
    badge: "New",
    image: process.env.PUBLIC_URL + "/boot5.jpg",
    images: [process.env.PUBLIC_URL + "/boot5.jpg", process.env.PUBLIC_URL + "/bootboys.jpg", process.env.PUBLIC_URL + "/boot1.jpg", process.env.PUBLIC_URL + "/boot2.jpg", process.env.PUBLIC_URL + "/boot3.jpg", process.env.PUBLIC_URL + "/boot4.jpg"]
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
    image: process.env.PUBLIC_URL + "/sandal.jpg",
    images: [process.env.PUBLIC_URL + "/sandal.jpg", process.env.PUBLIC_URL + "/sandal1.jpg", process.env.PUBLIC_URL + "/sandal2.jpg", process.env.PUBLIC_URL + "/sandal3.jpg", process.env.PUBLIC_URL + "/sandal4.jpg", process.env.PUBLIC_URL + "/sandal5.jpg"]
  },
  {
    id: 91,
    name: "Sporty Men Sandal",
    category: "sandal",
    gender: "Men",
    price: 115,
    oldPrice: 145,
    badge: "Popular",
    image: process.env.PUBLIC_URL + "/sandal1.jpg",
    images: [process.env.PUBLIC_URL + "/sandal1.jpg", process.env.PUBLIC_URL + "/sandal.jpg", process.env.PUBLIC_URL + "/sandal2.jpg", process.env.PUBLIC_URL + "/sandal3.jpg", process.env.PUBLIC_URL + "/sandal4.jpg", process.env.PUBLIC_URL + "/sandal5.jpg"]
  },
  {
    id: 92,
    name: "Outdoor Grip Sandal",
    category: "sandal",
    gender: "Men",
    price: 120,
    oldPrice: 150,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/sandal2.jpg",
    images: [process.env.PUBLIC_URL + "/sandal2.jpg", process.env.PUBLIC_URL + "/sandal.jpg", process.env.PUBLIC_URL + "/sandal1.jpg", process.env.PUBLIC_URL + "/sandal3.jpg", process.env.PUBLIC_URL + "/sandal4.jpg", process.env.PUBLIC_URL + "/sandal5.jpg"]
  },
  {
    id: 93,
    name: "Leather Strap Sandal",
    category: "sandal",
    gender: "Men",
    price: 110,
    oldPrice: 140,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/sandal3.jpg",
    images: [process.env.PUBLIC_URL + "/sandal3.jpg", process.env.PUBLIC_URL + "/sandal.jpg", process.env.PUBLIC_URL + "/sandal1.jpg", process.env.PUBLIC_URL + "/sandal2.jpg", process.env.PUBLIC_URL + "/sandal4.jpg", process.env.PUBLIC_URL + "/sandal5.jpg"]
  },
  {
    id: 94,
    name: "Beach Walk Sandal",
    category: "sandal",
    gender: "Men",
    price: 95,
    oldPrice: 125,
    badge: "New",
    image: process.env.PUBLIC_URL + "/sandal4.jpg",
    images: [process.env.PUBLIC_URL + "/sandal4.jpg", process.env.PUBLIC_URL + "/sandal.jpg", process.env.PUBLIC_URL + "/sandal1.jpg", process.env.PUBLIC_URL + "/sandal2.jpg", process.env.PUBLIC_URL + "/sandal3.jpg", process.env.PUBLIC_URL + "/sandal5.jpg"]
  },
  {
    id: 95,
    name: "Executive Comfort Sandal",
    category: "sandal",
    gender: "Men",
    price: 125,
    oldPrice: 160,
    badge: "Premium",
    image: process.env.PUBLIC_URL + "/sandal5.jpg",
    images: [process.env.PUBLIC_URL + "/sandal5.jpg", process.env.PUBLIC_URL + "/sandal.jpg", process.env.PUBLIC_URL + "/sandal1.jpg", process.env.PUBLIC_URL + "/sandal2.jpg", process.env.PUBLIC_URL + "/sandal3.jpg", process.env.PUBLIC_URL + "/sandal4.jpg"]
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
    image: process.env.PUBLIC_URL + "/sneaker1.jpg",
    images: [process.env.PUBLIC_URL + "/sneaker1.jpg", process.env.PUBLIC_URL + "/sneaker2.jpg", process.env.PUBLIC_URL + "/sneaker3.jpg", process.env.PUBLIC_URL + "/sneaker4.jpg", process.env.PUBLIC_URL + "/sneaker5.jpg", process.env.PUBLIC_URL + "/sneaker6.jpg"]
  },
  {
    id: 101,
    name: "Urban Street Sneaker",
    category: "sneakers",
    gender: "Men",
    price: 150,
    oldPrice: 190,
    badge: "Trending",
    image: process.env.PUBLIC_URL + "/sneaker2.jpg",
    images: [process.env.PUBLIC_URL + "/sneaker2.jpg", process.env.PUBLIC_URL + "/sneaker1.jpg", process.env.PUBLIC_URL + "/sneaker3.jpg", process.env.PUBLIC_URL + "/sneaker4.jpg", process.env.PUBLIC_URL + "/sneaker5.jpg", process.env.PUBLIC_URL + "/sneaker6.jpg"]
  },
  {
    id: 102,
    name: "Athletic Runner",
    category: "sneakers",
    gender: "Men",
    price: 160,
    oldPrice: 200,
    badge: "Best Seller",
    image: process.env.PUBLIC_URL + "/sneaker3.jpg",
    images: [process.env.PUBLIC_URL + "/sneaker3.jpg", process.env.PUBLIC_URL + "/sneaker1.jpg", process.env.PUBLIC_URL + "/sneaker2.jpg", process.env.PUBLIC_URL