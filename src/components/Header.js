import React from 'react';
import logo from '../components/indecision-logo.png';

const Header = props => {
  //console.log('Header', props);
  return (
    <div className="header ">
      <div className="container">
        {/* <h2 className="header-title">{props.title}</h2> */}
        <img
          className="logo"
          src={logo}
          alt="Logo"
          height="70px"
          width="200px"
        />
      </div>
    </div>
  );
};
// We can define default values for props by assigning to the special 'defaultProps' property
// Specifies the default values for props
Header.defaultProps = {
  title: 'InDecision'
};

export default Header;
