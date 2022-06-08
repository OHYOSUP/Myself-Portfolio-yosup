
const imageBox = document.getElementsByClassName('imageBox');
const textTwo = document.getElementsByClassName('textTwo');
const textThree = document.getElementsByClassName('textThree');
const textFour = document.getElementsByClassName('textFour');
const textFive = document.getElementsByClassName('textFive');
const screen = document.getElementById('screen');

console.log(textThree);
// export const test = (a, b) => {
//   a.addEventListener(b, () => {
//     console.log("hello");
//   })
// }

// test(textTwo[0], "click");



export const imageEvent = (targetElem, eventType) => {
  textTwo[0].addEventListener(eventType, ()=>{
    targetElem.style.backgroundImage = 'URL(./image/closeUp.svg)';
    targetElem.style.backgroundSize = 'cover';
    targetElem.style.transition = '0.5s';
  });
  textThree[0].addEventListener(eventType, ()=>{
    targetElem.style.backgroundImage = 'URL(./image/cigarettes.svg)';
    targetElem.style.backgroundSize = 'cover';
    targetElem.style.transition = '0.5s';
  });
  textFour[0].addEventListener(eventType, ()=>{
    targetElem.style.backgroundImage = 'URL(./image/storyOfHyemi.svg)';
    targetElem.style.backgroundSize = 'cover';
    targetElem.style.transition = '0.5s';
    // targetElem.style.transform = 'rotate(90deg)'
  });
  textFive[0].addEventListener(eventType, ()=>{
    targetElem.style.backgroundImage = 'URL(./image/memoir.svg)';
    targetElem.style.backgroundSize = 'cover';
    targetElem.style.transition = '0.5s';
  });
}

imageEvent(imageBox[0], 'mouseover');



