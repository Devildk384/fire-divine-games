/* eslint-disable @next/next/no-img-element */
import React from "react";
import steam from "./steam.webp";
import lt_poster from "./lt_poster.webp";
import bar_poster from "./bar_poster.jpg";
import nswitch from "./switch.webp";
import gplay from "./gplay.webp";

const Games = () => {
  return (
    <div
      id="games"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-10 max-w-screen-md 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto"
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        GAMES
      </h2>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 mb-8">
        <div className="col-start-2 lg:col-start-1 lg:col-end-3 flex flex-col-reverse lg:flex-col items-center gap-4">
          <img src={bar_poster.src} alt="" />
          <div className="flex">
            <a href="https://store.steampowered.com/app/2230080/Ballads_and_Romances/">
              <img src={steam.src} alt="Available on Steam" className="w-48" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.AstrolabeStories.BalladsandRomances">
              <img
                src={gplay.src}
                alt="Available on Google Play"
                className="w-48"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center lg:col-start-3 lg:col-end-4">
          <h3 className="text-primary text-base">BALLADS AND ROMANCES</h3>
          <p className=" text-white text-sm">
            The year is 1822. Adam Mickiewicz is preparing to publish his
            literary debut. In a moment, the world will know his groundbreaking
            Ballads & romances. Go with the poet on a journey through his
            memories and find out what contributed to the creation of such
            ballads as Świteź, Primrose, or Romanticism.
          </p>
          <p className=" text-white text-sm">
            During the game, you will learn interesting facts from the life of
            Adam Mickiewicz, and you will experience events together with the
            poet, the echoes of which live in his works!
          </p>
          <p className=" text-white text-sm">
            The game is available in Polish and English, as well as in color and
            black and white.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        <div className="col-start-2 lg:col-start-1 flex flex-col items-center gap-4">
          <h3 className="text-primary text-base">LAST THRESHOLD</h3>
          <p className=" text-white text-sm">
            &quot;Last Threshold&quot; is a visual novel game inspired by the
            works of H.P. Lovecraft, as well as historical events (exile to
            Siberia). During the game, the player learns the history of the
            expedition to investigate the mysterious ruins of a temple belonging
            to the Siberian people of Chukchi.
          </p>
          <p className=" text-white text-sm">
            The game is available in Polish, English, German, French, and in
            near future also in Spanish.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-4 items-center justify-center lg:col-start-2 lg:col-end-4">
          <img src={lt_poster.src} alt="" />
          <div className="flex">
            <a href="https://store.steampowered.com/app/1840770/Last_Threshold/">
              <img src={steam.src} alt="Available on Steam" className="w-48" />
            </a>
            <a href="https://www.nintendo.com/store/products/last-threshold-switch/">
              <img
                src={nswitch.src}
                alt="Available on Nintendo Switch"
                className="w-48"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
