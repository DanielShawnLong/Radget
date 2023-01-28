/*
 * Copyright (C) 2023 Radget. 
 * All rights reserved.
 * 
 * Author: Daniel-Shawn Long
 * Company: Hexocom
 * Website: https://hexocom.io/
 */

import React from "react";
import ButtonGradient from "../../controls/buttons/ButtonGradient/ButtonGradient";
import TextInput from "../../controls/inputs/TextInput/TextInput";

import './AccountView.css';

const AccountView = ( props ) => {
  return (
    <div className="AccountView">
      <img className="AccountView-Logo" src={ `${ process.env.PUBLIC_URL }/assets/images/avatar.png` } alt="Avatar" />

      <p><b>E-Mail: </b>info@hexocom.io</p>
      <h3>Change your password</h3>

      <div className="AccountView-Password">
        <TextInput placeholder="Your Password" type="password" icon="lock" xstyle={{ marginBottom: 10 }} />
      </div>

      <div className="AccountView-NewPassword">
        <TextInput placeholder="New Password" type="password" icon="lock" xstyle={{ marginRight: 5 }} />
        <TextInput placeholder="Repeat Password" type="password" icon="lock" xstyle={{ marginLeft: 5 }} />
      </div>

      <div className="AccountView-Apply">
        <ButtonGradient>Apply changes</ButtonGradient>
      </div>
    </div>
  );
};

export default AccountView;
