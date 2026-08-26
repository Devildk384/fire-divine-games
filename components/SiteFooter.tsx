import Link from "next/link";
import Brand from "./Brand";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <Brand footer />
      <nav className="footer__links" aria-label="Footer navigation">
        <Link href="/#games">Games</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <a href="https://play.google.com/store/apps/dev?id=8878040228937888848" target="_blank" rel="noreferrer">
          Google Play <span aria-hidden="true">&#8599;</span>
        </a>
      </nav>
      <div className="footer__meta">
        <span>&copy; 2026 Fire Divine Games</span>
        <span>Aligarh, Uttar Pradesh, India</span>
        <a
          className="footer__credit"
          href="https://www.syslence.com"
          target="_blank"
          rel="noreferrer"
        >
          Developed by Syslence Technologies Private Limited
          <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </footer>
  );
}
