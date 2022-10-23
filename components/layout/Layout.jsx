import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="bg-base-200">
      <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl ">
        <Header />
        <div className=" flex-1 ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
