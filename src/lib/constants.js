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
            { name: "Chicken Lollipop", price: "₹420", desc: "Crispy fried with secret spice blend" },
            { name: "Paneer Tikka", price: "₹380", desc: "Marinated cottage cheese, charcoal grilled" },
            { name: "Murg Malai Kebab", price: "₹450", desc: "Creamy chicken skewers" },
            { name: "Veg Spring Rolls", price: "₹280", desc: "Crispy rolls with veggies" },
            { name: "Tandoori Prawns", price: "₹520", desc: "Juicy prawns, tandoori masala" },
        ],
    },
    {
        label: "Mains",
        icon: "mains",
        items: [
            { name: "Butter Chicken", price: "₹520", desc: "Velvety tomato gravy" },
            { name: "Dal Makhani", price: "₹350", desc: "Slow cooked lentils" },
            { name: "Chicken Handi", price: "₹510", desc: "Clay pot cooked chicken" },
            { name: "Palak Paneer", price: "₹370", desc: "Spinach & cottage cheese" },
            { name: "Rogan Josh", price: "₹580", desc: "Kashmiri lamb curry" },
        ],
    },
    {
        label: "Biryani",
        icon: "biryani",
        items: [
            { name: "Chicken Biryani", price: "₹550", desc: "Authentic dum style" },
            { name: "Mutton Biryani", price: "₹650", desc: "Tender mutton, rich spices" },
            { name: "Veg Biryani", price: "₹420", desc: "Seasonal vegetables" },
            { name: "Prawn Biryani", price: "₹680", desc: "Coastal style" },
            { name: "Egg Biryani", price: "₹380", desc: "Light & aromatic" },
        ],
    },
    {
        label: "Drinks",
        icon: "drinks",
        items: [
            { name: "Kingfisher Beer", price: "₹220", desc: "Ice cold" },
            { name: "Whiskey Sour", price: "₹350", desc: "Premium blend" },
            { name: "Mango Lassi", price: "₹180", desc: "Fresh & thick" },
            { name: "Mojito", price: "₹280", desc: "Mint & lime" },
            { name: "IMFL Spirits", price: "₹200+", desc: "Wide selection" },
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
