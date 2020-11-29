import React from "react";
import { billsReducer } from "./reducers/BillReducer";
export const Store = React.createContext();

const initialState = { bills: [], searchText: undefined, showVetoedOnly: undefined };

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(billsReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
