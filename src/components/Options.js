import React from 'react';
import Option from './Option';

const Options = props => {
  //console.log('Options', props);
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Delete All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
