import React from 'react';

const Option = props => {
  //console.log('Option', props);
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        x
      </button>
    </div>
  );
};

export default Option;
