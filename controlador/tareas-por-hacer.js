const fs = require('fs');
//Creamos un vector vacio
let tareasPorHacer = [];

//Metodo para cargar la base de datos
const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

//Metodo para guardar en base de datos
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

//Metodo para crear tarea
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

//Metodo para obtener lista de tareas
const getLista = () => {
    cargarDB();
    return tareasPorHacer;
}

//Metodo para actualizar 
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}

//Metodo para borrar
const borrar = (descripcion) => {
        cargarDB();

        let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        if (tareasPorHacer.length === nuevoListado.length) {
            return false;
        } else {
            tareasPorHacer = nuevoListado;
            guardarDB();
            return true;
        }
    }
    //En esta parte exportamos los metodos 
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}