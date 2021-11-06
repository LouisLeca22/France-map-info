import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  location: "",
  pointed: "",
  open: false,
}



// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function setLocation(id) {
    dispatch({
      type: 'SET_LOCATION',
      payload: id
    });
  }


  function setPointed(id){
    dispatch({
      type: "SET_POINTED",
      payload: id
    })
  }

  function setOpen(value){
    dispatch({
      type: 'SET_OPEN',
      payload: value
    })
  }

  return (<GlobalContext.Provider value={{
    location: state.location,
    open: state.open,
    pointed: state.pointed,
    setPointed,
    setLocation,
    setOpen,
  }}>
    {children}
  </GlobalContext.Provider>);
}