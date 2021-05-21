
const fs = require('fs')
path = 'tareas.json'

exports.leerTareas = function () {
    return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

exports.agregarTarea = function (tarea) {
    let tempData = JSON.parse(fs.readFileSync(path, 'utf-8'))
    tempData.push(tarea)
    return fs.writeFileSync(path, JSON.stringify(tempData))
}

exports.filtrarTareasPorEstado = function (estado) {
    return JSON.parse(fs.readFileSync(path, 'utf-8')).filter(function(tarea){
        return tarea.status == estado
    })
}

