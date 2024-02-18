# 15.1 var 키워드로 선언한 변수의 문제점

## 15.1.1 변수 중복 선언 허용

- 먼저 선언된 변수 값이 변경되는 부작용이 발생

```jsx
[예제 15-01]
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x); //100
console.log(y); //1
//
```

## 15.1.2 함수 레벨 스코프

- var 키워드로 선언한 변수는 오로지 `함수`의 코드 블록만을 지역 스코프로 인정한다.
- if, for문 모두 전역 변수로 적용된다.

```jsx
[예제 15-01]
var i = 100;

if(true) {
  var x = 10;
}

console.log(x); // 10
```

## 15.1.3 변수 호이스팅

- 변수 호이스팅에 의해 var 키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다.

```jsx
[예제 15-04]
// 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.(1. 선언 단계)
// 변수 foo는 undefined로 초기화된다.(2.초기화 단계)
console.log(foo); // undefined

// 변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); // 123
// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;
```

# 15.2 let 키워드

## 15.2.1 변수 중복 선언 금지

- 이름이 같은 변수를 중복 선언하면 문법 에러가 발생한다.

```jsx
[예제 15-05]
var foo = 123;
var foo = 456; // 같은 스코프내에서 중복 선언 허용

let bar = 123;
let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
```

## 15.2.2 블록 레벨 스코프

> let 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, white 문, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

```jsx
[예제 15-06]
let foo = 1; // 전역 변수

{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined
```

## 15.2.3 변수 호이스팅

- var와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
- let 은 선언단계 > 초기화단계(undefined) > 할당단계 로 총 3단계를 거친다.

```jsx
[예제 15-07]
console.log(foo); // ReferenceError: foo is not defined (my think! undefined나올 줄 알았는데 선언단계부터 출력 됨 )
let foo;

console.log(foo); // undefined (변수 선언문에서 초기화 단계가 실행된다.)
foo = 1;
```

## 15.2.4 전역 객체와 let

- let 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드. 23장 실행컨텍스트에서 살펴볼 예정) 내에 존재하게 된다.

```jsx
[예제 15-11]

// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x); // 1
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y); // 2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo); // f foo() {}
console.log(foo); // f foo() {}
```

```jsx
[예제 15-02]
let x = 1;

// let,const 키워드로 선언한 전역 변수는 전역 객체 window 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); //1
```

# 15.3 const 키워드

> let과 다른점 설명

## 15.3.1 선언과 초기화

- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

```jsx
[예제 15-13]
const foo = 1;
// 그렇지 않음 문법적 에러 발생
const foo; // SyntaxError: Missing initianlizer in const declaration
```

## 15.3.2 재할당 금지

- var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지 된다

```jsx
[예제 15-16]
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```

## 15.3.3 상수

> 상수는 재할당이 금지된 변수를 말한다.

- 예제에서 세율이 변경되면 상수만 변경하면 되기 때문에 유지보수성에 대폭 향상 된다.

```jsx
[예제 15-17 - 상수 const 사용 전 ]
// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110
```

```jsx
[예제 15-18 - 상수 const 사용 후]
// 세율을 의미하는 0.1
// 변수 이름을 대분자로 선언해 상수임을 명확히 나눈다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice =  preTaxPrice + ( preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110
```

## 15.3.4 const 키워드와 객체

> const 키워드로 선언된 변수에 `객체`를 할당한 경우 값을 변경할 수 있다.

```jsx
[예제 15-19]
const person = {
  name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';
console.log(person); // {name: 'Kim'}
```
