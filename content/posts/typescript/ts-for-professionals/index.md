---
title: TypeScript for Professionals 강의(Udemy)
author: Hyunsol Do
date: 2021-04-24
excerpt: TypeScript for Professionals 강의 중 정리할 내용을 기록한 포스팅
hero: ./images/typescript.jpg
slug: ts-for-professionals
secret: false
---

## 1. User Defined Type Guards

여러 union 타입 중 어떤 타입인지를 narrowing하는 방법을 알아보자.

#### 방법1: property를 기반으로 narrowing

```typescript
type Square = {
  size: number;
};

type Rectangle = {
  width: nuumber;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ("size" in shape) {
    // shape가 Squaure임을 파악하기 위한 type narrowing
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    // shape가 Rectangle임을 파악하기 위한 type narrowing
    return shape.width * shape.height;
  }
  const _ensure: never = shape;
  return _ensure;
}
```

위처럼 하면 특정 타입이 가지고 있는 property를 기반으로 narrowing을 할 수 있다. 그러나 뭔가 짜치고(?) 안전하지 않은 기분이 든다.

#### 방법2: common property를 기반으로 narrowing

위 방식이 안전하지 않다고 느낀 이유는, 만약 다른 `Shape`가 추가됐을 때 추가된 `Shape`가 `size` 혹은 `width` 라는 property를 가질 경우 특정 shape로 한정지을 수 없는 문제가 생기기 때문이다.
이런 경우에는 모든 Shape에 common property를 줄 수 있다.

```typescript
type Square = {
  name: "square";
  size: number;
};

type Rectangle = {
  name: "rectangle";
  width: nuumber;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if (shape.name === "square") {
    // shape가 Squaure임을 파악하기 위한 type narrowing
    return shape.size * shape.size;
  }
  if (shape.name === "rectangle") {
    // shape가 Rectangle임을 파악하기 위한 type narrowing
    return shape.width * shape.height;
  }
  const _ensure: never = shape;
  return _ensure;
}
```

여기서 user defined type guards 개념을 이용해 볼 수도 있다.

### 방법3: user defined type guards

```typescript
type Square = {
  name: "square";
  size: number;
};

type Rectangle = {
  name: "rectangle";
  width: nuumber;
  height: number;
};

type Shape = Square | Rectangle;

function isSquare(shape: Shape) {
  return shape.name === "square";
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    // 그러나 typescript compiler는 shape가 square라는 사실을 인지하지 못한다.
    return shape.size * shape.size;
  }
  // ...
}
```

이를 해결하기 위해 `isSquare()` 함수를 인라인으로 넣을 수도 있다.

```typescript
function area(shape: Shape) {
  if (shape.name === "square") {
    // 이러면 shape가 square라는 것은 알 수 있지만 조금 더 가독성을 높이는 방법도 있다.
    return shape.size * shape.size;
  }
  // ...
}
```

```typescript
type Square = {
  name: "square";
  size: number;
};

type Rectangle = {
  name: "rectangle";
  width: nuumber;
  height: number;
};

type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
  return shape.name === "square";
}

function isRectangle(shape: Shape): shape is Rectangle {
  return shape.name === "rectangle";
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    // 만약 `isSquare(shape)` 함수가 true를 리턴했다면, shape는 `Square`라고 컴파일러에게 알려줬다.
    // 따라서 이 block 안에서 shape은 `Square`라고 타입이 추론된다.
    return shape.size * shape.size;
  }
  // ...
}
```

## 2. Assertion Functions

```typescript
type Person = {
  name: string;
  dateOfBirth?: date;
};

function assert(condition: unknown, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

const maybePerson = loadPerson();

assert(maybePerson != null, "Could not load person");
console.log("Name: ", mayberPerson.name);
// maybePerson은 Person | null로 추론된다.
```

위 사례와 유사하게, 사실 assert 함수를 통과했다면(error가 던져지지 않았다면) maybePerson은 `Person` 타입을 가질 것이다. 하지만 타입스크립트는 implicit하게 console.log 라인에서 `maybePerson`이 `Person`임을 알지 못한다. 이를 알게 해주려면 다음과 같은 explicit type assertion이 필요하다.

```typescript
type Person = {
  name: string;
  dateOfBirth?: Date;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const maybePerson = loadPerson();

assert(maybePerson != null, "Could not load person");
console.log("Name: ", mayberPerson.name);
// maybePerson은 Person | null로 추론된다.
```

assert 함수의 return 타입에 `asserts condition`을 추가해줬다. 이는 만약 이 함수가 실행되면 `condition` 파라미터 값을 리턴한다는 것을 명시적으로 알려주는 것이다.

함수 내부에서 `!condition`을 통해 condition이 false인 경우는 대응이 되었기 때문에, 이 함수가 실행된 이후에는 `condition`에 해당되는 `maybePerson != null`이 true라고 추론할 수 있게 된다. 즉, maybePerson이 null이 아니게 되기 때문에 `mayberPerson.name`에서 null 추론은 빠지고 `Person`으로만 타입이 추론된다.

다른 사례로 조금 더 나아간 용례를 보자.

```typescript
type Person = {
  name: string;
  dateOfBirth?: Date;
};

function assertDate(value: unknown) {
  if (value instanceof Date) {
    return;
  } else {
    throw new TypeError("value is not a Date");
  }
}

const maybePerson = loadPerson();

assertDate(maybePerson.dateOfBirth);
console.log("Date of Birth: ", maybePerson.dateOfBirth.toISOString());
// maybePerson.dateOfBirth가 undefined일 수 있기 때문에 타입 에러가 난다.
```

이를 해결해주기 위해 위와 같이 동일한 방법을 적용해보자.

```typescript
function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) {
    return;
  } else {
    throw new TypeError("value is not a Date");
  }
}
```

이렇게하면 만약 `assertDate` 함수가 error를 던지지 않았으면, value의 타입은 Date라고 추론해준다. 따라서 `toISOString()` 메소드를 타입 safe하게 사용할 수 있다.
