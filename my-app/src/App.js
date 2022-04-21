import {
  BrowserRouter as
    Router, Route, Routes, Switch, Redirect
} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect } from "react";
import Log from "./pages/Login/Log";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import Viewprofile from "./pages/viewprofile/Viewprofile";
import Profile from "./pages/Editprofile/Profile";

import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import Register from "./pages/registration/Register";



function App() {
  const { user } = useContext(AuthContext);
  
  




  return (
    





    <>
      {/* <Router>
        <Switch>
          <Route path ="/">
            <Log />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Home/viewprofile">
            <Viewprofile />
          </Route>
        </Switch>
      </Router> */}



      <Router className="">
        <AuthContextProvider>
        <Routes>
       
          <Route exact path="/" element={<Log />} ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/Viewprofile" element={<Viewprofile />} />
          <Route path="/Home/Viewprofile/Profile" element={<Profile />} />
        </Routes>
        </AuthContextProvider>
      </Router>
      <ToastContainer />
 


    </>
  );
}
export default App;