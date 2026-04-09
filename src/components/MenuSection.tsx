import { useState } from "react";
import { RESTAURANT_CONFIG, type MenuCategory } from "@/config/restaurant";
import { menuItems } from "@/config/menuData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(RESTAURANT_CONFIG.menuCategories[0]);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Our Menu</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Explore our delicious categories and find your next favorite dish
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {RESTAURANT_CONFIG.menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                {item.isPopular && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-none">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-primary">Rs. {item.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">/ {item.unit}</span>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
