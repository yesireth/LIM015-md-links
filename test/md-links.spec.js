const path = require('../src/app.js')

/** **********************Valida si la ruta existe**********************/
describe('existsPath', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.existsPath).toBe('function')
  })
  it('Deberia retornar si existe la ruta ', () => {
    expect(path.existsPath('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\README.md')).toBe(true)
  })
  it('Deberia retornar que no existe la ruta', () => {
    expect(path.existsPath('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\READMEEEE.md')).toBe(false)
  })
})
/** *************Valida si la ruta es absoluta**************************/
describe('pathAbsolute ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.pathAbsolute).toBe('function')
  })
  it('Deberia retornar si existe la ruta ', () => {
    expect(path.pathAbsolute('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\mdlinks.md')).toBe(true)
  })
  it('Deberia retornar que no es absoluta la ruta', () => {
    expect(path.existsPath('READMEE.md')).toBe(false)
  })
})
/** *************Convierte la ruta de relativa a absoluta**************************/
describe('pathConvertToAbs ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.pathConvertToAbs).toBe('function')
  })
  it('Deberia convertir la ruta relativa en ruta absoluta', () => {
    expect(path.pathConvertToAbs('README.md')).toBe('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\README.md')
  })
})
/** *************Valida si la ruta es un directorio**************************/
describe('patDirectory ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.patDirectory).toBe('function')
  })
  it('Deberia retonar true si es directorio', () => {
    expect(path.patDirectory('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src')).toBeTruthy()
  })
})
/** *************Lee la ruta del dierctorio y entra a leer las carpetas y me da un arreglo de path md**************************/
describe('readFileAndDirectory ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.readFileAndDirectory).toBe('function')
  })
  it('Deberia retonar un array de archivos md', () => {
    const arrayMd = [
      'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo 2\\archivo.md',
      'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo 2\\mdlinks.md'
    ]
    expect(path.readFileAndDirectory('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src')).toEqual(arrayMd)
  })
})
/** *************Extrae los links**************************/
describe('extractTheLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.extractTheLinks).toBe('function')
  })
  it('Deberia de retorar un array de objetos con href,text,file', () => {
    const objLinks = [
      {
        href: 'https://github.com/Laboratoria/course-parser',
        text: '`course-parser`',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
        text: 'Códigos de estado de respuesta HTTP - MDN',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://github.com/Laboratoria/course-parser',
        text: '`course-parser`',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
        text: 'Códigos de estado de respuesta HTTP - MDN',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
        text: 'The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
        text: 'Códigos de estado de respuesta HTTP - MDN1111',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://es.wikipedia.org/wikhhhhhhhhhhhi/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      },
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\'
      }
    ]
    expect(path.extractTheLinks('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\')).toStrictEqual(objLinks)
  })
})
describe('validateOptions', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.validateOptions).toBe('function')
  })
})
