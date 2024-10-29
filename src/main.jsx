import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/header/Home.jsx";
import Account from "./components/Accounts/Account.jsx";
import Funds from "./components/funds/Funds.jsx";
import WithdrawFunds from "./components/funds/WithdrawFunds.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/accountManagement" element={<Account />} />
      <Route path="/depositFunds" element={<Funds />} />{" "}
      <Route path="/withdrawFunds" element={<WithdrawFunds />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
