const container = document.querySelector(".container")
const presente = document.querySelector(".presente")
const tampa = document.querySelector(".tampa")
const tooltip = document.querySelector(".tooltip")
const bezinha = document.querySelector(".bezinha")
window.addEventListener('DOMContentLoaded', (event) => {
  for (let index = 0; index < 200; index++) {
    const heart = document.createElement('div')
    const heartContainer  = document.createElement('div')
    const tiara = document.createElement('img')
    tiara.src = './img/arco-de-cabelo.png'
    tiara.classList.add("tiara")
    heartContainer.classList.add('heart-container')
    heartContainer.style.animationDelay = `${getRandomInt(15)}s`
    heartContainer.appendChild(heart)
    heart.classList.add("heart")
    heart.appendChild(tiara)
    if(index%2 == 0) {
      heart.classList.add("right")
      tiara.classList.add("right")
    }else{
      heart.classList.add("left")
      tiara.classList.add("left")
    }
    container.appendChild(heartContainer)
  }
  window.requestAnimationFrame(draw)
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

presente.addEventListener('click',(e)=> {
  bezinha.classList.toggle("open")
  tampa.classList.toggle("open")
  tooltip.classList.toggle("open")
  bezinha.querySelectorAll("img").forEach(i=> i.classList.add("open"))
  e.target.removeEventListener("click")
  setTimeout(()=> {
    bezinha.classList.toggle("open")
  tampa.classList.toggle("open")
  tooltip.classList.toggle("open")
  bezinha.querySelectorAll("img").forEach(i=> i.classList.toggle("open"))
  e.target.addEventListener("click")
  },4000)
})
