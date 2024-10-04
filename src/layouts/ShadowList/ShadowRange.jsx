import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadowsSlice";

export default function ShadowRange({ inputData, shadowID }) {

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(updateShadowValue({
      shadowID,
      inputNumber: inputData.inputNumber,
      value: e.target.value
    }))
  }


  return (
    <div className="my-4">
      <div className="flex justify-between items-baseline">
        <label>{inputData.name}</label>
        <div className="flex items-baseline mb-2">
          <input
          type="number"
          className="w-12 h-8 text-center mr-2 border border-gray-200"
          value={inputData.value}
          onChange={handleInput}
          />
          <span>px</span>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
        type="range"
        className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
        value={inputData.value}
        onChange={handleInput}
        min={inputData.minMax[0]}
        max={inputData.minMax[1]}
        />
        <div className="absolute -z-10 border-gray-300 border-l w-0.5 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}
