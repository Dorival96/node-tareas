//Se crea la descripcion de la tarea por hacer y su estado con la información necesaria para el usuario
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};
//Se crea completado para hacer saber que la tarea se ha completado
const completado = {
    demand: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};
//Se ha creado los comandos para crear, actualizar, borrar y listar tarea como argv 
//que serán los datos a recibir al ejecutar el programa
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('listar', 'Listar tareas', {
        completado
    })
    .help()
    .argv;

//Se exporta el módulo argv
module.exports = {
    argv
}