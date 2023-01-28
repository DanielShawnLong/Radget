import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading/Loading";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Forgot from "./pages/Forgot/Forgot";
import Verify from "./pages/Verify/Verify";
import Tools from "./pages/Tools/Tools";
import Plans from "./pages/Plans/Plans";
import Profile from "./pages/Profile/Profile";

import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Loading /> } />
          <Route path="/signin" element={ <SignIn /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/forgot" element={ <Forgot /> } />
          <Route path="/verify" element={ <Verify /> } />

          <Route path="/tools" element={ <Tools /> } />
          <Route path="/plans" element={ <Plans /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
