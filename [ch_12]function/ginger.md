# 12 함수

## 12.1 함수란

> 일련의 과정을 문statement으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것

`함수의 구성요소`

```
   함수이름┐  ┌─┐--->매개변수
function add(x,y){ ---┐
  return x+y; → 반환값 ├- 함수 정의
}                   --┘

add(2,5); ----> 함수 호출
    └-┘--> 인수
```

- 함수는 함수 정의function definition를 통해 생성되고 입력(인수argument를 매개변수를 통해 함수에 전달)하여 함수의 실행을 명시적으로 지시해야만 실행된다.
- 이를 함수 호출fuction call/invoke라고 한다.
- 함수를 호출하면 코드 블록에 담긴 문들이 일괄적으로 실행결과(반한값)가 반환된다.

## 12.2 함수를 사용하는 이유

> 재사용성과 유지보수성, 코드의 신뢰성

## 12.3 함수 리터럴

> 함수 리터럴은 function 키워드, 함수 이름, 매개변수 목록, 함수 몸체로 구성

`함수 리터럴의 구성요소`

```
함수 이름:   1. 함수 이름은 식별자 ∴ 식별자 네이밍 규칙 준수
            2. 함수 이름은 함수 몸체 내에서만 참조 가능한 식별자
            3. 함수 이름은 생략 가능 (기명함수, 익명/무명함수)
매개변수 목록:   1. 0개 이상의 매개변수 ( )에 , 로 구분
                2. 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당
                3. 매개변수는 함수 몸체 내에서 변수와 동일하게 취급됨 ∴ 식별자 네이밍 규칙 준수
함수 몸체:  1. 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록
           2. 함수 몸체는 함수 호출에 의해 실행
```

- 리터럴은 값을 생성하기 위한 표기법. 따라서 함수 리터럴도 평가되어 값을 생성하며, 이 값은 객체이다. -> 함수는 객체.

- 일반 객체와의 차이 : 일반 객체는 호출할 수 없지만 함수는 호출이 가능하다.

## 12.4 함수 정의

※ 함수 정의 방식

```
함수 선언문
function add(x,y){
  return x+y;
}

함수 표현식
var add = function(x,y){
  return x+y;
}

Function 생성자 함수
var add = new Function('x','y','return x+y');

화살표 함수
var add=(x,y)=>x+y;
```

### 12.4.1 함수 선언문
- 함수 선언문은 함수 리터럴과 형태가 동일하다.
- 단, 함수 리터럴은 함수 이름을 생략할 수 있으나 함수 이름을 생략할 수 없다.
- 함수 선언문은 표현식이 아닌 문이다.

- 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
- 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.

### 12.4.2 함수 표현식
> 함수는 일급 객체(값의 성질을 갖는 객체)이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다. 이러한 함수 정의 방식을 함수 표현식function expression이라고 한다.

`함수 표현식`
```
var add = function(x,y){
  return x+ y;
};

console.log(add(2,5));//7
```
- 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
- 함수를 호출할 때는 함수 이름이 아니라 함수 객체를 사용해야 한다.

```
var add = function foo (x,y){
  return x+y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2,5))//7

// 함수 이름으로 호출하면 ReferenceError가 발생
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자
console.log(foo(2,5)) // RefrenceError: foo is not defined
```

### 12.4.3 함수 생성 시점과 함수 호이스팅
p.164 [예제 12-2]
- 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있지만 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다. 이는 생성 시점이 다르기 때문이다.
- 모든 선언문은 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행되기 때문에 함수 '선언문'으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성된다. 그리고 자바스크립트 엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당한다.
- 즉, 런타임에는 이미 함수 객체가 생성되어 있고 함수 이름과 동일한 식별자에 할당까지 완료된 상태가 된다. 따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
- 이처럼 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅function hoisting이라고 한다.

※ 함수 호이스팅과 변수 호이스팅의 차이
var 키워드로 선언된 변수는 undefined로 초기화되어 평가
함수 선언문을 통해 암묵적으로 생성된 식별자는 함수 객체로 초기화되어 선언문 이전에 호출해도 호출이 가능

- 함수 표현식은 변수에 할당되는 값이 함수 리터럴인 문.
- 변수 선언문과 변수 할당문을 한 번에 기술한 축약 표현과 동일하게 동작.
- 변수 선언은 런타임 이전에 실행되어 undefined로 초기화되지만 변수 할당문의 값은 할당문이 실행되는 시점(런타임)에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 런타임에 평가되어 함수 객체가 된다.
- 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생하는 것.
- 함수 선언문 대신 함수 표현식을 사용할 것을 권장


### 12.4.4 Function 생성자 함수
- 일반적이지 않으며 바람직하지 않은 방식
- Function 생성자 함수로 생성한 함수는 클로저closure를 생성하지 않는 등, 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.


### 12.4.5 화살표 함수
- 화살표 함수는 항상 익명 함수로 정의 
- 화살표 함수는 생성자 함수로 사용할 수 없으며, 기존 함수와 this 바인딩 방식이 다르고 prototype 프로퍼티가 없으며 argumnets 객체를 생성하지 않는다.

### 12.5 함수 호출
### 12.5.1 매개변수와 인수
- 함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우, 매개변수parameter를 통해 인수argument를 전달한다.
- 인수는 값으로 평가 될 수 있는 표현식이어야 한다.
- 인수는 함수를 호출할 때 지정, 개수와 타입에는 제한 없다


