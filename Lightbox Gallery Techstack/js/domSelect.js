// selectors
function qs(qs) {
  return document.querySelector(qs)
}

function qa(qa) {
  return document.querySelectorAll(qa)
}

function crEl(el) {
  return document.createElement(el)
}

function crTxt(txt) {
  return document.createTextNode(txt)
}

function display(el, val){
  if(val === 'show'){
    el.style.display = 'block'
  } else if(val === 'hide'){
    el.style.display = 'none'
  }
}
