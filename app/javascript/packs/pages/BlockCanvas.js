class BlockCanvas {
  constructor(id) {
    this.element = document.getElementById(id)
    this.initCanvas()
  }

  initCanvas() {
    let blockHtml = '<div class="block"></div>'

    for (let i = 0; i < 28 * 28; i++)
      this.element.insertAdjacentHTML('beforeend', blockHtml)

    this.blocks = this.element.getElementsByClassName('block')

    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].addEventListener('mouseover', (e) => {
        if (e.buttons == 1)
          e.target.className += ' hovered'
      })

      this.blocks[i].addEventListener('mousedown', (e) => {
        e.target.className += ' hovered'
      })
    }
  }

  reset() {
    this.element.innerHTML = ''
    this.initCanvas()
  }

  submit() {
    let digits = []

    for (let i = 0; i < 28 * 28; i++) {
      if (this.blocks[i].classList.contains('hovered'))
        // the max grayscale
        digits.push(255)
      else
        digits.push(0)
    }

    return digits
  }
}

module.exports = BlockCanvas
