const lightGroup = document.querySelectorAll('#lightGroup');
const lightGroup_bottom = document.querySelectorAll('#lightGroup_bottom');
//  console.log(lightGroup);
// export const b = console.log(lightGroup_bottom);


const upStair = Array.from(lightGroup);

// console.log(Array.isArray(upStair));


// console.log(upStair[0].children);

const bulbs = upStair[0].children;
export const a = console.log(bulbs);

const aLight = bulbs[0].children[0];

console.log(aLight.style);

// aLight.style.boxShadow = `0 0 40px 20px #fff,
// 0 0 70px 40px rgba($color: #FFFD17, $alpha: 0.5),
// 0 0 100px 60px rgba($color: #FF9C0A, $alpha: 0.5)`;



// for(let i = 0; i < upStair.length; i++){
// upStair[i].style.boxShadow = '0 0 40 rgba($color: #FFFD17, $alpha: 0.3)'
// }








