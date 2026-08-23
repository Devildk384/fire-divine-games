import type { Metadata } from "next";
import AnimatedHeading from "@/components/AnimatedHeading";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fire Divine Games for game support, collaboration, publishing, and studio enquiries.",
};

export default function ContactPage() {
  return (
    <main className="subpage contact-page">
      <Header />

      <section className="subpage-intro section-shell" aria-labelledby="contact-page-title">
        <span className="section-kicker">Contact / Fire Divine Games</span>
        <AnimatedHeading
          as="h1"
          id="contact-page-title"
          lines={["Good conversations", "start here."]}
        />
        <p>
          Reach the founders directly for player support, studio partnerships,
          development opportunities, and everything in between.
        </p>
      </section>

      <section className="contact-grid section-shell" aria-label="Contact information and form">
        <div className="contact-details">
          <p>
            Fire Divine is an independent mobile game studio based in Aligarh,
            Uttar Pradesh. Messages go directly to the team.
          </p>
          <div className="contact-detail">
            <small>Email</small>
            <a href="mailto:deepeshkumar384@gmail.com">deepeshkumar384@gmail.com</a>
          </div>
          <div className="contact-detail">
            <small>Phone</small>
            <a href="tel:+916395528253">+91 63955 28253</a>
          </div>
          <div className="contact-detail">
            <small>Location</small>
            <span>Aligarh, Uttar Pradesh, India</span>
          </div>
          <div className="contact-detail">
            <small>Founders</small>
            <span>Deepesh Kumar & Durgesh Kumar</span>
          </div>
        </div>
        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
