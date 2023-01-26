import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading/Loading";
import SignIn from "./pages/SignIn/SignIn";

import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Loading /> } />
          <Route path="/signin" element={ <SignIn /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
