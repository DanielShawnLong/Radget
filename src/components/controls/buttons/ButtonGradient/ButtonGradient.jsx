/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";

import './ButtonGradient.css';

/**
 * This component represents a gradient colored button,
 * where a user is able to click on.
 * 
 * @returns Gradient colored button component.
 */
const ButtonGradient = ( props ) => {
  return (
    <div className={ `ButtonGradient noselect ${ props.className }` } style={ props.xstyle } onClick={ props.onClick }>
      <p className="ButtonGradient-Text">{ props.children }</p>
    </div>
  );
};

export default ButtonGradient;
