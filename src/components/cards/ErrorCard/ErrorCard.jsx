import React from "react";

import './ErrorCard.css';

const ErrorCard = ( props ) => {
  return (
    <div className="ErrorCard animate__animated animate__bounce" style={ props.xstyle }>
      <p>{ props.text }</p>
    </div>
  );
}

export default ErrorCard;
