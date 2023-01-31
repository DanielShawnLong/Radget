import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Auth, Hub } from "aws-amplify";

import Loading from "./pages/Loading/Loading";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Forgot from "./pages/Forgot/Forgot";
import Verify from "./pages/Verify/Verify";
import Tools from "./pages/Tools/Tools";
import Plans from "./pages/Plans/Plans";
import Profile from "./pages/Profile/Profile";

import ToolsView from "./components/views/ToolsView/ToolsView";

import './App.css';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [customState, setCustomState] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
          break;
        default:
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);

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

          <Route path="/tools/:tool" element={ <ToolsView /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
