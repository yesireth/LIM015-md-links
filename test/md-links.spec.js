const path = require('../src/app.js')

describe('existsPath', () => {
  it('Deberia ser una función', () => {
    expect(typeof path.existsPath).toBe('function')
  })
})
