import React from "react";

import { Book1, Signpost } from "iconsax-react";

import TextInput from "../../components/controls/inputs/TextInput/TextInput";
import ToolsCategory from "../../components/tools/ToolsCategory/ToolsCategory";
import ToolsCard from "../../components/tools/ToolsCard/ToolsCard";

import AppView from "../../components/views/AppView/AppView";

import './Tools.css';

const tools = [
  {
    category: "Marketing",
    tools: [
      { id: 0, icon: <Book1 size="18" color="#222222" />, title: "Advertisement", caption: "Several marketing tools to let your business grow more easily" }
    ]
  }
];

const cards = {
  0: [
    { 
      title: "Advertising Text",
      caption: "Create an impressive advertising text for your audience",
      img: `${ process.env.PUBLIC_URL }/assets/images/tools/text.png`,
      href: "/tools/advertisement-text"
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
            {/*
            <TextInput placeholder="Search" type="text" icon="search" xstyle={{ marginBottom: 20 }} />
            */}

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
