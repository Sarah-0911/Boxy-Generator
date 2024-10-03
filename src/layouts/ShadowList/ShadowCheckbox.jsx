import { useDispatch, useSelector } from "react-redux";
import { updateCheckbox } from "../../features/shadowsSlice";


export default function ShadowCheckbox({ name, shadowID }) {

  const dispatch = useDispatch();
  const checkBox = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID));
  // console.log(checkBox[name]);

  const handleCheckbox = () => {
    dispatch(updateCheckbox({
      shadowID,
      name
    }))
  };

  return (
    <>
      <input
      type="checkbox"
      className="h-4 w-4 border-gray-300 mr-2 rounded"
      checked={checkBox[name]}
      onChange={handleCheckbox}
      id={`checkbox-${name}-${shadowID}`}
       />
      <label
      htmlFor={`checkbox-${name}-${shadowID}`}
      className="leading-4 mr-5"
      >
        {name.charAt(0).toUpperCase() + name.substr(1)}
      </label>
    </>
  )
}
