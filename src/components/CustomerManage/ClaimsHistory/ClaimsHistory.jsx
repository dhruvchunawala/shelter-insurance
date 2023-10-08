import React from 'react';
import { ClaimsHistoryTable } from './ClaimsHistoryTable/ClaimsHistoryTable';

const ClaimsHistory = () => {
    return (
        <div className="p-8">
      {/* title section  */}
      <div>
        <span className="text-[#172635] text-[26px] font-bold ">
          Claims History
        </span>
      </div>
      {/* table section  */}
      <div className="mt-[29px]"><ClaimsHistoryTable/></div>
    </div>
    );
};

export default ClaimsHistory;