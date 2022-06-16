const lightGroup = document.querySelectorAll('#lightGroup');
const lightGroup_bottom = document.querySelectorAll('#lightGroup_bottom');
const main = document.getElementById('main');
console.log(main);
// export const b = console.log(lightGroup_bottom);

// lightGroup.style.opacity = 0;
const upStair = Array.from(lightGroup);
const downStair = Array.from(lightGroup_bottom);

// console.log(upStair.length);


let i = -1;



// export const lightItUp = main.onload = 

export const lightItUp = main.onload = function glowing (){
  let timer = setInterval(glowing,100);
  i++;
  if(i < upStair.length){
  upStair[i].classList.add('test');
  console.log(i);
  if(i >= upStair.length){
    clearInterval(timer);
  }
  }
}


let d = -1;

console.log(window.pageYOffset);
let currnetYpos = window.pageYOffset;

export const lightItUp_bottom = main.onload = function glowing_bottom (){
    let timer = setInterval(glowing_bottom,100);
    d++;


    if(d < downStair.length){
    downStair[d].classList.add('test');
    console.log(d);
    if(d >= downStair.length){
      clearInterval(timer);
    }
    
    }
  }

    
      
// export const lightItUp = main.onload = function bulbEvent (elem){
//   upStair.forEach(function(){
//     for(let i = 0; i < upStair.length; i++){
//       setInterval(function(){
//       // elem.style.opacity = 0;
//         i++;
//         // console.log(i);
//         upStair[i].classList.add('test');
//       },1000);
//       }
//   })
//   }
// let timer = setInterval(lightItUp(),1000);
// console.log(timer);
// lightItUp();
  



// console.log(Array.isArray(upStair));
// console.log(upStair[0]);
// 위에 한 줄
// const bulbsTwo = upStair[1].children;



// Array를 foreach로 돌려서 배열로 만든다음
// 그배열을 이벤트에 넣어서 classList로 돌리면?



// const newarr = Array.from({bulbsOne, bulbsTwo});
// console.log(Array.isArray(newarr));

// console.log(newarr);

// const aLight = bulbsOne[0].children[0];
// console.log(aLight);
// aLight = 전구 하나


// console.log(bulbsOne);
// console.log(bulbsTwo);



// export const lightItUpSecond = setInterval(function(){
//   i++;
  
//   downStair[i].classList.add('test2');
//   if(i === upStair.length){
  
//   upStair[i].classList.remove('test');
//     clearInterval(lightItUp);
//   }
//   console.log(i);
//   },100);
// export const lightItUp_bottom = setInterval(function(){
//   i++;

//   downStair[i].classList.add('test2');
//   if(i === downStair.length){
//     clearInterval(timer)
//   }
//   console.log(i);
//   },100);
  





// console.log(timer);

// export const lightItUpSecond = main.onload = function bulbEventSecond (elem){
//   for(let i = 0; i < upStair.length; i++){
//     downStair.forEach(function(){
//       // elem.style.opacity = 0;
//       downStair[i].classList.add('test2');
//     });
//   }
//   }
//   lightItUpSecond();

// aLight.style.boxShadow = `0 0 40px 20px #fff,
// 0 0 70px 40px rgba($color: #FFFD17, $alpha: 0.5),
// 0 0 100px 60px rgba($color: #FF9C0A, $alpha: 0.5)`;



// for(let i = 0; i < upStair.length; i++){
// upStair[i].style.boxShadow = '0 0 40 rgba($color: #FFFD17, $alpha: 0.3)'
// }








