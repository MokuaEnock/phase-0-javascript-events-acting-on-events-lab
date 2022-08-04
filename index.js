function   moveDodgerLeft(){
    let dodger = document.getElementById('dodger')
    dodger.style.left = "0px"
    dodger.style.backgroundColor = "#FF69B4";
}


let leftNumbers = dodger.style.left.replace('px', '');
let left = parseInt(leftNumbers, 10);
function moveDodgerRight() {
    if ( left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }