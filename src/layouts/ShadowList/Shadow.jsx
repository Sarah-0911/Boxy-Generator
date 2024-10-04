import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeShadow } from "../../features/shadowsSlice";
import chevron from "../../assets/chevron.svg";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowCheckbox from "./ShadowCheckbox";

function Shadow({ panelNumber, shadow }) {

  const [toggleShadow, setToggleShadow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if(panelNumber === 1) {
      setToggleShadow(true)
    }
  },[])


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
      inputData={shadow.inputs[index]}
      shadowID ={shadow.id}
      />
    : null
  ));

  return (
      <li className="border-b bg-gray-50 border-gray-300">
        <button onClick={() => setToggleShadow(!toggleShadow)} className="py-4 px-6 w-full flex justify-between items-center hover:bg-gray-100">
          <span>Shadow {panelNumber}</span>
          <img className={`w-4 font-bold ${toggleShadow ? 'rotate-90' : ''}`} src={chevron} alt="arrow" />
        </button>
        {toggleShadow &&
          <>
            <div className="flex items-end px-6 pt-4">
              <ShadowCheckbox name={"active"} shadowID={shadow.id} />
              <ShadowCheckbox name={"inset"} shadowID={shadow.id} />
              <button
              className="ml-auto text-sm bg-red-600 text-slate-100 hover:bg-red-700 py-2 px-3 rounded"
              onClick={() => dispatch(removeShadow(shadow.id))}
              >
                Remove
              </button>
            </div>
            <div className="px-6 py-4">
              {shadowInputs}
            </div>
          </>}
      </li>
  )
}
export default Shadow
