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

```jsx
[예제 09-12]
if(!false) console.log(false + 'is falsy value');
if(!undefined) console.log(undefined + 'is falsy value');
if(!null) console.log(null + 'is falsy value');
if(!0)  console.log(0 + 'is falsy value');
if(!NaN) console.log(NaN + 'is falsy value');
if(!'') console.log('' + 'is falsy value');
```

```jsx
[예제 09-13]
// 전달받은 인수가 falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
  return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
// 예제 좀 더 이해하고 넘어가기!
```

<!-- 24/2/12"(월) 여기서부터 다시 시작 -->

# 9.3 명시적 타입 변환

> 개발자의 의도에 따라 명시적으로 타입 변환 방법은 1) 표준 빌트인 생성자 함수(string, number, boolean)를 new 연산자 없이 호출 2) 빌트인 메서드 사용 3) 암묵적 타입 변환 이용
>
> '+deep dive 외 추가 내용 : `빌트인 매서드`로 타입 변한하는 법

```jsx
//문자열로 변환 (toString() 메서드)
let number = 42;
let stringNumber = number.toString();
console.log(stringNumber); // 출력: "42"

//숫자로 변환 (Number() 함수 또는 parseInt()/parseFloat() 함수):
let strNumber = "123";
let number = Number(strNumber);
console.log(number); // 출력: 123

// 또는 parseInt() 사용
let strInt = "42";
let intNumber = parseInt(strInt);
console.log(intNumber); // 출력: 42

//문자열을 배열로 변환 (split() 메서드):
let str = "apple,orange,banana";
let arr = str.split(",");
console.log(arr); // 출력: ["apple", "orange", "banana"]
```

## 9.3.1 문자열 타입으로 변환

> 1. String 생성자 함수를 new 연산자 없이 호출하는 방법 2) Object.prototype.toString 매서드를 사용하는 방법 3) 문자열 연결 연산자를 이용하는 방법

```jsx
[예제 09-14]
//1. String 생성자 함수를 new 연산자 없이 호출하는 방법
//숫자 타입 => 문자열 타입
String(1); //1
String(NaN); //NaN
//불리언 타입 => 문자열 타입
String(true); //true
String(false); //false

//2. Object.prototype.toString 매서드를 사용하는 방법 (빌트인 매서드인 듯?)
//숫자 타입 => 문자열 타입
(1).toString(); //"1"
(NaN).toString(); //"NaN"
(Infinity).toString(); //"Infinity"
//불리언 타입=> 문자열 타입
(true).toString(); // "true"
(false).toString(); //"false"

//3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + ''; //"1"
NaN + ''; // "NaN"
Infinity + ''; // "Infinity"
// 불리언 타입 => 문자열 타입
true + ''; //"true"
false + ''; //"false"
```

## 9.3.2 숫자 타입으로 변환

> 1)Number 생성자 함수를 new 연산자 없이 호출하는 방법 2) parseInt.palseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능) 3) +단항 산술 연산자를 이용하는 방법 4) \* 산술 이용자를 이용하는 방법

```jsx
[예제 09-15]
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0'); //0
Number('-1'); // -1
Number('10.53'); // 10.53
// 불리언 타입 => 숫자타입
Number(true); //1
Number(false); //0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
parseInt('0'); // 0
parseInt('-1'); // -1
// 3. +단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+'0'; //0
+'-1' //-1
// 불리언 타입 => 숫자 타입
+true; // 1
+false; //0

// 4. *산술 연산자를 이용하는 방법
//문자열 타입 => 숫자 타입
'0' * 1; //0
'-1' * 1; //-1
'10.53' * 1; //10.53
// 불리언 타입 => 숫자 타입
true * 1; //1
false * 1; //0
```

## 9.3.3 불리언 타입으로 변환

> 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법 2) !부정 논리 연산자를 두 번 사용하는 방법

