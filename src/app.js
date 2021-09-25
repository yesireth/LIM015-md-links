const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const resolve = require('path').resolve
const userPath = process.argv[2]
// onsole.log(marked)
// ************ PARA SABER SI EXISTE LA RUTA *************** //
const existsPath = (route) => {
  if (fs.existsSync(route)) return true
  return false
}

// ************ FUNCIÓN PARA SABER SI LA RUTA ES ABSOLUTA *************** //
const pathAbsolute = (route) => path.isAbsolute(route)

// ************ FUNCIÓN PARA CONVERIR LA RUTA RELATIVA EN ABSOLUTA *************** //
const pathConvertToAbs = (route) => path.isAbsolute(route) ? route : path.resolve(route)

// ************ FUNCIÓN PARA PREGUNTAR SI LA RUTA ES UN DIRECTORIO *************** //
const patDirectory = (route) => fs.statSync(route).isDirectory()

// ************ FUNCIÓN RECURSIVA,LEE EL DIRECTORIO, CARPETAS Y ALMACENA  LOS ARCHIVOS MD *************** //

// const readFile = (route) => fs.readFileSync(route, 'utf-8')
const readFileAndDirectory = (route) => {
  let newArray = []
  if (patDirectory(route)) {
    const arrayDirectory = fs.readdirSync(route)
    // console.log(arrayDirectory)
    arrayDirectory.forEach((file) => {
      // console.log(file)
      const arrayJoin = path.join(route, '/', file)
      if (patDirectory(arrayJoin)) {
        newArray = newArray.concat(readFileAndDirectory(arrayJoin)) // concatena el return de la nueva llamada
      } else if (path.extname(arrayJoin) === '.md') {
        newArray.push(arrayJoin)
      }
    })
  }
  return newArray
}
const extractTheLinks = (route) => {
  const arryLinks = []
  const regExFile = /\[(.*)\]( *)\(((((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\)))\)/gi
  const regExCorchetes = /\[(.*?)\]/gi
  const regExUrl = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/gi

  readFileAndDirectory(route).forEach((file) => {
    const readFile = fs.readFileSync(file).toString()
    const matchFile = readFile.match(regExFile)

    if (matchFile != null) {
      for (let i = 0; i < matchFile.length; i++) {
        // matchFile[i] : [`course-parser`](https://github.com/Laboratoria/course-parser)
        const tag = matchFile[i].match(regExCorchetes)[0].replace('[', '').replace(']', '')
        const url = matchFile[i].match(regExUrl)[0]
        const linkObj = {
          href: url,
          text: tag,
          file: route
        }
        arryLinks.push(linkObj)
      }
    }
  })
  return arryLinks
}
console.log(extractTheLinks(userPath))
//   readFileAndDirectory(route).forEach((file) => {
//     renderer.link = (href, title, text) => {
//       arryLinks.push({
//         href: href,
//         title: text,
//         file: paths
//       })
//     }
//     marked(fs.readFileSync(file), { renderer })
//   })
//   const filteredLinks = arryLinks.filter(url => url.href.slice(0, 4) == 'http')
//   return filteredLinks
// }
// readFileAndDirectory()
// extractTheLinks(userPath)
// console.log(readFileAndDirectory(userPath))
// console.log(chalk.green(existsPath(userPath), ' existe la ruta '))
// console.log(chalk.green(existsPath(userPath), '  no existe la ruta '))
// console.log(chalk.red('La ruta es', pathAbsolute(userPath), ',no es absoluta'))
// console.log(chalk.red('La ruta es', pathAbsolute(userPath), ',si es absoluta '))
// console.log(chalk.blue('Ruta convertida en absoluta', pathConvertToAbs(userPath)))
// console.log(chalk.blue('Es una directorio: ', patDirectory(userPath)))

module.exports = {
  existsPath,
  pathAbsolute,
  pathConvertToAbs,
  patDirectory,
  readFileAndDirectory
}
