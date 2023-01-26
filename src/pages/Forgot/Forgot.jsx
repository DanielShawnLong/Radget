import React from "react";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";

import './Forgot.css';

const Forgot = () => {
  return (
    <div className="Forgot">
      <img className="Forgot-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="Forgot-Box">
        <h1>Forgot your Password?</h1>
        <p>Enter your email adress to reset your password</p>

        <div className="Forgot-Box-Inputs">
          <TextInput placeholder="E-Mail Adress" type="text" icon="email" xstyle={{ marginBottom: 25 }} />

          <ButtonGradient xstyle={{ marginBottom: 50 }}>Reset Password</ButtonGradient>

          <div className="Forgot-Box-Hint">
            <p>You are already registered? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
