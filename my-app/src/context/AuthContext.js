import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer.js";
import {signOut} from 'firebase/auth';
import {authentication} from '../firebase-config/firebase-config';
import {useNavigate} from 'react-router-dom';


const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [user,setUser]=useState(null);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])


  let info = JSON.parse (localStorage.getItem('user'));
  const Navigate= useNavigate();
  console.log(info);

   const logOut = async() => {
       await signOut(authentication).catch(error => {
           console.log(error);
       })
      localStorage.clear('user');
      dispatch({
          type: 'LOGOUT',
      })
      Navigate('/');
  }

  
  return (
    <AuthContext.Provider
      value={{
        logOut,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};