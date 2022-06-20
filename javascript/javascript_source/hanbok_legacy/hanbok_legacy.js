const hanbokLegacy = document.getElementById('hanbok_legacy');

const container = hanbokLegacy.children[0];
const images = document.querySelectorAll('.legacyImage');


const btnContainer = document.querySelector('.buttonContainer');
const next = document.getElementById('rightBtn');
const prev = document.getElementById('leftBtn');

let slideWidht = 400;
let slideMargin = 100;


let countIndex = 0;
let slideCount = images.length;

console.log(hanbokLegacy);
console.log(btnContainer);

function moveSlide(num){
  btnContainer.style.left = -num*400 + 'px';
  countIndex = num;
}


export const prevBtn = prev.addEventListener('click', ()=>{
if(countIndex !== 0){
  moveSlide((countIndex -1));
}
});

export const nextBtn = next.addEventListener('click', ()=>{
  if(countIndex !== slideCount -1){
    moveSlide((countIndex + 1));
  }
  });
