const landing = document.getElementById('landing');
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textBox');




landing.style.width = '150vw';
landing.style.height = '200vh';
landing.style.backgroundColor = '#666';
landing.style.display = 'flex';
landing.style.justifyContent = 'center';
// landing.style.alignItems = 'center';

backdropBox.style.width = '150vw';
backdropBox.style.height = '80vh';
backdropBox.style.backgroundColor = '#222';
backdropBox.style.opacity = 0;


textBox.style.width = '50vw';
textBox.style.height = '50vh';
textBox.style.fontSize = '3rem';
textBox.style.position = 'absolute';
textBox.style.backgroundColor = '#ccc';



function moveRight(elems){
  scrollBy({left : 1920, top : 0, behavior : 'smooth'});
  elems.style.opacity = 0.2;
  elems.style.transition = '0.5s';
}

function moveLeft(elems){
  scrollBy({left : -1920, top : 0, behavior : 'smooth'});
  elems.style.opacity = 0;
  elems.style.transition = '0.5s';
}



let isStatus = false;
let currentX = window.scrollX;


function eventMove(e) {
  e.preventDefault();
  if(e.deltaY === 100){
    moveRight(backdropBox);
    isStatus = true;

    console.log(isStatus);
    removeEventListener(eventMove);
    // console.log(currentX);

  }
  if(e.deltaY === -100){
    moveLeft(backdropBox);
    isStatus = false;

    // removeEventListener(eventMove);

    console.log(isStatus);
    // console.log(backdropBox.scrollWidth);
    // console.log(currentX);
  }
}



landing.addEventListener('wheel', eventMove);
  




