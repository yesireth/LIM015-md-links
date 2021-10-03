jest.mock('node-fetch')
const fetch = require('node-fetch')
const path = require('../src/app.js')

describe('validateOptions', () => {
  it('Deberia ser un statusText : 0k', () => {
    const linkObj = [{
      href: 'https://github.com/Laboratoria/course-parser',
      text: '`course-parser`',
      file: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src'
    }]
    const objResponse = [{
      href: 'https://github.com/Laboratoria/course-parser',
      text: '`course-parser`',
      path: 'C:\\Users\\51944\\laboratoria\\LIM015-md-links\\src',
      status: 200,
      statusText: 'Ok'
    }]
    fetch.mockReturnValue(() => Promise.resolve({
      status: 200,
      statusText: 'OK'
    }))
    return path.validateOptions(linkObj)
      .then((result) => {
        expect(result).toEqual(objResponse)
      })
  })
})
