import React from "react";

import { useNavigate, useParams } from "react-router";

import AppHeader from "../../headers/AppHeader/AppHeader";

import Tools from "../../../services/Tools";

import './ToolsView.css';
import ToolHeader from "../../headers/ToolHeader/ToolHeader";

const ToolsView = ( props ) => {
  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    if ( !Tools[ params.tool ] ) navigate("/tools");
  }, [ params, navigate ]);

  return (
    <div className="ToolsView">
      <AppHeader tab={ 0 } />

      <div className="ToolsView-Inner">
        <ToolHeader tool={ Tools[ params.tool ] } />

        { Tools[ params.tool ].component }
      </div>
    </div>
  );
}

export default ToolsView;
