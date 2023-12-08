const operaciones = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = args.slice(1);
  operaciones.registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  const registro = args[1] ? parseInt(args[1]) : null;
  operaciones.leer(registro);
} else if (operacion === 'borrar') {
  const registro = args[1] ? parseInt(args[1]) : null;
  operaciones.borrar(registro);
} else {
  console.log('Operación no reconocida. Las operaciones válidas son "registrar", "leer" y "borrar".');
}
