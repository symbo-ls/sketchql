'use strict'

const documents = require('./metadata/document.json')

module.exports = function parse () {
  const components = {}
  const foreignSymbols = documents
    .foreignSymbols.filter(v => v.sourceLibraryName === 'Symbols')
    .map(v => v.originalMaster)
    .forEach(v => {
      var name = v.name.split(' / ')[0]
      components[name] = {
        id: v.symbolID
      }
    })
  return components
}
