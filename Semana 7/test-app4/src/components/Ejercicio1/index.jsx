import { useEffect } from 'react';
import { useState } from 'react';

const estado = ['primary', 'warning', 'danger', 'success', 'secondary'];

const Ejercicio1 = () => {
  const [color, setColor] = useState(estado[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index =
        color === estado[estado.length - 1] ? 0 : estado.indexOf(color) + 1;
      setColor(estado[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className={`alert alert-${color}`} role='alert'>
      Alerta simple para mostrar un mensaje importante
    </div>
  );
};

export default Ejercicio1;
