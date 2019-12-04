//Se importa mos módulos necesarios para utilizar sus funciones
const argv = require('./config/yargs').argv;
//Se importa el módulo donde se encuentra las funciones que trabajará en las tareas
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');

let comando = argv._[0];

//Un switch será necesario para las 4 opciones de crea, actualizar, borrar y listar 
switch (comando) {
    case 'crear':
        console.log("=--Crear Tareas--=");
        //Se invoca a la funcion crear que necesita la descripción para la crear tarea
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log("=--Listar Tareas--=");
        //Se llama a la función listar para recibir el estado en completado de la tarea
        let listado = tareas.getLista(argv.completado);
        for (let tarea of listado) {
            console.log("=--POR HACER--=".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
        }
        break;

    case 'actualizar':
        console.log("=--Actualizar Tareas--=");
        //Se invoca a la función de actualizar que recibe como parametro la descripcion de la tarea y su estado
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log("=--Borrar Tareas--=");
        //Se invoca a la función de borrar que recibe como parámetro a descripcion para saber que tarea borrar
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        //Es el mensaje que aparecerá cuando el usuario ingrese mal los comandos
        console.log("Comando no reconocido");
}