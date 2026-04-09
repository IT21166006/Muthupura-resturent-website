import Layout from "@/components/Layout";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { UtensilsCrossed, ShoppingBag, Truck, ChefHat, Star, ArrowRight } from "lucide-react";
import SpecialDeals from "@/components/SpecialDeals";
import heroImg from "@/assets/hero-restaurant.jpg";
import chefImg from "@/assets/about-chef.jpg";

import outdoorflowerImg from "@/assets/outdoorflower.png";
import outdoorwiteboardImg from "@/assets/outdorwithboard.png";
import familymealImg from "@/assets/familymeal.png";
import babyImg from "@/assets/baby.jpg";
import artboardImg from "@/assets/artboardimg.jpg";
import tuaristImg from "@/assets/tourists.jpg";
import boardImg from "@/assets/boardimg.jpg";

import hallImg from "@/assets/restaurant-hall.jpg";

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={32} />,
  ShoppingBag: <ShoppingBag size={32} />,
  Truck: <Truck size={32} />,
  ChefHat: <ChefHat size={32} />,
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden -mt-18">
        <img
          src={heroImg}
          alt={RESTAURANT_CONFIG.name}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl animate-fade-up">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
              <Star size={12} className="mr-1" /> #1 Rated Restaurant
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {RESTAURANT_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3 font-light italic font-heading">
              {RESTAURANT_CONFIG.tagline}
            </p>
            <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed">
              {RESTAURANT_CONFIG.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 gap-2 shadow-lg">
                  Explore Menu <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className=" border-primary-foreground/30 text-black hover:bg-primary-foreground/10 text-base px-8 "
                >
                  Reserve Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="gradient-warm py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {RESTAURANT_CONFIG.achievements.map((item, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src={chefImg}
                alt="Our Chef"
                className="rounded-2xl shadow-[var(--shadow-elevated)] w-full h-[450px] object-cover"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-primary text-primary-foreground rounded-xl p-5 shadow-lg">
                  <div className="text-3xl font-heading font-bold">2+</div>
                  <div className="text-sm text-primary-foreground/80">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <Badge className="mb-3 bg-secondary text-secondary-foreground border-none">1 Remaining Message From KALKI</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                Escape the noise.
                <br />Embrace the calm. 🍃✨
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The perfect spot to unwind and lose track of time. Great food, better vibes, and a space where you can truly be yourself.
                Our Favorites:
                ▪️ Ramen,Fried Rice,Biryani,Nasi Goreng,Mongolian Rice,Cheese Kottu,Cheese Pasta,Milkshakes,Lassi,Mojitos
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our hand-picked ingredients to our signature cooking methods, every dish tells a story of dedication,
                craftsmanship, and love for food. We believe that a great meal brings people together and creates lasting memories.
              </p>
              <Link to="/menu">
                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  View Our Menu <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-4 bg-muted overflow-hidden">
        <div className="flex gap-4 animate-scroll" style={{ display: "flex", animation: "scroll 20s linear infinite" }}>
          {[heroImg,outdoorflowerImg,outdoorwiteboardImg,familymealImg,babyImg,artboardImg,tuaristImg,boardImg,heroImg,hallImg,outdoorflowerImg,outdoorwiteboardImg,familymealImg,babyImg,artboardImg,tuaristImg,boardImg].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="h-48 md:h-64 w-auto rounded-lg object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Special Deals */}
      <SpecialDeals 
        deals={RESTAURANT_CONFIG.specialDeals} 
        dealsPerPage={4}
        autoRotateInterval={5000}
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-secondary text-secondary-foreground border-none">What We Offer</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We go the extra mile to make your dining experience unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESTAURANT_CONFIG.services.map((service, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300 border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src={hallImg} alt="Restaurant" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Experience the Best?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            Reserve your table today or order online for a delightful meal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menu">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 gap-2 shadow-lg">
                Order Now <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
