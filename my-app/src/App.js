<<<<<<< HEAD
import {
  BrowserRouter as
    Router, Route, Routes, Switch, Redirect
} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import 'react-toastify/dist/ReactToastify.css'
>>>>>>> 910b2d7ca2dd7d87d3d0a91e0c21589d191fb17e
import React from "react";
import Log from "./pages/Login/Log";
import { useNavigate } from 'react-router';
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import Viewprofile from "./pages/viewprofile/Viewprofile";
import Profile from "./pages/Editprofile/Profile";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);
 




  return (





    <>
 


      <Router className="">
        <Routes>
          <Route exact path="/" element={<Log />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/Viewprofile" element={<Viewprofile />} />
          <Route path="/Home/Viewprofile/Profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer />
 


    </>
  );
}
export default App;