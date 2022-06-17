
const landingPage = document.getElementById('landing')
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textbox');
const backgroundCity = document.querySelector('.img');
// const main = document.getElementById('main');


// console.log(footer);


backgroundCity.style.width = '150vw';
backgroundCity.style.height = '150vh';
backgroundCity.style.position = 'absolute'


backdropBox.style.position = 'absolute';

// console.log(backdropBox);


let i = 0;

function totheLeft (){
i++;
  requestAnimationFrame(totheLeft);
  backgroundCity.style.transform = `translateX(${-i}px)`;

  if(i >= 689){
    backgroundCity.style.opacity = 0;
    backgroundCity.style.transition = '1s';
  }
}

export const scrollEvent = totheLeft();



export const totheBottom = function downscroll(eventType,elems){
  landingPage.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 

