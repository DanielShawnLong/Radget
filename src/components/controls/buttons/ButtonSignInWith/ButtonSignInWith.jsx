/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";

import './ButtonSignInWith.css';

/**
 * This component represents a gradient colored button,
 * where a user is able to click on.
 * 
 * @returns Gradient colored button component.
 */
const ButtonSignInWith = ( props ) => {
  const icons = {
    "Google": `${ process.env.PUBLIC_URL }/assets/images/socials/google.png`,
    "Apple": `${ process.env.PUBLIC_URL }/assets/images/socials/apple.png`,
    "Facebook": `${ process.env.PUBLIC_URL }/assets/images/socials/facebook.png`,
  };

  return (
    <div className={ `ButtonSignInWith noselect ${ props.className }` } style={ props.xstyle } onClick={ props.onClick }>
      <img className="ButtonSignInWith-Icon" src={ icons[ props.type ] } alt={ props.type } />
      <p className="ButtonSignInWith-Text">Continue with { props.type }</p>
    </div>
  );
};

export default ButtonSignInWith;
