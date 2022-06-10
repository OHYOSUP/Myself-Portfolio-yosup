const root = document.getElementById('root');
const section = document.getElementsByTagName('section');
const div = document.querySelector('#root>section>div');
console.log(div);

section[0].style.position = 'absolute';
console.log(section[0]);

let i = 0;



function totheLeft (elems){
  
    let loop = setInterval(() => {
      i++;
      // console.log(i);
      elems[0].style.left = -i + 'vw'; 
      if( i > 90){
        clearInterval(loop);
      }
    }, 50);
  
}


root.addEventListener('wheel', (e)=>{
  e.preventDefault();
  // window.scrollBy({top : 0, left : 500, behavior : 'smooth'});
  // div.scrollIntoView();
  totheLeft(section);

  console.log(section.style);
// console.log(window.pageXOffset);
});
