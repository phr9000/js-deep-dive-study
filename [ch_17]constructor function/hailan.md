# 17.1 Object 생성자 함함수

> new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.

- 빈 객체를 생성한 이후 프로피티 또는 메서드를 추가하여 객체를 완성할 수 있다.
- 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.

```jsx
[예제 17-01]
// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
  console.log('Hi My name is ' + this.name);
};

console.log(person); // {name: 'Lee', sayHello: f}
person.sayHello(); // Hi My name is Lee
```

- Obect 생성자 함수만 있는 것이 아니다! String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

* (my think!) 생성자 함수로 객체를 만들면 장점 : (chat gpt) 코드의 재사용성이 높아지며, 비슷한 객체를 다양한 상황에서 사용할 수 있음 / 특정 객체의 유형을 알 수 있음 / 코드 가독성 및 유지보수성

```jsx
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj); // String('Lee');

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const Func = new function('x', 'return x * x');
console.log(typeof Func); //function
console.dir(func); // anoymous(x)

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); //object
console.log(date); // Mon
```

# 17.2 생성자 함수

## 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점

- 편하지만 비효율적이다.
- 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야 한다.

```jsx
[예제 17-03]
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
}

console.log(circle1.getDiameter()); //10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
}

console.log(circle1.getDiameter()); //20
```
