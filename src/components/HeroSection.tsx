import { RESTAURANT_CONFIG } from "@/config/restaurant";
import heroImg from "@/assets/hero-restaurant.jpg";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt={RESTAURANT_CONFIG.name}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {RESTAURANT_CONFIG.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            {RESTAURANT_CONFIG.tagline}
          </p>
          <p className="text-base md:text-lg text-primary-foreground/75 mb-8 max-w-lg">
            {RESTAURANT_CONFIG.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
              onClick={() => onNavigate("menu")}
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
              onClick={() => onNavigate("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
