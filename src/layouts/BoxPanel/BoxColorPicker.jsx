import { updateBoxValue } from "../../features/boxSlice";
import { useDispatch } from "react-redux";

export default function BoxColorPicker({ inputData }) {

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(updateBoxValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value
    }))
  };

  return (
    <div className="mt-3">
      <label>{inputData.name}</label>
      <div className="flex mt-2 items-center">
        <input
        className="flex-grow border border-gray-200 h-8 py-1 px-2 focus:outline-1 outline-gray-400"
        type="text"
        value={inputData.value}
        onChange={handleInput}
        />
        <input
        className="h-[40px] cursor-pointer"
        type={inputData.type}
        value={inputData.value}
        onChange={handleInput}
        />
      </div>
    </div>
  )
}
