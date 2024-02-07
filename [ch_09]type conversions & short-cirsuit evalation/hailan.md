# 9.1 타입 변환이란?

> 자바스크립트의 모든 값은 타입이 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 `명시적 타입` 변환 또는 `타입 캐스팅`이라 한다.

```jsx
[예제 09-01]
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str);

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); //number 10
```

> 개발자의 의도와 다르게 자바스크립트 엔진에 의해 암묵적으로 타입 변화 : `암묵적 타입 변환` 또는 `타입 강제 변환`

```jsx
[예제 09-02]
var x = 10;
var str = x + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```

> 암묵적 타입 변환은 기존 변수 값을 재할당하여 변경하는 것이 아니다. 자바스크립트 엔진은 표혀닉을 에러 없이 평가하기 위해 피연산자의 값을 암묵적 타입 변환해 새로운 타입의 값을 만들어 단 한 번 사용하고 버린다.

# 9.2 암묵적 타입 변환

> 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다.

## 9.2.1 문자열 타입으로 변환

```jsx
[예제 09-04]
1 + '2' // '12'
```

```jsx
[예제 09-05]
`1 + 1 = ${1 + 1}`
```

```jsx
[예제 09-06]
// 숫자 타입
0 + '' // "0"
-0 + '' // "0"
1 + '' //"1"
...

// 불리언 타입
true + '' // "true"
false + '' // "false;

// null 타입
null + '' // "null"

// undefined 타입
undefined + '' //"undefined"

// 심벌 타입
(Symbol()) + '' // typeerror: cannot convert a symbol value to a string

// 객체 타입
({}) + '' // "[object object]"
Math + '' // "[object object]"
[] + '' //""
```

## 9.2.2 숫자 타입으로 변환

```jsx
1 - "1"; // 0
1 * "10"; //10
1 / "one"; // NaN
```

> - 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.

```jsx
[예제 09-09]
+ '' // 0
+ '0' //
+ '1' // 1
+ 'string' // NaN

// 불리언 타입
+true //1
+false //0

// null 타입
+null //0

// undefined 타입
+undefined //NaN

// 심벌 타입
+Symbol() // typeerror: cannot convert a symbol value to a number

// 객제 타입
+{}  // NaN
+[] // 0
+[10, 20] //NaN
+(function(){}) // NaN
```

## 9.2.3 불리언 타입으로 변환

> if 문이나 for문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓으로 평가되어야 하는 표현식 이다.

```jsx
[예제 09-11]
if('') console.log('1'); // 부연설명 : 빈 문자열('')은 falsy한 값이므로 이 조건은 거짓. 해당 코드 블록이 실행되지 않습니다.
if(true) console.log('2'); // 'true' 는 참이므로 이 조건은 참입니다. 해당 코드 블록이 실행되어 '2'가 출력됩니다.
if(0) console.log('3'); // 숫자 0은 falsy한 값이므로 이 조건은 거짓입니다. 해당 코드 블록이 실행되지 않습니다.
if('str') console.log('4'); // 비어 있지 않은 문자열 ('str') 은 truthy한 값이므로 함입니다. 블록이 실행 됩니다.
if(null) console.log('5'); // 'null'은 falsy한 값이므로 이 조건은 거짓입니다. 해당 코드 블록이 실행되지 않습니다.
```
