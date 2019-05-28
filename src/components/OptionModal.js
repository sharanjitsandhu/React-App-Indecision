import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  // "Selected Option" will only show up for the users with accessability settings enabled.
  // <Modal isOpen={false} contentLabel="Selected Option">

  // passing real boolean values passed to isOpen
  // onRequestClose will give user an accessability to use 'esc' key to close Close button
  // using areaHideApp to remove this Warning: react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`.
  <Modal
    className="modal"
    closeTimeoutMS={200}
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    ariaHideApp={false}
  >
    <h3>Selected Option:</h3>
    {props.selectedOption && (
      <p className="modal-body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Close
    </button>
  </Modal>
);

export default OptionModal;
