/* eslint-disable @next/next/no-img-element */
import React from "react";
import card from "./card.webp";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-10 max-w-screen-md 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto "
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
            Fire Divini Games is a gaming project of the Games’ Development and
            Research Association GameUP. The main aim of Fire Divini Games is to
            make meaningful games with unforgettable stories. We are a group of
            experienced storytellers and enthusiasts of story design. Just as
            the astrolabe showed the direction of travel, for us such a way of
            navigating is telling unique stories. With a group of our students,
            we decided to start our journey together and make our first game.
          </p>
          <p className=" text-white">
            Each of us appreciates games with stories that touch the heart and
            make us think about life. That is why we want to create stories that
            will leave a mark on players&apos; memories.
          </p>
          <p className=" text-white">
            On the 25th of March 2022 we&apos;ve released &quot;Last
            Threshold&quot;, our first game, heavily inspired by the work of
            H.P. Lovecraft and his followers, which allows you to learn about
            the extraordinary history of a mysterious temple in Siberia. We
            decided on the visual novel genre because we wanted the player to
            empathize with the hero struggling with the dark secrets of the
            temple, difficult weather conditions, and his past.
          </p>
          <p className=" text-white">
            Soon after the release of our debut, we decided to expand the
            Threshold universe. We have started to make webcomics
            &quot;Chronicles of Aleleke&quot;, also you can read the prequel of
            Last Threshold on our social media (&quot;Karol Staszewski&apos;s
            diary&quot;). We are working on a standalone comic that will help us
            to expand our universe.
          </p>
          <p className=" text-white">
            On 21.12.2022 we published &quot;Ballads and Romances&quot;, a
            visual novel game in collaboration with The Ministry of Culture and
            National Heritage of Poland. This visual novel shows the origins of
            &quot;Ballads and Romances&quot;, the literary debut of Adam
            Mickiewicz, a great Polish poet in the Romanticism Epoque.
          </p>
          <p className=" text-white">
            Now we are working on new projects, in which we want to focus on
            telling the stories of protagonists, whose fates will allow us to
            tell a bit more about human nature and much more! You will have to
            wait a little longer for more information. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
