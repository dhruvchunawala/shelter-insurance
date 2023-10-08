import { useState, } from "react";

import {
  Card,
  Typography,
  Button,
  Checkbox,
} from "@material-tailwind/react";
// import { RotatingLines } from "react-loader-spinner";

import { Link } from "react-router-dom";

const TABLE_HEAD = [
  <>
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="15"
        viewBox="0 0 12 15"
        fill="none"
      >
        <path
          d="M8.16658 4.00016C8.16658 5.19678 7.19653 6.16683 5.99992 6.16683V7.16683C7.74882 7.16683 9.16658 5.74906 9.16658 4.00016H8.16658ZM5.99992 6.16683C4.8033 6.16683 3.83325 5.19678 3.83325 4.00016H2.83325C2.83325 5.74906 4.25102 7.16683 5.99992 7.16683V6.16683ZM3.83325 4.00016C3.83325 2.80355 4.8033 1.8335 5.99992 1.8335V0.833496C4.25102 0.833496 2.83325 2.25126 2.83325 4.00016H3.83325ZM5.99992 1.8335C7.19653 1.8335 8.16658 2.80355 8.16658 4.00016H9.16658C9.16658 2.25126 7.74882 0.833496 5.99992 0.833496V1.8335ZM3.99992 9.16683H7.99992V8.16683H3.99992V9.16683ZM7.99992 13.5002H3.99992V14.5002H7.99992V13.5002ZM3.99992 13.5002C2.8033 13.5002 1.83325 12.5301 1.83325 11.3335H0.833252C0.833252 13.0824 2.25102 14.5002 3.99992 14.5002V13.5002ZM10.1666 11.3335C10.1666 12.5301 9.19653 13.5002 7.99992 13.5002V14.5002C9.74882 14.5002 11.1666 13.0824 11.1666 11.3335H10.1666ZM7.99992 9.16683C9.19653 9.16683 10.1666 10.1369 10.1666 11.3335H11.1666C11.1666 9.58459 9.74882 8.16683 7.99992 8.16683V9.16683ZM3.99992 8.16683C2.25102 8.16683 0.833252 9.58459 0.833252 11.3335H1.83325C1.83325 10.1369 2.8033 9.16683 3.99992 9.16683V8.16683Z"
          fill="#8D93A8"
        />
      </svg>
      <span className="text-[16px] font-normal">Profile</span>
    </div>
  </>,
  <>
    <div className="flex items-center  gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
      >
        <path
          d="M2.37405 14.0302L2.66794 13.6257L2.37405 14.0302ZM1.63661 13.2928L2.04112 12.9989L1.63661 13.2928ZM12.3634 13.2928L11.9589 12.9989L12.3634 13.2928ZM11.6259 14.0302L11.3321 13.6257L11.6259 14.0302ZM11.6259 1.97011L11.3321 2.37461L11.6259 1.97011ZM12.3634 2.70755L11.9589 3.00144L12.3634 2.70755ZM2.37405 1.97011L2.66794 2.37461L2.37405 1.97011ZM1.63661 2.70755L2.04112 3.00144L1.63661 2.70755ZM4.33333 10.1668C4.05719 10.1668 3.83333 10.3907 3.83333 10.6668C3.83333 10.943 4.05719 11.1668 4.33333 11.1668V10.1668ZM9.66667 11.1668C9.94281 11.1668 10.1667 10.943 10.1667 10.6668C10.1667 10.3907 9.94281 10.1668 9.66667 10.1668V11.1668ZM4.33333 7.50016C4.05719 7.50016 3.83333 7.72402 3.83333 8.00016C3.83333 8.2763 4.05719 8.50016 4.33333 8.50016V7.50016ZM9.66667 8.50016C9.94281 8.50016 10.1667 8.2763 10.1667 8.00016C10.1667 7.72402 9.94281 7.50016 9.66667 7.50016V8.50016ZM7.66667 4.8335C7.39052 4.8335 7.16667 5.05735 7.16667 5.3335C7.16667 5.60964 7.39052 5.8335 7.66667 5.8335V4.8335ZM9.66667 5.8335C9.94281 5.8335 10.1667 5.60964 10.1667 5.3335C10.1667 5.05735 9.94281 4.8335 9.66667 4.8335V5.8335ZM12.5 7.3335V8.66683H13.5V7.3335H12.5ZM1.5 8.66683V7.3335H0.5V8.66683H1.5ZM7 14.1668C5.73895 14.1668 4.83333 14.1661 4.13203 14.0902C3.44009 14.0152 3.00661 13.8718 2.66794 13.6257L2.08016 14.4347C2.61771 14.8253 3.24729 15.0002 4.02432 15.0843C4.79198 15.1675 5.76123 15.1668 7 15.1668V14.1668ZM0.5 8.66683C0.5 9.9056 0.499314 10.8748 0.582485 11.6425C0.666671 12.4195 0.841549 13.0491 1.2321 13.5867L2.04112 12.9989C1.79506 12.6602 1.65163 12.2267 1.57667 11.5348C1.50069 10.8335 1.5 9.92788 1.5 8.66683H0.5ZM2.66794 13.6257C2.42741 13.451 2.21588 13.2394 2.04112 12.9989L1.2321 13.5867C1.46854 13.9121 1.75473 14.1983 2.08016 14.4347L2.66794 13.6257ZM12.5 8.66683C12.5 9.92788 12.4993 10.8335 12.4233 11.5348C12.3484 12.2267 12.2049 12.6602 11.9589 12.9989L12.7679 13.5867C13.1584 13.0491 13.3333 12.4195 13.4175 11.6425C13.5007 10.8748 13.5 9.9056 13.5 8.66683H12.5ZM7 15.1668C8.23877 15.1668 9.20801 15.1675 9.97568 15.0843C10.7527 15.0002 11.3823 14.8253 11.9198 14.4347L11.3321 13.6257C10.9934 13.8718 10.5599 14.0152 9.86797 14.0902C9.16667 14.1661 8.26105 14.1668 7 14.1668V15.1668ZM11.9589 12.9989C11.7841 13.2394 11.5726 13.451 11.3321 13.6257L11.9198 14.4347C12.2453 14.1983 12.5315 13.9121 12.7679 13.5867L11.9589 12.9989ZM7 1.8335C8.26105 1.8335 9.16667 1.83418 9.86797 1.91016C10.5599 1.98513 10.9934 2.12856 11.3321 2.37461L11.9198 1.5656C11.3823 1.17505 10.7527 1.00017 9.97568 0.915981C9.20801 0.83281 8.23877 0.833496 7 0.833496V1.8335ZM13.5 7.3335C13.5 6.09472 13.5007 5.12548 13.4175 4.35781C13.3333 3.58079 13.1584 2.9512 12.7679 2.41365L11.9589 3.00144C12.2049 3.34011 12.3484 3.77358 12.4233 4.46553C12.4993 5.16682 12.5 6.07245 12.5 7.3335H13.5ZM11.3321 2.37461C11.5726 2.54937 11.7841 2.7609 11.9589 3.00144L12.7679 2.41365C12.5315 2.08822 12.2453 1.80204 11.9198 1.5656L11.3321 2.37461ZM7 0.833496C5.76123 0.833496 4.79198 0.83281 4.02432 0.915981C3.24729 1.00017 2.61771 1.17505 2.08016 1.5656L2.66794 2.37461C3.00661 2.12856 3.44009 1.98513 4.13203 1.91016C4.83333 1.83418 5.73895 1.8335 7 1.8335V0.833496ZM1.5 7.3335C1.5 6.07245 1.50069 5.16682 1.57667 4.46553C1.65163 3.77358 1.79506 3.34011 2.04112 3.00144L1.2321 2.41365C0.841549 2.9512 0.666671 3.58079 0.582485 4.35781C0.499314 5.12548 0.5 6.09472 0.5 7.3335H1.5ZM2.08016 1.5656C1.75473 1.80204 1.46854 2.08822 1.2321 2.41365L2.04112 3.00144C2.21588 2.7609 2.42741 2.54937 2.66794 2.37461L2.08016 1.5656ZM4.33333 11.1668H9.66667V10.1668H4.33333V11.1668ZM4.33333 8.50016H9.66667V7.50016H4.33333V8.50016ZM7.66667 5.8335H9.66667V4.8335H7.66667V5.8335Z"
          fill="#8D93A8"
        />
      </svg>
      <span className="text-[16px] font-normal">Contact</span>
    </div>
  </>,
  <>
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M1.33337 1.3335H2.49338C3.21338 1.3335 3.78004 1.9535 3.72004 2.66683L3.16671 9.30682C3.07337 10.3935 3.93337 11.3268 5.0267 11.3268H12.1267C13.0867 11.3268 13.9267 10.5402 14 9.58683L14.36 4.58683C14.44 3.48017 13.6 2.58016 12.4867 2.58016H3.88005"
          stroke="#8D93A8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.8333 14.6667C11.2936 14.6667 11.6667 14.2936 11.6667 13.8333C11.6667 13.3731 11.2936 13 10.8333 13C10.3731 13 10 13.3731 10 13.8333C10 14.2936 10.3731 14.6667 10.8333 14.6667Z"
          fill="#8D93A8"
          stroke="#8D93A8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.49996 14.6667C5.9602 14.6667 6.33329 14.2936 6.33329 13.8333C6.33329 13.3731 5.9602 13 5.49996 13C5.03972 13 4.66663 13.3731 4.66663 13.8333C4.66663 14.2936 5.03972 14.6667 5.49996 14.6667Z"
          stroke="#8D93A8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 5.3335H14"
          stroke="#8D93A8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="text-[16px] font-normal">Customer Chat History</span>
    </div>
  </>,
  <>
    <div className="flex items-center  gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M3.83317 1.33376C3.83317 1.05762 3.60931 0.833758 3.33317 0.833758C3.05703 0.833758 2.83317 1.05762 2.83317 1.33376L3.83317 1.33376ZM1.5984 9.47407L1.24327 9.82605H1.24327L1.5984 9.47407ZM1.02163 8.18185C0.827242 7.98572 0.510663 7.98431 0.314532 8.1787C0.1184 8.37308 0.116988 8.68966 0.311377 8.88579L1.02163 8.18185ZM3.22928 10.1606C2.95535 10.1256 2.70499 10.3194 2.67007 10.5933C2.63516 10.8673 2.82891 11.1176 3.10284 11.1525L3.22928 10.1606ZM10.4013 2.39328L10.7564 2.04131V2.04131L10.4013 2.39328ZM10.978 3.6855C11.1724 3.88163 11.489 3.88305 11.6851 3.68866C11.8813 3.49427 11.8827 3.17769 11.6883 2.98156L10.978 3.6855ZM8.83361 1.2108L8.89683 0.714816V0.714816L8.83361 1.2108ZM8.1665 1.33375C8.1665 1.60989 8.39035 1.83375 8.6665 1.83376C8.94264 1.83376 9.1665 1.6099 9.1665 1.33376L8.1665 1.33375ZM8.1665 10.6671C8.1665 10.9432 8.39036 11.1671 8.6665 11.1671C8.94264 11.1671 9.1665 10.9432 9.1665 10.6671H8.1665ZM8.6665 1.33376L8.1665 1.33375V1.33376H8.6665ZM3.33317 10.4995H3.83317H3.33317ZM3.83317 10.4995L3.83317 1.33376L2.83317 1.33376L2.83317 10.4995H3.83317ZM1.95353 9.1221L1.02163 8.18185L0.311377 8.88579L1.24327 9.82605L1.95353 9.1221ZM1.24327 9.82605C1.60658 10.1926 1.90827 10.4981 2.178 10.7147C2.45561 10.9376 2.74738 11.1072 3.10284 11.1525L3.22928 10.1606C3.13184 10.1481 3.01136 10.1014 2.80416 9.935C2.58908 9.76227 2.33339 9.50537 1.95353 9.1221L1.24327 9.82605ZM10.0461 2.74525L10.978 3.6855L11.6883 2.98156L10.7564 2.04131L10.0461 2.74525ZM10.7564 2.04131C10.3931 1.67474 10.0914 1.36927 9.82167 1.15266C9.54406 0.929706 9.2523 0.760124 8.89683 0.714816L8.77039 1.70679C8.86783 1.71921 8.98831 1.76595 9.19551 1.93235C9.41059 2.10508 9.66628 2.36198 10.0461 2.74525L10.7564 2.04131ZM8.74939 1.70439C8.7564 1.7051 8.7634 1.7059 8.77039 1.70679L8.89683 0.714816C8.88133 0.71284 8.86582 0.711065 8.85028 0.70949L8.74939 1.70439ZM8.1665 1.33376V10.6671H9.1665V1.33376H8.1665ZM8.85028 0.70949C8.44839 0.668736 8.1665 0.999095 8.1665 1.33375L9.1665 1.33376C9.1665 1.52089 9.00451 1.73026 8.74939 1.70439L8.85028 0.70949ZM2.83317 10.4995C2.83317 10.336 2.97913 10.1287 3.22928 10.1606L3.10284 11.1525C3.53658 11.2078 3.83317 10.8481 3.83317 10.4995H2.83317Z"
          fill="#8D93A8"
        />
      </svg>
      <span className="text-[16px] font-normal">Notes</span>
    </div>
  </>,
];

