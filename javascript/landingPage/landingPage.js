
const landingPage = document.getElementById('landing')
const centerBox = document.getElementById('backdropBox');

console.log(window.scrollY);

// console.log(maxPosition);



let posY = landing.getBoundingClientRect().top;

let nowPosition = window.scrollY;
let nextPage = main.offsetHeight

console.log(posY);


function boxEvent (elems){
elems.style.opacity = 0;
elems.style.width = '90vw';
elems.style.transition = '0.5s';
};



function scrollEvent(elems){
window.scrollBy(0, nowPosition + nextPage);
};

export const scroll = window.addEventListener('wheel', (e)=>{

  if(e.deltaY === 100){
  boxEvent(centerBox);
  scrollEvent(landingPage);
  }
});




