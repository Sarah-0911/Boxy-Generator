import { useSelector, useDispatch } from "react-redux";
import Shadow from "./Shadow";
import { addShadow } from "../../features/shadowSlice";
import { nanoid } from "nanoid";

export default function ShadowList() {

  const shadows = useSelector(state => state.shadow);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <h2 className="font-bold mb-4 text-lg my-2">Customize Shadows</h2>
        <button
        className="bg-blue-600 hover:bg-blue-700 text-slate-100 px-3 py-1 text-sm rounded h-[40px] focus:outline-none focus:ring-4 focus:ring-offset-2"
        onClick={() => dispatch(addShadow())}
        >
          Add a shadow
        </button>
      </div>
      <ul>
         {shadows.map((shadow, index) => (
          <Shadow key={shadow.id} shadow={shadow} panelNumber={index + 1} />
         ))}
      </ul>
    </div>
  )
}
