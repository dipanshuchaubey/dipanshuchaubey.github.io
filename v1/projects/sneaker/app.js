const card = document.querySelector('.card')
const container = document.querySelector('.container')

container.addEventListener('mousemove', e => {
  let x = (window.innerWidth / 2 - e.pageX) / 25
  let y = (window.innerWidth / 2 - e.pageY) / 25

  card.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
})

container.addEventListener('mouseleave', e => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
})
