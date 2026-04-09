// ============================================================
// RESTAURANT TEMPLATE CONFIG
// Edit this file to customize for each restaurant
// ============================================================

// Import your images at the top
import familymealImg from "@/assets/familymeal.png";
import biryaniImg from "@/assets/food-biryani.jpg";
import beverageImg from "@/assets/food-beverage.jpg";
import pastaImg from "@/assets/food-pasta.jpg";

export const RESTAURANT_CONFIG = {
  name: "Muthupura Family Resturent",
  tagline: "The Dreams Start Here",
  description:
    "✨ දවසින් දවස අලුත් වෙන Muthupura Family Resturent කියන්නෙ වෙනස් වයිබ් එකට කැමති අයටම හදපු තැනක් වස විස නැතිව සාදාරන මුදලට කන්න පුලුවන් කෑම ගොඩාක් තියෙනව වගේම දවසින් දවස මෙනු එක අලුත් වෙනවා ♨️",
  phone: "0773931600",
  email: "info@flavorhouse.lk",
  address: "Anguruwatota Road, 12400",
  openingHours: "Mon - Sun: 10:00 AM - 11:00 PM",
  socialLinks: {
    facebook: "https://www.bing.com/ck/a?!&&p=cf3cab9972a543a2639b16a985994d446c595694bd1203dda57b04c4fe62440eJmltdHM9MTc3NTQzMzYwMA&ptn=3&ver=2&hsh=4&fclid=2581269e-4599-6c33-0170-33e544196d3d&psq=kalki+garden+cafe&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwLz9pZD02MTU3MTI0MjQ0NTQwNg",
    instagram: "https://www.instagram.com/kalkii420?fbclid=IwY2xjawRAR-5leHRuA2FlbQIxMABicmlkETFFWk13d3JNZ2xsRk1xWTJzc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHn0cgchZA-5vePn6aMK9labHPj04GZ4-OEOrTTaaQIgXKS7p5OwfsTmRmHYc_aem_STb9uzuXGlGeFiXn6Vv1ww",
    whatsapp: "https://wa.me/94772010016",
  },
  navTabs: ["Home", "Menu", "Reviews", "Contact"] as const,
  achievements: [
    { value: "2+", label: "Years of Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100+", label: "Menu Items" },
    { value: "10", label: "Awards Won" },
  ],
  services: [
    { title: "Dine In", description: "Enjoy a cozy dining experience with your loved ones", icon: "UtensilsCrossed" },
    { title: "Takeaway", description: "Order and pick up your favorite meals anytime", icon: "ShoppingBag" },
    { title: "Delivery", description: "Fresh food delivered to your doorstep within 30 minutes", icon: "Truck" },
    { title: "Catering", description: "Special event catering for weddings, parties & corporate", icon: "ChefHat" },
  ],
  specialDeals: [
    {
      title: "Family Feast",
      description: "Get 20% off on family meal combos every weekend!",
      badge: "Weekend Special",
      image: familymealImg,
      badgeColor: "bg-accent",
      badgeTextColor: "text-accent-foreground",
      height: "h-72",
      overlayOpacity: "from-foreground/80",
    },
    {
      title: "Lunch Combo",
      description: "Rice + Curry + Drink starting from just Rs. 499",
      badge: "Best Value",
      image: biryaniImg,
      badgeColor: "bg-primary",
      badgeTextColor: "text-primary-foreground",
      height: "h-72",
      overlayOpacity: "from-foreground/75",
    },
    {
      title: "Happy Hour Beverages",
      description: "50% off on all beverages from 4-6 PM daily",
      badge: "Limited Time",
      image: beverageImg,
      badgeColor: "bg-orange-500",
      badgeTextColor: "text-white",
      height: "h-80",
      overlayOpacity: "from-foreground/70",
    },
    {
      title: "Pasta Paradise",
      description: "Buy 2 Pasta dishes, get 1 free every Tuesday",
      badge: "Tuesday Only",
      image: pastaImg,
      badgeColor: "bg-red-500",
      badgeTextColor: "text-white",
      height: "h-72",
      overlayOpacity: "from-foreground/80",
    },
  ],
  menuCategories: ["Biryani", "Rice", "Beverages", "Pasta", "Noodles"] as const,
};

export type MenuCategory = (typeof RESTAURANT_CONFIG.menuCategories)[number];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
}
