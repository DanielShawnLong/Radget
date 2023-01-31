import React from "react";

import { Auth } from "aws-amplify";

import { useNavigate } from "react-router";

import './Loading.css';

const Loading = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setTimeout(() => navigate("/tools"), 1500);
      })
      .then((data) => console.log(data))
      .catch((err) => setTimeout(() => navigate("/signin"), 1500));
  });

  return (
    <div className="Loading">
      <img className="Loading-Logo" src={ `${ process.env.PUBLIC_URL }/logo512.png` } alt="Logo" />
    </div>
  );
}

export default Loading;
