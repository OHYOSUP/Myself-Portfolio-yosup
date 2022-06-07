const main = document.getElementById('main');
// const lights = document.querySelectorAll('#main>div');
const one = document.getElementById('lightGroupOne')







// console.log(root.offsetHeight);
// console.log(root.clientHeight);
// console.log(root.scrollHeight);

// let rootHeight = root.offsetHeight;
// let landingPageHeight = landingPage.offsetHeight;


console.log(window.pageYOffset);


export const addElem = (eventType, parentTarget) => window.addEventListener(eventType, (event)=>{

  
  
    console.log(event.scrollY);
    const adjustmentBox = document.createElement('div');
    parentTarget.appendChild(adjustmentBox);

    // console.log(adjustmentBox);
    adjustmentBox.style.width = '80vw';
    adjustmentBox.style.height = '80vh';
    adjustmentBox.style.backgroundColor = '#ccc';
    adjustmentBox.style.position = 'absolute';
    adjustmentBox.style.opacity = '0.2';
  },{once: true});


  



