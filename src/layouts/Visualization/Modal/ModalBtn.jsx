import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

export default function ModalBtn() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
      className="z-0 bg-blue-600 text-slate-50 py-1 px-3 mx-auto mt-2 text-sm rounded hover:bg-blue-700"
      onClick={() => setShowModal(true)}>
        Get the code!
      </button>
      {showModal && createPortal(<ModalResult closeModal={closeModal} />, document.body)}
    </>
  )
}
