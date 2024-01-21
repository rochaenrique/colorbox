import ColorBox from './ColorBox.js';
import ColorInput from './ColorInput.js';
import { useState } from 'react';

const Content = () => {
  const [colorName, setColorName] = useState('');

  return (
    <main>
      <ColorBox colorName={colorName} />
      <ColorInput colorName={colorName} setColorName={setColorName} />
    </main>
  );
};

export default Content;
