import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import { Store } from "./Store";
import BillsPage from "./BillsPage";
import { fetchSampleBillDataSet } from "./actions/BillActions.js";

function App() {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    fetchSampleBillDataSet(dispatch);
  }, []);

  console.log(state.bills);
  if (state.bills && state.bills.length > 0) {
    return <BillsPage />;
  } else
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
}

export default App;
