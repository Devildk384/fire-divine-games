import React from "react";

const Team = () => {
  return (
    <div
      id="team"
      className="w-full px-5 py-10 max-w-screen-md 2xl:max-w-screen-lg 3xl:max-w-screen-xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        TEAM
      </h2>
      <div className="border-8 border-primary p-8 relative">
        <div className="bg-dots rounded-full w-10 h-10 relative top-0 -left-14 float-left"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-sm text-white lg:gap-8">
          <ul className="list-disc">
            <li>
              <span className="text-primary">Deepesh Kumar </span> - Co-Founder & Lead Game Designer at Fire Divine Games
            </li>
            <li>
              <span className="text-primary">Durgesh Kumar</span> - Co-Founder & Full-Stack Developer at Fire Divine Games
            </li>
            
          </ul>
        </div>
        <div className="bg-dots rounded-full w-14 h-14 relative -bottom-16 ml-auto -rotate-90 float-right"></div>
      </div>
    </div>
  );
};

export default Team;
