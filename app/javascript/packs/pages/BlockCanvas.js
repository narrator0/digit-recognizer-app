class BlockCanvas {
  constructor(id) {
    this.element = document.getElementById(id)
    this.initCanvas()
  }

  initCanvas() {
    let blockHtml = '<div class="block"></div>'

    for (let i = 0; i < 28 * 28; i++)
      this.element.insertAdjacentHTML('beforeend', [
        '<div class="block" block-id="',
        i,
        '"></div>'
      ].join(''))

    this.blocks = this.element.getElementsByClassName('block')

    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
          let id = parseInt(e.target.getAttribute('block-id')),
              targetIds = [id - 1, id, id + 1]

          targetIds.forEach((id) => {
            console.log(id)
            let element = $(`.block[block-id="${id}"]`)
            element.addClass('hovered')
          })
        }
      })

      this.blocks[i].addEventListener('mousedown', (e) => {
        let id = parseInt(e.target.getAttribute('block-id')),
            targetIds = [id - 1, id, id + 1]

        targetIds.forEach((id) => {
          console.log(id)
          let element = $(`.block[block-id="${id}"]`)
          element.addClass('hovered')
        })
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