const TABLE_ROWS = [
  {
    id: 1,
    icon: (
      <>
        <div className="flex items-center">
          <Checkbox className="" />
        </div>
      </>
    ),
    img: "https://i.ibb.co/2gbzMTG/Rectangle-5.png",
    customerImg: "https://i.ibb.co/DfphSpj/ale-romo-Tdr-UCJU6-VFs-unsplash.jpg",
    customerName: "Darrell Steward",
    customerStatus: "How are you! What are doing..",
    location: "USA, California",
    name: "Harleen Quinzel",
    // account: "Former Prospect",
    email: "harleen.quinael@gmail.com",
    phone: "+447700960054",
    notes: (
      <>
        <div className=" flex gap-3 bg-[#FF56361A] text-[#FF5636] w-[178px] text-[12px] font-medium p-2 rounded-lg -mr-6">
          <div className="border-t border-l-2 border-red-400  top-0 left-0 h-[1.2em] "></div>
          <span>
            This includes policy information such as policy numbers, coverage
            types, and effective dates.
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6666 3.3335L3.33329 12.6668"
                stroke="#FF5636"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6666 10.1802V3.3335H5.81996"
                stroke="#FF5636"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </>
    ),
  },
  {
    id: 1,
    icon: (
      <>
        <div className="flex items-center">
          <Checkbox className="" />
        </div>
      </>
    ),
    img: "https://i.ibb.co/2gbzMTG/Rectangle-5.png",
    customerImg:
      "https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg?w=1380&t=st=1696504026~exp=1696504626~hmac=8239e787108e4aff5169dd7470ef9c4e4da35af4fc3e308636f7b271596c5923",
    customerName: "Jane Cooper",
    customerStatus: "How are you! What are doing..",
    location: "USA, New york",
    name: "Theresa Webb",
    // account: "Former Prospect",
    email: "theresa.webb@hotmail.com",
    phone: "+447700960035",
    notes: (
      <>
        <div className=" flex gap-3 bg-[#48D3FF1A] text-[#48D3FF] w-[178px] text-[12px] font-medium p-2 rounded-lg -mr-6">
          <div className="border-t border-l-2 border-[#48D3FF]  top-0 left-0 h-[1.2em] "></div>
          <span>
            This includes policy information such as policy numbers, coverage
            types, and effective dates.
          </span>
          <span>
            <svg
              className="text-[#48D3FF]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6666 3.3335L3.33329 12.6668"
                stroke="#48D3FF"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6666 10.1802V3.3335H5.81996"
                stroke="#48D3FF"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </>
    ),
  },
  {
    id: 1,
    icon: (
      <>
        <div className="flex items-center">
          <Checkbox className="" />
        </div>
      </>
    ),
    img: "https://img.freepik.com/free-photo/handsome-man-outdoors-portrait_158595-3553.jpg?size=626&ext=jpg",
    customerImg:
      "https://img.freepik.com/premium-photo/portrait-young-handsome-indian-man-against-view-city_251136-65232.jpg?size=626&ext=jpg",
    customerName: "Jenny Wilson",
    customerStatus: "How are you! What are doing..",
    location: "USA, Houston",
    name: "Barbara Gordon",
    // account: "Former Prospect",
    email: "barbara.gordon@sbcglobal.net",
    phone: "+447700960939",
    notes: (
      <>
        <div className=" flex gap-3 bg-[#FF56361A] text-[#FF5636] w-[178px] text-[12px] font-medium p-2 rounded-lg -mr-6">
          <div className="border-t border-l-2 border-[#FF5636]  top-0 left-0 h-[1.2em] "></div>
          <span>
            This includes policy information such as policy numbers, coverage
            types, and effective dates.
          </span>
          <span>
            <svg
              className="text-[#48D3FF]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6666 3.3335L3.33329 12.6668"
                stroke="#FF5636"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6666 10.1802V3.3335H5.81996"
                stroke="#FF5636"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </>
    ),
  },
  {
    id: 1,
    icon: (
      <>
        <div className="flex items-center">
          <Checkbox className="" />
        </div>
      </>
    ),
    img: "https://i.ibb.co/9N0tpQ0/young-beautiful-woman-doing-yoga-nature.jpg",
    customerImg:
      "https://i.ibb.co/N2qCF53/patrick-malleret-p-v1-DBk-Trgo-unsplash.jpg",
    customerName: "Diana Prince",
    customerStatus: "How are you! What are doing..",
    location: "USA,Los Angeles",
    name: "William Gordon",
    // account: "Former Prospect",
    email: "theresa.webb@hotmail.com",
    phone: "+447756760939",
    notes: (
      <>
        <div className=" flex gap-3 bg-[#4A58EC1A] text-[#4A58EC] w-[178px] text-[12px] font-medium p-2 rounded-lg -mr-6">
          <div className="border-t border-l-2 border-[#4A58EC]  top-0 left-0 h-[1.2em] "></div>
          <span>
            This includes policy information such as policy numbers, coverage
            types, and effective dates.
          </span>
          <span>
            <svg
              className="text-[#48D3FF]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6666 3.3335L3.33329 12.6668"
                stroke="#4A58EC"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6666 10.1802V3.3335H5.81996"
                stroke="#4A58EC"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </>
    ),
  },
  {
    id: 1,
    icon: (
      <>
        <div className="flex items-center">
          <Checkbox className="" />
        </div>
      </>
    ),
    img: "https://i.ibb.co/TmzMhdg/review1.webp",
    customerImg: "https://i.ibb.co/VpNNHYs/JOYNAL-ABEDIN.jpg",
    customerName: "Theresa Webb",
    customerStatus: "How are you! What are doing..",
    location: "USA, Texas",
    name: "Dianne Russell",
    // account: "Former Prospect",
    email: "dianne.russell@hotmail.com",
    phone: "+447700960776",
    notes: (
      <>
        <div className=" flex gap-3 bg-[#FFC12E] bg-opacity-20 text-[#FFC12E] w-[178px] text-[12px] font-medium p-2 rounded-lg -mr-6">
          <div className="border-t border-l-2 border-[#FFC12E]  top-0 left-0 h-[1.2em] "></div>
          <span>
            This includes policy information such as policy numbers, coverage
            types, and effective dates.
          </span>
          <span>
            <svg
              className="text-[#48D3FF]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6666 3.3335L3.33329 12.6668"
                stroke="#FFC12E"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6666 10.1802V3.3335H5.81996"
                stroke="#FFC12E"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </>
    ),
  },
  {
    id: 1,
    icon: (
      <>
        <div className="flex items-center">
          <Checkbox className="" />
        </div>
      </>
    ),
    img: "https://i.ibb.co/2gbzMTG/Rectangle-5.png",
    customerImg: "https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png",
    customerName: "Jacob Jones",
    customerStatus: "How are you! What are doing..",
    location: "USA, Arizona",
    name: "Savannah Nguyen",
    // account: "Former Prospect",
    email: "savannah.nguyen@outlook.com",
    phone: "+447700960137",
    notes: (
      <>
        <div className=" flex gap-3 bg-[#0EB17F] bg-opacity-20 text-[#0EB17F] w-[178px] text-[12px] font-medium p-2 rounded-lg -mr-6">
          <div className="border-t border-l-2 border-[#0EB17F]  top-0 left-0 h-[1.2em] "></div>
          <span>
            This includes policy information such as policy numbers, coverage
            types, and effective dates.
          </span>
          <span>
            <svg
              className="text-[#48D3FF]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6666 3.3335L3.33329 12.6668"
                stroke="#0EB17F"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6666 10.1802V3.3335H5.81996"
                stroke="#0EB17F"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </>
    ),
  },
];

