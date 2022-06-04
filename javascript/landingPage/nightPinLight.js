const root = document.getElementById('root');
const pinLight= document.getElementById('box');

root.style.width = '100vw';
root.style.height = '200vh';



root.style.backgroundColor = '#ccc';
root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
pinLight.style.width = '25vw';
pinLight.style.height = '25vw';
pinLight.style.borderRadius = '50%';
pinLight.style.backgroundColor = 'rgba(142,142,142,0.2)';
pinLight.style.position = 'absolute';
pinLight.style.left = 0;
pinLight.style.top = 0;
pinLight.style.transform = 'translate(-50%, -50%)';




export const light = window.addEventListener('mousemove', (event)=>{
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  console.log(mouseX);

  pinLight.style.left = innerWidth - mouseX + 'px';
  pinLight.style.top = innerHeight - mouseY + 'px';
});