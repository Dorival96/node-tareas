## Aplicación de comandos NodeJS

Recuerda instalar los paquetes

```
npm install yargs
```
```
npm install colors
```
## Opciones
* Crear Lista
```
node app.js crear
```
* Actualizar estado de la tarea
```
node app.js actualizar
```
* Borrar Tarea
```
node app.js borrar
```
* Listar Tarea
```
node app.js listar
```
Adicional: -d para descripción de la tarea, -c para completado añadir estado de la tarea.

## Como utilizar el programa

* CREAR: Utilizar -d y entre comillas añadir la tarea.
```
node app crear -d "Entonar Coro"
```
Resultado:
```
=--Crear Tareas--=
{ descripcion: 'Entonar Coro', completado: false }
```

* ACTUALIZAR: Utilizar -d y entre comillas añadir la tarea y -c true para actualizar su estado que por defecto estará en false.

```
node app actualizar -d "Entonar Coro" -c true
```
Resultado:
```
=--Actualizar Tareas--=
true
```

* LISTAR: Utilizar -c para que nos muestre el listado de lo que queremos observar y permite listar las tareas según estén completas (-c true) o incompletas (-c false)

```
node app listar -c true
node app listar -c false
```
Resultado True:
```
=--POR HACER--=
Ir al cine
Estado:  true
=--POR HACER--=
Gato
Estado:  true
```
Resultado False:
```
=--POR HACER--=
Entonar
Estado:  false
=--POR HACER--=
Entonar Coro
Estado:  false
```

* BORARR: Utilizar -d y la descripción de la tarea que se desea eliminar.

```
node app borrar -d "Entonar"
```
Resultado al listar

```
=--Listar Tareas--=
=--POR HACER--=
Entonar Coro
Estado:  false
```



