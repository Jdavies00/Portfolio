import React from 'react'

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = " Ullamco nulla veniam adipisicing adipisicing."

let idx = 1
let speed = 300  / speedEl.value
textEl.innerText = text.slice(0, idx)

function AutoText() {
  textEl.innerText = text.slice(0, idx)
  
  idx++
  if (idx > text.length) {
    idx = 1
  }
  setTimeout(AutoText, speed)
  
  speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
  return (
    <>
      <h1 id="text">Starting...</h1>


      <label for="speed">Speed:1</label>
      <input type="number" name="speed" id="speed" value="1" min="1" max="10" step="1" />

    </>
  )
}

export default AutoText
