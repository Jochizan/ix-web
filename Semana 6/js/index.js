const generarFilasTabla = async () => {
  const res = await fetch('./animales.json');
  const { animales } = await res.json();
  console.log(animales)
  const tbody = document.getElementById("tabla-animales");
  let filas = "";
  for (let i = 0; i < animales.length; i++) {
    filas += `<tr>
                <td>${animales[i].nombre}</td>
                <td><img src="${animales[i].imagen}" alt="${animales[i].nombre}" width="100" height="100"></td>
                <td>${animales[i].genero}</td>
                <td>${animales[i].habitat}</td>
              </tr>`;
  }
  tbody.innerHTML = filas;
}

// Llamamos a la función para generar las filas de la tabla al cargar la página
window.onload = generarFilasTabla;