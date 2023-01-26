import React from "react";
import AppHeader from "../../headers/AppHeader/AppHeader";

import './AppView.css';

const AppView = ( props ) => {
  return (
    <div className="AppView">
      <AppHeader />

      { props.children }
    </div>
  );
}

export default AppView;
