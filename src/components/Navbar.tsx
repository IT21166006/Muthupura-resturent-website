import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logomain.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-start justify-between h-18 px-4 lg:px-8 pt-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pb-1">
          <img 
            src={logo} 
            alt={RESTAURANT_CONFIG.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-heading text-xl md:text-2xl font-bold text-foreground">
            {RESTAURANT_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 pt-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href={`tel:${RESTAURANT_CONFIG.phone}`} className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone size={14} />
              {RESTAURANT_CONFIG.phone}
            </Button>
          </a>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-4 pb-4">
            <a href={`tel:${RESTAURANT_CONFIG.phone}`}>
              <Button className="w-full gap-2 bg-primary text-primary-foreground">
                <Phone size={14} />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
