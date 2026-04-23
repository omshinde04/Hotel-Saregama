export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export const PHONE = "9403444438";
export const PHONE_HREF = `tel:+91${PHONE}`;
export const WHATSAPP_HREF = `https://wa.me/91${PHONE}`;

/* 🔥 Marquee Items (SEO-friendly food keywords included) */
export const MARQUEE_ITEMS = [
    "🍗 Chicken Lollipop",
    "🍛 Dum Biryani",
    "🥘 Butter Chicken",
    "🍺 Full Bar",
    "🛣️ Highway Stop",
    "👨‍👩‍👧 Family Friendly",
    "🏍️ Biker Friendly",
    "🌙 Open Late",
];

export const DISHES = [
    {
        name: "Chicken Lollipop",
        price: "₹140 / ₹280", // ✅ from real menu
        desc: "Crispy outside, juicy inside — our most-ordered starter with a secret highway spice blend.",
        image: "/images/dishes/chicken-lollipop-saregama.jpg",
        alt: "Crispy deep-fried chicken lollipop served with spicy sauce",
        tag: "Best Seller",
    },
    {
        name: "Chicken Biryani",
        price: "₹220", // ✅ from real menu
        desc: "Slow-cooked dum biryani using authentic hand-ground spices — a meal that makes the journey worth it.",
        image: "/images/dishes/chicken-biryani-ghoti-nashik.jpg",
        alt: "Fragrant chicken biryani in a traditional clay pot",
        tag: "Must Try",
    },
    {
        name: "Butter Chicken",
        price: "₹300 / ₹800", // ✅ from real menu
        desc: "Rich, velvety tomato makhani with tender charcoal-smoked chicken — comfort in every bite.",
        image: "/images/dishes/butter-chicken-saregama.jpg",
        alt: "Creamy butter chicken in a copper bowl",
        tag: "Classic",
    },
];
//about features
export const FEATURES = [
    "Spacious AC & Non-AC Dining Areas",
    "Premium Full Bar Experience",
    "Ample Parking for Cars & Bikes",
    "Easy Highway Access & Exit",
];


//menu
export const MENU_CATEGORIES = [
    {
        label: "Starters",
        icon: "starters",
        items: [
            {
                name: "Chicken Lollipop",
                price: "₹140 / ₹280",
                desc: "Crispy fried with secret spice blend",
            },
            {
                name: "Chicken 65",
                price: "₹220",
                desc: "Spicy deep-fried chicken bites",
            },
            {
                name: "Chicken Chilli",
                price: "₹220 / ₹120",
                desc: "Indo-Chinese classic with bold flavors",
            },
            {
                name: "Chicken Spring Onion",
                price: "₹300",
                desc: "Tossed with fresh spring onions",
            },
            {
                name: "Chicken Garlic Roast",
                price: "₹300",
                desc: "Garlic-infused roasted chicken",
            },
        ],
    },

    {
        label: "Mains",
        icon: "mains",
        items: [
            {
                name: "Butter Chicken",
                price: "₹300 / ₹800",
                desc: "Velvety tomato makhani gravy",
            },
            {
                name: "Chicken Kolhapuri",
                price: "₹250",
                desc: "Spicy Kolhapuri-style chicken",
            },
            {
                name: "Chicken Handi",
                price: "₹350 / ₹700",
                desc: "Clay pot slow-cooked chicken",
            },
            {
                name: "Mutton Handi",
                price: "₹550 / ₹1100",
                desc: "Rich mutton curry cooked in handi",
            },
            {
                name: "Paneer Butter Masala",
                price: "₹250",
                desc: "Creamy paneer in butter gravy",
            },
        ],
    },

    {
        label: "Biryani",
        icon: "biryani",
        items: [
            {
                name: "Chicken Biryani",
                price: "₹220",
                desc: "Authentic dum-style biryani",
            },
            {
                name: "Chicken Matka Biryani",
                price: "₹400 / ₹800",
                desc: "Slow-cooked in sealed clay pot",
            },
            {
                name: "Mutton Matka Biryani",
                price: "₹600 / ₹1200",
                desc: "Premium mutton biryani",
            },
            {
                name: "Mutton Biryani",
                price: "₹300",
                desc: "Rich aromatic mutton rice",
            },
        ],
    },

    {
        label: "Drinks",
        icon: "drinks",
        items: [
            {
                name: "Beer",
                price: "₹220+",
                desc: "Ice cold premium beer",
            },
            {
                name: "Whiskey",
                price: "₹250+",
                desc: "Wide selection of whiskey",
            },
            {
                name: "Vodka",
                price: "₹200+",
                desc: "Smooth premium vodka",
            },
            {
                name: "Rum",
                price: "₹180+",
                desc: "Classic dark & white rum",
            },
        ],
    },
];

export const REVIEWS = [
    {
        name: 'Rahul Mehta',
        role: 'Frequent Highway Traveler',
        rating: 5,
        text: 'The best highway stop between Mumbai and Nashik. The butter chicken is world-class and the ambiance is unexpectedly luxurious. We now plan our trips around stopping here.',
        icon: '🚗',
    },
    {
        name: 'Sameer & Friends',
        role: 'Biker Group from Pune',
        rating: 5,
        text: 'Our biker group stops here every time we ride to Nashik. Chicken Lollipops and chilled beer after a long ride? Absolutely perfect. Ample parking, welcoming staff.',
        icon: '🏍️',
    },
    {
        name: 'Priya Deshmukh',
        role: 'Family Roadtrip — Mumbai',
        rating: 5,
        text: 'Felt like a proper restaurant, not a highway dhaba. Clean, spacious, great food, friendly staff. Kids loved the food. Will definitely stop here on every Nashik trip.',
        icon: '👨‍👩‍👧‍👦',
    },
    {
        name: 'Karthik Nair',
        role: 'Solo Traveler',
        rating: 5,
        text: 'Stumbled upon this gem at night. Full bar, amazing mutton biryani, and the most comfortable seating I\'ve seen on any highway. A true hidden treasure.',
        icon: '✨',
    },
    {
        name: 'Sneha Joshi',
        role: 'Office Trip — Nashik',
        rating: 5,
        text: 'Our office group stop — the team loved it. Great variety, quick service for large groups, and the cocktails were surprisingly good. Highly recommend.',
        icon: '🎉',
    },
]
