const h1_Text = qs("header h1")
const gallery = qa(".box img")
const modalWrap = qs(".modal-wrap")
const modal = qs(".modal")

// Buttons
const close = qs("span")
const next = qs('.next')
const prev = qs('.prev')
const indicate = qs('.controls ul')

let galLength = gallery.length - 1
let moveIdx = 0

// Update header h1 tag when changed
h1_Text.dataset.text = h1_Text.innerText

display(modalWrap, 'hide')

close.onclick = () => {
  display(modalWrap, 'hide')
}

function imgIndx(i){    
  qs('.controls .selected').classList.remove('selected')
  modal.innerHTML = `<img src="${gallery[i].src}">`  
}

qa('.controls li').forEach((dots, idx) => {
  dots.onclick = () => {
    moveIdx = idx    
    imgIndx(moveIdx)
    dots.classList.add('selected')
  }
})

// Click Events
prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

function prevSlide(){
  moveIdx = (moveIdx > 0) ? moveIdx - 1 : moveIdx  
  removePrev()
  imgIndx(moveIdx)
  indicators(moveIdx)    
}

function nextSlide(){        
  moveIdx = (moveIdx < galLength) ? moveIdx + 1 : galLength
  removeNext()
  imgIndx(moveIdx)  
  indicators(moveIdx)
}

function removePrev(){  
  // Remove Button if reached limit
  moveIdx <= 0 ? prev.style.display = 'none' : null
  next.style.display = 'flex'
}

function removeNext(){
  // Remove Button if reached limit
  moveIdx >= galLength ? next.style.display = 'none' : null
  prev.style.display = 'flex'               
}

function indicators(i){
  indicate.children[i].classList.add('selected')
}

// Keyboard Ctrls
window.onkeydown = e => {
  if(e.key === 'ArrowRight'){
    nextSlide()
  } else if (e.key === 'ArrowLeft'){
    prevSlide()
  }
}

// open images by click
gallery.forEach((img, i) => {
  img.onclick = () => {
    display(modalWrap, 'show')
    imgIndx(moveIdx = i)
    indicators(i)
  }
})


