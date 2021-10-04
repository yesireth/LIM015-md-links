
const fetch = jest.fn(() => {
  console.log('hola Ivy')
  return new Promise((resolve, reject) => {
  })
})

module.exports = fetch
