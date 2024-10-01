import { useSelector } from "react-redux";
import BoxColorPicker from "./BoxColorPicker";
import BoxRange from "./BoxRange";

export default function BoxPanel() {

  const boxState = useSelector(state => state.box);

  const boxInputs = boxState.map((input, index) => (
    (input.type === "range")
    ? <BoxRange key={index} inputData={input} />
    : (input.type === "color")
    ? <BoxColorPicker key={index} inputData={input} />
    : null
  ));

  return (
    <div className="px-6 py-4 bg-gray-50 border-b border-gray-300">
      <h2 className="font-bold mb-4 text-lg my-2">Box Properties</h2>
      {boxInputs}
    </div>
  )
}
