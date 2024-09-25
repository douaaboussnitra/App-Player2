import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { retrieveData } from '../components/utils/utils';

// Initial state for authentication
const initialState = {
  token: null,
};

// Actions
const SET_TOKEN = 'SET_TOKEN';
const LOGOUT = 'LOGOUT';

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

// Create AuthContext and AuthProvider
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setToken = (token) => {
    dispatch({ type: SET_TOKEN, payload: token });
  };
  useEffect( async () => {
    var auth = await retrieveData("auth");
   if(auth) dispatch({ type: SET_TOKEN, payload: auth });
  }, [])
  
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
