import { useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";

function Shadow({ panelNumber, shadow }) {

  const [toggleShadow, setToggleShadow] = useState(true);


  const shadowInputs = shadow.inputs.map((input, index) => (
    (input.type === "range")
    ? <ShadowRange
      key={index}
      inputData={shadow.inputs[index]}
      shadowID ={shadow.id}
      />
    : (input.type === "color")
    ? <ShadowColorPicker
      key={index}
      inputData={shadow.inputs[index]} //A revoir !!! pourquoi inputs avec [index] ? ca vient d'où ?
      shadowID ={shadow.id}
      />
    : null
  ));


  return (
      <li className="py-4 px-6 border-b bg-gray-50 border-gray-300">
        <button onClick={() => setToggleShadow(!toggleShadow)} className="flex justify-between">
          <span>Shadow {panelNumber}</span>
          <img className={`w-4 font-bold ${toggleShadow ? 'rotate-90' : ''}`} src={chevron} alt="arrow" />
        </button>
        {toggleShadow &&
          <>
            <div className="flex items-end px-6 py-4">
              {/* <CheckBox /> */}
              {/* <CheckBox /> */}
              <button className="ml-auto text-sm bg-red-600 text-slate-100 hover:bg-red-700 py-2 px-3 rounded">
                Remove
              </button>
            </div>
            <div>
              {shadowInputs}
            </div>
          </>}
      </li>
  )
}
export default Shadow
