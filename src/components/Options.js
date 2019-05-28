import React from 'react';
import Option from './Option';

const Options = props => {
  //console.log('Options', props);
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header-title">Your Options</h3>
        <button
          className="button button-delete"
          onClick={props.handleDeleteOptions}
        >
          Delete All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget-message">Please add an option to get started!</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          count={index + 1}
        />
      ))}
    </div>
  );
};

export default Options;
