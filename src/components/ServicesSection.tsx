import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { UtensilsCrossed, ShoppingBag, Truck, ChefHat } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={36} />,
  ShoppingBag: <ShoppingBag size={36} />,
  Truck: <Truck size={36} />,
  ChefHat: <ChefHat size={36} />,
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Our Services</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          We go the extra mile to make your dining experience unforgettable
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_CONFIG.services.map((service, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
