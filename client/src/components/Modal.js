import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className='ui dimmer modals visibile active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'>
        <div className='header'>Delete Stream</div>
        <div className='content'>
          Are you sure you want to Delete this stream?
        </div>
        <div className='actions'>
          <div className='ui button primary'>Delete</div>
          <div className='ui button'>Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
