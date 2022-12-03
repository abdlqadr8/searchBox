import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Modal() {
  const [modal, setModal] = useState(false)

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        <FaSearch />
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <input text="text" placeholder="Search" />
          </div>
        </div>
      )}
    </>
  );
}