```
   함수이름┐  ┌─┐--->매개변수
function add(x,y){ ---┐
  return x+y; → 반환값 ├- 함수 정의
}                   --┘

add(2,5); ----> 함수 호출
    └-┘--> 인수
```
- 매개변수는 함수를 정의할 때 선언. 함수 몸체 내부에서 변수와 같다
- 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로 undefined로 초기화된 이후 인수가 순서대로 할당 -> 인수가 부족해서 인수가 할당되지 않는 매개변수의 값은 undefined
- 매개변수의 스코프(유효범위)는 함수 내부
- 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시

### 12.5.2 인수 확인
> 1. 자바스크립트 합수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
> 2. 자바스크립트는 동적 타입의 언어라 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.

p.170 [예제 12-22]
- 함수 내부에서 적절한 인수가 전달되었는지 확인하더라도 부적절한 호출을 사전에 방지할 수 없다. -> 타입스크립트가 나오게 된 이유

### 12.5.3 매개변수의 최대 개수
> 매개변수는 최대 3개 이상을 넘지 않는 것을 권장
> 그 이상의 매개변수 필요 시 하나의 매개변수를 선언하고 객체를 인수로 전달하는 것이 유리


### 12.5.4 반환문
- 반환문의 역할
1. 함수의 실행을 중단하고 함수 몸체를 빠져나감 
2. retrun 키워드 뒤에 오는 표현식을 평가해 반환
return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환됨

- 반환문은 생략 가능
- 반환문은 함수 몸체 내부에서만 사용 가능


## 12.6 참조에 의해 전달고 외부 상태의 변경
*원시 타입과 참조 타입이 중요
- 원시 타입 인수는 값 자체가 복사되어 매개변수에 전달되기 때문에 함수 몸체에서 값을 변경해도 원본은 훼손되지 않는다.
- 객체 타입 인수는 참조 값이 복사되어 매개변수에 전달되기 때문에 함수 몸체에서 참조 값을 통해 객체를 변경할 셩우 원본이 훼손된다.
- 이러한 현상은 객체가 변경할 수 있는 값이며, 참조에 의한 전달 방식으로 동작하기 때문
- 해결 방법 중 하나는 객체를 불변 객체로 만드는 것


## 12.7 다양한 함수의 형태
### 12.7.1 즉시 실행 함수
> 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수 IIFE, Immediately Invoked Function Expression 라고 한다.
> 즉시 실행 함수는 단 한 번만 호출되며, 다시 호출할 수 없다.

```
//익명 즉시 실행 함수
(function(){
  var a = 3;
  var b = 5;
  return a * b;
}());

//기명 즉시 실행 함수
(function foo(){
  var a = 3;
  var b = 5;
  return a * b;
}())

foo() <--- 즉시 실행함수를 재호출할 수 없다.
```

### 12.7.2 재귀 함수
> 함수가 자기 자신을 호출하는 것을 재귀 호출recursive call이라 한다.
> 재귀 함수recursive function는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
> 재귀 함수는 반복되는 처리를 위해 사용한다.

```
function countdown(n){
  for(var i = n; i >= 0; i--) console.log(i);
}

countdown(10);
// 대부분의 재귀 함수는 for문이나 while문으로 구현 가능하다.


//재귀 함수
function countdown(n){
  if(n<0) return;
  console.log(n);
  countdown(n-1); // 재귀 호출
}

countdown(10);
```
- 재귀 함수는 자신을 무한 재귀 호출되기 때문에 탈출조건이 반드시 필요하다.
- 탈출 조건이 없으면 함수가 무한 호출되어 스택 오버플로 에러가 발생한다.


### 12.7.3 중첩 함수
> 함수 내부에 정의된 함수를 중첩함수nested function 또는 내부 함수inner function라 한다.
> 중첩 함수를 포함하는 함수는 외부 함수outer function라 부른다.

### 12.7.4 콜백 함수
> 콜백함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
> 고차함수 : 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수 

- 콜백 함수는 함수형 프로그래밍 패러다임뿐만 아니라 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등)에 활용되는 중요한 패턴이다.


### 12.7.5 순수 함수와 비순수 함수
> 순수함수 : 함수형 프로그래밍에서 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 부수 효과가 없는 함수
> 비순수함수 : 외부 상태에 의존하거나 외부 상태를 변경하는, 부수효과가 있는 함수

- 순수함수는 일반적으로 최소 하나 이상의 인수를 전달 받는다. 인수를 전달받지 않는 순수 함수는 언제나 동일한 값을 반환(상수와 마찬가지). 인수의 불변성 유지

```
// 순수함수 예제
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // 8

위의 add 함수는 순수함수입니다. 동일한 입력에 대해 항상 동일한 결과를 반환하며, 외부 상태를 변경하거나 부수 효과가 없습니다.


// 비순수함수 예제
let total = 0;

function addToTotal(value) {
  total += value;
}

addToTotal(5);
console.log(total); // 5

위의 addToTotal 함수는 비순수함수입니다. 외부 변수 total을 변경하고 있으며, 동일한 입력에 대해 항상 동일한 출력을 반환하지 않습니다.
<<<<<<< HEAD
```
=======
```
>>>>>>> 39a86326211d99449f085a5a40dbdb0b69a0fa33
