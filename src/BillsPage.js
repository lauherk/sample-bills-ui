import React from "react";
import SearchBar from "./billsPage/SearchBar";
import SideBar from "./billsPage/Sidebar";
import BillsTable from "./billsPage/BillsTable";

import "./styles/BillsPage.css";

const BillsPage = () => {
  return (
    <div>
      <SearchBar />
      <div className="bills-main">
        <SideBar />
        <div class="vl"></div>
        <BillsTable />
      </div>
    </div>
  );
};

export default BillsPage;
