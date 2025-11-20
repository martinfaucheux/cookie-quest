"use client";

import { useState } from "react";
import { useActionState } from "react";
import { createCookie, CreateCookieState } from "@/app/lib/actions/cookies";
import { Button } from "@/app/ui/button";

const CreateCookieModalButton = () => {
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
        setFileError("La taille du fichier doit être inférieure à 5MB");
        e.target.value = "";
        return;
      }

      // Check file type
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        setFileError(
          "Veuillez télécharger un fichier image valide (JPEG, PNG, ou WebP)"
        );
        e.target.value = "";
        return;
      }
    }
  };

  const initialState: CreateCookieState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createCookie, initialState);

  return (
    <div>
      <Button type="button" onClick={handleModal}>
        Créer un nouveau Cookie
      </Button>
      {openModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="max-w-[460px] bg-white shadow-lg py-2 rounded-md border border-gray-300 z-50">
            <form action={formAction}>
              <h1 className="text-xl font-bold  text-gray-900 border-b border-gray-300 py-3 px-4 mb-4">
                Ajouter un nouveau Cookie
              </h1>
              <div className="px-4 pb-4">
                <p className="text-sm font-medium text-gray-700">
                  Ajoutez une nouvelle entrée à votre Cookiepédia !
                </p>
              </div>
              <div className="flex flex-col px-4 mb-4 gap-2">
                <label className="text-amber-950 ml-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom du Cookie"
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
                  placeholder="Description du Cookie"
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
                  Téléchargez une photo de votre cookie (JPG, PNG, ou WebP, max
                  5MB)
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
                  Fermer
                </Button>
                <Button type="submit" className="text-sm">
                  Ajouter Cookie
                </Button>
              </div>{" "}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCookieModalButton;
