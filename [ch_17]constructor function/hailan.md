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
const circle1 =
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

## 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점

```jsx
[예제 17-04]
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(5); // 반지름이 5인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```

## 17.2.3 생성자 함수의 인스턴스 생성 과정

> 위 예제 참고

- {}안에 공간의 객체가 생기고 this에 바인딩이 된다. (my think! {}라는 공간이 this인 듯)
- (radius) 라는 매개변수가 들어오면 {}라는 this공간에서 radius값을 받아오고, function 값을 계산한다.

```jsx
[예제 17-11]
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  return {};
}

const Circle = new Circle(1);
console.log(circle); // {}
// (my think! return {} 으로 인해 이 값이 최종적으로 덮어 씌어졌다.)
// bur return 100; 이런식으로 들어가면 이건 유효되지 않는다.
```

## 17.2.4 내부 메서드 [[Call]]과 [[Construct]]

> 함수가 일반 함수로서 호출되면 함수 객체의 내부 매서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다.

```jsx
[예제 17-14]
function foo(){}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo();
```

## 17.2.7 new.target

> 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 es6에서는 new.target을 지원한다.
