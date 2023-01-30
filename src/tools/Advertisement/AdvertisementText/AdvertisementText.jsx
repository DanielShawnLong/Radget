import React from "react";

import ToolInput from "../../../components/controls/inputs/ToolInput/ToolInput";
import OutputCard from "../../../components/cards/OutputCard/OutputCard";

import ToolSubmitInput from "../../../components/controls/inputs/ToolSubmitInput/ToolSubmitInput";

import './AdvertisementText.css';

const AdvertisementText = () => {
  const [text, setText] = React.useState("");

  return (
    <div className="AdvertisementText">
      <div className="AdvertisementText-Form">
        <ToolInput title="Description" caption="Please describe what you're really doing in your business" max={ 100 } multiline />

        <ToolSubmitInput onSubmit={ () => setText("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.") } />
      </div>

      <div className="AdvertisementText-Output">
        <OutputCard speed="5" title="Output" caption="This is the generated output from the AI" text={ text } />
      </div>
    </div>
  );
}

export default AdvertisementText;
