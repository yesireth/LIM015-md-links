const api = require('../src/app.js')

const mdLinks = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    if (api.existsPath(path)) {
      let arrayLinks = []
      if (!api.pathAbsolute(path)) {
        path = api.pathConvertToAbs(path)
      }
      arrayLinks = api.extractTheLinks(path)// aQui traemos los links de los archivos md
      if (options.active) {
        if (options.op === '--stats') {
          const linksUnicos = new Set(arrayLinks.map((arrayLinks) => arrayLinks.href))
          const objResult = {
            Total: arrayLinks.length,
            Unique: linksUnicos.size
          }
          resolve(objResult)
        }
        if (options.op === '--validate') {
          api.validateOptions(arrayLinks).then((result) => {
            arrayLinks = result
            resolve(arrayLinks)
          })// llamamos al fetch
        }
        if ((options.op === '--stats' && options.opc === '--validate') ||
        (options.op === '--validate' && options.opc === '--stats')) {
          const linksUnicos = new Set(arrayLinks.map((arrayLinks) => arrayLinks.href))
          console.log(linksUnicos)
          const objResult = {
            Total: arrayLinks.length,
            Unique: linksUnicos.size
          }
          resolve(objResult)
        }
      } else {
        resolve(arrayLinks)
      }
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('No existe la ruta =(')
    }
  })
}

module.exports = { mdLinks }
