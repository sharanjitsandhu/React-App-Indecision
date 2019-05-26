import React, { Component } from 'react';

export class Option extends Component {
  render() {
    //console.log('Option', this.props);
    return <div>{this.props.optionText}</div>;
  }
}

export default Option;
