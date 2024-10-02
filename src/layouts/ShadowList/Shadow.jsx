import chevron from "../../assets/chevron.svg"

function Shadow({ panelNumber, shadow }) {
  return (
      <li className="flex justify-between py-4 px-6 border-b border-gray-300">
        Shadow {panelNumber}
        <img className="w-4 cursor-pointer" src={chevron} alt="arrow" />
      </li>
  )
}
export default Shadow
