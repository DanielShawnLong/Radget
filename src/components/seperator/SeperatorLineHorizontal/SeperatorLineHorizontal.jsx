/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";

import './SeperatorLineHorizontal.css';

/**
 * This component represents horizontal seperator.
 * 
 * @returns Horizontal line seperator component.
 */
const SeperatorLineHorizontal = ( props ) => {
  return (
    <div className={ `SeperatorLineHorizontal ${ props.className }` } style={ props.xstyle }>
      <div className="SeperatorLineHorizontal-Wrapper">
        <div className="SeperatorLineHorizontal-Line" />
        <p className="SeperatorLineHorizontal-Text">{ props.text }</p>
        <div className="SeperatorLineHorizontal-Line" />
      </div>
    </div>
  );
};

export default SeperatorLineHorizontal;
