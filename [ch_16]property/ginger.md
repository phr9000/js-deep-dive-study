# 16장 프로퍼티 어트리뷰트

> ※ 프로퍼티(property)는 자바스크립트 객체가 갖는 특정한 값을 나타내는 식별자(identifier)와 그 값으로 구성된 것. 객체는 프로퍼티를 통해 데이터를 저장하고, 이 데이터에 접근하고 조작할 수 있다.

## 16.1 내부 슬롯과 내부 메서드

> 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티pseudo property와 의사 메서드pseudo method다.
> 이들은 주로 객체의 내부 동작을 구현하고 관리하는 데 사용된다.

1. 내부 슬롯(Internal Slot)

- 내부 슬롯은 ECMAScript 스펙에서 정의한 객체의 내부 상태를 나타내는데 사용되는 특별한 슬롯. 이러한 슬롯은 개발자가 직접 접근할 수 없으며, 스펙에서 명시한 용도에 따라 내부적으로 사용된다. 예를 들면, [[Prototype]]이나 [[Extensible]] 등이 내부 슬롯에 해당한다.

```
let obj = {};
console.log(obj[[Prototype]]); // 이런 식으로 직접 접근 불가능
```

2. 내부 메서드 (Internal Method):

- 내부 메서드는 객체의 동작을 정의하고 제어하는데 사용되는 메서드로, 주로 다른 객체와의 상호작용이나 내부적인 알고리즘 구현에 사용된다. 예를 들어, [[GetPrototypeOf]]이나 [[Call]] 같은 내부 메서드가 있다.

```
let obj = {};
let prototype = Object.getPrototypeOf(obj); // Object.getPrototypeOf은 내부 메서드 [[GetPrototypeOf]]의 래퍼
```

`내부 슬롯과 낸부 메서드의 의의`

1. 캡슐화 : 내부 슬롯과 메서드는 객체의 내부 상태와 동작을 캡슐화하여 외부에서 직접적인 접근을 제한함으로써 객체의 무결성을 보호.

2. 스펙 일관성 : ECMAScript 스펙은 많은 다양한 상황에서 일관성 있게 동작하기 위해 내부 슬롯과 메서드를 사용한다. 이는 다양한 환경에서 JavaScript 코드가 동일한 방식으로 동작하도록 보장.

3. 구현 세부사항 분리 : 내부 슬롯과 메서드는 객체의 구현 세부사항을 분리하여, 다양한 자바스크립트 엔진 및 환경에서 효율적으로 구현될 수 있도록 한다.

> 내부 슬롯과 메서드는 대부분 자바스크립트 엔진에 의해 관리되므로, 개발자가 직접적으로 이러한 개념에 접근할 필요는 없다. 그러나 이러한 내부 구조를 이해하면 객체의 동작과 프로토타입 체인 등에 대한 이해가 높아지며, 코드를 더 효과적으로 작성할 수 있다.

## 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

> 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
> 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.

1. 프로퍼티 어트리뷰트 (Property Attributes):

- 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯이다.
- 자바스크립트 객체의 각 프로퍼티는 프로퍼티 어트리뷰트를 갖는다.
- 프로퍼티 어트리뷰트는 프로퍼티의 동작과 특성을 정의한다.
- 주요 프로퍼티 어트리뷰트: value, writable, enumerable, configurable

2. 프로퍼티 디스크립터 객체 (Property Descriptor Object):

- 프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트를 담고 있는 객체
- Object.getOwnPropertyDescriptor(obj, prop)를 사용하여 특정 객체의 특정 프로퍼티에 대한 프로퍼티 디스크립터를 가져올 수 있다.
- Object.defineProperty(obj, prop, descriptor)를 사용하여 객체의 프로퍼티에 새로운 프로퍼티 디스크립터를 설정할 수 있다.

> 프로퍼티 어트리뷰트와 프로퍼티 디스크립터를 사용하면 객체의 속성을 더 세밀하게 제어할 수 있으며, 이는 객체의 동작 및 보안에 영향을 미친다.

## 16.3 데이터 프로퍼티와 접근자 프로퍼티

> 1. 데이터 프로퍼티 data property : 키와 값으로 구성된 일반적인 프로퍼티
> 2. 접근자 프로퍼티 accessor property : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티

### 16.3.1 데이터 프로퍼티

