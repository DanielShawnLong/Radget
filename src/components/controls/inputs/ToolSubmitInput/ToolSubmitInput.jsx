import React from "react";

import { Coin } from "iconsax-react";

import ButtonGradient from "../../buttons/ButtonGradient/ButtonGradient";

import './ToolSubmitInput.css';

const ToolSubmitInput = ( props ) => {
  return (
    <div className="ToolSubmitInput">
      <div className="ToolSubmitInput-Button">
        <ButtonGradient onClick={ props.onSubmit }>Generate</ButtonGradient>
      </div>

      <div className="ToolSubmitInput-Text">
        <Coin size="20" variant="Linear" color="#333" />

        <p>5 Coins</p>
      </div>
    </div>
  );
}

export default ToolSubmitInput;
