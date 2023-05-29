import { useState } from 'react';

const Ejercicio3 = () => {
  const sumar = (a, b) => setRes(Number(a) + Number(b));
  const restar = (a, b) => setRes(Number(a) - Number(b));
  const multiplicar = (a, b) => setRes(Number(a) * Number(b));
  const dividir = (a, b) => setRes(Number(a) / Number(b));

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);

  return (
    <>
      <input
        type='number'
        name={'num1'}
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type='number'
        name={'num2'}
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button className='btn btn-primary' onClick={() => sumar(num1, num2)}>
        Sumar
      </button>
      <button className='btn btn-primary' onClick={() => restar(num1, num2)}>
        Restar
      </button>
      <button
        className='btn btn-primary'
        onClick={() => multiplicar(num1, num2)}
      >
        Multiplicar
      </button>
      <button className='btn btn-primary' onClick={() => dividir(num1, num2)}>
        Dividir
      </button>
      <p className='text-white text-center fs-2'>Resultado: {res}</p>
    </>
  );
};

export default Ejercicio3;
