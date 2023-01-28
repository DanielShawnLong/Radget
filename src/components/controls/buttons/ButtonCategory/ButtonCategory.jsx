/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";

import './ButtonCategory.css';

const ButtonCategory = ( props ) => {
  return (
    <div className="ToolsCategory">
      <div className="ToolsCategory-Item" onClick={ () => props.callback( { id: props.id, title: props.title } ) }>
        { props.icon }
        <p>{ props.title }</p>

        { props.active ? <div className="ToolsCategory-Item-Active" /> : <></> }
      </div>
    </div>
  );
};

export default ButtonCategory;
