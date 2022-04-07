import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
 import 'react-toastify/dist/ReactToastify.css'
import React from "react";
import Log from "./pages/Login/Log";

import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import Viewprofile from "./pages/viewprofile/Viewprofile";
import Profile from "./pages/Editprofile/Profile";

function App() {
  return (
    <>
      <Router className="">
        <Routes>
          <Route path="/" element={<Log />} />
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