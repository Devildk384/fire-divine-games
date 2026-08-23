import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import AnimatedHeading from "@/components/AnimatedHeading";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Studio & Team",
  description:
    "Meet the founders of Fire Divine Games and follow the independent studio's journey from its first concept to six Android releases.",
};

const founders = [
  {
    initials: "DE",
    name: "Deepesh Kumar",
    role: "Co-Founder & Lead Game Designer",
    accent: "#dfff52",
    bio: "Deepesh leads game concepts, mechanics, and the player experience across Fire Divine's catalog, shaping early ideas into focused mobile games.",
  },
  {
    initials: "DU",
    name: "Durgesh Kumar",
    role: "Co-Founder & Full-Stack Developer",
    accent: "#8de4ef",
    bio: "Durgesh builds the technical foundation behind the studio, bridging game development, web systems, and the infrastructure needed to ship.",
  },
];

const history = [
  { date: "January 2024", text: "The first conversations begin around building an original debut game." },
  { date: "February 2024", text: "Unearthed: The Invasion moves from an idea into active concept development." },
  { date: "May 22, 2024", text: "Unearthed launches on Android as Fire Divine's first published mobile title." },
  { date: "July - October 2024", text: "A run of experimental mini-games teaches the team practical lessons in publishing and player experience." },
  { date: "November 2024", text: "Work starts on Find Me, a calmer hidden-object game built around observation." },
  { date: "February 10, 2025", text: "Find Me launches and opens a new puzzle-focused chapter for the studio." },
  { date: "July 11, 2025", text: "Spot Me! arrives, expanding the catalog with a colorful visual challenge." },
  { date: "Today", text: "Six Android games are live, with new story and puzzle ideas in development." },
];

export default function StudioPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="studio-hero" aria-labelledby="studio-page-title">
        <div className="studio-hero__copy">
          <span className="section-kicker section-kicker--light">Fire Divine / Since 2024</span>
          <AnimatedHeading
            as="h1"
            id="studio-page-title"
            className="heading-light"
            lines={["Stories first.", "Players always."]}
          />
          <p>
            We are a two-founder independent studio from Aligarh, building games with
            clear mechanics, expressive worlds, and stories that leave something behind.
          </p>
        </div>
        <div className="studio-hero__art">
          <Image
            src="/images/brand/studio-card.png"
            alt="Official Fire Divine Games studio emblem"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="studio-story section-shell" aria-labelledby="our-story-title">
        <div>
          <span className="section-kicker">About us</span>
          <h2 id="our-story-title">A studio built around meaning.</h2>
        </div>
        <Reveal className="studio-story__copy">
          <p>
            Fire Divine Games is an MSME-registered indie game studio driven by
            passion and creativity. Our mission is simple and ambitious: create
            meaningful games with unforgettable stories that resonate after the
            screen fades to black.
          </p>
          <p>
            Our first title was a tense alien survival story. The releases that
            followed explored a very different pace: hidden objects, spot-the-difference
            scenes, sliding memories, and clean logic puzzles. The genres change, but
            curiosity and a clear point of view stay at the center.
          </p>
        </Reveal>
      </section>

      <section className="team-section" id="team" aria-labelledby="team-title">
        <div className="section-shell">
          <div className="team-section__heading">
            <span className="section-kicker">The founders / 02</span>
            <AnimatedHeading id="team-title" lines={["Meet the team."]} />
          </div>
          <div className="team-grid">
            {founders.map((founder, index) => (
              <Reveal delay={index * 110} key={founder.name}>
                <article className="team-card" style={{ "--card-accent": founder.accent } as CSSProperties}>
                  <span className="team-card__initials" aria-hidden="true">{founder.initials}</span>
                  <div>
                    <small>{founder.role}</small>
                    <h3>{founder.name}</h3>
                    <p>{founder.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="history-section section-shell" aria-labelledby="history-title">
        <div className="history-section__heading">
          <span className="section-kicker">Our history</span>
          <AnimatedHeading id="history-title" lines={["Built one release", "at a time."]} />
        </div>
        <div className="history-list">
          {history.map((item, index) => (
            <Reveal className="history-item" delay={(index % 3) * 60} key={item.date}>
              <time>{item.date}</time>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-band" aria-labelledby="studio-contact-title">
        <div className="contact-band__mark" aria-hidden="true">
          <Image src="/images/brand/fire-divine-logo.png" alt="" fill sizes="420px" />
        </div>
        <div className="contact-band__copy">
          <span className="section-kicker section-kicker--light">Work with the studio</span>
          <AnimatedHeading
            id="studio-contact-title"
            className="heading-light"
            lines={["Bring us", "a good idea."]}
          />
          <p>Publishing, development, creative collaboration, or player support: tell us what you have in mind.</p>
          <Link className="button button--signal" href="/contact">
            Start a conversation <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
