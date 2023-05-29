const Ejercicio2 = ({ array, show }) =>
  array.map((item, index) => {
    if (show === 'par') {
      if (item % 2 === 0)
        return (
          <div className='text-white p-4' key={index}>
            {item}
          </div>
        );
    } else if (show === 'impar') {
      if (item % 2 !== 0)
        return (
          <div className='text-white' key={index}>
            {item}
          </div>
        );
    } else {
      return (
        <div className='text-white' key={index}>
          {item}
        </div>
      );
    }
  });

export default Ejercicio2;
