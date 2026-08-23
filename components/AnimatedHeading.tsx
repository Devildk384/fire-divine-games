"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type AnimatedHeadingProps = {
  as?: "h1" | "h2" | "h3";
  lines: string[];
  className?: string;
  id?: string;
};

export default function AnimatedHeading({
  as: Tag = "h2",
  lines,
  className = "",
  id,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let wordIndex = 0;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`animated-heading ${visible ? "is-visible" : ""} ${className}`}
    >
      {lines.map((line) => (
        <span className="animated-heading__line" key={line}>
          <span className="animated-heading__words">
            {line.split(" ").map((word) => {
              const currentWordIndex = wordIndex++;
              const delay = currentWordIndex * 55;
              return (
                <span
                  className="animated-heading__word"
                  style={{
                    transitionDelay: `${delay}ms`,
                    "--word-motion-delay": `${900 + currentWordIndex * 180}ms`,
                  } as CSSProperties}
                  key={`${line}-${word}-${currentWordIndex}`}
                >
                  <span className="animated-heading__label">{word}</span>
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </Tag>
  );
}
