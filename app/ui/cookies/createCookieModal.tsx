"use client";

import { useState } from "react";
import { useActionState } from "react";
import { createCookie, CreateCookieState } from "@/app/lib/actions/cookies";
import { Button } from "@/app/ui/button";

const CreateCookieModal = () => {
  const [openModal, setModal] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleModal = () => {
    setModal(!openModal);
  };

  const handleClose = () => {
    setModal(false);
    setFileError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be less than 5MB");
        e.target.value = "";
        return;
      }

      // Check file type
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload a valid image file (JPEG, PNG, or WebP)");
        e.target.value = "";
        return;
      }
    }
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
                  aria-describedby="name-error"
                  required
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.name &&
                    state.errors.name.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
                <label className="text-amber-950 ml-2">Description</label>
                <textarea
                  name="description"
                  className="w-full border border-amber-950 rounded-md p-2 "
                  placeholder="Cookie Description"
                  aria-describedby="description-error"
                  required
                />
                <div
                  id="description-error"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {state.errors?.description &&
                    state.errors.description.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="flex flex-col px-4 mb-4 gap-2">
                <label className="text-amber-950 ml-2">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="border border-amber-950 p-2 rounded-md"
                  aria-describedby="image-error"
                  onChange={handleFileChange}
                />
                <p className="text-xs text-gray-500 ml-2">
                  Upload a photo of your cookie (JPG, PNG, or WebP, max 5MB)
                </p>
                <div id="image-error" aria-live="polite" aria-atomic="true">
                  {fileError && (
                    <p className="mt-2 text-sm text-red-500">{fileError}</p>
                  )}
                  {state.errors?.image &&
                    state.errors.image.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="flex justify-end items-center px-4 gap-2">
                <Button
                  type="button"
                  onClick={handleClose}
                  className="text-sm"
                  variant="secondary"
                >
                  Close
                </Button>
                <Button type="submit" className="text-sm">
                  Add Cookie
                </Button>
              </div>{" "}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCookieModal;
