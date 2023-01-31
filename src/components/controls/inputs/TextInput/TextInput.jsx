import React from "react";

import { Lock, SearchNormal, Sms, User } from "iconsax-react";

import './TextInput.css';

const TextInput = ( props ) => {
  const icons = {
    "person": <User variant="Broken" size={ 23 } color="#444444" />,
    "email": <Sms variant="Broken" size={ 23 } color="#444444" />,
    "lock": <Lock variant="Broken" size={ 23 } color="#444444" />,
    "search": <SearchNormal variant="Broken" size={ 23 } color="#444444" />,
  };

  return (
    <div className={ `TextInput ${ props.className }` } style={ props.xstyle }>
      <input className="TextInput-Input" type={ props.type } ref={ props.xref } required />
      <span className="TextInput-Placeholder">{ props.placeholder }</span>

      <div className="TextInput-Icon">
        { icons[ props.icon ] }
      </div>
    </div>
  );
}

export default TextInput;
