// music when timer hits 0
// study links
// once 25 minutes is hit block all socials - /facebook/twitter/instagram/netflix
// stop button

let min = 25
let ten = 0
let seconds = 0

let time = document.querySelector('.container')
time.textContent = min + ":" + ten + seconds 

let twofiveactive;
let fiveactive;

function starttwentyfive() {
    twofiveactive = true;
    fiveactive = false
    min = 25
    ten = 0
    seconds = 0
    if (twofiveactive) {
      const foo = setInterval(function() {    
        if (ten === 0 && seconds === 0 ){
            ten = 5
            min = min - 1
            seconds = 9;
        }
        else if (seconds === 0){
            ten = ten - 1
            seconds = 9
        } 
        else {
            seconds = seconds - 1
        }
        time.textContent = min + ":" + ten + seconds 
        if (min === 0 && ten === 0 && seconds === 0){
            min = 0;
            ten = 0;
            seconds = 0;
            time.textContent = min + ":" + ten + seconds 
            clearInterval(foo);
        }
        if (!twofiveactive) {
            clearInterval(foo)
        }
      
      }, 1000)
    }
}

function startWith5() {
  twofiveactive = false;
  fiveactive = true;
   min = 5
   ten = 0
   seconds = 0
  if (fiveactive) {
    const foo = setInterval(function() {
      if (ten === 0 && seconds === 0) {
          ten = 5
          min = min - 1
          seconds = 9;
      } else if (seconds === 0) {
          ten = ten - 1
          seconds = 9
      } else {
          seconds = seconds - 1
      }
      time.textContent = min + ":" + ten + seconds 
      if (min === 0 && ten === 0 && seconds === 0){
          min = 0;
          ten = 0;
          seconds = 0;
          time.textContent = min + ":" + ten + seconds 
          clearInterval(foo);
      }
      if (!fiveactive) clearInterval(foo)
    }, 1000)
  }
}

function stop() {
  twofiveactive = false;
  fiveactive = false;
}

function resume() {
  twofiveactive = true;
  fiveactive = true;
}

document.getElementById('start-25').addEventListener('click', starttwentyfive);
document.getElementById('break-5').addEventListener('click', startWith5);
document.getElementById('stop').addEventListener('click', stop);
