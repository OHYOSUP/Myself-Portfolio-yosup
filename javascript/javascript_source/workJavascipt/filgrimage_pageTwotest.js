const work = document.getElementById('work');
const rightPage = document.getElementById('rightPage');
const filgrimage_pageOne = document.getElementById('filgrimage_pageOne');
const filgrimage_pageTwo = document.getElementById('filgrimage_pageTwo');

const pageTwo = document.getElementById('pageTwo');

jhjh


let currentY = window.scrollY;
// 984

function scrollMoving (pageName){
  pageName.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0){
      window.scrollBy({top: 984, left : 0, behavior : 'smooth'})
    }
    if(e.deltaY < 0){
      window.scrollBy({top: -984, left : 0, behavior : 'smooth'})
    }

  });
}




scrollMoving(work);
scrollMoving(filgrimage_pageOne);
// rightPageScoll(rightPage,'scroll');


