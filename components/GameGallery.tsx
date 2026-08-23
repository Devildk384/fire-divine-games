"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GameGalleryProps = {
  gameTitle: string;
  screenshots: string[];
  landscapeScreenshots?: number[];
};

export default function GameGallery({
  gameTitle,
  screenshots,
  landscapeScreenshots = [],
}: GameGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState<number | null>(null);

  const isLandscape = (index: number) => landscapeScreenshots.includes(index);

  const goToSlide = (index: number) => {
    const next = Math.max(0, Math.min(screenshots.length - 1, index));
    const track = trackRef.current;
    const slide = track?.children[next] as HTMLElement | undefined;
    if (track && slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
      setCurrent(next);
    }
  };

  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") {
        setActive((value) => value === null ? null : (value - 1 + screenshots.length) % screenshots.length);
      }
      if (event.key === "ArrowRight") {
        setActive((value) => value === null ? null : (value + 1) % screenshots.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, screenshots.length]);

  const updateCurrent = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    const slides = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let distance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft - track.offsetLeft + slide.clientWidth / 2;
      const nextDistance = Math.abs(center - slideCenter);
      if (nextDistance < distance) {
        distance = nextDistance;
        nearest = index;
      }
    });

    setCurrent(nearest);
  };

  return (
    <>
      <div className="game-gallery">
        <div className="game-gallery__toolbar">
          <span aria-live="polite">
            {String(current + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
          </span>
          <div>
            <button
              type="button"
              onClick={() => goToSlide(current - 1)}
              aria-label="Previous screenshot"
              title="Previous screenshot"
              disabled={current === 0}
            >
              {"\u2190"}
            </button>
            <button
              type="button"
              onClick={() => goToSlide(current + 1)}
              aria-label="Next screenshot"
              title="Next screenshot"
              disabled={current === screenshots.length - 1}
            >
              {"\u2192"}
            </button>
          </div>
        </div>

        <div className="game-gallery__track" ref={trackRef} onScroll={updateCurrent}>
          {screenshots.map((screenshot, index) => (
            <button
              className={`gallery-slide ${isLandscape(index) ? "gallery-slide--landscape" : ""}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Open ${gameTitle} screenshot ${index + 1}`}
              key={screenshot}
            >
              <Image
                src={screenshot}
                alt={`${gameTitle} gameplay screenshot ${index + 1}`}
                fill
                quality={95}
                sizes={isLandscape(index) ? "(max-width: 700px) 88vw, 76vw" : "(max-width: 700px) 72vw, 340px"}
              />
              <span className="gallery-slide__index">{String(index + 1).padStart(2, "0")}</span>
              <span className="gallery-slide__expand" aria-hidden="true">+</span>
            </button>
          ))}
        </div>

        <div className="game-gallery__progress" aria-label="Choose screenshot">
          {screenshots.map((screenshot, index) => (
            <button
              className={index === current ? "is-active" : ""}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to screenshot ${index + 1}`}
              key={screenshot}
            />
          ))}
        </div>
      </div>

      {active !== null ? (
        <div className="image-viewer" role="dialog" aria-modal="true" aria-label={`${gameTitle} image viewer`} onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}>
          <div className="image-viewer__topbar">
            <span>{gameTitle}</span>
            <span>{String(active + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => setActive(null)} aria-label="Close image viewer" title="Close image viewer">
              {"\u00d7"}
            </button>
          </div>
          <div className={`image-viewer__stage ${isLandscape(active) ? "is-landscape" : "is-portrait"}`}>
            <Image
              src={screenshots[active]}
              alt={`${gameTitle} gameplay screenshot ${active + 1}`}
              fill
              unoptimized
              sizes="100vw"
              priority
            />
          </div>
          <button
            className="image-viewer__nav image-viewer__nav--previous"
            type="button"
            onClick={() => setActive((active - 1 + screenshots.length) % screenshots.length)}
            aria-label="Previous image"
            title="Previous image"
          >
            {"\u2190"}
          </button>
          <button
            className="image-viewer__nav image-viewer__nav--next"
            type="button"
            onClick={() => setActive((active + 1) % screenshots.length)}
            aria-label="Next image"
            title="Next image"
          >
            {"\u2192"}
          </button>
        </div>
      ) : null}
    </>
  );
}
