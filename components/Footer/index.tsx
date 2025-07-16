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
          <li>Tel: +91 6395528253</li>
          <li>Email: deepeshlumar384@gmail.com</li>
          <li>Address: Aligarh - Uttar Pradesh</li>
        </ul>
      </div>
      <div className="flex gap-4">
        Fire Divine Games {new Date().getFullYear()}
        <div className="flex gap-4">
          <a
            href=""
            aria-label="Facebook Page link"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          </a>
          <a
            href=""
            aria-label="LinkedIn Page link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href=""
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
