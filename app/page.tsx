import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { games, googlePlayDeveloper } from "@/lib/games";

const founderPreview = [
  { initials: "DK", name: "Deepesh Kumar", role: "Co-Founder & Lead Game Designer" },
  { initials: "DK", name: "Durgesh Kumar", role: "Co-Founder & Full-Stack Developer" },
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow-row">
            <span className="status-dot" />
            Independent game studio / Aligarh, India
          </p>
          <AnimatedHeading
            as="h1"
            id="hero-title"
            className="hero__title"
            lines={["Games that", "stay with you."]}
          />
          <p className="hero__intro">
            We make story-rich adventures and thoughtful mobile puzzles that turn
            small screens into places worth remembering.
          </p>
          <div className="hero__actions">
            <Link className="button button--signal" href="#games">
              Explore our games <span aria-hidden="true">&darr;</span>
            </Link>
            <Link className="button button--outline-light" href="/studio">
              Inside the studio <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="hero__loop" aria-label="We make stories, puzzles, and worlds">
            <span>WE MAKE</span>
            <span className="hero__loop-window">
              <span className="hero__loop-track">
                <span>STORIES</span>
                <span>PUZZLES</span>
                <span>WORLDS</span>
                <span>STORIES</span>
              </span>
            </span>
          </div>
        </div>

        <Link className="hero__art" href="/games/find-me" aria-label="Explore Find Me">
          <Image
            src="/images/games/find-me-hero-generated.png"
            alt="Find Me hidden object game key art"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 56vw"
          />
          <span className="hero__art-shade" />
          <span className="hero__art-top">
            <span>Featured game</span>
            <span>01 / 06</span>
          </span>
          <span className="hero__art-caption">
            <span>
              <small>LOOK CLOSER</small>
              <strong>Find Me</strong>
            </span>
            <span className="round-arrow" aria-hidden="true">&#8599;</span>
          </span>
        </Link>

        <div className="hero__stats" aria-label="Studio highlights">
          <div><strong>2024</strong><span>Studio founded</span></div>
          <div><strong>06</strong><span>Games on Android</span></div>
          <div><strong>1 lac+</strong><span>downloads</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Fire Divine game themes">
        <div className="ticker__track">
          {Array.from({ length: 2 }).map((_, group) => (
            <span className="ticker__group" key={group}>
              <span>HIDDEN OBJECTS</span><i>+</i>
              <span>LOGIC PUZZLES</span><i>+</i>
              <span>STORY WORLDS</span><i>+</i>
              <span>VISUAL DISCOVERY</span><i>+</i>
            </span>
          ))}
        </div>
      </section>

      <section className="games-section section-shell" id="games" aria-labelledby="games-title">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">All games / 06</span>
            <AnimatedHeading id="games-title" lines={["Pick a world.", "Start playing."]} />
          </div>
          <Reveal>
            <p>
              From calm observation to alien survival, every Fire Divine title starts
              with one clear idea and builds a world around the feeling of play.
            </p>
          </Reveal>
        </div>

        <div className="games-grid">
          {games.map((game, index) => (
            <GameCard game={game} featured={index === 0} index={index} key={game.slug} />
          ))}
        </div>

        <div className="all-games-row">
          <p>Six games. More in the making.</p>
          <a className="button button--dark" href={googlePlayDeveloper} target="_blank" rel="noreferrer">
            View Google Play portfolio <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </section>

      <section className="studio-preview" aria-labelledby="studio-title">
        <div className="studio-preview__visual">
          <Image
            src="/images/brand/studio-card.png"
            alt="Fire Divine Games winged flame studio emblem"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
          <span>ALIGARH / UTTAR PRADESH / INDIA</span>
        </div>
        <div className="studio-preview__copy">
          <span className="section-kicker section-kicker--light">The studio</span>
          <AnimatedHeading
            id="studio-title"
            className="heading-light"
            lines={["Small team.", "Long memory."]}
          />
          <p className="studio-preview__lead">
            Fire Divine Games is an MSME-registered independent studio built around
            a simple belief: games can be more than entertainment. They can carry
            stories, feelings, and ideas beyond the screen.
          </p>
          <p>
            Since 2024, our two founders have moved from a multi-character survival
            thriller into hidden-object, visual, and logic puzzles, learning from
            every release.
          </p>

          <div className="founder-preview" aria-label="Fire Divine founders">
            {founderPreview.map((founder) => (
              <div key={founder.name}>
                <span className="founder-preview__avatar">{founder.initials}</span>
                <span><strong>{founder.name}</strong><small>{founder.role}</small></span>
              </div>
            ))}
          </div>

          <Link className="text-link text-link--signal" href="/studio">
            Meet the team <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="manifesto section-shell" aria-labelledby="manifesto-title">
        <span className="section-kicker">Our point of view</span>
        <AnimatedHeading
          id="manifesto-title"
          lines={["Make it clear.", "Make it beautiful.", "Make the next tap matter."]}
        />
      </section>

      <section className="contact-band" aria-labelledby="contact-title">
        <div className="contact-band__mark" aria-hidden="true">
          <Image src="/images/brand/fire-divine-logo.png" alt="" fill sizes="420px" />
        </div>
        <div className="contact-band__copy">
          <span className="section-kicker section-kicker--light">Start a conversation</span>
          <AnimatedHeading
            id="contact-title"
            className="heading-light"
            lines={["A game idea?", "Let us hear it."]}
          />
          <p>
            For collaborations, studio opportunities, support, or a good conversation
            about games, our inbox is open.
          </p>
          <Link className="button button--signal" href="/contact">
            Contact Fire Divine <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
