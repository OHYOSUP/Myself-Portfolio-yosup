
const work =document.getElementById('work');

const title = document .getElementById('title');

export const footerTotheBottom = function downscroll(eventType,elems){
  main.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY > 0){
    elems.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 