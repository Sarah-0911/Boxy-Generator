export default function BoxRange({ inputData }) {

  const handleInput = (e) => {
    console.log(e.target.value);

  };

  return (
    <div className="mb-4">
      <label>{inputData.name}</label>
      <input
      className="w-full"
      type={inputData.type}
      value={inputData.value}
      onChange={handleInput}
      />
    </div>
  )
}
