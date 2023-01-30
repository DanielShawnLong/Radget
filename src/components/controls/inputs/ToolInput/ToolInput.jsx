import React from "react";

import './ToolInput.css';

const ToolInput = ( props ) => {
  const [text, setText] = React.useState("");

  const updateText = ( value ) => {
    //if ( (value.length - 1) >= props.max ) return;

    setText(value);
  };

  return (
    <div className="ToolInput">
      <h1>{ props.title }</h1>
      
      {
        ( props.multiline ) ? (
          <textarea placeholder={ props.placeholder } cols="40" rows="5" maxLength={ props.max } value={ text } onChange={ (text) => updateText(text.target.value) }></textarea>
        ) : (
          <input type="text" placeholder={ props.placeholder } maxLength={ props.max } value={ text } onChange={ (text) => updateText(text.target.value) } />
        )
      }

      <div className="ToolInput-Hints">
        <p>{ props.caption }</p>

        <p>{ text.length }/{ props.max }</p>
      </div>
    </div>
  );
}

export default ToolInput;
