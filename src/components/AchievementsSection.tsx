import { RESTAURANT_CONFIG } from "@/config/restaurant";

const AchievementsSection = () => {
  return (
    <section className="gradient-warm section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {RESTAURANT_CONFIG.achievements.map((item, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
