/* eslint-disable no-unused-expressions */
const api = require('../src/index.js')
const fetch = require('node-fetch')
jest.mock('node-fetch')
describe('mdLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof api.mdLinks).toBe('function')
  })
  it('Si es option false(solo se corre con un argumento PATH) deberia retornar un array de objeto', () => {
    const linkObj = [{
      file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md',
      href: 'https://github.com/Laboratoria/course-parser',
      text: '`course-parser`'
    },
    {
      file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md',
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
      text: 'Códigos de estado de respuesta HTTP - MDN'
    }]
    return api.mdLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md', { active: false }).then((result) => {
      expect(result).toEqual(linkObj)
    })
  })

  it('comprobacion con opcion --validate', () => {
    const expectArray = [{
      href: 'https://github.com/Laboratoria/course-parser',
      text: '`course-parser`',
      path: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md',
      status: 200,
      statusText: 'Ok'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
      text: 'Códigos de estado de respuesta HTTP - MDN',
      path: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md',
      status: 200,
      statusText: 'Ok'
    }]

    fetch.mockReturnValue(Promise.resolve({
      status: 200
    }))
    return api.mdLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md', { op1: '--validate', active: true, countOptions: 1 }).then((result) => {
      expect(result).toEqual(expectArray)
    })
  })
  it('comprobacion con opcion --stats', () => {
    const expectObject = {
      Total: 2,
      Unique: 2
    }
    return api.mdLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md', { op1: '--stats', active: true, countOptions: 1 }).then((result) => {
      expect(result).toEqual(expectObject)
    })
  })
  it('comprobacion con opciones --stats --validate', () => {
    const expectObject = {
      Total: 2,
      Unique: 2,
      Broken: 0
    }
    fetch.mockReturnValue(Promise.resolve({
      status: 200
    }))
    return api.mdLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\archivo.md', { op1: '--stats', op2: '--validate', active: true, countOptions: 2 }).then((result) => {
      expect(result).toEqual(expectObject)
    })
  })
  it('comprobacion con opciones --validate  --stats', () => {
    const expectObject = {
      Total: 8,
      Unique: 6,
      Broken: 1
    }
    fetch.mockReturnValueOnce(Promise.resolve({
      status: 404
    }))
    return api.mdLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo2\\mdlinks.md', { op1: '--validate', op2: '--stats', active: true, countOptions: 2 }).then((result) => {
      expect(result).toEqual(expectObject)
    })
  })
})
