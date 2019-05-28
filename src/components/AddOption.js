import React, { Component } from 'react';

export class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptionP(option);
    this.setState(() => ({
      //console.log(error);
      // error: error
      // if we have the property with the same name, we can modify the code as below
      error
    }));
    if (!error) {
      // After submitting the right data, the input gets wiped
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option-input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
