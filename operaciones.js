const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
 //al momento de registrar debe ser: nombre "edad" animal color enfermedad, con edad en ""
    // Leer citas actuales
  const citas = leerCitas();

  // Agregar nueva cita
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  citas.push(nuevaCita);

  // Guardar citas actualizadas en el archivo
  guardarCitas(citas);

  console.log('Cita registrada con éxito.');
}

function leer(registro) {
  // Leer citas
  const citas = leerCitas();

  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else if (registro) {
    // Mostrar cita individual por número de registro
    const citaIndividual = citas[registro - 1];
    if (citaIndividual) {
      console.log(`Registro ${registro}: Nombre: ${citaIndividual.nombre}, Edad: ${citaIndividual.edad}, Tipo: ${citaIndividual.animal}, Color: ${citaIndividual.color}, Enfermedad: ${citaIndividual.enfermedad}`);
    } else {
      console.log('Registro no encontrado.');
    }
  } else {
    // Mostrar todas las citas
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
      console.log(`${index + 1}: Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
    });
  }
}

function borrar(registro) {
  // Leer citas
  let citas = leerCitas();

  if (registro && Number.isInteger(registro) && registro > 0 && registro <= citas.length) {
    // Borrar cita por número de registro
    citas.splice(registro - 1, 1);
    // Guardar citas actualizadas en el archivo
    guardarCitas(citas);
    console.log(`Registro ${registro} eliminado con éxito.`);
  } else {
    console.log('Número de registro inválido o no encontrado.');
  }
}

function leerCitas() {
  // Leer el archivo citas.json
  try {
    const citasData = fs.readFileSync('citas.json', 'utf8');
    return JSON.parse(citasData);
  } catch (error) {
    // Si hay un error (por ejemplo, el archivo no existe), devolver un arreglo vacío
    return [];
  }
}

function guardarCitas(citas) {
  // Guardar el arreglo de citas en el archivo citas.json
  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');
}

module.exports = {
  registrar,
  leer,
  borrar
};
