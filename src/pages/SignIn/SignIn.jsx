import React from "react";

import { useNavigate } from "react-router";

import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import ButtonSignInWith from "../../components/controls/buttons/ButtonSignInWith/ButtonSignInWith";
import CheckBox from "../../components/controls/inputs/CheckBox/CheckBox";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";
import SeperatorLineHorizontal from "../../components/seperator/SeperatorLineHorizontal/SeperatorLineHorizontal";
import ErrorCard from "../../components/cards/ErrorCard/ErrorCard";

import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();

  const [error, setError] = React.useState(false);

  const email    = React.useRef(null);
  const password = React.useRef(null);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => navigate("/"))
      .catch((err) => null);
  });

  const signIn = async () => {
    setError(false);

    try {
      await Auth.signIn(email.current.value, password.current.value);

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SignIn">
      <img className="SignIn-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="SignIn-Box">
        <h1>Welcome to Radget</h1>
        <p>Enter your credentials to enter your account</p>

        <div className="SignIn-Box-Inputs">
          <TextInput placeholder="E-Mail Address" type="text" icon="email" xref={ email } xstyle={{ marginBottom: 20 }} />
          <TextInput placeholder="Password" type="password" icon="lock" xref={ password } xstyle={{ marginBottom: 15 }} />

          <div className="SignIn-Box-PasswordHints">
            {/* <CheckBox text="Remember me" /> */}
            <div></div>

            <a href="/forgot">Forgot password?</a>
          </div>

          <ButtonGradient onClick={ signIn } xstyle={{ marginBottom: 15 }}>Sign In</ButtonGradient>

          { error ? <p className="SignIn-Box-Failed">Failed to sign in. Please, try again.</p> : <></> }

          <SeperatorLineHorizontal text="OR" xstyle={{ marginBottom: 15 }} />

          {/* <ButtonSignInWith type="Apple" xstyle={{ marginBottom: 15 }} /> */}
          <ButtonSignInWith type="Google" xstyle={{ marginBottom: 15 }} onClick={ () => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google }) } />
          <ButtonSignInWith type="Facebook" xstyle={{ marginBottom: 50 }} onClick={ () => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook }) } />

          <div className="SignIn-Box-Hint">
            <p>Dont have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
