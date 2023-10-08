import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Dashboard from "../components/Dashobard/Dashboard";
import Customer from "../components/CustomerManage/Customer/Customer";
import CustomerHistory from "../components/CustomerManage/CustomerHistory/CustomerHistory";
import ClaimsHistory from "../components/CustomerManage/ClaimsHistory/ClaimsHistory";
import InsurancePolicy from "../components/InsurancePolicy/InsurancePolicy";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/customerHistory",
        element: <CustomerHistory />,
      },
      {
        path: "/claimsHistory",
        element: <ClaimsHistory />,
      },
      { path: "/insurancePolicy", element: <InsurancePolicy /> },
    ],
  },
]);
