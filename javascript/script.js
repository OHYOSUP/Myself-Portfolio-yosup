import { iconFunction } from "./javascript_source/hambergerJavascript/hamberger.js";
import { scroll } from "./javascript_source/landingPage/landingPage.js";
// import { imageEvent } from "./javascript_source/aboutJavascript/about.js";


// import { boxShadow } from "./javascript_source/landingPage/nightPinLight.js";

import { lightEffect } from "./javascript_source/landingPage/nightPinLight.js";
import { colorChange } from "./javascript_source/landingPage/nightPinLight.js";
const pinLight = document.getElementById('box');

colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove')

import { addElem } from "./javascript_source/mainJavascript/main.js";
const root = document.getElementById('root');
const main = document.getElementById('main');
addElem('scroll', main);
// const textTwo = document.getElementsByClassName('textTwo');
// import { imageEvent } from "./javascript_source/aboutJavascript/about.js";





