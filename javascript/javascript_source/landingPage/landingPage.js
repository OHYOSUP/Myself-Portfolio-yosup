
const landingPage = document.getElementById('landing')
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textbox');
console.log(textBox);


function boxEvent (elems){
elems.style.opacity = 0.2;
elems.style.size = 'cover';
// elems.style.width = '90vw';
elems.style.transition = '0.5s';
};

function boxEventTwo (elems){
  elems.style.opacity = 0.0;
  // elems.style.width = '80vw';
  elems.style.size = 'cover';
  elems.style.transition = '0.5s';
  };

// console.log(landingPage.offsetHeight);

let posY = landingPage.getBoundingClientRect().top;

let nowPosition = window.scrollY;
let documentHeight = document.body.offsetHeight
let nextPage = landingPage.offsetHeight;
console.log(posY);
console.log(nextPage);





// let isStatus = true;

export const scroll = function scrollEvent(elems){
elems.addEventListener('wheel', (event)=>{
event.preventDefault();


if(event.deltaY === 100){

for(let i = 0; i < 500; i++){
  backdropBox.scrollBy({left : i, top : 0, behavior : 'smooth'});
// event.unbind('wheel', false);
  // isStatus = false;
  // console.log(event);
  console.log(elems.left);
}

if(event.deltaY === -100){
  i--;
  console.log(i);
  
}
}

});

};




function scrollEventUp(elems){
  elems.scrollBy({left : -1920, top : -(documentHeight+posY), behavior : 'smooth'});
  };




// export const scroll = landingPage.addEventListener('wheel', (e)=>{
// e.preventDefault();

// let isStatus = false;

// if(e.deltaY === 100){
//   boxEvent(backdropBox);
//   scrollEvent(backdropBox);
//   isStatus = true;
//   console.log(backdropBox);
//   }
//   if(e.deltaY === -100){
//     boxEventTwo(backdropBox);
//     scrollEventUp(window);
//     isStatus = false;
//   }
// });

