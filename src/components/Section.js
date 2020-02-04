import React from "react";

import data from "../data.json";

function Section() {
  const tab = [];

  data.map((type, index) => {
    return tab.push(
      <div key={index} className="section">
        <p className="title">{type.category}</p>
        <div className="movies-list">
          {type.images.map((pic, index) => {
            return <img key={index} src={pic} alt="pic-show" />;
          })}
        </div>
      </div>
    );
  });
  return tab;
}

export default Section;
