import React from "react";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";

import './Verify.css';

const Verify = () => {
  return (
    <div className="Verify">
      <img className="Verify-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="Verify-Box">
        <h1>Verify your E-Mail</h1>
        <p>You have just sended a verification code to your email</p>

        <div className="Verify-Box-Inputs">
          <TextInput placeholder="Verification Code" type="text" icon="lock" xstyle={{ marginBottom: 15 }} />

          <div className="Verify-Box-PasswordHints">
            <a href="/forgot">Resend verification code?</a>
          </div>

          <ButtonGradient xstyle={{ marginBottom: 50 }}>Submit</ButtonGradient>

          <div className="Verify-Box-Hint">
            <p>You are already registered? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
