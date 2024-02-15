// var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

// if (true) {
//     var var2 = 2; //코드 블록 내에서 선언한 변수
//     if (true) {
//         var var3 = 3; //중첩된 코드 블록 내에서 선언한 변수 
//     }
// }

// function foo() {
//     var var4 = 4; //함수 내에서 선언한 변수
//     function bar() {
//       var var5 = 5; //중첩된 함수 내에서 선언한 변수
//     }
// }

// console.log(var1); //1
// console.log(var2); //2
// console.log(var3); //3
// console.log(var4); //ReferenceError: var4 is not defined
// console.log(var5); //ReferenceError: var4 is not defined

// var x = 'global';

// function foo() {
//     var x = 'local';
//     console.log(x); 
// }
// foo();
// console.log(x);


// function foo() {
//     var x = 1;
//     var x = 2;
//     console.log(x);
// }

// foo(); // 처음에 설정한 1에서 2로 변경되어 출력된다. 

// function bar() {
//     let x = 1;
//     let x = 2;
//     console.log(x); // SyntaxError: Identifier 'x' has already been declared
// }

// bar(); 

// var x = 'global x'; // ---- : 전역 스코프 ---- //
// var y = 'global y'; // ---- : 전역 스코프 ---- //

// function outer() { // ---- : 전역 스코프 ---- //
//     var z = 'outers local z'; // ---- : outer의 지역 스코프 ---- //
//     console.log(x); // global x 
//     console.log(y); // global y
//     console.log(z); // outers local z
//     function innner () { // ---- : outer의 지역 스코프 ---- //
//         var x = 'inners local x'; // ---- : inner의 지역 스코프 ---- //
//         console.log(x); // global x
//         console.log(y); // global y
//         console.log(z); // outers local z
//     }
//     innner();
// }

// outer();

// console.log(x); //global x
// console.log(z); //ReferenceError: z is not defined
