import React from "react";
import AppHeader from "../../headers/AppHeader/AppHeader";

import './AppView.css';

const AppView = ( props ) => {
  return (
    <div className="AppView">
      <AppHeader tab={ props.tab } />

      <div className="AppView-Inner">
        { props.children }
      </div>
    </div>
  );
}

export default AppView;
