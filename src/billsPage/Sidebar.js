import React from "react";
import { Store } from "../Store";
import Button from "@material-ui/core/Button";
import { setShowOnlyVetoedBills } from "./../actions/BillActions.js";
import "./../styles/billsPage/Sidebar.css";

const SideBar = () => {
  const { state, dispatch } = React.useContext(Store);
  const btnTitle = state.showVetoedOnly ? "show All Issues" : "Show Vetoed Issues";
  return (
    <div className="sidebar-container">
      <Button className="veto-btn" variant="contained" color="primary" onClick={() => setShowOnlyVetoedBills(dispatch)}>
        {btnTitle}
      </Button>
    </div>
  );
};

export default SideBar;
