import { Book1 } from "iconsax-react";
import React from "react";

import "./ToolHeader.css";

const ToolHeader = ( props ) => {
  return (
    <div className="ToolHeader">
      <div className="ToolHeader-Tool">
        <Book1 size="40" variant="Bulk" color="#FFF" />
      </div>

      <div className="ToolHeader-Text">
        <p>Advertisement</p>
        <h1>Advertisement Text</h1>
        <p>Create an impressive advertising text for your audience</p>
      </div>
    </div>
  );
};

export default ToolHeader;
