import React, { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="flex flex-col lg:flex-row font-primary">
      <div className="stars fixed top-0 left-0 right-0 bottom-0 w-full h-full block bg-stars bg-repeat bg-center-top -z-50"></div>
      <div className="twinkling fixed top-0 left-0 right-0 bottom-0 w-full h-full block bg-twinkling bg-repeat bg-center-top -z-40 animate-twink"></div>
      <div className="clouds fixed top-0 left-0 right-0 bottom-0 w-full h-full block bg-clouds bg-repeat bg-center-top -z-30 animate-cloud opacity-40"></div>
      <Navbar />
      <div className="w-full">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
