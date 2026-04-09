import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const reviews = [review1, review2, review3];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Customer Reviews</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          See what our happy customers have to say about us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((img, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Customer review ${i + 1}`}
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
  );
};

export default ReviewsSection;
