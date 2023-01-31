import React from "react";

import { useLocation, useNavigate, useParams } from "react-router";

import { Auth } from "aws-amplify";

import ButtonGradient from "../../components/controls/buttons/ButtonGradient/ButtonGradient";
import TextInput from "../../components/controls/inputs/TextInput/TextInput";

import './Verify.css';

const Verify = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { email } = state;

  const code = React.useRef();

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => navigate("/"))
      .catch((err) => null);
  });

  const resendSignUp = async () => {
    setError(false);

    try {
      await Auth.resendSignUp(email);
    } catch (err) {
      setError(true);
    }
  };

  const verify = async () => {
    setError(false);

    try {
      await Auth.confirmSignUp(email, code.current.value);

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="Verify">
      <img className="Verify-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />

      <div className="Verify-Box">
        <h1>Verify your E-Mail</h1>
        <p>You have just sended a verification code to your email</p>

        <div className="Verify-Box-Inputs">
          <TextInput placeholder="Verification Code" type="text" icon="lock" xref={ code } xstyle={{ marginBottom: 15 }} />

          <div className="Verify-Box-PasswordHints">
            <a href="#0" onClick={ resendSignUp }>Resend verification code?</a>
          </div>

          <ButtonGradient onClick={ verify } xstyle={{ marginBottom: 50 }}>Submit</ButtonGradient>

          { error ? <p className="SignIn-Box-Failed">Failed to verify. Please, try again.</p> : <></> }

          <div className="Verify-Box-Hint">
            <p>You are already registered? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
