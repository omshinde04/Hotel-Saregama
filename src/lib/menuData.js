import {
    FaDrumstickBite,
    FaFire,
    FaUtensils,
    FaLeaf,
    FaBreadSlice,
    FaMugHot,
    FaWineGlassAlt,
} from "react-icons/fa";

import { MdRiceBowl } from "react-icons/md";

export const MENU_DATA = [
    {
        category: "Chicken",
        icon: FaDrumstickBite,
        items: [
            {
                name: "Chicken Lollipop",
                price: "₹140 / ₹280",
                type: "non-veg",
                sub: "Starters",
                tag: "Best Seller",
            },
            {
                name: "Chicken 65",
                price: "₹220",
                type: "non-veg",
                sub: "Starters",
                spicy: true,
            },
            {
                name: "Chicken Chilli",
                price: "₹220 / ₹120",
                type: "non-veg",
                sub: "Starters",
            },
            {
                name: "Chicken Spring Onion",
                price: "₹300",
                type: "non-veg",
                sub: "Starters",
            },
            {
                name: "Chicken Garlic Roast",
                price: "₹300",
                type: "non-veg",
                sub: "Starters",
            },
        ],
    },

    {
        category: "Tandoor",
        icon: FaFire,
        items: [
            {
                name: "Chicken Tandoori",
                price: "₹220 / ₹440",
                type: "non-veg",
                sub: "Tandoor",
                tag: "Must Try",
            },
            {
                name: "Chicken Tikka",
                price: "₹250",
                type: "non-veg",
                sub: "Tandoor",
            },
            {
                name: "Chicken Angara Kebab",
                price: "₹280",
                type: "non-veg",
                sub: "Tandoor",
            },
            {
                name: "Chicken Seekh Kebab",
                price: "₹280",
                type: "non-veg",
                sub: "Tandoor",
            },
            {
                name: "Chicken Malai Tikka",
                price: "₹280",
                type: "non-veg",
                sub: "Tandoor",
            },
        ],
    },

    {
        category: "Biryani",
        icon: MdRiceBowl,
        items: [
            {
                name: "Chicken Biryani",
                price: "₹220",
                type: "non-veg",
                sub: "Biryani",
                tag: "Popular",
            },
            {
                name: "Chicken Matka Biryani",
                price: "₹400 / ₹800",
                type: "non-veg",
                sub: "Biryani",
            },
            {
                name: "Mutton Matka Biryani",
                price: "₹600 / ₹1200",
                type: "non-veg",
                sub: "Biryani",
            },
            {
                name: "Mutton Biryani",
                price: "₹300",
                type: "non-veg",
                sub: "Biryani",
            },
        ],
    },

    {
        category: "Main Course",
        icon: FaUtensils,
        items: [
            {
                name: "Butter Chicken",
                price: "₹300 / ₹800",
                type: "non-veg",
                sub: "Non-Veg Main",
                tag: "Best Seller",
            },
            {
                name: "Chicken Kolhapuri",
                price: "₹250",
                type: "non-veg",
                sub: "Non-Veg Main",
                spicy: true,
            },
            {
                name: "Chicken Handi",
                price: "₹350 / ₹700",
                type: "non-veg",
                sub: "Non-Veg Main",
            },
            {
                name: "Mutton Handi",
                price: "₹550 / ₹1100",
                type: "non-veg",
                sub: "Non-Veg Main",
            },

            {
                name: "Paneer Butter Masala",
                price: "₹250",
                type: "veg",
                sub: "Veg Main",
            },
            {
                name: "Kaju Masala",
                price: "₹220",
                type: "veg",
                sub: "Veg Main",
            },
            {
                name: "Palak Paneer",
                price: "₹220",
                type: "veg",
                sub: "Veg Main",
            },
            {
                name: "Veg Kolhapuri",
                price: "₹200",
                type: "veg",
                sub: "Veg Main",
                spicy: true,
            },
        ],
    },

    {
        category: "Chinese",
        icon: FaUtensils,
        items: [
            {
                name: "Veg Fried Rice",
                price: "₹150",
                type: "veg",
                sub: "Rice & Noodles",
            },
            {
                name: "Paneer Fried Rice",
                price: "₹250",
                type: "veg",
                sub: "Rice & Noodles",
            },
            {
                name: "Chicken Fried Rice",
                price: "₹180",
                type: "non-veg",
                sub: "Rice & Noodles",
            },
            {
                name: "Chicken Schezwan Rice",
                price: "₹200",
                type: "non-veg",
                sub: "Rice & Noodles",
                spicy: true,
            },
        ],
    },

    {
        category: "Breads",
        icon: FaBreadSlice,
        items: [
            { name: "Butter Roti", price: "₹30", type: "veg", sub: "Roti & Naan" },
            { name: "Kulcha", price: "₹50", type: "veg", sub: "Roti & Naan" },
            { name: "Garlic Naan", price: "₹80 / ₹120", type: "veg", sub: "Roti & Naan" },
            { name: "Paneer Paratha", price: "₹140", type: "veg", sub: "Paratha" },
        ],
    },

    {
        category: "Soups",
        icon: FaMugHot,
        items: [
            { name: "Chicken Soup", price: "₹170 / ₹190", type: "non-veg", sub: "Soup" },
            { name: "Chicken Manchow Soup", price: "₹180 / ₹190", type: "non-veg", sub: "Soup" },
            { name: "Mutton Soup", price: "₹200 / ₹210", type: "non-veg", sub: "Soup" },
            { name: "Veg Manchow Soup", price: "₹130 / ₹160", type: "veg", sub: "Soup" },
        ],
    },

    {
        category: "Drinks & Bar",
        icon: FaWineGlassAlt,
        items: [
            { name: "Beer", price: "₹220+", type: "veg", sub: "Alcohol" },
            { name: "Whiskey", price: "₹250+", type: "veg", sub: "Alcohol" },
            { name: "Vodka", price: "₹200+", type: "veg", sub: "Alcohol" },
            { name: "Rum", price: "₹180+", type: "veg", sub: "Alcohol" },
        ],
    },
];