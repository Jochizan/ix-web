import './App.css';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';
import Ejercicio5 from './components/Ejercicio5';

const arr = Array.from({ length: 100 }, (_, i) => i + 1);

function App() {
  return (
    <Ejercicio4>
      <Ejercicio1 />
      <div className='d-flex flex-wrap'>
        <Ejercicio2 array={arr} show={'par'} />
      </div>
      <Ejercicio3 />
      <Ejercicio5 />
    </Ejercicio4>
  );
}

export default App;
