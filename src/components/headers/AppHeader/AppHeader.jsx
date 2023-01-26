import React from "react";

import { useNavigate } from "react-router";

import { Category2, Cup, Logout, User } from "iconsax-react";

import './AppHeader.css';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="AppHeader">
      <img className="AppHeader-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="AppHeader-Welcome">
        <p>Welcome, Daniel-Shawn Long</p>
      </div>

      <div className="AppHeader-Tabs">
        <div className="AppHeader-Tab-Active">
          <Category2 variant="Broken" size={ 18 } color="#FFF" />
          <p>Tools</p>
        </div>

        <div className="AppHeader-Tab">
          <Cup variant="Broken" size={ 18 } color="#222222CC" />
          <p>Plans</p>
        </div>

        <div className="AppHeader-Tab">
          <User variant="Broken" size={ 18 } color="#222222CC" />
          <p>My Profile</p>
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
