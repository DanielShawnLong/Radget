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
        <ToolInput title="Description" caption="Please describe what you're really doing in your business" max={ 1000 } multiline />

        <ToolSubmitInput onSubmit={ () => setText("Welcome to our bakery! We specialize in all things eggs. Our egg-focused menu includes everything from quiches to omelettes to scrambled eggs, all made with fresh, locally sourced eggs. Our bakers take pride in creating delicious and unique egg dishes to satisfy any craving. Stop in today and try one of our egg-centric creations. You won't be disappointed!") } />
      </div>

      <div className="AdvertisementText-Output">
        <OutputCard speed="5" title="Output" caption="This is the generated output from the AI" text={ text } />
      </div>
    </div>
  );
}

export default AdvertisementText;
