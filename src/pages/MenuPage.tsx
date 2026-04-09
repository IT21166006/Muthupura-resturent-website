import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { RESTAURANT_CONFIG, type MenuCategory } from "@/config/restaurant";
import { menuItems } from "@/config/menuData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingBag, Flame } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(RESTAURANT_CONFIG.menuCategories[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <PageHeader
        title="Our Menu"
        subtitle="Explore our carefully curated dishes made with the freshest ingredients"
        backgroundImage={heroImg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {RESTAURANT_CONFIG.menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "gradient-warm text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:bg-secondary border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Category Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">{activeCategory}</h2>
            <p className="text-muted-foreground mt-1">{filteredItems.length} items available</p>
          </div>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group border border-border/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                  {item.isPopular && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-none shadow-md gap-1">
                      <Flame size={12} /> Popular
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-foreground/70 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {item.unit}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div>
                      <span className="text-2xl font-bold text-primary">Rs. {item.price}</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5 rounded-full px-5"
                    >
                      <ShoppingBag size={14} /> Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No dishes found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
