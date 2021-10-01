const api = require('../src/index.js')
const args = process.argv.slice(2)
const chalk = require('chalk')

const templateHelp = `
    ${chalk.blueBright('(◕‿‿◕｡)━━━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ ━━━ HELP ━━━ ˚(◕‿‿◕｡)')} 
    `
const templateNull = `
    ${chalk.redBright('(◕‿‿◕｡)━━━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ ━━━ INGRESE UNA RUTA  ━━━ ˚(◕‿‿◕｡)')} 
    `
const validate = (args) => {
  let mensaje = ''
  if (args.length === 0) {
    mensaje = templateNull
    return mensaje
  } else if (args.length === 1) {
    if (args[0] === '--help') {
      mensaje = templateHelp
      return mensaje
    } else {
      api.mdLinks(args[0], { active: false })
        .then((arrayResponse) => {
          console.log(arrayResponse)
        })
    }
  } else if (args.length === 2) {
    api.mdLinks(args[0], {
      op: args[1],
      active: true,
      countOption: 1
    })
      .then((arrayResponse) => {
        console.log(arrayResponse)
      })
  } else if (args.length === 3) {
    api.mdLinks(args[0], {
      op: args[1],
      opc: args[2],
      active: true,
      countOption: 2
    }).then((arrayResponse) => {
      console.log(arrayResponse)
    })
  }
}

validate(args)
