import React from "react";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import ButtonSignInWith from "../../components/controls/buttons/ButtonSignInWith/ButtonSignInWith";
import CheckBox from "../../components/controls/inputs/CheckBox/CheckBox";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";
import SeperatorLineHorizontal from "../../components/seperator/SeperatorLineHorizontal/SeperatorLineHorizontal";

import './SignIn.css';

const SignIn = () => {
  return (
    <div className="SignIn">
      <img className="SignIn-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="SignIn-Box">
        <h1>Welcome to Radget</h1>
        <p>Enter your credentials to enter your account</p>

        <div className="SignIn-Box-Inputs">
          <TextInput placeholder="E-Mail Adress" type="text" icon="email" xstyle={{ marginBottom: 20 }} />
          <TextInput placeholder="Password" type="password" icon="lock" xstyle={{ marginBottom: 15 }} />

          <div className="SignIn-Box-PasswordHints">
            <CheckBox text="Remember me" />

            <a href="#0">Forgot password?</a>
          </div>

          <ButtonGradient xstyle={{ marginBottom: 15 }}>Sign In</ButtonGradient>

          <SeperatorLineHorizontal text="OR" xstyle={{ marginBottom: 15 }} />

          <ButtonSignInWith type="Apple" xstyle={{ marginBottom: 15 }} />
          <ButtonSignInWith type="Google" xstyle={{ marginBottom: 15 }} />
          <ButtonSignInWith type="Facebook" xstyle={{ marginBottom: 50 }} />

          <div className="SignIn-Box-Hint">
            <p>Dont have an account? <a href="#0">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
