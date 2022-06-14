
const landingPage = document.getElementById('landing')
const backdropBox = document.getElementById('backdropBox');
const textBox = document.getElementById('textbox');
const img = document.querySelector('.img');
// console.log(img);

img.style.width = '150vw';
img.style.height = '150vh';
img.style.position = 'absolute'


backdropBox.style.position = 'absolute';
// console.log(backdropBox);


// function totheright (elems){
//   if(i === 50){
//     let loopTwo = setInterval(()=> {
//       i--;
//       elems.style.left = i + 'vw'
//       if(i === 0){
//         clearInterval(loopTwo);
//       }
//     });
//   }
// }


// function totheLeft (elems){
  
//     let loop = setInterval(() => {
//       i++;
//       console.log(i);
//       elems.style.left = -i + 'vw'; 

//       if( i === 50){
//         clearInterval(loop);

//         let loopTwo = setInterval(() => {
//           i--;
//           elems.style.left = -i + 'vw'; 
//           console.log(i);

//           if(i === 0) {
//             clearInterval(loopTwo);

//             setInterval(loop);
//             console.log(i);
//           }
//         },40)
//       }
//     }, 40);
// }

let i = 0;


function totheLeft (){

i++;

  requestAnimationFrame(totheLeft);
  img.style.transform = `translateX(${-i}px)`;

  // console.log(i);

  if(i >= 689){
    img.style.opacity = 0;
    img.style.transition = '1s';
    // console.log(i);

  }
}

export const scrollEvent = totheLeft();



// export const scrollEvent = landingPage.addEventListener('wheel', (e)=>{
  // e.preventDefault();
  // window.scrollBy({top : 0, left : 500, behavior : 'smooth'});
  // div.scrollIntoView();
  // totheLeft(img);
// console.log(window.pageXOffset);
// });