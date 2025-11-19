"use client";

import { useState } from "react";

const Modal = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div>
      <button
        type="button"
        className="h-10 px-4 font-medium text-sm rounded-md text-white bg-gray-900 cursor-pointer"
        onClick={handleModal}
      >
        Open Modal
      </button>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="max-w-[460px] bg-white shadow-lg py-2 rounded-md border border-gray-300">
            <h1 className="text-xl font-bold  text-gray-900 border-b border-gray-300 py-3 px-4 mb-4">
              Add a new Cookie
            </h1>
            <div className="px-4 pb-4">
              <p className="text-sm font-medium text-gray-700">
                Add a new entry to your Cookiepedia!
              </p>
            </div>
            <div className="flex justify-end items-center px-4 gap-2">
              <button
                type="button"
                className="h-8 px-2 text-sm rounded-md text-black bg-orange-300 cursor-pointer"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="h-8 px-2 text-sm rounded-md border border-orange-900 text-orange-900 cursor-pointer"
                onClick={handleModal}
              >
                Do stuff
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
