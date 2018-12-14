import React, { Component } from "react";
import "./TagsInput.css";

export default class TagsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.findByTag(event.target.value);
  }

  clearInputValue = () => {
    this.setState({ value: '' });
    this.props.findByTag('');
  }

  render() {
    return (
      <React.Fragment>
        <div className="tags">
          <div className="tags__wrapper">
            <input
              className="tags__input"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="#nyc"
            />
            <button onClick={this.clearInputValue} className="tags__button-clear">X</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
