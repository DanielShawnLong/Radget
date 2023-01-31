import React from "react";

import { useNavigate } from "react-router";

import { Category2, Coin, Cup, Diagram, Information, Logout, User } from "iconsax-react";

import './AppHeader.css';
import { Auth } from "aws-amplify";

const AppHeader = ( props ) => {
  const navigate = useNavigate();

  const signOut = async () => {
    await Auth.signOut();

    navigate("/");
  };

  return (
    <div className="AppHeader">
      <img className="AppHeader-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="AppHeader-Credits">
        <p>Current credits: 1000</p>

        <Coin variant="Linear" size={ 13 } color="#FFF" />
      </div>

      <div className="AppHeader-SignOut" onClick={ signOut }>
      <Logout variant="Linear" size={ 13 } color="#FFF" />
        <p>Sign Out</p>
      </div>

      <div className="AppHeader-Tabs">
        <div
          className={ props.tab === 0 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => navigate("/tools") }
        >
          <Category2
            variant="Bold"
            size={ 16 }
            color={ props.tab === 0 ? "#FFF" : "#22222277" }
          />
          <p>Tools</p>
        </div>

        <div
          className={ props.tab === 1 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => null }
          style={{ opacity: 0.5 }}
        >
          <h1>Coming Soon!</h1>
          <Diagram
            variant="Bold"
            size={ 16 }
            color={ props.tab === 1 ? "#FFF" : "#22222277" }
          />
          <p>Analytics</p>
        </div>

        <div
          className={ props.tab === 2 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => navigate("/profile") }
        >
          <User
            variant="Bold"
            size={ 16 }
            color={ props.tab === 2 ? "#FFF" : "#22222277" }
          />
          <p>My Profile</p>
        </div>

        <div
          className={ props.tab === 3 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => navigate("/about") }
        >
          <Information
            variant="Bold"
            size={ 16 }
            color={ props.tab === 3 ? "#FFF" : "#22222277" }
          />
          <p>About</p>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
