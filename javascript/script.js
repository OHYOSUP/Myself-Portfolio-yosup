
import { lightEffect } from "./javascript_source/landingPage/nightPinLight.js";
import { colorChange } from "./javascript_source/landingPage/nightPinLight.js";
const pinLight = document.getElementById('box');

colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove')

import { addElem } from "./javascript_source/mainJavascript/main.js";
const root = document.getElementById('root');
const main = document.getElementById('main');


addElem('scroll', main);
import { scrollMoving } from "./javascript_source/workJavascipt/filgrimage_pageTwotest.js";




import { scrollEvent, totheBottom } from "./javascript_source/landingPage/scrollEvent.js";
totheBottom('wheel', main);
// landing페이지 다운스크롤이벤트
import { totheUp } from "./javascript_source/mainJavascript/mainpage-upScroll.js";
totheUp('wheel', main, landing);
// main페이지 업스크롤 이벤트

import { mainTotheBottom } from "./javascript_source/mainJavascript/mainPageScroll.js";
const footer = document.getElementById('footer');
mainTotheBottom('wheel',footer)



import {lightItUp, lightItUp_bottom} from './javascript_source/mainJavascript/mainpage-lightGlow.js'

lightItUp();
setTimeout(lightItUp_bottom,300);

import { fade } from "./javascript_source/workJavascipt/filgrimage_pageOneText-anim.js";


import { navEvent, navEventSecond} from "./javascript_source/workJavascipt/filgrimage_pageTwotest-navigation.js";
navEvent('mouseover')
navEventSecond('mouseout')





