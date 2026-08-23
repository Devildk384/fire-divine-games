import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Game } from "@/lib/games";
import Reveal from "./Reveal";

type GameCardProps = {
  game: Game;
  featured?: boolean;
  index: number;
};

export default function GameCard({ game, featured = false, index }: GameCardProps) {
  return (
    <Reveal delay={(index % 2) * 110} className={featured ? "game-card-wrap game-card-wrap--featured" : "game-card-wrap"}>
      <article
        className={`game-card ${featured ? "game-card--featured" : ""}`}
        style={{
          "--accent": game.accent,
          "--game-ink": game.ink,
          "--motion-delay": `${index * -1450}ms`,
        } as CSSProperties}
      >
        <Link className="game-card__media" href={`/games/${game.slug}`} aria-label={`Explore ${game.title}`}>
          <Image
            src={game.cover}
            alt={`${game.title} official game artwork`}
            fill
            sizes={featured ? "(max-width: 900px) 100vw, 68vw" : "(max-width: 900px) 100vw, 50vw"}
          />
          <span className="game-card__shade" />
          <span className="game-card__number">0{index + 1}</span>
          <span className="game-card__launch" aria-hidden="true">&#8599;</span>
          <span className="game-card__icon">
            <Image src={game.icon} alt="" width={82} height={82} />
          </span>
        </Link>
        <div className="game-card__body">
          <div className="game-card__meta">
            <span>{game.genre}</span>
            <span>{game.status}</span>
          </div>
          <h3>{game.shortTitle}</h3>
          <p>{game.tagline}</p>
          <Link className="text-link" href={`/games/${game.slug}`}>
            Explore game <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
