import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative">
      {/* Back to Top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full gradient-warm text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 pt-20 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-accent">
                    {RESTAURANT_CONFIG.name.charAt(0)}
                  </span>
                </div>
                <span className="font-heading text-xl font-bold">{RESTAURANT_CONFIG.name}</span>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                {RESTAURANT_CONFIG.description}
              </p>
              <div className="flex gap-3">
                {[
                  { href: RESTAURANT_CONFIG.socialLinks.facebook, icon: <Facebook size={16} />, label: "Facebook" },
                  { href: RESTAURANT_CONFIG.socialLinks.instagram, icon: <Instagram size={16} />, label: "Instagram" },
                  { href: RESTAURANT_CONFIG.socialLinks.whatsapp, icon: <MessageCircle size={16} />, label: "WhatsApp" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Home", path: "/" },
                  { label: "Our Menu", path: "/menu" },
                  { label: "Reviews", path: "/reviews" },
                  { label: "Contact Us", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/60 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-primary-foreground/60">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  {RESTAURANT_CONFIG.address}
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/60">
                  <Phone size={16} className="shrink-0 text-accent" />
                  {RESTAURANT_CONFIG.phone}
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/60">
                  <Mail size={16} className="shrink-0 text-accent" />
                  {RESTAURANT_CONFIG.email}
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Opening Hours</h4>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="mb-1">{RESTAURANT_CONFIG.openingHours}</p>
                  <p className="text-accent font-medium">Open Now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/40">
            <p>© {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. All rights reserved.</p>
            <p>Crafted with ❤️ for food lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
