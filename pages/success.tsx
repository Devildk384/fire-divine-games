import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h2>Message sent</h2>
      <p>We will get back to you as soon as possible.</p>
      <Link href="/" scroll={false}>
        <a>
          <button
            type="button"
            className={`text-white hover:text-black relative top-0 hover:-top-1.5 transition-all duration-300 ease-in font-secondary uppercase font-bold text-base tracking-wide rounded-full bg-lime-500 hover:bg-white px-12 py-4`}
          >
            Back to the main page
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Success;
