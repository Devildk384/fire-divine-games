/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faSteamSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./ASLogo.webp";

const navbarLinks = [
  {
    href: "/#about",
    text: "About Us",
  },
  {
    href: "/#team",
    text: "Team",
  },
  {
    href: "/#history",
    text: "Our History",
  },
  {
    href: "/#games",
    text: "Games",
  },
  {
    href: "/#contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-black lg:bg-transparent flex px-12 py-6 lg:px-4 justify-center items-center fixed top-0 w-full lg:w-52 lg:h-full z-50">
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-col gap-4 justify-between">
        <div className="flex flex-row justify-between">
          <div className="lg:hidden text-white">
            <Link href="/">
              <a>
                <img
                  src={logo.src}
                  alt="Fire Divini Games logo"
                  className="w-36"
                />
              </a>
            </Link>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label="Menu mobilne"
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <ul
          id="desktop-menu"
          className="hidden lg:flex flex-col list-none gap-12 items-center"
        >
          {navbarLinks.map((link, index) => (
            <li
              key={`navbar-${index}`}
              className="text-white transition-all duration-100 font-bold hover:text-primary uppercase tracking-wide"
            >
              <Link href={link.href} scroll={false}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-8">
            <a href="https://www.facebook.com/astrolabestories">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                className="text-white"
              />
            </a>
            <a href="https://www.linkedin.com/company/astrolabe-stories/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-white"
              />
            </a>
            <a href="https://store.steampowered.com/search/?developer=Astrolabe%20Stories">
              <FontAwesomeIcon
                icon={faSteamSquare}
                size="2x"
                className="text-white"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCW8tRgqGWNIzyckF1ZkJepg"
              aria-label="YouTube link"
            >
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="2x"
                className="text-white"
              />
            </a>
          </li>
        </ul>
        <ul
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          } lg:hidden flex-col list-none gap-4 items-center pt-4 text-white`}
        >
          {navbarLinks.map((link, index) => (
            <li
              key={`navbar-mobile-${index}`}
              className=" font-bold uppercase tracking-wide"
              onClick={() => setShowMenu(false)}
            >
              <Link href={link.href} scroll={false}>
                <a className="py-2">{link.text}</a>
              </Link>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-x-8 gap-y-4">
            <a
              href="https://www.facebook.com/astrolabestories"
              aria-label="Facebook Page link"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                className="text-white"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/astrolabe-stories/"
              aria-label="LinkedIn Page link"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-white"
              />
            </a>
            <a
              href="https://store.steampowered.com/search/?developer=Astrolabe%20Stories"
              aria-label="Steam Page link"
            >
              <FontAwesomeIcon
                icon={faSteamSquare}
                size="2x"
                className="text-white"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCW8tRgqGWNIzyckF1ZkJepg"
              aria-label="YouTube link"
            >
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="2x"
                className="text-white"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
