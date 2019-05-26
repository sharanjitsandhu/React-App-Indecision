import React, { Component } from 'react';
import Option from './Option';

export class Options extends Component {
  render() {
    //console.log('Options', this.props);
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

export default Options;
