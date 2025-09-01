/* eslint-disable @next/next/no-img-element */
import React from "react";
// import card from "./card.webp";
import card from "./card.png";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 md:px-[60px] py-10 max-w-screen-md 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto "
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        ABOUT US
      </h2>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <img src={card.src} alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center lg:col-start-2 lg:col-end-4 text-sm">
          <p className=" text-white ">
            Fire Divine Games is an MSME-registered indie game studio driven by passion and creativity. Our mission is bold yet simple: to craft meaningful games with unforgettable stories that resonate with players long after the screen fades to black.
          </p>

          <p className=" text-white">
            We are not just developers — we are storytellers, dreamers, and creators. Inspired by the power of narrative, we believe games can be more than entertainment; they can be emotional journeys that touch hearts, spark imagination, and explore the depths of human nature.

            Just as the astrolabe once guided explorers through uncharted seas, our compass is the art of storytelling. With a dedicated team of developers, artists, and creative minds, we are building immersive gaming experiences that matter.

            Each of us appreciates games with stories that touch the heart and
            make us think about life. That is why we want to create stories that
            will leave a mark on players&apos; memories.
          </p>
          <p className=" text-white">
            🌌 Unearthed: The Invasion
            Released: May 22, 2024

            A Multi-Character Alien Survival Thriller

            Step into a world turned upside down by an alien invasion in this thrilling, action-packed adventure.

            In a peaceful village, Lily and her father David live a quiet life — until the skies fill with alien ships and chaos erupts. Survival becomes the only goal. Switch between three unique perspectives in your fight for survival:

            David: Brave perilous roads, dodge alien scouts, and race against time to save his daughter.

            Lily: Sneak through the shadows and uncover hidden truths behind the invasion.

            The Soldier: Armed and ready, face off against alien forces and protect as many survivors as possible.

            📥 Download now and see if you have what it takes to survive the invasion.

            Unearthed: The Invasion – Your choices matter. Your survival is not guaranteed.
          </p>
          <p className=" text-white">
            🔍 Find Me: Hidden Object Game
            Released: February 10, 2025

            The Ultimate No-Zoom Hidden Object Challenge

            Welcome to Find Me, the most challenging and satisfying hidden object experience – with no zoom! Dive into beautifully illustrated scenes, packed with cleverly concealed items that will test even the sharpest eyes.

            🌿 Stunning handcrafted visuals

            🧠 Designed for mental focus, relaxation, and brain training

            ⏳ Progressively difficult levels to keep you hooked

            🎯 Think you have what it takes to find them all?
            📥 Download Find Me now and challenge your attention to detail like never before!
          </p>
          <p className=" text-white">
            🔮 What’s Next?
            We’re currently working on two ambitious titles:

            👁️‍🗨️ A horror mobile game blending psychological suspense with immersive storytelling.

            🧬 A deep indie game centered on human evolution, survival instincts, and our journey through time.

            These upcoming titles dive deeper into the complexity of human nature, emotional decisions, and the consequences of choice.

            Stay tuned – the next chapter of Fire Divine Games is about to unfold.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
