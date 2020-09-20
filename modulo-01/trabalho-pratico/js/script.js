window.addEventListener('load', start);

let rangeRed = null,
  rangeGreen = null,
  rangeBlue = null,
  displayRed = null,
  displayGreen = null,
  displayBlue = null;

function start() {
  function addEvents() {
    function mappedElements() {
      rangeRed = document.querySelector('#range-red');
      rangeGreen = document.querySelector('#range-green');
      rangeBlue = document.querySelector('#range-blue');
      displayRed = document.querySelector('#display-red');
      displayGreen = document.querySelector('#display-green');
      displayBlue = document.querySelector('#display-blue');
    }
    mappedElements();
    rangeRed.addEventListener('input', sliderChangeColor);
    rangeGreen.addEventListener('input', sliderChangeColor);
    rangeBlue.addEventListener('input', sliderChangeColor);
  }

  function sliderChangeColor() {
    function displayChange() {
      displayRed.value = rangeRed.value;
      displayGreen.value = rangeGreen.value;
      displayBlue.value = rangeBlue.value;
    }
    displayChange();
    const color = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
    const boxColor = document.querySelector('.container');
    boxColor.style.backgroundColor = color;
  }
  addEvents();
}