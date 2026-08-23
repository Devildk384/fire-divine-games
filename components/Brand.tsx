import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  footer?: boolean;
};

export default function Brand({ footer = false }: BrandProps) {
  return (
    <Link className={`brand ${footer ? "brand--footer" : ""}`} href="/" aria-label="Fire Divine Games home">
      <span className="brand__mark" aria-hidden="true">
        <Image src="/images/brand/fire-divine-logo.png" alt="" width={72} height={68} priority={!footer} />
      </span>
      <span className="brand__copy">
        <strong>FIRE DIVINE</strong>
        <small>GAMES</small>
      </span>
    </Link>
  );
}
