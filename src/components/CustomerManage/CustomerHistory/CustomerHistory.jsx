import React from "react";
import { CustomerHistoryTable } from "./CustomerHistoryTable/CustomerHistoryTable";

const CustomerHistory = () => {
  return (
    <div className="p-8">
      {/* title section  */}
      <div>
        <span className="text-[#172635] text-[26px] font-bold ">
          Customer History
        </span>
      </div>
      {/* table section  */}
      <div className="mt-[29px]"><CustomerHistoryTable/></div>
    </div>
  );
};

export default CustomerHistory;
