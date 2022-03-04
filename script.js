let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  document.querySelector('#main-title').innerHTML = 'DOM Toretto'

  // Part 2

  document.querySelector('body').style.backgroundColor = '#e1ad01'

  // Part 3

  function removeItem() {
    let list = document.getElementById('favorite-things')
    let listItems = list.getElementsByTagName('li')
    let last = listItems[listItems.length - 1]
    list.removeChild(last)
  }
  removeItem()

  // Part 4

  document.querySelectorAll('special-title').p.style.fontSize = '2rem'

  // Part 5

  function removeChicago() {
    let list = document.getElementById('past-races')
    let listItems = list.getElementsByTagName('li')
    let chicago = listItems[3]
    list.removeChild(chicago)
  }
  removeChicago()

  // Part 6

  let list = document.getElementById('past-races')
  let entry = document.createElement('li')
  entry.appendChild(document.createTextNode('Seoul'))
  list.appendChild(entry)

  // Part 7
  function createDiv() {
    const div = document.createElement('div')
    const head1 = document.createElement('h1')
    const headNode = document.createTextNode('SEOUL')
    head1.appendChild(headNode)
    const para = document.createElement('p')
    const node = document.createTextNode('I flipped my car into the sun')
    para.appendChild(node)

    const element = document.getElementsByClassName('blog-post')
    element.appendChild(div, headNode, para)
  }
  createDiv()
}
