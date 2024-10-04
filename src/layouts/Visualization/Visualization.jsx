import ModalBtn from "./Modal/ModalBtn";

export default function Visualization() {
  return (
    <div className="flex flex-col ml-10 p-5 lg:ml-28">
      <ModalBtn />
      <div className="w-[200px] h-[200px] bg-white rounded-xl mb-20 lg:mb-40">
      </div>
    </div>
  )
}
