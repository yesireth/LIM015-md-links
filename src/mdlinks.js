
const app = require('./index.js')
const route = process.argv[2]

app.mdLinks(route, { validate: false })
  .then((value) => {
    console.log(value)
  })
  .catch((err) => {
    console.log(err)
  })
// C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src
