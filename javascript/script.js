const hamberger = document.getElementById('hamberger');
const icon = document.getElementById('icon');
const lines = document.querySelectorAll('#icon>div');
const list = document.getElementById('list');
const items = document.querySelectorAll('#list>li');


// console.log(lines);

const line = Array.from(lines);

// console.log(Array.isArray(line));




list.style.display = 'none';




icon.addEventListener('mouseover', ()=>{
line[0].style.backgroundColor = 'red'
line[1].style.backgroundColor = 'red'
line[2].style.backgroundColor = 'red'
});


// function iconEvent(transition){
//   icon.addEventListener('mouseover', ()=>{
//     line[0].style.backgroundColor = 'red'
//     line[1].style.backgroundColor = 'red'
//     line[2].style.backgroundColor = 'red'
//     });
//     icon.addEventListener('click', ()=>{
//       line[0].style.position = 'absolute';
//       line[0].style.top = '4vh';
//       line[0].style.transition = transition;
//       line[1].style.position = 'absolute';
//       line[1].style.top = '4vh';
//       line[1].style.transition = transition;
//       line[2].style.position = 'absolute';
//       line[2].style.top = '4vh';
//       line[2].style.transition = transition;

//       list.style.display = 'flex';
//     });
// }

function iconEvent(){
  icon.addEventListener('mouseover', ()=>{
    line.forEach(elems=>{
      elems.style.backgroundColor = 'red';
    })
    });
    icon.addEventListener('click', ()=>{
      line.forEach(function(elems){
        elems.style.position = 'absolute';
        elems.style.top = '4vh';
        elems.style.transition = '0.5s';
      });

      list.style.display = 'flex';
    });
}



iconEvent(icon)