import {
  faFacebookSquare,
  faLinkedin,
  faSteamSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white font-secondary p-4 flex flex-col justify-center items-center gap-4">
      <div className="text-xs">
        <ul className="flex gap-4">
          <li>Tel: +48 600 631 820</li>
          <li>Email: info@astrolabestories.com</li>
          <li>Address: Komorowska 11/2, 54-436 Wrocław</li>
        </ul>
      </div>
      <div className="flex gap-4">
        Fire Divini Games {new Date().getFullYear()}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/astrolabestories"
            aria-label="Facebook Page link"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/company/astrolabe-stories/"
            aria-label="LinkedIn Page link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href="https://store.steampowered.com/search/?developer=Astrolabe%20Stories"
            aria-label="Steam Page link"
          >
            <FontAwesomeIcon icon={faSteamSquare} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
