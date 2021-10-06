#!/usr/bin/env node
const api = require('../src/index.js')
const args = process.argv.slice(2)
const chalk = require('chalk')
const templateHelp = `
    ${chalk.yellowBright('(◕‿‿◕｡) ━━ HELP ━━   ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ ━━━ INGRESA LOS SIGUIENTES CAMPOS ━━━  ˚(◕‿‿◕｡)')} 
    ${chalk.blueBright('  (❣◕ ‿ ◕❣)━━ UNA RUTA ━━   ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧   ━━━ --VALIDATE   ━━━ ˚(❣◕ ‿ ◕❣)')} 
    ${chalk.redBright('   (◕‿‿◕｡) ━━ --STATS ━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧    ━━━     --VALIDATE --STATS━━━  ˚(◕‿‿◕｡)')} 
    `
const templateNull = `
    ${chalk.greenBright('(◕‿‿◕｡)━━ INGRESE UNA RUTA VALIDA━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ O ━━━ --HELP  ━━━ ˚(◕‿‿◕｡)')} 
    `
const validate = (args) => {
  let mensaje = ''
  if (args.length === 0) {
    mensaje = templateNull
  } else if (args.length === 1) {
    if (args[0] === '--help') {
      mensaje = templateHelp
      console.log(mensaje)
    } else {
      api.mdLinks(args[0], { active: false })
        .then((arrayResponse) => {
          console.log(arrayResponse)
        })
    }
  } else if (args.length === 2) {
    api.mdLinks(args[0], {
      op1: args[1],
      active: true,
      countOptions: 1
    })
      .then((arrayResponse) => {
        console.log(arrayResponse)
      })
  } else if (args.length === 3) {
    api.mdLinks(args[0], {
      op1: args[1],
      op2: args[2],
      active: true,
      countOptions: 2
    }).then((arrayResponse) => {
      console.log(arrayResponse)
    })
  }
}

validate(args)
// C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src
