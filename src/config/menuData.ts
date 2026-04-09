import type { MenuItem } from "./restaurant";

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

export const menuItems: MenuItem[] = [
  // Biryani
  { id: "b1", name: "Chicken Biryani", description: "Aromatic basmati rice layered with tender chicken, exotic spices, and caramelized onions. Served with raita and salan.", price: 850, unit: "per kg", category: "Biryani", image: foodBiryani, isPopular: true },
  { id: "b2", name: "Mutton Biryani", description: "Slow-cooked mutton pieces with fragrant saffron rice, traditional spices, and fresh herbs.", price: 1200, unit: "per kg", category: "Biryani", image: foodBiryani2 },
  { id: "b3", name: "Egg Biryani", description: "Perfectly spiced basmati rice with boiled eggs, fried onions, and aromatic whole spices.", price: 650, unit: "per kg", category: "Biryani", image: foodBiryani },
  { id: "b4", name: "Prawn Biryani", description: "Fresh prawns cooked with aromatic rice, coconut, and coastal spice blend.", price: 1350, unit: "per kg", category: "Biryani", image: foodBiryani2, isPopular: true },
  { id: "b5", name: "Vegetable Biryani", description: "Mixed seasonal vegetables with saffron-infused basmati rice and cashews.", price: 550, unit: "per kg", category: "Biryani", image: foodBiryani },
  { id: "b6", name: "Special Dum Biryani", description: "Chef's special slow-cooked dum biryani with premium spices and tender meat.", price: 1500, unit: "per kg", category: "Biryani", image: foodBiryani2 },

  // Rice
  { id: "r1", name: "Chicken Fried Rice", description: "Wok-tossed rice with tender chicken pieces, mixed vegetables, soy sauce, and spring onions.", price: 750, unit: "per plate", category: "Rice", image: foodRice, isPopular: true },
  { id: "r2", name: "Seafood Fried Rice", description: "Mixed seafood medley with fried rice, garlic, and special seasoning blend.", price: 950, unit: "per plate", category: "Rice", image: foodRice2 },
  { id: "r3", name: "Vegetable Fried Rice", description: "Fresh garden vegetables tossed with rice, herbs, and light sesame oil.", price: 550, unit: "per plate", category: "Rice", image: foodRice },
  { id: "r4", name: "Egg Fried Rice", description: "Fluffy scrambled eggs with fried rice, spring onions, and pepper.", price: 600, unit: "per plate", category: "Rice", image: foodRice2 },
  { id: "r5", name: "Nasi Goreng", description: "Indonesian-style fried rice with shrimp paste, chicken, and topped with fried egg.", price: 850, unit: "per plate", category: "Rice", image: foodRice, isPopular: true },
  { id: "r6", name: "Thai Basil Rice", description: "Fragrant Thai basil rice with chicken, chili, and fish sauce.", price: 780, unit: "per plate", category: "Rice", image: foodRice2 },

  // Beverages
  { id: "bv1", name: "Mango Smoothie", description: "Fresh ripe mangoes blended with ice cream and a hint of cardamom. A tropical delight!", price: 350, unit: "500ml", category: "Beverages", image: foodBeverage, isPopular: true },
  { id: "bv2", name: "Fresh Lime Soda", description: "Refreshing lime juice with mint, soda, and a touch of black salt.", price: 250, unit: "350ml", category: "Beverages", image: foodBeverage2 },
  { id: "bv3", name: "Iced Coffee", description: "Cold brewed premium coffee with milk, ice, and caramel drizzle.", price: 400, unit: "400ml", category: "Beverages", image: foodBeverage },
  { id: "bv4", name: "Strawberry Milkshake", description: "Creamy strawberry shake with fresh berries and whipped cream.", price: 380, unit: "500ml", category: "Beverages", image: foodBeverage2 },
  { id: "bv5", name: "Green Mojito", description: "Non-alcoholic mojito with fresh mint, lime, and sparkling soda.", price: 320, unit: "350ml", category: "Beverages", image: foodBeverage, isPopular: true },
  { id: "bv6", name: "Hot Chocolate", description: "Rich Belgian chocolate blended with steamed milk and marshmallows.", price: 420, unit: "350ml", category: "Beverages", image: foodBeverage2 },

  // Pasta
  { id: "p1", name: "Creamy Carbonara", description: "Classic Italian spaghetti with parmesan, egg yolk sauce, and crispy pancetta.", price: 890, unit: "per plate", category: "Pasta", image: foodPasta, isPopular: true },
  { id: "p2", name: "Chicken Alfredo", description: "Grilled chicken breast with creamy alfredo sauce and penne pasta.", price: 950, unit: "per plate", category: "Pasta", image: foodPasta2 },
  { id: "p3", name: "Arrabiata Pasta", description: "Spicy tomato sauce with garlic, chili flakes, and fresh basil leaves.", price: 750, unit: "per plate", category: "Pasta", image: foodPasta },
  { id: "p4", name: "Pesto Chicken Pasta", description: "Fresh basil pesto with grilled chicken, pine nuts, and parmesan.", price: 980, unit: "per plate", category: "Pasta", image: foodPasta2, isPopular: true },
  { id: "p5", name: "Seafood Marinara", description: "Mixed seafood in rich tomato marinara sauce with spaghetti.", price: 1100, unit: "per plate", category: "Pasta", image: foodPasta },
  { id: "p6", name: "Mac & Cheese", description: "Creamy three-cheese macaroni baked to golden perfection.", price: 680, unit: "per plate", category: "Pasta", image: foodPasta2 },

  // Noodles
  { id: "n1", name: "Shrimp Stir-Fry Noodles", description: "Wok-fried egg noodles with jumbo shrimp, Asian vegetables, and sesame oil.", price: 880, unit: "per plate", category: "Noodles", image: foodNoodles, isPopular: true },
  { id: "n2", name: "Chicken Chow Mein", description: "Crispy noodles with chicken strips, bean sprouts, and sweet soy glaze.", price: 780, unit: "per plate", category: "Noodles", image: foodNoodles2 },
  { id: "n3", name: "Vegetable Noodle Soup", description: "Warm broth with hand-pulled noodles, fresh vegetables, and herbs.", price: 550, unit: "per bowl", category: "Noodles", image: foodNoodles },
  { id: "n4", name: "Pad Thai", description: "Classic Thai rice noodles with tamarind sauce, peanuts, and lime.", price: 820, unit: "per plate", category: "Noodles", image: foodNoodles2, isPopular: true },
  { id: "n5", name: "Singapore Noodles", description: "Curry-spiced rice vermicelli with shrimp, pork, and vegetables.", price: 850, unit: "per plate", category: "Noodles", image: foodNoodles },
  { id: "n6", name: "Garlic Butter Noodles", description: "Egg noodles tossed in garlic butter with chili and spring onions.", price: 650, unit: "per plate", category: "Noodles", image: foodNoodles2 },
];
