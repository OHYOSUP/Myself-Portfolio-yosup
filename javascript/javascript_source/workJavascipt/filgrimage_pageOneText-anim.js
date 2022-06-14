const titleText = document.getElementById('titleText');
const strText = titleText.textContent;


titleText.style.fontSize = '10rem';
titleText.style.position = 'absolute';
titleText.style.left = '4vw'
titleText.style.top = '170vh'
titleText.style.color = '#fff';



// console.log(titleText);

titleText.textContent = "";
const splitText = strText.split("");
console.log(splitText);


for(let i = 0; i<splitText.length; i++){
  titleText.innerHTML += "<span>" + splitText[i] + "</span>";
};

console.log(titleText);
console.dir(titleText);


let char = 0;

let timer = setInterval(fade,50)



function fade(){
  const span = titleText.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}





// for(let i=0 ; i< splitText.length; i++){
//   titleText.innerHTML += "<span>" + splitText[i] + "</span>";
// }


// let char = 0;
// let timer = setInterval(onTick,50);

// function onTick(){
//   const span = titleText.querySelector('span')[char];
//   span.classList.add('fade');
//   char++
//   if(char === splitText.length){
//     complete();
//     return;
//   }
// }


// function complete(){
//   clearInterval(timer);
//   timer = null;
// }




