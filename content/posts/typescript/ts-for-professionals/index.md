---
title: TypeScript for Professionals 강의(Udemy)
author: Hyunsol Do
date: 2021-04-24
excerpt: TypeScript for Professionals 강의 중 정리할 내용을 기록한 포스팅
slug: ts-for-professionals
secret: false
---

### User Defined Type Guards

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
