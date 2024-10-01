export default function BoxColorPicker({ inputData }) {

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <label>{inputData.name}</label>
      <input
      className=""
      type={inputData.type}
      value={inputData.value}
      onChange={handleInput}
      />
    </div>
  )
}
