import React, { Component } from 'react';
import './custom.css'; // Import your CSS file with styles

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isFocused: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    const { inputValue, isFocused } = this.state;
    const placeholderClass = isFocused || inputValue ? 'placeholder-visible' : '';

    return (
      <div className="input-container">
        <input
          type="text"
          className={placeholderClass}
          placeholder="Your Placeholder Text"
          value={inputValue}
          onChange={this.handleInputChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default CustomInput;
