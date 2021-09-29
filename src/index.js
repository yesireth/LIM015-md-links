const api = require('../src/app.js')

const mdLinks = (path, options = { }) => {
  return new Promise((resolve, reject) => {
    if (api.existsPath(path)) {
      let arrayLinks = []
      if (!api.pathAbsolute(path)) {
        path = api.pathConvertToAbs(path)
      }
      arrayLinks = api.extractTheLinks(path)
      resolve(arrayLinks)
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('No existe la ruta =(')
    }
  })
}
// mdLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src').then((res) => {
//   console.log(res)
// })
module.exports = { mdLinks }
