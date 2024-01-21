const ColorInput = ({ colorName, setColorName }) => {
  return (
    <div className="colorInput element">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="colorInput">Input Color</label>
        <input type="text" id="colorInput" value={colorName} onChange={(e) => setColorName(e.target.value)} />
      </form>
    </div>
  );
};

export default ColorInput;
