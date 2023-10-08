import React from "react";
import {
  FaArrowTrendUp,
  FaCircleDollarToSlot,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa6";

const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* first card  */}
        <div className="bg-[#FFF] card-shadow duration-300 rounded-[12px] border">
          <div className="flex justify-between p-5">
            <div>
              <h2 className="text-[12px] text-[#556476] uppercase font-normal">
                Total Customers
              </h2>
              <span className="text-[#172635] text-[26px] uppercase font-bold">
              5236
              </span>
            </div>
            <div className="bg-[#FFF4D5] w-10 h-10 flex items-center justify-center rounded-lg">
              <FaUsers className="text-[#F58A0B] h-5 w-5" />
            </div>
          </div>
        <div className="px-1">  <hr className="" /></div>
          <div className="flex items-center gap-2 p-5">
            <div
              className="flex items-center gap-1 justify-center bg-opacity-10 text-[#0EB17F] text-[14px] font-semibold rounded-[4px] w-[53px] h-[24px] bg-red-500"
              style={{
                background:
                  "var(--brand-color-green-10, rgba(14, 177, 127, 0.10))",
              }}
            >
              <FaArrowTrendUp className="w-[7px] h-[7px]" />
              <span className="text-[11px]">+1.14%</span>
            </div>
            <div>
              <span className="text-[12px] text-[#556476] font-normal leading-[18px] ">
              Average Users 525 
              </span>
            </div>
          </div>
        </div>
        {/* second card  */}
        <div className="bg-[#FFF] card-shadow rounded-[12px] border">
          <div className="flex justify-between p-5">
            <div>
              <h2 className="text-[12px] text-[#556476] uppercase font-normal">
              New Customer
              </h2>
              <span className="text-[#172635] text-[26px] uppercase font-bold">
               162
              </span>
            </div>
            <div className="bg-[#EAF0FF] w-10 h-10 flex items-center justify-center rounded-lg">
              <FaUserCheck className="text-[#4A58EC] h-5 w-5" />
            </div>
          </div>
          <div className="px-1">  <hr className="" /></div>
          <div className="flex items-center gap-2 p-5">
            <div
              className="flex items-center gap-1 justify-center bg-opacity-10 text-[#FF5636] text-[14px] font-semibold rounded-[4px] w-[53px] h-[24px] "
              style={{
                background:
                  "var(--brand-color-red-10, rgba(255, 86, 54, 0.10))",
              }}
            >
              <FaArrowTrendUp className="w-[7px] h-[7px]" />
              <span className="text-[11px]">-0.62%</span>
            </div>
            <div>
              <span className="text-[12px] text-[#556476] font-normal leading-[18px] ">
              Average New Users 159 
              </span>
            </div>
          </div>
        </div>
        {/* three card  */}
        <div className="bg-[#FFF] card-shadow rounded-[12px] border">
          <div className="flex justify-between p-5">
            <div>
              <h2 className="text-[12px] text-[#556476] uppercase font-normal">
              Engagement
              </h2>
              <span className="text-[#172635] text-[26px] uppercase font-bold">
              145,34
              </span>
            </div>
            <div className="bg-[#F1F5F3] w-10 h-10 flex items-center justify-center rounded-lg">
              {/* <FaUsers className="text-[#F58A0B] h-5 w-5" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5.66669 6.5C5.66669 6.96023 6.03978 7.33333 6.50002 7.33333C6.96026 7.33333 7.33335 6.96023 7.33335 6.5C7.33335 6.03976 6.96026 5.66666 6.50002 5.66666C6.03978 5.66666 5.66669 6.03976 5.66669 6.5Z"
                  fill="#0EB17F"
                />
                <path
                  d="M10.6667 11.5C10.6667 11.9602 11.0398 12.3333 11.5 12.3333C11.9603 12.3333 12.3334 11.9602 12.3334 11.5C12.3334 11.0398 11.9603 10.6667 11.5 10.6667C11.0398 10.6667 10.6667 11.0398 10.6667 11.5Z"
                  fill="#0EB17F"
                />
                <path
                  d="M6.05806 11.0581C5.81398 11.3021 5.81398 11.6979 6.05806 11.9419C6.30214 12.186 6.69786 12.186 6.94194 11.9419L6.05806 11.0581ZM11.656 7.2279C11.9001 6.98382 11.9001 6.58809 11.656 6.34401C11.4119 6.09994 11.0162 6.09994 10.7721 6.34401L11.656 7.2279ZM3.21756 15.7042L3.58493 15.1986L3.21756 15.7042ZM2.29576 14.7824L2.8014 14.4151L2.29576 14.7824ZM15.7042 14.7824L15.1986 14.4151L15.7042 14.7824ZM14.7824 15.7042L14.4151 15.1986L14.7824 15.7042ZM14.7824 2.29576L14.4151 2.8014L14.7824 2.29576ZM15.7042 3.21756L15.1986 3.58493L15.7042 3.21756ZM3.21756 2.29576L3.58493 2.8014L3.21756 2.29576ZM2.29576 3.21756L2.8014 3.58493L2.29576 3.21756ZM6.94194 11.9419L11.656 7.2279L10.7721 6.34401L6.05806 11.0581L6.94194 11.9419ZM9 15.875C7.42369 15.875 6.29166 15.8741 5.41504 15.7792C4.55011 15.6855 4.00826 15.5062 3.58493 15.1986L2.8502 16.2099C3.52213 16.6981 4.30912 16.9167 5.2804 17.0219C6.23998 17.1259 7.45153 17.125 9 17.125V15.875ZM0.875 9C0.875 10.5485 0.874142 11.76 0.978107 12.7196C1.08334 13.6909 1.30194 14.4779 1.79013 15.1498L2.8014 14.4151C2.49383 13.9917 2.31454 13.4499 2.22083 12.585C2.12586 11.7083 2.125 10.5763 2.125 9H0.875ZM3.58493 15.1986C3.28426 14.9802 3.01985 14.7157 2.8014 14.4151L1.79013 15.1498C2.08567 15.5566 2.44341 15.9143 2.8502 16.2099L3.58493 15.1986ZM15.875 9C15.875 10.5763 15.8741 11.7083 15.7792 12.585C15.6855 13.4499 15.5062 13.9917 15.1986 14.4151L16.2099 15.1498C16.6981 14.4779 16.9167 13.6909 17.0219 12.7196C17.1259 11.76 17.125 10.5485 17.125 9H15.875ZM9 17.125C10.5485 17.125 11.76 17.1259 12.7196 17.0219C13.6909 16.9167 14.4779 16.6981 15.1498 16.2099L14.4151 15.1986C13.9917 15.5062 13.4499 15.6855 12.585 15.7792C11.7083 15.8741 10.5763 15.875 9 15.875V17.125ZM15.1986 14.4151C14.9802 14.7157 14.7157 14.9802 14.4151 15.1986L15.1498 16.2099C15.5566 15.9143 15.9143 15.5566 16.2099 15.1498L15.1986 14.4151ZM9 2.125C10.5763 2.125 11.7083 2.12586 12.585 2.22083C13.4499 2.31454 13.9917 2.49383 14.4151 2.8014L15.1498 1.79013C14.4779 1.30194 13.6909 1.08334 12.7196 0.978107C11.76 0.874142 10.5485 0.875 9 0.875V2.125ZM17.125 9C17.125 7.45153 17.1259 6.23998 17.0219 5.2804C16.9167 4.30912 16.6981 3.52213 16.2099 2.8502L15.1986 3.58493C15.5062 4.00826 15.6855 4.55011 15.7792 5.41504C15.8741 6.29166 15.875 7.42369 15.875 9H17.125ZM14.4151 2.8014C14.7157 3.01985 14.9802 3.28426 15.1986 3.58493L16.2099 2.8502C15.9143 2.44341 15.5566 2.08567 15.1498 1.79013L14.4151 2.8014ZM9 0.875C7.45153 0.875 6.23998 0.874142 5.2804 0.978107C4.30912 1.08334 3.52213 1.30194 2.8502 1.79013L3.58493 2.8014C4.00826 2.49383 4.55011 2.31454 5.41504 2.22083C6.29166 2.12586 7.42369 2.125 9 2.125V0.875ZM2.125 9C2.125 7.42369 2.12586 6.29166 2.22083 5.41504C2.31454 4.55011 2.49383 4.00826 2.8014 3.58493L1.79013 2.8502C1.30194 3.52213 1.08334 4.30912 0.978107 5.2804C0.874142 6.23998 0.875 7.45153 0.875 9H2.125ZM2.8502 1.79013C2.44341 2.08567 2.08567 2.44341 1.79013 2.8502L2.8014 3.58493C3.01985 3.28426 3.28426 3.01985 3.58493 2.8014L2.8502 1.79013Z"
                  fill="#0EB17F"
                />
              </svg>
            </div>
          </div>
          <div className="px-1">  <hr className="" /></div>
          <div className="flex items-center gap-2 p-5">
            <div
              className="flex items-center gap-1 justify-center bg-opacity-10 text-[#0EB17F] text-[14px] font-semibold rounded-[4px] w-[53px] h-[24px] bg-red-500"
              style={{
                background:
                  "var(--brand-color-green-10, rgba(14, 177, 127, 0.10))",
              }}
            >
              <FaArrowTrendUp className="w-[7px] h-[7px]" />
              <span className="text-[11px]">-0.26 %</span>
            </div>
            <div>
              <span className="text-[12px] text-[#556476] font-normal leading-[18px] ">
              Average 12,345 
              </span>
            </div>
          </div>
        </div>
        {/* four card  */}
        <div className="bg-[#FFF] card-shadow rounded-[12px] border">
          <div className="flex justify-between p-5">
            <div>
              <h2 className="text-[12px] text-[#556476] uppercase font-normal">
              Sales Performance
              </h2>
              <span className="text-[#172635] text-[26px] uppercase font-bold">
             +0.32%
              </span>
            </div>
            <div className="bg-[#F2ECFF] w-10 h-10 flex items-center justify-center rounded-lg">
              <FaCircleDollarToSlot className="text-[#7E42FF] h-5 w-5" />
            </div>
          </div>
          <div className="px-1">  <hr className="" /></div>
          <div className="flex items-center gap-2 p-5">
            <div
              className="flex items-center gap-1 justify-center bg-opacity-10 text-[#FF5636] text-[14px] font-semibold rounded-[4px] w-[53px] h-[24px] "
              style={{
                background:
                  "var(--brand-color-red-10, rgba(255, 86, 54, 0.10))",
              }}
            >
              <FaArrowTrendUp className="w-[7px] h-[7px]" />
              <span className="text-[11px]">-0.87%</span>
            </div>
            <div>
              <span className="text-[12px] text-[#556476] font-normal leading-[18px] ">
              Average rate 8254% 
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
