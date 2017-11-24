const BlockCanvas = require('./BlockCanvas.js')

let blockCanvas = new BlockCanvas('canvas')

document.getElementsByClassName('reset')[0].addEventListener('click', (e) => {
  e.preventDefault()
  blockCanvas.reset()
})

document.getElementsByClassName('submit')[0].addEventListener('click', (e) => {
  e.preventDefault()
  console.log(blockCanvas.submit())
})