```jsx
// 1. Boolean 생성자 함수를 new 연산자 없이 호출 하는 방법
// 문자열 타입 => 불리언 타입
Boolean("x"); //true
Boolean(""); //false
// 숫자 타입 => 불리언 타입
Boolean(0); // false
Boolean(1); //true
Boolean(NaN); //false
// null 타입 => 불리언 타입
Boolean(null); //false
// undefined 타입 => 불리언 타입
Boolean(undefined); //false
// 객체 타입 => 불리언 타입
Boolean({}); // true
Boolean([]); // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
// 문자열 타입 => 불리언 타입
!!"x"; //true
!!""; //false
!!"false"; //true
// 숫자 타입 => 불리언 타입
!!0; //false
!!1; //true
!!NaN; //false
!!Infinity; //true
// null 타입 => 불리언 타입
!!null; //false
// undefined 타입 => 불리언 타입
!!undefined; //false
// 객체 타입 => 불리언 타입
!!{}; //true
!![]; //true
```

# 9.4 단축 평가(! hailan: 개인적으로 헷갈렸음 다시 읽어보기)

```jsx
[예제 09-20]
var done = true;
var message = '';

// 주어진 조건이 true 일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); //완료

```

> 조건이 Falsy 값(거짓으로 평가되는 값)일 때 무언가를 해야 한다면 논리합(||) 연산자 표현식으로 if 문을 대체할 수 있다.

```jsx
[예제 09-21]
var done = false;
var message = '';

// 주어진 조건이 false 일 때
if(!done) message = '미완료';

// if문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(messase); // 미완료
```

> 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

```jsx
[예제 09-23]
var elem = null;
var value = elem.value; //typeerror: cannot read property 'value' of null
//이 때 단축 평가를 사용하면 에러를 발생시키지 않는다.
var elem = null;
// > elem이 null이나 undefined와 같은 falsy 값이면 elem으로 평가되고
// > elem이 truthly 값이면 elem.value로 평가된다.
var value = elem && elem.value; //null
```

> 함수 매개변수에 기본값을 설정할 때 (hailan: 신기했음 매개변수에 값이 없으면 undefined가 할당되고 이게 에러를 발생 할 수 있다닝!!!!)

```jsx
[예제 09-25]
// 단축 평가를 사용한 매개변수의 기본값 설정
function getString(str) {
  str = str || '';
  return str.length;
}
getStringLength(); //0
getStringLeng('hi'); //2

// ES6의 매개변수의 기본값 설정
function getStringLeng(str = '') {
  retrun str.length;
}

getStringLength(); //0
getStringLength('hi'); //2
```

# 9.4.2 옵셔널 체이닝 연산자 (hailan: 가끔 && 연산자 쓴 경우 개발에서 봤는데 이제 이해가 가네! 이젠 ?.를 쓰면 되겠당 그게 Null, undefined체크였다닝)

ES11에서 도입된 옵셔널 체이닝 연산자는 `?.`는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

```jsx
[예제 09-26]
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); //undefined
```

> 옵셔널 체이닝 도입 전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수가 null 또는 undefined인지 확인했다.

```jsx
[예제 09-27]
var elem = null;

// elem이 falsy 값이면 elem으로 평가되고, elem이 truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
concole.log(value); //null
```

```jsx
[예제 09-28]
var str = '';

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;
//문자열의 길이(length)를 참조하지 못한다.
console.log(length); //''

// 하지만!! 옵셔널 체이닝 연산자 '.?'는 좌항 피연산자가 false로 평가되는 Falsy값(false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefiend가 아니면 우항의 프로퍼티 참조를 이어간다.
var str = '';
// 문자열의 길이(length)를 참조한다. 이 때 좌항의 피연산자가 false로 평가되는 falsy값이라도 Null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length); // 0
```

# 9.4.3 null 병합 연산자 (hailan: 요것도 이제 이해됨 왜 ??를 쓰는지!!)

```jsx
[예제 09-30]
// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default string';
console.log(foo); // 'default string'
```

> null 병합 연산자 ?? 는 변수에 기본값을 설정할 때 유용하다. null 병합 연산자 ??가 도입되기 이전에는 논리 연산자 ||를 사용한 단축 평가를 통해 변수에 기본 값을 설정했다.
> 만약 falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.

```jsx
[예제 09-31]
// falsy 값이 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo); // 'default string'
//하지만 !! null 병합 연산자 ??는 피연산자가 false로 평가되는 falsy 값 (false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
[예제 09-32]
// 좌항의 피연산자가 falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환한다.
var foo = '' ?? 'default string';
console.log(foo); // ""
```
