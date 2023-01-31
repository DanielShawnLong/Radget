import React from "react";

import { useNavigate } from "react-router";

import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import ButtonSignInWith from "../../components/controls/buttons/ButtonSignInWith/ButtonSignInWith";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";
import SeperatorLineHorizontal from "../../components/seperator/SeperatorLineHorizontal/SeperatorLineHorizontal";

import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [error, setError] = React.useState(false);

  const emailInput    = React.useRef(null);
  const passwordInput = React.useRef(null);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => navigate("/"))
      .catch((err) => null);
  });

  const signUp = async () => {
    setError(false);

    try {
      let username = emailInput.current.value;
      let password = passwordInput.current.value;

      const { user } = await Auth.signUp({
          username,
          password,
          autoSignIn: {
              enabled: true,
          }
      });

      navigate("/verify", { state: { email: username } });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SignUp">
      <img className="SignUp-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="SignUp-Box">
        <h1>Sign Up to Radget</h1>
        <p>Enter your credentials to enter your account</p>

        <div className="SignUp-Box-Inputs">
          <TextInput placeholder="E-Mail Adress" type="text" icon="email" xref={ emailInput } xstyle={{ marginBottom: 20 }} />
          <TextInput placeholder="Password" type="password" icon="lock" xref={ passwordInput } xstyle={{ marginBottom: 15 }} />

          <div className="SignUp-Box-PasswordHints">
            <a href="/forgot">Forgot password?</a>
          </div>

          <ButtonGradient onClick={ signUp } xstyle={{ marginBottom: 15 }}>Sign Up</ButtonGradient>

          { error ? <p className="SignIn-Box-Failed">Failed to sign up. Please, try again.</p> : <></> }

          <SeperatorLineHorizontal text="OR" xstyle={{ marginBottom: 15 }} />

          <ButtonSignInWith type="Google" onClick={ () => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google }) } xstyle={{ marginBottom: 15 }} />
          <ButtonSignInWith type="Facebook" onClick={ () => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook }) } xstyle={{ marginBottom: 50 }} />

          <div className="SignUp-Box-Hint">
            <p>You are already registered? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
