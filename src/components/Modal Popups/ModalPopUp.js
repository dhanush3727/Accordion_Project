import React, { useState } from "react";
import Modal from "./Modal";
import "./ModalPopUp.css";

const ModalPopUp = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  const handleChange = () => {
    setShowModalPopup(!showModalPopup);
  };
  const handleClose = () => {
    setShowModalPopup(false);
  };
  return (
    <div className="modal-popup">
      <button onClick={handleChange}>Open Modal Popup</button>
      {showModalPopup && <Modal onClose={handleClose} />}
    </div>
  );
};

export default ModalPopUp;
