const landing = document.getElementById('landing');

export const totheUp = function downscroll(eventType,currentElem,targetElem){
  currentElem.addEventListener(eventType, (e)=>{
    e.preventDefault();
  if(e.deltaY < 0){
    targetElem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  });
} 
