import React from "react";

import './ToolsCategory.css';

const ToolsCategory = ( props ) => {
  return (
    <div className="ToolsCategory">
      <p>{ props.title }</p>

      {
        props.items.map((element, index) => (
          <div key={ index } className="ToolsCategory-Item" onClick={ () => props.callback( element ) }>
            { element.icon }
            <p>{ element.title }</p>

            { element.id === props.selected ? <div className="ToolsCategory-Item-Active" /> : <></> }
          </div>
        ))
      }
    </div>
  );
}

export default ToolsCategory;
