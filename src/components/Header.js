import React, { Component } from 'react';

export class Header extends Component {
  render() {
    //console.log('Header', this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

export default Header;
