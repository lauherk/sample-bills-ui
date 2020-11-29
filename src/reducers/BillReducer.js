export function billsReducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, bills: action.payload };
    case "SET_SEARCH_STRING":
      return { ...state, searchText: action.payload };
    case "SET_SHOW_VETOED_ONLY":
      return { ...state, showVetoedOnly: !state.showVetoedOnly };
    default:
      return state;
  }
}
