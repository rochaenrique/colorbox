const ColorBox = ({ colorName }) => {
  return (
    <div className="colorBox element" style={colorName ? { backgroundColor: `${colorName}` } : null}>
      <p style={colorName === 'black' ? { color: 'white' } : null}>{colorName}</p>
    </div>
  );
};

export default ColorBox;
