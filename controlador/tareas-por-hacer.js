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
//Se toma como entrada la descripcion y el argumento completado va estar en 'false'
const crear = (descripcion) => {
    //se cargará un vector vacio si es que no encuentra datos
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    //con push empezamos a guardar los datos en el vector
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}




//Metodo para obtener lista de tareas
//recibe como parametro la variable completado
const getLista = (completado) => {
    //llama al metodo para cargar la base
    cargarDB();

    //Si el campo completado es vacio, ingresar
    if (completado !== " ") {
        //Cuando completado sea igual a true
        if (completado === "true") {
            //completado cambiará su valor a true
            completado = true;
        } else {
            //caso contrario su valor irá a false
            completado = false;
        }
        let nuevoListado = tareasPorHacer.filter(tarea => tarea.completado === completado);
        tareasPorHacer = nuevoListado;
        return tareasPorHacer;

    } else {

        return tareasPorHacer;
    }
}


//Metodo para actualizar 
//Se toma como entrada descripcion y completado que pondremos en true para actualizar la tarea 
const actualizar = (descripcion, completado = true) => {
    if (completado === true) {
        completado = true;
    } else {
        completado = false;
    }
    cargarDB();
    //findIndex se uso para buscar el numero que pertenece la tarea para actulizar
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