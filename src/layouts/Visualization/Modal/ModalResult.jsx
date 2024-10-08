import { useSelector } from "react-redux";
import { useEffect } from "react";
import getBoxShadowValue from "../../../utils/getBoxShadowValue";

export default function ModalResult({ closeModal }) {

  const shadowsValues = useSelector(state => state.shadows);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    }
  }, []);


  let runningAnimation = false;
  const handleCopy = (e) => {
    if (runningAnimation) return;

    runningAnimation = true;
    navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowsValues)}`);
    e.target.textContent = "Copied!"

    setTimeout(() => {
      e.target.textContent = "Copy"
      runningAnimation = false;
    }, 1250);
  }

  return (
    <div
    className="fixed bg-gray-600/75 z-10 inset-0 flex justify-center items-center"
    onClick={closeModal}>
      <div
      className="max-w-[360px] bg-gray-50 p-7 rounded"
      onClick={(e) => e.stopPropagation()}
      >
      <div className=" flex justify-between mb-5">
        <p className="font-semibold">Here is your code 🎉</p>
        <div className="flex gap-2">
          <button
          className="bg-blue-600 hover:bg-blue-700 text-slate-100 px-3 py-1 text-sm rounded"
          onClick={handleCopy}>
            Copy
          </button>
          <button
          className= "bg-red-600 hover:bg-red-700 text-slate-100 px-3 py-1 text-sm rounded"
          onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
      <p className="p-4 bg-slate-100 text-sm rounded">
        <span className="font-semibold">box-shadow: </span>
        <span>{getBoxShadowValue(shadowsValues)}</span>
      </p>
      </div>
    </div>
  )
}
