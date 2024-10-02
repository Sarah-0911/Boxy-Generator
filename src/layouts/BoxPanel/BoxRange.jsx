import { updateBoxValue } from "../../features/boxSlice";
import { useDispatch } from "react-redux";

export default function BoxRange({ inputData }) {

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(updateBoxValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value
    }))
  }

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <label>{inputData.name}</label>
        <div className="flex items-baseline mb-2">
          <input
          className="w-12 h-8 text-center mr-2 border border-gray-200"
          type="number"
          value={inputData.value}
          onChange={handleInput}
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
        className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
        min={inputData.minMax[0]}
        max={inputData.minMax[1]}
        type={inputData.type}
        value={inputData.value}
        onChange={handleInput}
        />
        <div className="absolute -z-10 border-gray-300 border-l w-0.5 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}
