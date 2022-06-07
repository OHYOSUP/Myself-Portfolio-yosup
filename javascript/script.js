import { iconFunction } from "./javascript_source/hambergerJavascript/hamberger.js";
import { scroll } from "./javascript_source/landingPage/landingPage.js";

<<<<<<< HEAD
import { lightEffect } from "./javascript_source/landingPage/nightPinLight.js";
import { colorChange } from "./javascript_source/landingPage/nightPinLight.js";
import { addElem } from "./javascript_source/mainJavascript/main.js";
const pinLight = document.getElementById('box');
=======
// import { light } from "./landingPage/nightPinLight.js";


/* 
  * module 특성에 관한 문제
  * 1. light 라는 이벤트를 export 하여 다른 문서에서도 재활용 하고자 한다면 '함수화(캡슐화)'를 시킬 필요가 있습니다.
  * 2. 해당 light 제어는 '대상 한개만 제어하도록 만들어진 리터럴(직접작성한 값)' 이기때문에 1회용 코드입니다.
  * 3. 재활용하고자 한다면 타겟을 매개변수로 하는등 몇가지 가공이 필요합니다.  
  * 4. -> nightPinLight.js 파일 확인 할 것
*/
>>>>>>> 4869df2279381e8a8a3c5f1d4a90f9f26214c4cb


  
colorChange('#F0DA31', '#F01886', '#fff', '#F56C00', pinLight);
lightEffect(window, pinLight, 'mousemove')

import { lightEffect } from "./landingPage/nightPinLight.js";

<<<<<<< HEAD
const root = document.getElementById('root');
const main = document.getElementById('main');

addElem('scroll', main);

// console.log(adjustmentBox);

=======
const pinLight = document.getElementById('box');
// ! 해당파일 script.js 파일에 물려놓는 문서에 #box 요소가 있지 않다면 해당 행에서 에러발생 예정



lightEffect(window, pinLight, "mousemove");

// ? 함수의 선언은 특정 모듈파일에서 따로 선언하고, 함수의 호출은 해당 파일에서 호출한 것을 눈여겨 볼 것
// ? import, export 기능이 css와 달리 매우 세분화 되어있기 때문에 어딘가 못읽어왔다면 놓친부분을 넘겨집고 코딩했다는 것이기때문에 주의할 필요가 있습니다.
// ? 디자인 먼저 끝내놓고 제어하는 힘들고 불편한 것처럼 '코드를 다 작성해놓고' 에러를 감지하는 것은 위에 조치를 취한 것처럼 코드 전체를 뜯어내야 하는 일이 발생합니다.
// * 그래서 작업순서를 지키는 일이 귀찮아보여도 매우 중요합니다. 일을 두번 안하게 하거든요!

// todo : 1. 간단한 실험(위와같은 시도)을 통해 구현하고자 하는 제어를 테스트해볼 것
// todo : 2. 파일간 연결 상태를 테스트 할것 export, import 등등
// todo : 3. 모듈화 시켜 재사용을 하고자 한다면 코드를 분해하여 재활용할 수 있는 코드로 리팩토링 할 것 -> 사실상 본격적인 코딩 작업 단계
// todo : 4. 선언, 호출을 체계화 시킬 것 (호출은 import된 파일에서 하는 과정)

// * 개괄 : 테스트용 코드를 그대로 모듈화시켜 적용하려니 생기는 문제
// * 개괄 : 구현하고자 하는 작업전에 사전작업을 충분히 진행하세요! :)
// * 개괄 : 제가 작성한 코드는 호출을 어디어디에서 사용하실 예정인지 불분명하여 에러인 상태로 저장합니다. 제가 바꾸어놓은 구조를 확인하고 정리해보시기바랍니다! 
>>>>>>> 4869df2279381e8a8a3c5f1d4a90f9f26214c4cb
