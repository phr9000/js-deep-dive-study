# 13.1 스코프란?

> 스코프는 변수 그리고 함수와 깊은 관련이 있다.

```jsx
[예제 13-01]
function add(x, y) {
 // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
 // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
 console.log(x, y); //
 return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined
```

```jsx
[예제 13-02]
var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

if (true) {
    var var2 = 2; //코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3; //중첩된 코드 블록 내에서 선언한 변수 
    }
}

function foo() {
    var var4 = 4; //함수 내에서 선언한 변수
    function bar() {
      var var5 = 4; //중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1); //1
console.log(var2); //2
console.log(var3); //3
console.log(var4); //ReferenceError: var4 is not defined
console.log(var5); //ReferenceError: var4 is not defined
```

> 스코프는 식별자가 유효한 범위를 말한다.
- 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
- 두개의 x변수는 식별자 이름이 동일하지만 자신이 유효한 범위, 즉 스코프가 다른 별개의 변수다. 
```jsx
[예제 13-03]
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); 
}
foo(); // global
console.log(x); // local
```

> var 키워드로 선언한 변수의 중복 선언
- var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 
```jsx
[예제 13-04]
function foo() {
    var x = 1;
    var x = 2;
    console.log(x);
}

foo(); // 처음에 설정한 1에서 2로 변경되어 출력된다. 
// 하지만 let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언 허용하지않는다.


function bar() {
    let x = 1;
    let x = 2;
    console.log(x);
}

bar(); //SyntaxError: Identifier 'x' has already been declared
```

# 13.2 스코프의 종류
|구분|설명|스코프|변수|
|------|---|------|---|
|전역|코드의 가장 바깥 영역|전역 스코프|전역 변수|
|지역|함수 몸체 내부|지역 스코프|지역 변수|

## 13.2.2 지역과 지역 스코프
- 지역이란 `함수 몸체 내부`를 말한다.
- 지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

```jsx
var x = 'global x'; // ---- : 전역 스코프 ---- //
var y = 'global y'; // ---- : 전역 스코프 ---- //

function outer() { // ---- : 전역 스코프 ---- //
    var z = 'outers local z'; // ---- : outer의 지역 스코프 ---- //
    console.log(x); // global x 
    console.log(y); // global y
    console.log(z); // outers local z
    function innner () { // ---- : outer의 지역 스코프 ---- //
        var x = 'inners local x'; // ---- : inner의 지역 스코프 ---- //
        console.log(x); // global x
        console.log(y); // global y
        console.log(z); // outers local z
    }
    innner();
}

outer();

console.log(x); //global x
console.log(z); //ReferenceError: z is not defined
```

# 13.4 함수 레벨 스코프
> 지역은 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다. (= 함수레벨스코프)
> 이런 var의 문제점을 해결하기 위해 ES6에서 const와 let이 도입됐다. 
```jsx
var x = '13';

if(true) {
 x = '15';  
}

console.log(x); //15

```
# 13.5 렉시컬 스코프