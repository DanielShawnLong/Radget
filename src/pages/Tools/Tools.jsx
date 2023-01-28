import React from "react";

import { Signpost } from "iconsax-react";

import TextInput from "../../components/controls/inputs/TextInput/TextInput";
import ToolsCategory from "../../components/tools/ToolsCategory/ToolsCategory";
import ToolsCard from "../../components/tools/ToolsCard/ToolsCard";

import AppView from "../../components/views/AppView/AppView";

import './Tools.css';

const tools = [
  {
    category: "Social Media",
    tools: [
      { id: 0, icon: <Signpost size="18" color="#222222" />, title: "Posting & Blogging", caption: "Messaging, writing mails or generating text for a post" }
    ]
  },
  {
    category: "Marketing",
    tools: [
      { id: 1, icon: <Signpost size="18" color="#222222" />, title: "Advertisement", caption: "Messaging, writing mails or generating text for a post" }
    ]
  }
];

const cards = {
  0: [
    { 
      title: "Generating Post Text",
      caption: "Generate a text for any post on social media.",
      img: `${ process.env.PUBLIC_URL }/assets/images/tools/posting-blogging.png`,
      href: "/tools/0"
    },
    { 
      title: "Generating Post Text 2",
      caption: "Generate a text for any post on social media.",
      img: `${ process.env.PUBLIC_URL }/assets/images/tools/posting-blogging.png`,
      href: "/tools/1"
    }
  ],
  1: [
    { 
      title: "Andere Tools",
      caption: "Generate a text for any post on social media.",
      img: `${ process.env.PUBLIC_URL }/assets/images/tools/posting-blogging.png`,
      href: "/tools/3"
    }
  ]
}

const Tools = () => {
  const [category, setCategory] = React.useState( tools[0].tools[0] );

  const categoryClickHandler = (element) => {
    setCategory(element);
  };

  return (
    <AppView tab={ 0 }>
      <div className="Tools">
        <div className="Tools-Filter">
          <h1 className="Tools-Title">Categories</h1>
          <p className="Tools-Caption">Choose a category of a tool collection</p>
          <div className="Tools-Filter-Box">
            <TextInput placeholder="Search" type="text" icon="search" xstyle={{ marginBottom: 20 }} />

            {
              tools.map((element, index) => (
                <ToolsCategory
                  key={ index }
                  title={ element.category }
                  items={ element.tools }
                  selected={ category.id }
                  callback={ categoryClickHandler }
                />
              ))
            }
          </div>
        </div>

        <div className="Tools-List">
          <div className="Tools-Category">
            <h1 className="Tools-Title">{ category.title }</h1>
            <p className="Tools-Caption">{ category.caption }</p>
            <div className="Tools-List-Grid">

              {
                cards[category.id].map((element, index) => (
                  <ToolsCard
                    key={ index }
                    title={ element.title }
                    caption={ element.caption }
                    img={ element.img }
                    href={ element.href }
                  />
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    </AppView>
  );
}

export default Tools;
