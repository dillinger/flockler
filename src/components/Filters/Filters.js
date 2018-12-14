import React, { Component } from "react";
import "./filters.css";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersArray: ["all", "instagram", "tweet"]
    };
  }

  handleClick = (e, item) => {
    this.props.filterfn(e, item);
  };

  render() {
    return (
      <div className="filters">
        <span>Filters: </span>
        {this.state.filtersArray.map((item, index) => {
          return (
            <button
              key={index + item}
              className="filters__button"
              onClick={e => {
                this.handleClick(e, item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}
