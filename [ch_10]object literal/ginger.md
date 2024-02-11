# 10장 객체 리터럴

## 10.1 객체란?
- 자바스크립트는 객체(object) 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 '모든 것'(원시 타입을 제외한 나머지 값(함수, 배열, 정규 표현식 등)이 객체다.
- 원시 타입: 변경 불가능한 값, immutable value
- 객체 타입(Object/reference type): 변경 가능한 값, mutable value. 다양한 타입의 값 (원시 값 또는 다른 객체)를 하나의 단위로 구성한 복합적인 자료 구조

```
var person = {
  name: 'Lee',
  age: 20,
  increase:function(){
    this.num++;
  }
  }
  
  }