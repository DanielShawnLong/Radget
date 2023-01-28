import React from "react";

import { useNavigate } from "react-router";

import './ToolsCard.css';

const ToolsCard = ( props ) => {
  const navigate = useNavigate();

  const card = React.useRef(null);

  const openTool = () => {
    card.current.classList.add("ToolsCard-Loading");

    setTimeout(() => navigate(props.href), 300);
  };

  return (
    <div className="ToolsCard" onClick={ openTool } ref={ card }>
      <h1>{ props.title }</h1>
      <p>{ props.caption }</p>
      <img src={ props.img } alt="Preview" />
    </div>
  );
}

export default ToolsCard;
