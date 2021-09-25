const path = require('../src/app.js')
// ojooooooooooooo const mock = ''
describe('existsPath', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.existsPath).toBe('function')
  })
  it('Deberia retornar si existe la ruta ', () => {
    expect(path.existsPath('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\README.md')).toBeTruthy()
  })
  it('Deberia retornar que no existe la ruta', () => {
    expect(path.existsPath('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\READMEEEE.md')).toBeTruthy()
  })
})
describe('pathAbsolute ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.pathAbsolute).toBe('function')
  })
  it('Deberia retornar si existe la ruta ', () => {
    expect(path.pathAbsolute('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\mdlinks.md')).toBeTruthy()
  })
  it('Deberia retornar que no es absoluta la ruta', () => {
    expect(path.existsPath('READMEEEE.md')).toBeFalsy()
  })
})
describe('pathConvertToAbs ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.pathConvertToAbs).toBe('function')
  })
  it('Deberia convertir la ruta relativa en ruta absoluta', () => {
    expect(path.pathConvertToAbs('README.md')).toBe('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\README.md')
  })
})
describe('patDirectory ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.patDirectory).toBe('function')
  })
  it('Deberia retonar true si es directorio', () => {
    expect(path.patDirectory('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src')).toBeTruthy()
  })
})
describe('readFileAndDirectory ', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.readFileAndDirectory).toBe('function')
  })
  it('Deberia retonar un array de archivos md', () => {
    const arrayMd = [
      'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\archivo 2\\archivo.md',
      'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src\\archivo\\mdlinks.md'
    ]
    expect(path.readFileAndDirectory('C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src')).toEqual(arrayMd)
  })
})
