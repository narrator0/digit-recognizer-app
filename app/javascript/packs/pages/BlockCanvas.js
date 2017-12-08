class BlockCanvas {
  constructor(id) {
    this.element = document.getElementById(id)
    this.initCanvas()
  }

  initCanvas() {
    for (let i = 0; i < 28 * 28; i++) {
      this.element.insertAdjacentHTML(
        'beforeend',
        `<div class="block" block-id="${i}"></div>`
      )
    }

    this.blocks = this.element.getElementsByClassName('block')

    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
          this.highlightBlocks(e.target.getAttribute('block-id'))
        }
      })

      this.blocks[i].addEventListener('mousedown', (e) => {
        this.highlightBlocks(e.target.getAttribute('block-id'))
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

  highlightBlocks(blockId) {
    if (typeof(blockId) === "string") {
      blockId = parseInt(blockId)
    }

    let highlightIds = [blockId]

    // not first column
    if (blockId % 28 !== 0) {
      highlightIds.push(blockId - 1)
    }

    // not last column
    if (blockId % 28 !== 27) {
      highlightIds.push(blockId + 1)
    }

    // not first row
    if (blockId > 27) {
      highlightIds.push(blockId - 28)
    }

    // not last row
    if (blockId < 756) {
      highlightIds.push(blockId + 28)
    }

    highlightIds.forEach((id) => {
      this.blocks[id].classList += ' hovered'
    })
  }
}

module.exports = BlockCanvas
