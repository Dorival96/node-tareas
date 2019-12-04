const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');

let comando = argv._[0];

//console.log(comando);
switch (comando) {
    case 'crear':
        console.log("=--Crear Tareas--=");

        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log("=--Listar Tareas--=");

        let listado = tareas.getLista(argv.completado);
        for (let tarea of listado) {
            console.log("=--POR HACER--=".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
        }
        break;

    case 'actualizar':
        console.log("=--Actualizar Tareas--=");

        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log("=--Borrar Tareas--=");

        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("Comando no reconocido");
}