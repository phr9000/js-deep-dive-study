# 7.1 산술 연산자

> 산술 연산자는 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다. 산술 연산이 불가능한 경우, `NAN`을 반환한다.

## 7.1.1 이항 산술 연산자

> 이항 산술 연산자는 2개의 피연산자를 산술 연산하여 숫자 값을 만든다.

```jsx
[예제 07-02]
5 + 2; //7
5 - 2; //3
```

## 7.1.2 단항 산술 연산자

> 단항 산술 연산자는 `1개의 피연산자`를 산술 연산하여 숫자 값을 만든다.

```jsx
[예제 07-04]
var x = 5, result;

// 선할당 후증가
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당
result = --x;
console.log(result, x); // 5 5
```

- 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.

```jsx
[예제 07-06]
var x = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); //1
// 부수 효과는 없다.
console.log(x); //"1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); //1
console.log(x); true

x = false;
console.log(+x); //0
console.log(x); // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN
console.log(x); // "Hello"
```

## 7.1.3 문자열 연결 연산자

> - 연산자는 피연산자 중 `하나 이상이 문자열`인 경우 `문자열 연결 연산자`로 동작한다.

```jsx
// 문자열 연결 연산자
"1" + 2; // '12'
1 + "2"; // '12'

// 산술 연산자
1 + 2; // 3
```

## 7.2 할당 연산자

> 할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다. 할당 연산자는 좌항의 변수에 값을 할당하므로 변수 값이 변하는 부수 효과가 있다.

```jsx
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5;
x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10;

// 문자열 연결 연산자
var str = "My name is ";

str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'
```

# 7.3 비교 연산자

> 동등/일치 비교 연산자

- 동등비교 : 값이 같음
- 일치비교 : 값과 타입이 같음
- 동등 비교 연산자는 사용하지 않는 편이 좋다. 대신 일치 비교(===) 연산자를 사용한다.

```jsx
// 일치 비교
5 === 5; // true
5 === "5"; // false
```

# 7.4 삼항 조건 연산자

```jsx
var x = 2;

var result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수
```

# 7.8 typeof 연산자

> typeof 연산자는 7가지 문자열 "string", "number", "boolean", "undesfined", "symbol", "object", "function" 중 하나를 반환한다.

```jsx
[예제 07-31]
typeof ""; // string
typeof 1; // number
typeof NaN; // number
typeof true; // boolean
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof null; // object
typeof []; // object
typeof {}; // object
typeof new Date(); // object
typeof /test/gi; // object
typeof function () {}; // function
```

> null 값은 "object" 이기 때문에 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용한다.

```jsx
[예제 07-32]
var foo = null;

typeof foo === null; // false
foo === null; // true
```

# 7.9 지수 연산자

```jsx
[예제 07-34]
2 ** 2; //4
2 ** 2.5; // 5.656554..
2 ** 0; // 1
2 ** -2; // 0.25
```

> 지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했다.

```jsx
[예제 07-34]
Math.pow(2, 2); //4
Math.pow(2, 0); //1
```
