import { useEffect } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      )}
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
