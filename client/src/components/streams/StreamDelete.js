import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      Stream delete
      <Modal
        title='Delete Stream'
        content='Are you sure you want to delete this stream'
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
