import React from "react";

import './CheckBox.css';

const CheckBox = ( props ) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      className={ `CheckBox noselect ${ props.className }` }
      style={ props.xstyle }
      onClick={ () => setChecked(!checked) }
    >
      <div className={ `CheckBox-Box ${ checked ? "CheckBox-Box-Checked" : "" }` } >
        { checked ? "✔" : "" }
      </div>

      <p>{ props.text }</p>
    </div>
  );
}

export default CheckBox;
