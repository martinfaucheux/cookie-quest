"use client";

import { useState } from "react";
import { useActionState } from "react";
import { createCookie, CreateCookieState } from "@/app/lib/actions/cookies";

const CreateCookieModal = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  const handleClose = () => {
    setModal(false);
  };

  const initialState: CreateCookieState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createCookie, initialState);

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
            <form action={formAction}>
              <h1 className="text-xl font-bold  text-gray-900 border-b border-gray-300 py-3 px-4 mb-4">
                Add a new Cookie
              </h1>
              <div className="px-4 pb-4">
                <p className="text-sm font-medium text-gray-700">
                  Add a new entry to your Cookiepedia!
                </p>
              </div>
              <div className="flex flex-col px-4 mb-4 gap-2">
                <label className="text-amber-950 ml-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Cookie Name"
                  className="border border-amber-950 p-2 rounded-md mb-2"
                  required
                />
                <label className="text-amber-950 ml-2">Description</label>
                <textarea
                  name="description"
                  className="w-full border border-amber-950 rounded-md p-2 mb-4"
                  placeholder="Cookie Description"
                  required
                />
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
                  type="submit"
                  className="h-8 px-2 text-sm rounded-md border border-orange-900 text-orange-900 cursor-pointer"
                >
                  Add Cookie
                </button>
              </div>{" "}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCookieModal;
