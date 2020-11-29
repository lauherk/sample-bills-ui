import axios from "axios";

const fetchSampleBillDataSet = async dispatch => {
  const results = await axios(`https://pure-wave-91339.herokuapp.com/sample-data`);
  const dataJSON = results.data;
  debugger;
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON
  });
};

const setSearchString = (string, dispatch) => {
  return dispatch({
    type: "SET_SEARCH_STRING",
    payload: string
  });
};

const setShowOnlyVetoedBills = dispatch => {
  debugger;
  return dispatch({
    type: "SET_SHOW_VETOED_ONLY",
    payload: true
  });
};

export { fetchSampleBillDataSet, setSearchString, setShowOnlyVetoedBills };
