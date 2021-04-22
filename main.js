
let colourName
let hexRef

setRandomColor()

 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }

    getColorName(color)
    return color;
  }

async function getColorName (hex) {
  await fetch(`http://www.thecolorapi.com/id?hex=${hex}`)
    .then(res => res.json())
    .then(res => {
      colourName = res.name.value
      hexRef = res.hex.clean
    })
}

function setRandomColor() {
  getRandomColor()
  document.querySelector('#colorpad').style.backgroundColor = `#${hexRef}`
  document.querySelector('#colour-name').innerHTML = colourName ? colourName : '&nbsp;'
}