const fs = require('fs')
// const chalk = require('chalk')
const path = require('path')
// const resolve = require('path').resolve
const fetch = require('node-fetch')
// const userPath = process.argv[2]
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
  } else {
    if (path.extname(route) === '.md') {
      newArray.push(route)
    }
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
// const router = 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
// const objLinks = extractTheLinks(router)

const validateOptions = (links) => {
  return Promise.all(links.map((element) => {
    return fetch(element.href)
      .then((response) => {
        const objResponse = {
          href: element.href,
          text: (element.text.substring(0, 50)),
          path: element.file,
          status: response.status,
          statusText:
            response.status > 199 && response.status < 400 ? 'Ok' : 'Fail'
        }
        return objResponse
      })
      .catch((err) => {
        const objErr = {
          href: element.href,
          text: (element.text.substring(0, 50)),
          path: element.file,
          status: 'There was a problem with the Fetch request. ' + err,
          statusText: 'Fail'
        }
        return objErr
      })
  }))
}
// console.log(extractTheLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'))
module.exports = {
  existsPath,
  pathAbsolute,
  pathConvertToAbs,
  patDirectory,
  readFileAndDirectory,
  validateOptions,
  extractTheLinks
}
