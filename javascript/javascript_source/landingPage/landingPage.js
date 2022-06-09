
const landingPage = document.getElementById('landing')
const centerBox = document.getElementById('backdropBox');




// console.log(maxPosition);



let posY = landingPage.getBoundingClientRect().top;

let nowPosition = window.scrollY;
let documentHeight = document.body.offsetHeight


// console.log(nowPosition);
// 현재 스크롤의 위치

// console.log(posY);
// 현재 스크롤의 위치(음수값)
// console.log(documentHeight);
// 문서 전체의 높이



function boxEvent (elems){
elems.style.opacity = 0;
elems.style.width = '90vw';
elems.style.transition = '0.5s';

};

function boxEventTwo (elems){
  elems.style.opacity = 0.2;
  elems.style.width = '80vw';
  elems.style.transition = '0.5s';
  

  };

// console.log(landingPage.offsetHeight);
let nextPage = landingPage.offsetHeight;


function scrollEvent(){
window.scrollBy({left : 0, top : nextPage, behavior : 'smooth'});
};

function scrollEventUp(){
  window.scrollBy({left : 0, top : -(documentHeight+posY), behavior : 'smooth'});
  };


export const scroll = landingPage.addEventListener('wheel', (e)=>{

  let isStatus = false;
  if(e.deltaY === 100){
  boxEvent(centerBox);
  scrollEvent(landingPage);
  isStatus = true;
  }
  if(e.deltaY === -100){
    boxEventTwo(centerBox);
    scrollEventUp(centerBox);
    isStatus = false;
  }
});

