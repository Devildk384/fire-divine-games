import React from "react";

const History = () => {
  return (
    <div
      id="history"
      className="w-full px-5 py-10 max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto"
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        OUR HISTORY
      </h2>
      <ol className="relative border-primary border-dashed border-l-4 text-white">
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            January 2021
          </time>
          <p className="mb-4 ml-2.5 text-sm font-normal ">
            We started thinking about making our debut game.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            February 2021
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            We made a team ready for all types of challenges :)
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            March 2021
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            Conceptual work on the game has started - the fun has just begun!
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            June 2021
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            We started the real game development process. It&apos;s starting to
            get serious ;)
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            March 25th, 2022
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            The release of our first game &quot;Last Threshold&quot;!
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            May 31st, 2022
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            We begun co-operation with Feardemic sp. z.o.o. for publishing
            &quot;Last Threshold&quot; on consoles
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            August 11th, 2022
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            &quot;Last Threshold&quot; release on Nintendo Switch console
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            December 21st, 2022
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            The release of our second game &quot;Ballads and romances&quot;!
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-6 h-6 bg-primary rounded-full mt-1.5 -left-3.5 border border-primary"></div>
          <time className="mb-1 ml-2.5 leading-none text-primary text-center text-l font-bold uppercase">
            January 2nd, 2023
          </time>

          <p className="mb-4 ml-2.5 text-sm font-normal ">
            &quot;Ballads and romances&quot; released on mobile devices
          </p>
        </li>
      </ol>
    </div>
  );
};

export default History;
