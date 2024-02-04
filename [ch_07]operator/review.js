var x = "5";
x = parseInt(x); // 문자열 "5"를 정수로 변환

console.log(typeof x);

var y = true;
console.log(typeof +y);

var c = "1" + 2; //12

console.log(typeof c);

// `x += 5`는 주어진 변수 `x`에 5를 더한 값을 다시 `x`에 할당하는 간단한 수식입니다. 이를 사용할 때 `for`문은 일반적으로 필요하지 않습니다. `x += 5`는 반복문이 아닌 단일 연산입니다.

// 반복문(`for`문)은 일련의 코드 블록을 반복 실행하는 데 사용되며, 주로 배열과 같은 데이터 구조를 반복하거나 특정 조건이 충족될 때까지 코드를 반복 실행할 때 유용합니다.

// 만약 특정 조건에 따라 여러 번 `x += 5`를 실행해야 하는 상황이라면, 반복문을 사용할 수 있습니다. 예를 들어, 특정 조건이 충족될 때까지 `x += 5`를 반복 실행하고 싶다면 다음과 같이 `while`문을 사용할 수 있습니다:

// ```javascript
// while (condition) {
//   x += 5;
//   // 다른 코드 블록
// }
// ```

// 또는 `for`문을 사용하여 일정 횟수만큼 반복 실행할 수도 있습니다:

// ```javascript
// for (let i = 0; i < n; i++) {
//   x += 5;
//   // 다른 코드 블록
// }
// ```

// 요약하면, `x += 5` 자체는 반복문을 많이 사용할 필요가 없는 단순한 연산이지만, 상황에 따라서는 특정 조건이나 횟수에 따라 반복문을 사용할 수 있습니다.

// ** NaN
// JavaScript에서는 숫자가 NaN (Not-a-Number)이 될 수 있습니다. NaN은 숫자가 아님을 나타내는 특수한 값으로, 특히 부동 소수점 연산에서 결과가 정의되지 않을 때 발생합니다.
// 일반적인 상황에서 NaN이 될 수 있는 몇 가지 경우를 살펴보겠습니다
// 0으로 나누기:
let result = 0 / 0;
console.log(result); // NaN

// 문자열을 숫자로 변환할 때 실패:
let notANumber = parseInt("문자열");
console.log(notANumber); // NaN

// 숫자와 문자열을 더할 때:
let sum = 5 + "문자열";
console.log(sum); // NaN

// 숫자가 아닌 값을 숫자로 변환할 때:
let invalidNumber = Number("abc");
console.log(invalidNumber); // NaN

let nullType = null;
console.log(typeof null);