export function CustomerHistoryTable() {
//  search functionality implementation 
const [search,setSearch] = useState("");




  return (
    <Card className="h-full w-full  shadow-none ">
      <div className="">
        <div className="rounded-lg">
          <div className="flex items-center justify-between lg:gap-8 gap-6">
            <div className="relative ">
              <input 
                onChange={(e)=>setSearch(e.target.value)}
                className="lg:w-[281px] w-full mx-auto h-[40px] bg-[#FAFAFF] border border-[#DFE2E6] rounded-lg text-[14px] px-9"
                type="text"
                placeholder="Search"
              />
              <span className="absolute left-4 -top-0.5 mt-[15px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.3565 13.5484C14.1333 13.3252 13.7715 13.3252 13.5484 13.5484C13.3252 13.7715 13.3252 14.1334 13.5484 14.3565L14.3565 13.5484ZM16.5959 17.4041C16.8191 17.6272 17.1809 17.6273 17.404 17.4041C17.6272 17.1809 17.6272 16.8191 17.404 16.596L16.5959 17.4041ZM13.5484 14.3565L16.5959 17.4041L17.404 16.596L14.3565 13.5484L13.5484 14.3565ZM7.85714 14.1429C4.38564 14.1429 1.57143 11.3286 1.57143 7.85714H0.428571C0.428571 11.9598 3.75446 15.2857 7.85714 15.2857V14.1429ZM14.1429 7.85714C14.1429 11.3286 11.3286 14.1429 7.85714 14.1429V15.2857C11.9598 15.2857 15.2857 11.9598 15.2857 7.85714H14.1429ZM7.85714 1.57143C11.3286 1.57143 14.1429 4.38564 14.1429 7.85714H15.2857C15.2857 3.75446 11.9598 0.428571 7.85714 0.428571V1.57143ZM7.85714 0.428571C3.75446 0.428571 0.428571 3.75446 0.428571 7.85714H1.57143C1.57143 4.38564 4.38564 1.57143 7.85714 1.57143V0.428571Z"
                    fill="#556476"
                  />
                </svg>
              </span>
            </div>
            <div className="flex shrink-0  gap-2 ">
              <Link to="#">
                <Button
                  ripple={false}
                  className="text-[#8D93A8] border-1-[#F0F1F4] bg-[#F0F1F4] text-[14px] capitalize flex items-center gap-2 ripple-effect font-medium"
                  size="sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M12.5586 8.787L12.9396 9.25052L12.5586 8.787ZM5.14885 8.79645L5.54786 8.34834L5.14885 8.79645ZM10.1396 15.1184L9.79336 14.6284L10.1396 15.1184ZM8.52184 16.2613L8.86804 16.7513L8.52184 16.2613ZM2.43836 6.38295L2.03936 6.83105L2.43836 6.38295ZM15.4922 6.37576L15.1112 5.91224L15.4922 6.37576ZM12.3333 5.43333C12.6647 5.43333 12.9333 5.1647 12.9333 4.83333C12.9333 4.50196 12.6647 4.23333 12.3333 4.23333V5.43333ZM5.66667 4.23333C5.3353 4.23333 5.06667 4.50196 5.06667 4.83333C5.06667 5.1647 5.3353 5.43333 5.66667 5.43333V4.23333ZM4.39372 2.1H13.6535V0.9H4.39372V2.1ZM9.79336 14.6284L8.17564 15.7712L8.86804 16.7513L10.4858 15.6085L9.79336 14.6284ZM7.1 15.2612V11.78H5.9V15.2612H7.1ZM5.54786 8.34834L2.83736 5.93484L2.03936 6.83105L4.74985 9.24455L5.54786 8.34834ZM15.1112 5.91224L12.1776 8.32348L12.9396 9.25052L15.8732 6.83928L15.1112 5.91224ZM10.4833 11.8767V13.3181H11.6833V11.8767H10.4833ZM12.1776 8.32348C11.1061 9.20419 10.4833 10.5031 10.4833 11.8767H11.6833C11.6833 10.8692 12.1398 9.90786 12.9396 9.25052L12.1776 8.32348ZM7.1 11.78C7.1 10.4712 6.53431 9.22671 5.54786 8.34834L4.74985 9.24455C5.4853 9.89942 5.9 10.8198 5.9 11.78H7.1ZM10.4858 15.6085C11.2342 15.0797 11.6833 14.2296 11.6833 13.3181H10.4833C10.4833 13.831 10.2308 14.3193 9.79336 14.6284L10.4858 15.6085ZM8.17564 15.7712C7.70518 16.1036 7.1 15.7532 7.1 15.2612H5.9C5.9 16.7905 7.65559 17.6079 8.86804 16.7513L8.17564 15.7712ZM0.9 4.31089C0.9 5.27313 1.31593 6.18689 2.03936 6.83105L2.83736 5.93484C2.36494 5.51419 2.1 4.92446 2.1 4.31089H0.9ZM15.9 4.265C15.9 4.89527 15.6145 5.49857 15.1112 5.91224L15.8732 6.83928C16.6482 6.20223 17.1 5.26138 17.1 4.265H15.9ZM13.6535 2.1C14.9108 2.1 15.9 3.08561 15.9 4.265H17.1C17.1 2.39026 15.5404 0.9 13.6535 0.9V2.1ZM4.39372 0.9C2.48073 0.9 0.9 2.4108 0.9 4.31089H2.1C2.1 3.10615 3.11039 2.1 4.39372 2.1V0.9ZM12.3333 4.23333L5.66667 4.23333V5.43333L12.3333 5.43333V4.23333Z"
                      fill="#8D93A8"
                    />
                  </svg>
                  Filter
                </Button>
              </Link>
              <div className="flex ">
                <Button
                  ripple={false}
                  className="text-[#FFF] border-1-[#F0F1F4] bg-[#4A58EC] text-[14px] capitalize flex items-center gap-2 ripple-effect font-medium"
                  size="sm"
                >
                  <svg
                    className="text-[#FFFFFF]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      d="M1.16663 0.375C0.821448 0.375 0.541626 0.654822 0.541626 1C0.541626 1.34518 0.821448 1.625 1.16663 1.625H12.8333C13.1785 1.625 13.4583 1.34518 13.4583 1C13.4583 0.654822 13.1785 0.375 12.8333 0.375H1.16663Z"
                      fill="white"
                    />
                    <path
                      d="M1.16663 5.375C0.821448 5.375 0.541626 5.65482 0.541626 6C0.541626 6.34518 0.821448 6.625 1.16663 6.625H6.16663C6.5118 6.625 6.79163 6.34518 6.79163 6C6.79163 5.65482 6.5118 5.375 6.16663 5.375H1.16663Z"
                      fill="white"
                    />
                    <path
                      d="M1.16663 10.375C0.821448 10.375 0.541626 10.6548 0.541626 11C0.541626 11.3452 0.821448 11.625 1.16663 11.625H12.8333C13.1785 11.625 13.4583 11.3452 13.4583 11C13.4583 10.6548 13.1785 10.375 12.8333 10.375H1.16663Z"
                      fill="white"
                    />
                  </svg>
                  List
                </Button>
                <Button
                  ripple={false}
                  className="text-[#8D93A8] border-1-[#F0F1F4] bg-[#F0F1F4] text-[14px] capitalize flex items-center gap-2 ripple-effect font-medium"
                  size="sm"
                >
                  <svg
                    className="text-[#8D93A8]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M0.333374 2.8335C0.333374 2.05693 0.333374 1.66864 0.460241 1.36236C0.629398 0.953977 0.953855 0.62952 1.36223 0.460364C1.66852 0.333496 2.0568 0.333496 2.83337 0.333496C3.60994 0.333496 3.99823 0.333496 4.30451 0.460364C4.71289 0.62952 5.03735 0.953977 5.20651 1.36236C5.33337 1.66864 5.33337 2.05693 5.33337 2.8335C5.33337 3.61007 5.33337 3.99835 5.20651 4.30464C5.03735 4.71302 4.71289 5.03747 4.30451 5.20663C3.99823 5.3335 3.60994 5.3335 2.83337 5.3335C2.0568 5.3335 1.66852 5.3335 1.36223 5.20663C0.953855 5.03747 0.629398 4.71302 0.460241 4.30464C0.333374 3.99835 0.333374 3.61007 0.333374 2.8335Z"
                      fill="#8D93A8"
                    />
                    <path
                      d="M8.66671 2.8335C8.66671 2.05693 8.66671 1.66864 8.79357 1.36236C8.96273 0.953977 9.28719 0.62952 9.69557 0.460364C10.0019 0.333496 10.3901 0.333496 11.1667 0.333496C11.9433 0.333496 12.3316 0.333496 12.6378 0.460364C13.0462 0.62952 13.3707 0.953977 13.5398 1.36236C13.6667 1.66864 13.6667 2.05693 13.6667 2.8335C13.6667 3.61007 13.6667 3.99835 13.5398 4.30464C13.3707 4.71302 13.0462 5.03747 12.6378 5.20663C12.3316 5.3335 11.9433 5.3335 11.1667 5.3335C10.3901 5.3335 10.0019 5.3335 9.69557 5.20663C9.28719 5.03747 8.96273 4.71302 8.79357 4.30464C8.66671 3.99835 8.66671 3.61007 8.66671 2.8335Z"
                      fill="#8D93A8"
                    />
                    <path
                      d="M0.333374 11.1668C0.333374 10.3903 0.333374 10.002 0.460241 9.69569C0.629398 9.28731 0.953855 8.96285 1.36223 8.7937C1.66852 8.66683 2.0568 8.66683 2.83337 8.66683C3.60994 8.66683 3.99823 8.66683 4.30451 8.7937C4.71289 8.96285 5.03735 9.28731 5.20651 9.69569C5.33337 10.002 5.33337 10.3903 5.33337 11.1668C5.33337 11.9434 5.33337 12.3317 5.20651 12.638C5.03735 13.0463 4.71289 13.3708 4.30451 13.54C3.99823 13.6668 3.60994 13.6668 2.83337 13.6668C2.0568 13.6668 1.66852 13.6668 1.36223 13.54C0.953855 13.3708 0.629398 13.0463 0.460241 12.638C0.333374 12.3317 0.333374 11.9434 0.333374 11.1668Z"
                      fill="#8D93A8"
                    />
                    <path
                      d="M8.66671 11.1668C8.66671 10.3903 8.66671 10.002 8.79357 9.69569C8.96273 9.28731 9.28719 8.96285 9.69557 8.7937C10.0019 8.66683 10.3901 8.66683 11.1667 8.66683C11.9433 8.66683 12.3316 8.66683 12.6378 8.7937C13.0462 8.96285 13.3707 9.28731 13.5398 9.69569C13.6667 10.002 13.6667 10.3903 13.6667 11.1668C13.6667 11.9434 13.6667 12.3317 13.5398 12.638C13.3707 13.0463 13.0462 13.3708 12.6378 13.54C12.3316 13.6668 11.9433 13.6668 11.1667 13.6668C10.3901 13.6668 10.0019 13.6668 9.69557 13.54C9.28719 13.3708 8.96273 13.0463 8.79357 12.638C8.66671 12.3317 8.66671 11.9434 8.66671 11.1668Z"
                      fill="#8D93A8"
                    />
                  </svg>
                  Grid
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-x-auto mt-6">
          <div className="border w-full min-w-max rounded-lg overflow-hidden">
            <table className="w-full min-w-max  table-auto text-left ">
              <thead>
                <tr className="rounded-lg">
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className={`border-b py-4 ${
                        index === TABLE_HEAD.length - 1 ? "" : "border-r"
                      }  px-4 text-[#556476] text-[12px]`}
                      style={{ height: "1px" }}
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 border-[#E8E9EB]"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.filter((item)=>{
                 return search.trim() === "" || (item.name.toLowerCase().includes(search.toLowerCase()) || item.name.toUpperCase().includes(search.toUpperCase()));
                }) .map(
                  (
                    {
                      img,
                      customerImg,
                      customerName,
                      customerStatus,
                      location,
                      name,
                      email,
                      phone,
                      notes,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr
                        key={name}
                        className="text-[#172635] text-[12px] h-[50px]"
                      >
                        <td className={`${classes} `}>
                          <div className="flex items-center gap-2">
                            <img
                              src={img}
                              alt="img"
                              className="h-8 w-8 rounded-full"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-[12px]"
                            >
                              <div>
                                <span className="text-[#172635] text-[16px] font-bold">
                                  {name}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="12"
                                    viewBox="0 0 10 12"
                                    fill="none"
                                  >
                                    <path
                                      d="M6.3904 9.85024L5.99695 9.5417L6.3904 9.85024ZM3.6096 9.85024L3.21615 10.1588L3.6096 9.85024ZM5 11.0027V10.5027V11.0027ZM8.5 4.80435C8.5 5.38308 8.19481 6.17943 7.69307 7.06647C7.2024 7.93395 6.56687 8.81494 5.99695 9.5417L6.78385 10.1588C7.3688 9.41285 8.03807 8.48769 8.56348 7.5588C9.07782 6.64948 9.5 5.65923 9.5 4.80435H8.5ZM4.00305 9.5417C3.43313 8.81494 2.7976 7.93395 2.30693 7.06647C1.80519 6.17943 1.5 5.38308 1.5 4.80435H0.5C0.5 5.65923 0.922177 6.64948 1.43652 7.5588C1.96193 8.48769 2.6312 9.41285 3.21615 10.1588L4.00305 9.5417ZM1.5 4.80435C1.5 2.6681 3.1009 1 5 1V0C2.48082 0 0.5 2.18614 0.5 4.80435H1.5ZM5 1C6.8991 1 8.5 2.6681 8.5 4.80435H9.5C9.5 2.18614 7.51918 0 5 0V1ZM5.99695 9.5417C5.68473 9.93984 5.48835 10.1875 5.31554 10.3445C5.16414 10.482 5.08168 10.5027 5 10.5027V11.5027C5.40494 11.5027 5.71641 11.3314 5.98793 11.0847C6.23803 10.8575 6.49355 10.529 6.78385 10.1588L5.99695 9.5417ZM3.21615 10.1588C3.50645 10.529 3.76197 10.8575 4.01207 11.0847C4.28359 11.3314 4.59506 11.5027 5 11.5027V10.5027C4.91832 10.5027 4.83586 10.482 4.68446 10.3445C4.51165 10.1875 4.31527 9.93984 4.00305 9.5417L3.21615 10.1588ZM3 5C3 6.10457 3.89543 7 5 7V6C4.44772 6 4 5.55228 4 5H3ZM5 7C6.10457 7 7 6.10457 7 5H6C6 5.55228 5.55228 6 5 6V7ZM7 5C7 3.89543 6.10457 3 5 3V4C5.55228 4 6 4.44772 6 5H7ZM5 3C3.89543 3 3 3.89543 3 5H4C4 4.44772 4.44772 4 5 4V3Z"
                                      fill="#8D93A8"
                                    />
                                  </svg>
                                  {location}
                                </span>
                              </div>
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-[#8D93A8] text-[12px]"
                          >
                            <div className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                              >
                                <path
                                  d="M1.52144 2.79481C1.16675 3.54586 1.16675 4.6182 1.16675 6.5C1.16675 8.68734 1.16675 9.78101 1.72378 10.5477C1.90368 10.7953 2.12143 11.0131 2.36904 11.193C3.13573 11.75 4.2294 11.75 6.41675 11.75H7.58341C9.77076 11.75 10.8644 11.75 11.6311 11.193C11.8787 11.0131 12.0965 10.7953 12.2764 10.5477C12.8334 9.78101 12.8334 8.68734 12.8334 6.5C12.8334 4.6049 12.8334 3.53075 12.4711 2.77893M1.52144 2.79481C1.57903 2.67286 1.64597 2.55939 1.72378 2.45229C1.90368 2.20468 2.12143 1.98693 2.36904 1.80703C3.13573 1.25 4.2294 1.25 6.41675 1.25H7.58341C9.77076 1.25 10.8644 1.25 11.6311 1.80703C11.8787 1.98693 12.0965 2.20468 12.2764 2.45229C12.3508 2.55473 12.4153 2.663 12.4711 2.77893M1.52144 2.79481L1.75008 3L2.87529 4.12521C4.81974 6.06965 5.79196 7.04188 7.00008 7.04188C8.2082 7.04188 9.18043 6.06965 11.1249 4.12521L12.2501 3L12.4711 2.77893"
                                  stroke="#8D93A8"
                                  stroke-width="0.875"
                                />
                              </svg>
                              {email}
                            </div>
                            <div className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                              >
                                <path
                                  d="M1.77716 1.63609C1.81837 1.59488 1.83898 1.57428 1.85713 1.5576C2.30347 1.14747 2.98954 1.14747 3.43588 1.5576C3.45403 1.57428 3.47464 1.59488 3.51585 1.63609L4.36646 2.48671C4.83432 2.95457 4.96813 3.66112 4.70374 4.26767C4.43935 4.87421 4.57316 5.58076 5.04103 6.04863L6.43917 7.44676C6.90703 7.91463 7.61359 8.04844 8.22013 7.78405C8.82667 7.51966 9.53322 7.65347 10.0011 8.12133L10.8517 8.97195C10.8929 9.01316 10.9135 9.03376 10.9302 9.05191C11.3403 9.49825 11.3403 10.1843 10.9302 10.6307C10.9135 10.6488 10.8929 10.6694 10.8517 10.7106L10.3347 11.2277C9.91362 11.6487 9.30665 11.8255 8.72538 11.6963C4.76478 10.8162 1.67164 7.72301 0.791505 3.76242C0.662334 3.18115 0.839085 2.57417 1.26013 2.15313L1.77716 1.63609Z"
                                  stroke="#8D93A8"
                                  stroke-width="0.875"
                                />
                              </svg>
                              {phone}
                            </div>
                          </Typography>
                        </td>
                        <td className={`${classes} `}>
                          <div className="flex items-center gap-2">
                            <img
                              src={customerImg}
                              alt="img"
                              className="h-8 w-8 rounded-full"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-[12px]"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[#172635] text-[16px] font-bold">
                                    {customerName}
                                  </span>
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                    >
                                      <path
                                        d="M12.6666 3.3335L3.33329 12.6668"
                                        stroke="#4A58EC"
                                        stroke-width="1.2"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M12.6666 10.1802V3.3335H5.81996"
                                        stroke="#4A58EC"
                                        stroke-width="1.2"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <span className="">{customerStatus}</span>
                              </div>
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>{notes}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
}
