import { iconFunction } from "./javascript_source/hamberger.js";









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
window.scrollTo({top: 1214, left : 0, behavior : 'smooth'});
};

window.addEventListener('wheel', (e)=>{

  if(e.deltaY === 100){
  boxEvent(centerBox);
  scrollEvent(landingPage);
  
  // window.scrollTo({top: 1214, left : 0, behavior : 'smooth'});
  }
});




// let test = setInterval(function(){
//   if(i < maxPosition){
//   i ++;
// window.scrollY[i];

// }if(i === 1080){
//   clearInterval(test);
// }
// console.log(i);
// },0.001)