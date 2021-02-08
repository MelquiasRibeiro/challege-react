/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const savedUsers = JSON.parse(localStorage.getItem("users"));

// Initial State
const initialState = {
  users: savedUsers || []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state,dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (email) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: email
    })
  }

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser,

    }}>
      {children}
    </GlobalContext.Provider>
  )
}
