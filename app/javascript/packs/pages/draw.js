const BlockCanvas = require('./BlockCanvas.js')
const axios = require('axios')

// axios settings
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

let blockCanvas = new BlockCanvas('canvas'),
    resultElement = document.getElementById('prediction')

document.getElementsByClassName('reset')[0].addEventListener('click', (e) => {
  e.preventDefault()
  blockCanvas.reset()
})

document.getElementsByClassName('submit')[0].addEventListener('click', (e) => {
  e.preventDefault()

  e.target.classList.add('is-loading')

  let digits = blockCanvas.submit()
  axios.post('api/predict', {
    digits: digits
  })
  .then((res) => {
    setTimeout(() => {
      e.target.classList.remove('is-loading')
    }, 200)

    resultElement.innerHTML = res.data.predict
  })
})
