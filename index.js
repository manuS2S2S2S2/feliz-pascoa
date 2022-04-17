

const container = document.querySelector(".container")
const presente = document.querySelector(".presente")
const tampa = document.querySelector(".tampa")
const tooltip = document.querySelector(".tooltip")
const bezinha = document.querySelector(".bezinha")
const audio = new Audio(`${window.location.href}trumpet_fanfare.mp3`)
const main = document.getElementsByTagName("main")[0]


var fw_spread = 250 // how wide the particles expand
var fw_scale = 10  // how large the particles get
var fw_launch_rate = 333 // in milliseconds 

function createFirework(e) {  
  var f = document.createElement('div')
  f.className = 'firework'
  f.style.width = '3px'
  f.style.height = '3px'
  f.style.position = 'absolute'
  var fx = Math.random()*100 + '%'
  f.style.left = Math.random()*33 + 33 + '%'
  // f.style.left = '100vw'
  f.style.top = '100%'
  var clr = 'hsl('+Math.random()*360+'deg,100%,50%)'
  // f.style.backgroundColor = clr
  f.style.transition = 'ease-out '+(Math.random()*3) + 1 + 's'

  main.appendChild(f)

  for(var i=0;i<20;i++){
    var p = document.createElement('div')
    p.className = 'particle'
    p.style.width = '100%'
    p.style.height = '100%'
    p.style.backgroundColor = clr
    p.style.position = 'absolute'
    p.style.left = '0'
    p.style.top = '0'
    p.style.transition = '.5s'    
    f.appendChild(p)
  }

  setTimeout(function(){
    f.style.top = Math.random()*50 + 5 + '%'
    f.style.left = fx
    f.ontransitionend = function() {
      var p = this.querySelectorAll('.particle')
      p.forEach(function(elm){
        var x = Math.random() < .5 ? Math.random()*fw_spread : (-1)*Math.random()*fw_spread
        var y = Math.random() < .5 ? Math.random()*fw_spread : (-1)*Math.random()*fw_spread
        elm.style.left = x + 'px'
        elm.style.top = y +'px'
        elm.style.opacity = '0'
        elm.style.transform = 'scale('+fw_scale+')'
        elm.style.borderRadius = '50%'
        elm.style.filter = 'blur(1px)'
        elm.ontransitionend = function() {
          this.remove()          
        }
      })
      setTimeout(function(){
        f.remove()
      },1000)
    }
  }, 100)  
  
  setTimeout(createFirework, fw_launch_rate)
}


window.addEventListener('DOMContentLoaded', (event) => {
  for (let index = 0; index < 250; index++) {
    const heart = document.createElement('div')
    const heartContainer  = document.createElement('div')
    const tiara = document.createElement('img')
    tiara.src = `${window.location.href}/img/arco-de-cabelo.png`
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
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

presente.addEventListener('click',(e)=> {
  if(!bezinha.classList.contains("open")){
    audio.play()
    createFirework()
  }
  else{
    audio.pause()
    audio.currentTime = 0
  }
 
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
  audio.currentTime = 0
  },4000)
})
