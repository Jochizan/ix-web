import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Ejercicio4 = ({ children }) => {
  const [color1, setColor1] = useState(0);
  const [color2, setColor2] = useState(0);
  const [color3, setColor3] = useState(0);
  const color = `rgb(${color1},${color2},${color3})`;

  return (
    <div style={{ background: color }} className='d-flex flex-column'>
      <div className='d-flex justify-content-center'>
        <input
          type='number'
          max={255}
          onChange={(e) => setColor1(e.target.value)}
        />
        <input
          type='number'
          max={255}
          onChange={(e) => setColor2(e.target.value)}
        />
        <input
          type='number'
          max={255}
          onChange={(e) => setColor3(e.target.value)}
        />
      </div>
      {children}
      {/* <button onClick={}>Cambiar color</button> */}
    </div>
  );
};

export default Ejercicio4;
