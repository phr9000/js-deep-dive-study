// 참고: js console 찍으려면 노드 설치하고, vscode에서 code runner 익스텐션 설치하고 vscode오른쪽 상단 플레이 버튼 누르면 터미널에서 값 확인가능쓰~

var x = 65;
var x2 = 1000001;

// 아스키 코드를 직접 출력은 어렵다.
console.log(x); //65
console.log(x2); // 1000001

// var, let, const 차이
// ****** var ********
// : 함수 레벨 스코프(function-level-scope)
// : 함수 내부에 선언된 변수만 지역변수로 한정하며, 나머지는 모두 전역변수로 간주한다.

function test() {
  var coco = "코코";
  console.log(coco);
}

console.log(coco); // coco is not defined

if (true) {
  var coco = "코코";
  console.log(coco); // 코코
}

console.log(coco); // 코코

// ****** let/const ****
// : 블록 레벨 스코프 (block-level scope)

if (true) {
  let coco = "코코";
  console.log(coco); // 코코
}

console.log(coco); //ReferenceError: coco is not defined

// 결론 : 변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우에는 let을 사용하는 것이 좋다.
// 출처: https://dev-coco.tistory.com/112 [슬기로운 개발생활:티스토리]
