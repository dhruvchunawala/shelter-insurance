import React from "react";

import { Outlet } from "react-router-dom";

import { Sidebar } from "../../components/Shared/Sidebar/Sidebar";
import { Navbar } from "../../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="">
            <div className="py-[10px]">
              <Navbar />
            </div>
            <hr />
          </div>
          <div
            className="bg-[#FFF]"
          >
            <div className="w-full md:w-[100%] xl:w-[80%]  mx-auto xl:py-20 p-0">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
