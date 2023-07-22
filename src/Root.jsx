import React from "react";
import { Outlet } from "react-router-dom";
import {  Navbar } from "./components";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
