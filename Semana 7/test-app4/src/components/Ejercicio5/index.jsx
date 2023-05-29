import { useState } from 'react';

const Ejercicio5 = () => {
  const [number, setNumber] = useState(1);
  const [lengthLi, setLengthLi] = useState(0);

  console.log(Array.from({ length: lengthLi }, (_, i) => i + 1));

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setLengthLi(number)}>Renderizar los li</button>
      <ol>
        {Array.from({ length: lengthLi }, (_, i) => i + 1).map((_, idx) => (
          <li key={idx} className='text-white'>item {idx + 1}</li>
        ))}
      </ol>
    </>
  );
};

export default Ejercicio5;
