import React from 'react';
import CustomerCard from './Card/CustomerCard';
import { CustomerTable } from './CustomerTable/CustomerTable';

const Customer = () => {
    return (
        <div className="p-8">
           {/* first div card  */}
           <div>
            <CustomerCard/>
           </div>
           {/* table  */}
           <div className='mt-6'>
            <CustomerTable/>
           </div>
        </div>
    );
};

export default Customer;