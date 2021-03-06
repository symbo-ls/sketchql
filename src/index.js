'use strict'

// var ns = require('node-sketch')

var parse = require('./parse')

var FILE_PATH = 'systematic.sketch'

console.log(parse())

// ns.read(FILE_PATH).then(sketch => {

//   //Search the symbol named 'button'
//   const buttonSymbol = sketch.symbolsPage.get('symbolMaster', 'button')

//   console.log('File opened!!')
// })

// ns.read(FILE_PATH).then(sketch => sketch.saveDir('demo'))
