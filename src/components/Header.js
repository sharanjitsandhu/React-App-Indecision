import React from 'react';

const Header = props => {
  //console.log('Header', props);
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};
// Specifies the default values for props
Header.defaultProps = {
  title: 'Indecision React App'
};

export default Header;
