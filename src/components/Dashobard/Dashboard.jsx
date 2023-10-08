import React, { useState } from "react";
import Card from "./card/Card";
import { FaEllipsisVertical } from "react-icons/fa6";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import SalesOverView from "./Chart/SalesOverView/SalesOverView";
import CustomerSegmentation from "./Chart/CustomerSegmentation/CustomerSegmentation";
import { Table } from "./table/Table";
const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="p-8">
      {/* card div  */}
      <div>
        <Card />
      </div>
      {/* chart  */}
      <div className="mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-x-8 ">
          <div className="bg-white p-4 rounded-lg shadow-md col-span-4 row-span-2 border">
            <div className="flex items-center justify-between">
              <span className="text-[#172635] text-[19px] font-bold">
              Sales Overview
              </span>
              <Button
                variant="outlined"
                color="blue-gray"
                className="lg:flex items-center gap-1  rounded-md py-2 pr-2 pl-0.5 lg:ml-auto text-[12px] text-[#556476] border-1-[#E8E9EB] font-normal capitalize px-4 hidden"
              >
                6 Month
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-4 w-4 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
            <div>
              <SalesOverView />
            </div>
          </div>
          <div className="bg-white  p-4 rounded-lg shadow-md col-span-2 lg:mt-0 mt-4 border">
            <div className="flex items-center justify-between">
              <span className="text-[#172635] text-[19px] font-bold">
              Customer Segmentation
              </span>
              <span>
                <FaEllipsisVertical />
              </span>
            </div>
            <div className="mt-[30px]"><CustomerSegmentation/></div>
          </div>
        </div>
      </div>
      {/* table  */}
      <div className="mt-6">
        <Table/>
      </div>
    </div>
  );
};

export default Dashboard;
