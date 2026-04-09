import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";

const contactInfo = [
  { icon: <Phone size={22} />, title: "Phone", value: RESTAURANT_CONFIG.phone, subtitle: "Call us anytime" },
  { icon: <Mail size={22} />, title: "Email", value: RESTAURANT_CONFIG.email, subtitle: "We reply within 24 hours" },
  { icon: <MapPin size={22} />, title: "Address", value: RESTAURANT_CONFIG.address, subtitle: "Visit our restaurant" },
  { icon: <Clock size={22} />, title: "Hours", value: RESTAURANT_CONFIG.openingHours, subtitle: "We're open every day" },
];

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you — get in touch with us"
        backgroundImage={heroImg}
      />

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border border-border/30 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-foreground font-medium text-sm mb-1">{item.value}</p>
                <p className="text-muted-foreground text-xs">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Whether it's a reservation, feedback, or a special request — we're all ears!
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow">
                    <option value="">Select a subject</option>
                    <option value="reservation">Table Reservation</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-shadow"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-xl">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </div>

            {/* Map + WhatsApp */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-border/30 shadow-[var(--shadow-card)] h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuNiJOIDc5wrA1MScyMC4wIkU!5e0!3m2!1sen!2slk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                />
              </div>
              <a
                href={RESTAURANT_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-2xl p-5 hover:bg-[hsl(142,70%,40%)] transition-colors shadow-[var(--shadow-card)]"
              >
                <MessageCircle size={24} />
                <div>
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm text-primary-foreground/80">Quick responses guaranteed</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
