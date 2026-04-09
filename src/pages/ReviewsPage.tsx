import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Star } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const reviewScreenshots = [review1, review2, review3];

const testimonials = [
  {
    name: "Kamal Perera",
    role: "Food Blogger",
    rating: 5,
    text: "The best biryani I've ever had in Colombo! The flavors are authentic and the service is exceptional. A must-visit for food lovers.",
  },
  {
    name: "Amira Fernando",
    role: "Regular Customer",
    rating: 5,
    text: "We order from Flavor House every weekend. Their pasta is incredible and the delivery is always on time. Highly recommended!",
  },
  {
    name: "Rajesh Kumar",
    role: "Corporate Events",
    rating: 5,
    text: "Booked their catering for our company event and everyone loved it. Professional service and amazing food quality.",
  },
  {
    name: "Sithara Jayawardena",
    role: "Food Enthusiast",
    rating: 4,
    text: "Love the ambiance and the variety in their menu. The noodle dishes are my favorite. Great value for money too!",
  },
  {
    name: "David Silva",
    role: "Tourist",
    rating: 5,
    text: "Found this gem during my Sri Lanka trip. The authentic local flavors combined with international cuisine is brilliant!",
  },
  {
    name: "Nisha Bandara",
    role: "Family Dining",
    rating: 5,
    text: "Perfect for family dinners. Kids love the fried rice and we parents enjoy the sophisticated dishes. Something for everyone!",
  },
];

const ReviewsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Customer Reviews"
        subtitle="What our valued customers say about their dining experience"
        backgroundImage={heroImg}
      />

      {/* Stats */}
      <section className="gradient-warm py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">4.8</div>
              <div className="flex justify-center mt-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary-foreground fill-primary-foreground" />
                ))}
              </div>
              <div className="text-sm text-primary-foreground/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">2,500+</div>
              <div className="text-sm text-primary-foreground/80 mt-2">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">98%</div>
              <div className="text-sm text-primary-foreground/80 mt-2">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border border-border/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={j < t.rating ? "text-accent fill-accent" : "text-muted-foreground/30"}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Reviews */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Review Screenshots</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Real reviews from our customers across different platforms
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewScreenshots.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 border border-border/30"
              >
                <img
                  src={img}
                  alt={`Customer review screenshot ${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={640}
                  height={512}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReviewsPage;
