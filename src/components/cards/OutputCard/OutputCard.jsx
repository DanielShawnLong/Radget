import { Copy } from "iconsax-react";
import React from "react";

import './OutputCard.css';

const OutputCard = ( props ) => {
  const output = React.useRef(null);

  React.useEffect(() => {
    if (props.text.length === 0) return;

    let length = 0;
    let text = "";

    const typeWriting = setInterval(() => {
      if ( (length + 1) === props.text.length ) clearInterval( typeWriting );

      text += props.text[length];

      output.current.value = text;
      
      length += 1;
    }, props.speed);
  }, [ props.speed, props.text ]);

  const copyToClipboard = () => {
    output.current.select();
    output.current.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(output.current.value);
  };

  return (
    <div className="OutputCard" id="output">
      <h1>{ props.title }</h1>
      <p>{ props.caption }</p>
      
      <textarea cols="40" rows="15" ref={ output } readOnly></textarea>

      <div className="OutputCard-Controls">
        <div className="OutputCard-Controls-Copy" onClick={ copyToClipboard }>
          <Copy size="25" variant="Linear" color="#222" />
        </div>

        <p>Copy to clipboard!</p>
      </div>
    </div>
  );
}

export default OutputCard;
