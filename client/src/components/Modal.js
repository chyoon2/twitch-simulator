import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visibile active'>
      <div className='ui standard modal visible active'>a;lsdfjasl;dkfj</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
