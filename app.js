/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs')
path = 'tareas.json'
let tareas = JSON.parse(fs.readFileSync(path, 'utf-8'))

exports.leerTareas = function () {
    return tareas
}

exports.agregarTarea = function (tarea) {
    tareas.push(tarea)
}

exports.filtrarTareasPorEstado = function (estado) {
    return tareas.filter(function(tarea){
        return tarea.status == estado
    })
}

