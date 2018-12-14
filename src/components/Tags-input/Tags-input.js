import React from 'react';

export default function TagsInput() {
  return (
  <React.Fragment>
    <div className="tags">
      <div className="tags__wrapper">
        <input className="tags__input" type="text" placeholder="#nyc" />
        <button className="tags__button-clear">X</button>
      </div>
    </div>
  </React.Fragment>);
};
