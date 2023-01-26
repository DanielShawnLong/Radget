/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";

import './ButtonBordered.css';

/**
 * This component represents a solid bordered button,
 * where a user is able to click on.
 * 
 * @returns Solid bordered button component.
 */
const ButtonBordered = ( props ) => {
  return (
    <div className={ `ButtonBordered noselect ${ props.className }` } onClick={ props.onClick }>
      <p className="ButtonBordered-Text">{ props.children }</p>
    </div>
  );
};

export default ButtonBordered;
