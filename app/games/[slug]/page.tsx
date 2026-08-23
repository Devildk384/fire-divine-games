import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import AnimatedHeading from "@/components/AnimatedHeading";
import GameGallery from "@/components/GameGallery";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { games, getGame } from "@/lib/games";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};

  return {
    title: game.title,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.tagline,
      images: [game.cover],
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const currentIndex = games.findIndex((item) => item.slug === game.slug);
  const nextGame = games[(currentIndex + 1) % games.length];

  return (
    <main
      className="subpage"
      style={{ "--accent": game.accent, "--game-ink": game.ink } as CSSProperties}
    >
      <Header />

      <section className="game-hero" aria-labelledby="game-title">
        <Image
          src={game.cover}
          alt={`${game.title} official key art`}
          fill
          priority
          sizes="calc(100vw - 36px)"
        />
        <span className="game-hero__shade" />
        <Link className="game-hero__crumb" href="/#games">
          Games / {game.genre}
        </Link>
        <div className="game-hero__content">
          <span className="game-hero__icon">
            <Image src={game.icon} alt={`${game.title} app icon`} width={112} height={112} />
          </span>
          <div className="game-hero__text">
            <small>{game.tagline}</small>
            <h1 id="game-title">{game.title}</h1>
          </div>
          <a className="button button--signal" href={game.playUrl} target="_blank" rel="noreferrer">
            Get it on Google Play <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </section>

      <section className="game-overview section-shell" aria-labelledby="overview-title">
        <Reveal className="game-facts">
          <div><span>Genre</span><strong>{game.genre}</strong></div>
          <div><span>Status</span><strong>{game.status}</strong></div>
          {game.downloads ? <div><span>Downloads</span><strong>{game.downloads}</strong></div> : null}
          <div><span>Platform</span><strong>Android</strong></div>
        </Reveal>

        <div className="game-overview__copy">
          <span className="section-kicker">About the game</span>
          <h2 id="overview-title">{game.tagline}</h2>
          <p>{game.description}</p>
          <ol className="feature-list">
            {game.features.map((feature, index) => (
              <li key={feature}>
                <span>0{index + 1}</span>
                {feature}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="screens-section" aria-labelledby="screens-title">
        <div className="section-shell">
          <div className="screens-heading">
            <div>
              <span className="section-kicker section-kicker--light">Official screenshots</span>
              <AnimatedHeading id="screens-title" className="heading-light" lines={["See it in play."]} />
            </div>
            <p>Artwork and gameplay captures sourced from the official Fire Divine Games listing on Google Play.</p>
          </div>
          <GameGallery
            gameTitle={game.title}
            screenshots={game.screenshots}
            landscapeScreenshots={game.landscapeScreenshots}
          />
        </div>
      </section>

      <section className="next-game section-shell" aria-label="Next game">
        <Link className="next-game__link" href={`/games/${nextGame.slug}`}>
          <span>Next game</span>
          <strong>{nextGame.shortTitle}</strong>
          <span aria-hidden="true">&#8599;</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
