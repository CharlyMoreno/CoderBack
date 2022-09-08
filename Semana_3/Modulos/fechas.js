const moment = require('moment')

const fechaActual  = moment();
const fechaCumple = moment("2002-02-26")

const minutos = fechaActual.diff(fechaCumple,'minutes')
const dias = fechaActual.diff(fechaCumple,'days')

console.log(`Han pasado ${minutos} minutos desde ${fechaCumple.format("DD/MM/YYYY")} hasta ${fechaActual.format("DD/MM/YYYY")}`)
console.log(`Han pasado ${dias} dias desde ${fechaCumple.format("DD/MM/YYYY")} hasta ${fechaActual.format("DD/MM/YYYY")}`)