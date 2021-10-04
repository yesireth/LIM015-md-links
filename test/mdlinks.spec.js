const api = require('../src/index.js')

describe('mdLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof api.mdLinks).toBe('function')
  })
})