> 데이터 프로퍼티는 아래와 같은 프로퍼티 어트리뷰트를 갖는다. 이 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다.

```
Value (값):
데이터 프로퍼티의 실제 값이 들어가는 부분.
이 값은 모든 데이터 타입(원시 타입 또는 객체)일 수 있다.

Writable (쓰기 가능 여부):
이 속성은 프로퍼티의 값을 변경할 수 있는지 여부를 나타낸다.
true로 설정되면 값을 변경할 수 있고, false로 설정되면 값을 변경할 수 없다.

Enumerable (열거 가능 여부):
이 속성은 프로퍼티가 for...in 루프 등의 열거 가능한 메서드에서 나타날지 여부를 나타낸다.
true로 설정되면 열거 가능하며, false로 설정되면 열거되지 않는다.

Configurable (설정 가능 여부):
이 속성은 프로퍼티의 속성을 변경하거나 프로퍼티를 삭제할 수 있는지 여부를 나타낸다.
true로 설정되면 설정 가능하며, false로 설정되면 변경 및 삭제가 불가능하다.
```

※ 데이터 프로퍼티는 대부분의 객체에서 사용되며, 주로 객체에 저장된 데이터를 나타내는 데 활용된다.

### 16.3.2 접근자 프로퍼티

> 접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티이다.

```
Get 메서드 (get):
이 메서드는 프로퍼티의 값을 읽을 때 호출된다.
메서드는 어떠한 매개변수도 받지 않아야 하며, 읽고자 하는 값을 반환한다.

Set 메서드 (set):
이 메서드는 프로퍼티에 값을 할당할 때 호출된다.
메서드는 새로 할당될 값을 나타내는 매개변수를 받는다.

Enumerable (열거 가능 여부):
이 속성은 프로퍼티가 for...in 루프 등의 열거 가능한 메서드에서 나타날지 여부를 나타낸다.
true로 설정되면 열거 가능하며, false로 설정되면 열거되지 않는다.

Configurable (설정 가능 여부):
이 속성은 프로퍼티의 속성을 변경하거나 프로퍼티를 삭제할 수 있는지 여부를 나타낸다.
true로 설정되면 설정 가능하며, false로 설정되면 변경 및 삭제가 불가능하다.
```

## 16.4 프로퍼티 정의

> 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.

## 16.5 객체 변경 방지

> 객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다.
> 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며, Object.defineProperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.

[p.229 표 참조]

### 16.5.1 객체 확장 금지

- Object.preventExtensions 메서드는 객체의 확장(프로퍼티 추가)을 금지한다.
- 프로퍼티는 프로퍼티 동적 추가와 Object.defineProperty 메서드로 추가할 수 있는데, 이 두가지 추가 방법이 Object.preventExtensions 메서드를 쓰면 모두 금지된다.
- 확장이 가능한 객체인지는 Object.isExtensible 메서드로 확인 가능

### 16.5.2 객체 밀봉

- 객체 밀봉 : 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 계정의 금지를 의미
- Object.seal 메서드를 사용하면 객체 밀봉됨
- 밀봉된 객체는 읽기와 쓰기만 가능
- 밀봉된 객체인지 Object.isSealed 매서드로 확인 가능

### 16.5.3 객체 동결

- 객체 동결 : 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지
- 동결된 객체는 읽기만 가능
- 동결된 객체인지는 Object.isFrozen 메서드로 확인 가능

### 16.5.4 불변 객체

- 객체의 상태를 변경할 수 없는 객체.
- 생성된 이후에는 내부 상태가 수정되지 않음
- 16.5.3까지의 변경방지 메서드는 얕은 변경 방지로, 직속 프로퍼티만 변경 방지되고 중첩 객체까지는 영향을 주지 못한다. 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현 하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze메서드를 호출해야한다 (즉, 객체 내의 모든 프로퍼티를 확인하고 중첩된 객체가 있을 경우 해당 객체에 대해 다시 Object.freeze를 호출해야 합니다).

```
function deepFreeze(obj) {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach(prop => {
    const propValue = obj[prop];
    if (typeof propValue === 'object' && propValue !== null && !Object.isFrozen(propValue)) {
      deepFreeze(propValue);
    }
  });

  return obj;
}

// 예제
const myObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const immutableObject = deepFreeze(myObject);

```
