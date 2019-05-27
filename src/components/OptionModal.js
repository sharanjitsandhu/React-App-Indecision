import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  // "Selected Option" will only show up for the users with accessability settings enabled.
  // <Modal isOpen={false} contentLabel="Selected Option">

  // passing real boolean values passed to isOpen
  // onRequestClose will give user an accessability to use 'esc' key to close Close button
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    ariaHideApp={false}
  >
    <h3>Selected Option:</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Close</button>
  </Modal>
);

export default OptionModal;
