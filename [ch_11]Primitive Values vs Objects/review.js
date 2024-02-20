// 10강 객체 리터럴
//ES5
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); //{x:1, y:2}

//ES6
let x = 1,
  y = 2;

const obj = { x, y: x }; // 프로퍼티 축약표현(여기서 y에 x값을 넣고 싶은경우)

console.log(obj); //{x:1, y:1}
