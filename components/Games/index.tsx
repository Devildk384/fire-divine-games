/* eslint-disable @next/next/no-img-element */
import React from "react";
import steam from "./steam.webp";
import findme_poster from "./Findme.png";
import unearthed_poster from "./Unearthed.webp";
import nswitch from "./switch.webp";
import gplay from "./gplay.webp";

const Games = () => {
  return (
    <div
      id="games"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 md:px-[60px] py-10 max-w-screen-md 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto"
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        GAMES
      </h2>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 mb-8">
        <div className="col-start-2 lg:col-start-1 lg:col-end-3 flex flex-col-reverse lg:flex-col items-center gap-4">
          <img src="/Unearthed.webp" alt="" />
          <div className="flex">
            <a href="https://play.google.com/store/apps/details?id=com.DelightPlusGames.UnearthedTheInvasion&pcampaignid=web_share">
              <img
                src="/gplay.webp"
                alt="Available on Google Play"
                className="w-48"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center lg:col-start-3 lg:col-end-4">
          <h3 className="text-primary text-base">UNEARTHED THE INVASION</h3>
          <p className=" text-white text-sm">
            Unearthed: The Invasion – A Multi-Character Survival Thriller!

Get ready to dive into an action-packed alien invasion survival adventure! In the peaceful village where Lily and her father, David, live, chaos erupts when alien ships invade the skies. Their world is turned upside down as survival becomes their only goal.
          </p>
          <p className=" text-white text-sm">
            🏃 Survive, Run, and Fight Back
Play as three unique characters, each offering a thrilling perspective:

David: Brave through dangerous roads, dodge alien scouts, and race against time to rescue your daughter.
Lily: Sneak through shadowy paths, evade alien patrols, and uncover the secrets of the invasion.
The Soldier: Arm yourself with powerful weapons, face the alien menace head-on, and save as many survivors as possible.
          </p>
          <p className=" text-white text-sm">
            📥 Download Now
Step into the invasion and discover if you have what it takes to survive. Unearthed: The Invasion is waiting for you!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        <div className="col-start-2 lg:col-start-1 flex flex-col items-center gap-4">
          <h3 className="text-primary text-base">FINDME HIDDEN OBJECT GAME</h3>
          <p className=" text-white text-sm">
            &quot;Findme Hidden Object&quot; 🔍 Welcome to Find Me – The Ultimate Hidden Object Challenge!

Experience the hardest hidden object game without zoom – can you find them all? Try it now!

Embark on a thrilling hidden object adventure with Find Me!

Sharpen your observation skills as you explore beautifully crafted scenes filled with hidden treasures. Each level is designed to challenge your focus and attention to detail, making it the perfect game for relaxation and brain training.
          </p>
          <p className=" text-white text-sm">
            READY TO FIND THEM ALL?

Download Find Me now and dive into a world of discovery, relaxation, and fun! Can you spot them all?
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-4 items-center justify-center lg:col-start-2 lg:col-end-4">
          <img src={findme_poster.src} alt="" />
          <div className="flex">
           
            <a href="https://play.google.com/store/apps/details?id=com.DelightPlusGames.FindMe&pcampaignid=web_share">
              <img
                src="/gplay.webp"
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
