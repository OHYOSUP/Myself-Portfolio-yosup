// const root = document.getElementById('root');
// const pinLight= document.getElementById('box');

// root.style.width = '100vw';
// root.style.height = '200vh';



// // root.style.backgroundColor = '#ccc';
// root.style.display = 'flex';
// root.style.justifyContent = 'center';
// root.style.alignItems = 'center';
// pinLight.style.width = '25vw';
// pinLight.style.height = '25vw';
// pinLight.style.borderRadius = '50%';
// pinLight.style.backgroundImage = 'linear-gradient(90deg,red, yello40%, blue)';
// pinLight.style.position = 'absolute';
// pinLight.style.left = 0;
// pinLight.style.top = 0;
// pinLight.style.transform = 'translate(-50%, -50%)';




// export const light = window.addEventListener('mousemove', (event)=>{
//   let mouseX = event.clientX;
//   let mouseY = event.clientY;
//   console.log(mouseX);

//   pinLight.style.left = innerWidth - mouseX + 'px';
//   pinLight.style.top = innerHeight - mouseY + 'px';
// });

const root = document.getElementById('root');
const box= document.getElementById('box');

// root.style.width = '100vw';
// root.style.height = '200vh';
// // root.style.backgroundColor = '#ccc';
// root.style.display = 'flex';
// root.style.justifyContent = 'center';
// root.style.alignItems = 'center';
// box.style.width = '25vw';
// box.style.height = '25vw';
// box.style.borderRadius = '50%';
// // box.style.backgroundColor = 'yellow';
// // box.style.mixBlendMode - 'transparent';
// box.style.position = 'absolute';
// box.style.left = 0;
// box.style.top = 0;
// box.style.transform = 'translate(-50%, -50%)';






export const colorChange = (colorA, colorB, colorC, colorD, elems) => {

  // let colors = ["#F0DA31", "#F01886", "#F01372"];
  let colors = [colorA, colorB, colorC, colorD];

  let c1 = colors[Math.floor(Math.random()*colors.length)];
  let c2 = colors[Math.floor(Math.random()*colors.length)];

  elems.style.background = `linear-gradient(To right, ${c1}, ${c2})`;
  elems.style.width = '20vw';
  elems.style.height = '20vw';
  elems.style.borderRadius = '50%';
  elems.style.position = 'absolute';
  elems.style.left = 0;
  elems.style.top = 0;
  elems.style.transform = 'translate(-50%, -50%)';  
  elems.style.zIndex = '10';
  elems.style.opacity = '0.3';
}


// export const pinLight = window.addEventListener('mousemove', (event)=>{
//   let mouseX = event.clientX;
//   let mouseY = event.clientY;
//   // console.log(mouseX);

//   box.style.left = innerWidth - mouseX + 'px';
//   box.style.top = innerHeight - mouseY + 'px';

//   colorChange(box);
// });


export const lightEffect = (parentTarget, childrenTarget, eventType) => {
  parentTarget.addEventListener(eventType, (event) => {
    let xPos = event.clientX;
    let yPos = event.clientY;
    childrenTarget.style.left = `${parentTarget.innerWidth - xPos}px`;
    childrenTarget.style.top = `${parentTarget.innerHeight - yPos}px`;
  });
}