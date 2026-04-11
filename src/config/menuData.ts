import type { MenuItem, MenuSizePrice } from "./restaurant";

import foodBiryani from "@/assets/food-biryani.jpg";
import foodBiryani2 from "@/assets/food-biryani-2.jpg";
import foodRice from "@/assets/food-rice.jpg";
import foodRice2 from "@/assets/food-rice-2.jpg";
import foodBeverage from "@/assets/food-beverage.jpg";
import foodBeverage2 from "@/assets/food-beverage-2.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodPasta2 from "@/assets/food-pasta-2.jpg";
import foodNoodles from "@/assets/food-noodles.jpg";
import foodNoodles2 from "@/assets/food-noodles-2.jpg";

/** Default Medium / Large prices — edit per dish in this file. */
const sz = (medium: number, large: number): MenuSizePrice[] => [
  { label: "Medium", price: medium },
  { label: "Large", price: large },
];

export const menuItems: MenuItem[] = [
  // Biryani
  {
    id: "b1",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with spiced chicken, served with raita and salan.",
    sizes: sz(500, 1050),
    category: "Biryani",
    image: foodBiryani,
    isPopular: true,
  },
  {
    id: "b2",
    name: "Mutton Biryani",
    description: "Slow-cooked mutton with saffron rice, traditional spices, and fresh herbs.",
    sizes: sz(500, 1050),
    category: "Biryani",
    image: foodBiryani2,
  },
  {
    id: "b3",
    name: "Egg Biryani",
    description: "Aromatic rice with boiled eggs, fried onions, and whole spices.",
    sizes: sz(500, 1050),
    category: "Biryani",
    image: foodBiryani,
  },
  {
    id: "b4",
    name: "Prawn Biryani",
    description: "Coastal-style prawns with coconut, aromatic rice, and a bold spice blend.",
    sizes: sz(500, 1050),
    category: "Biryani",
    image: foodBiryani2,
    isPopular: true,
  },
  {
    id: "b5",
    name: "Vegetable Biryani",
    description: "Seasonal vegetables with saffron basmati, cashews, and mild spices.",
    sizes: sz(500, 1050),
    category: "Biryani",
    image: foodBiryani,
  },
  {
    id: "b6",
    name: "Special Dum Biryani",
    description: "Chef’s dum-style biryani sealed and slow-cooked for deep flavour.",
    sizes: sz(500, 1050),
    category: "Biryani",
    image: foodBiryani2,
  },

  // Fried Rice
  {
    id: "r1",
    name: "Chicken Fried Rice",
    description: "Wok-fried rice with chicken, vegetables, soy, and spring onion.",
    sizes: sz(500, 1050),
    category: "Fried Rice",
    image: foodRice,
    isPopular: true,
  },
  {
    id: "r2",
    name: "Seafood Fried Rice",
    description: "Mixed seafood with garlic, vegetables, and seasoned fried rice.",
    sizes: sz(500, 1050),
    category: "Fried Rice",
    image: foodRice2,
  },
  {
    id: "r3",
    name: "Vegetable Fried Rice",
    description: "Garden vegetables tossed with rice, herbs, and light sesame oil.",
    sizes: sz(500, 1050),
    category: "Fried Rice",
    image: foodRice,
  },
  {
    id: "r4",
    name: "Egg Fried Rice",
    description: "Fluffy egg with fried rice, spring onion, and cracked pepper.",
    sizes: sz(500, 1050),
    category: "Fried Rice",
    image: foodRice2,
  },
  {
    id: "r5",
    name: "Nasi Goreng",
    description: "Indonesian-style rice with shrimp paste, chicken, and a fried egg on top.",
    sizes: sz(500, 1050),
    category: "Fried Rice",
    image: foodRice,
    isPopular: true,
  },
  {
    id: "r6",
    name: "Thai Basil Rice",
    description: "Fragrant Thai basil with chicken, chili, and classic seasonings.",
    sizes: sz(500, 1050),
    category: "Fried Rice",
    image: foodRice2,
  },

  // Beverages
  {
    id: "bv1",
    name: "Mango Smoothie",
    description: "Ripe mango blended smooth — cool, creamy, and refreshing.",
    sizes: sz(500, 1050),
    category: "Beverages",
    image: foodBeverage,
    isPopular: true,
  },
  {
    id: "bv2",
    name: "Fresh Lime Soda",
    description: "Lime, mint, soda, and a touch of salt for a crisp finish.",
    sizes: sz(500, 1050),
    category: "Beverages",
    image: foodBeverage2,
  },
  {
    id: "bv3",
    name: "Iced Coffee",
    description: "Cold brew style coffee with milk and ice — smooth and balanced.",
    sizes: sz(500, 1050),
    category: "Beverages",
    image: foodBeverage,
  },
  {
    id: "bv4",
    name: "Strawberry Milkshake",
    description: "Creamy shake with fresh berries and whipped cream.",
    sizes: sz(500, 1050),
    category: "Beverages",
    image: foodBeverage2,
  },
  {
    id: "bv5",
    name: "Green Mojito",
    description: "Non-alcoholic mojito with mint, lime, and sparkling soda.",
    sizes: sz(500, 1050),
    category: "Beverages",
    image: foodBeverage,
    isPopular: true,
  },
  {
    id: "bv6",
    name: "Hot Chocolate",
    description: "Rich chocolate with steamed milk — comfort in a cup.",
    sizes: sz(500, 1050),
    category: "Beverages",
    image: foodBeverage2,
  },

  // Pasta
  {
    id: "p1",
    name: "Creamy Carbonara",
    description: "Classic spaghetti with parmesan, egg yolk sauce, and crispy pancetta.",
    sizes: sz(500, 1050),
    category: "Pasta",
    image: foodPasta,
    isPopular: true,
  },
  {
    id: "p2",
    name: "Chicken Alfredo",
    description: "Grilled chicken with creamy alfredo and penne.",
    sizes: sz(500, 1050),
    category: "Pasta",
    image: foodPasta2,
  },
  {
    id: "p3",
    name: "Arrabiata Pasta",
    description: "Spicy tomato sauce with garlic, chili, and fresh basil.",
    sizes: sz(500, 1050),
    category: "Pasta",
    image: foodPasta,
  },
  {
    id: "p4",
    name: "Pesto Chicken Pasta",
    description: "Basil pesto with grilled chicken, pine nuts, and parmesan.",
    sizes: sz(500, 1050),
    category: "Pasta",
    image: foodPasta2,
    isPopular: true,
  },
  {
    id: "p5",
    name: "Seafood Marinara",
    description: "Mixed seafood in rich tomato marinara over spaghetti.",
    sizes: sz(500, 1050),
    category: "Pasta",
    image: foodPasta,
  },
  {
    id: "p6",
    name: "Mac & Cheese",
    description: "Three-cheese macaroni baked until golden.",
    sizes: sz(500, 1050),
    category: "Pasta",
    image: foodPasta2,
  },

  // Noodles
  {
    id: "n1",
    name: "Shrimp Stir-Fry Noodles",
    description: "Egg noodles wok-fried with shrimp, vegetables, and sesame.",
    sizes: sz(500, 1050),
    category: "Noodles",
    image: foodNoodles,
    isPopular: true,
  },
  {
    id: "n2",
    name: "Chicken Chow Mein",
    description: "Crispy noodles with chicken, bean sprouts, and sweet soy glaze.",
    sizes: sz(500, 1050),
    category: "Noodles",
    image: foodNoodles2,
  },
  {
    id: "n3",
    name: "Vegetable Noodle Soup",
    description: "Hand-pulled noodles in warm broth with fresh vegetables.",
    sizes: sz(500, 1050),
    category: "Noodles",
    image: foodNoodles,
  },
  {
    id: "n4",
    name: "Pad Thai",
    description: "Rice noodles with tamarind, peanuts, and lime — classic Thai flavour.",
    sizes: sz(500, 1050),
    category: "Noodles",
    image: foodNoodles2,
    isPopular: true,
  },
  {
    id: "n5",
    name: "Singapore Noodles",
    description: "Curry-spiced vermicelli with shrimp, pork, and vegetables.",
    sizes: sz(500, 1050),
    category: "Noodles",
    image: foodNoodles,
  },
  {
    id: "n6",
    name: "Garlic Butter Noodles",
    description: "Egg noodles tossed in garlic butter with chili and spring onion.",
    sizes: sz(500, 1050),
    category: "Noodles",
    image: foodNoodles2,
  },
];
