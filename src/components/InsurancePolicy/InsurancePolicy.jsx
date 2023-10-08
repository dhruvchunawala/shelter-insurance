import React from 'react';
import { InsurancePolicyTable } from './InsurancePolicyTable/InsurancePolicyTable';


const InsurancePolicy = () => {
    return (
        <div className="p-8">
      {/* title section  */}
      <div>
        <span className="text-[#172635] text-[26px] font-bold ">
        Insurance Policy
        </span>
      </div>
      {/* table section  */}
      <div className="mt-[29px]"><InsurancePolicyTable/></div>
    </div>
    );
};

export default InsurancePolicy;