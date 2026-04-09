import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface Deal {
  badge: string;
  title: string;
  description: string;
  image?: string; // Custom image for each deal
  badgeColor?: string; // Custom badge color (e.g., "bg-accent", "bg-primary")
  badgeTextColor?: string; // Custom badge text color
  height?: string; // Custom card height (default "h-72")
  overlayOpacity?: string; // Custom overlay opacity (default "from-foreground/80")
}

interface SpecialDealsProps {
  deals: Deal[];
  dealsPerPage?: number;
  autoRotateInterval?: number;
  title?: string;
  subtitle?: string;
  defaultImage?: string; // Fallback image
}

const SpecialDeals = ({
  deals,
  dealsPerPage = 4,
  autoRotateInterval = 5000,
  title = "Special Deals & Offers",
  subtitle = "Don't miss out on our exclusive deals crafted just for you",
  defaultImage = "",
}: SpecialDealsProps) => {
  const [dealIndex, setDealIndex] = useState(0);

  useEffect(() => {
    const totalDeals = deals.length;
    if (totalDeals > dealsPerPage) {
      const totalPages = Math.ceil(totalDeals / dealsPerPage);
      const interval = setInterval(() => {
        setDealIndex((prev) => (prev + 1) % totalPages);
      }, autoRotateInterval);
      return () => clearInterval(interval);
    }
  }, [deals.length, dealsPerPage, autoRotateInterval]);

  const displayDeals = deals.slice(
    dealIndex * dealsPerPage,
    (dealIndex + 1) * dealsPerPage
  );

  const gridCols =
    dealsPerPage === 4
      ? "md:grid-cols-2"
      : dealsPerPage === 3
        ? "md:grid-cols-3"
        : dealsPerPage === 2
          ? "md:grid-cols-2"
          : "md:grid-cols-1";

  const totalPages = Math.ceil(deals.length / dealsPerPage);

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-secondary text-secondary-foreground border-none">
            Limited Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className={`grid ${gridCols} gap-8`}>
          {displayDeals.map((deal, i) => {
            const cardHeight = deal.height || "h-72";
            const badgeBgColor = deal.badgeColor || "bg-accent";
            const badgeTextColor = deal.badgeTextColor || "text-accent-foreground";
            const overlayLevel = deal.overlayOpacity || "from-foreground/80";
            const dealImage = deal.image || defaultImage;

            return (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] group cursor-pointer transition-all duration-500 animate-fade-up"
              >
                <img
                  src={dealImage}
                  alt={deal.title}
                  className={`w-full ${cardHeight} object-cover group-hover:scale-105 transition-transform duration-700`}
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${overlayLevel} via-foreground/30 to-transparent flex flex-col justify-end p-8`}
                >
                  <Badge
                    className={`w-fit mb-3 ${badgeBgColor} ${badgeTextColor} border-none shadow-md`}
                  >
                    {deal.badge}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">
                    {deal.title}
                  </h3>
                  <p className="text-primary-foreground/80">{deal.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setDealIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === dealIndex ? "bg-primary w-8" : "bg-muted-foreground w-2"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialDeals;
