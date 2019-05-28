import React from 'react';

const Option = props => {
  //console.log('Option', props);
  return (
    <div className="option">
      <p className="option-text">
        {props.count}. {props.optionText}
      </p>
      <button
        className="button button-delete"
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Option;
