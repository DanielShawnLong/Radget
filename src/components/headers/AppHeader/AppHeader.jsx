import React from "react";

import { useNavigate } from "react-router";

import { Category2, Cup, Diagram, Information, Logout, User } from "iconsax-react";

import './AppHeader.css';

const AppHeader = ( props ) => {
  const navigate = useNavigate();

  return (
    <div className="AppHeader">
      <img className="AppHeader-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="AppHeader-Welcome">
        <p>Welcome, Daniel-Shawn Long</p>
      </div>

      <div className="AppHeader-Tabs">
        <div
          className={ props.tab === 0 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => navigate("/tools") }
        >
          <Category2
            variant="Broken"
            size={ 17 }
            color={ props.tab === 0 ? "#FFF" : "#222222CC" }
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
            variant="Broken"
            size={ 17 }
            color={ props.tab === 1 ? "#FFF" : "#222222CC" }
          />
          <p>Analytics</p>
        </div>

        <div
          className={ props.tab === 2 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => navigate("/profile") }
        >
          <User
            variant="Broken"
            size={ 17 }
            color={ props.tab === 2 ? "#FFF" : "#222222CC" }
          />
          <p>My Profile</p>
        </div>

        <div
          className={ props.tab === 3 ? "AppHeader-Tab-Active" : "AppHeader-Tab" }
          onClick={ () => navigate("/about") }
        >
          <Information
            variant="Broken"
            size={ 17 }
            color={ props.tab === 3 ? "#FFF" : "#222222CC" }
          />
          <p>About</p>
        </div>
      </div>

      <div className="AppHeader-Tabs" onClick={ () => navigate("/signin") }>
        <div className="AppHeader-Tab AppHeader-Tab-SignOut">
          <Logout variant="Broken" size={ 18 } color="#fff" />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
