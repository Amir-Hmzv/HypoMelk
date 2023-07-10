import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
