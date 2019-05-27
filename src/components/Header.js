import React from 'react';

const Header = props => {
  //console.log('Header', props);
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};
// We can define default values for props by assigning to the special 'defaultProps' property
// Specifies the default values for props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
