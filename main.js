
let colourName
let hexRef

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
   hexRef = hex;
    await fetch(`http://www.thecolorapi.com/id?hex=${hex}`)
    .then(res => res.json())
    .then(res => colourName = res.name.value)
    .then(console.log(colourName))
    .then(console.log(hexRef))
}

function setRandomColor() {
  console.log(hexRef)
  console.log(colourName)
  $("#colorpad").css("background-color", "#" + hexRef);
  document.querySelector('#colour-name').innerHTML = colourName
}