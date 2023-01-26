import React from "react";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import ButtonSignInWith from "../../components/controls/buttons/ButtonSignInWith/ButtonSignInWith";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";
import SeperatorLineHorizontal from "../../components/seperator/SeperatorLineHorizontal/SeperatorLineHorizontal";

import './SignUp.css';

const SignUp = () => {
  return (
    <div className="SignUp">
      <img className="SignUp-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="SignUp-Box">
        <h1>Sign Up to Radget</h1>
        <p>Enter your credentials to enter your account</p>

        <div className="SignUp-Box-Inputs">
          <TextInput placeholder="E-Mail Adress" type="text" icon="email" xstyle={{ marginBottom: 20 }} />
          <TextInput placeholder="Password" type="password" icon="lock" xstyle={{ marginBottom: 15 }} />

          <div className="SignUp-Box-PasswordHints">
            <a href="/forgot">Forgot password?</a>
          </div>

          <ButtonGradient xstyle={{ marginBottom: 15 }}>Sign Up</ButtonGradient>

          <SeperatorLineHorizontal text="OR" xstyle={{ marginBottom: 15 }} />

          <ButtonSignInWith type="Apple" xstyle={{ marginBottom: 15 }} />
          <ButtonSignInWith type="Google" xstyle={{ marginBottom: 15 }} />
          <ButtonSignInWith type="Facebook" xstyle={{ marginBottom: 50 }} />

          <div className="SignUp-Box-Hint">
            <p>You are already registered? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
