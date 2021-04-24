---
title: (TS) Function overloading
author: Hyunsol Do
date: 2021-04-24
excerpt: function overloading에 대해서 정리한 내용입니다.
hero: ../hero/typescript.jpg
slug: user-defined-type-guards
secret: false
---

## 1. Function overloading

```typescript
function reverse(input: string | string[]) {
  if (typeof input === "string") {
    return input
      .split("")
      .reverse()
      .join("");
  } else {
    return input.slice().reverse();
  }
}

const reversedHello = reverse("hello"); // 'olleh'
const reversedHelloArray = reverse(["h", "e", "l", "l", "o"]); // ['o', 'l', 'l', 'e', 'h']
```

지금 상태에서 `reversedHello`와 `reversedHelloArray` 모두 타입이 `string` 혹은 `string[]`로 추론된다. 사실 정확하게 하려면 `reversedHello`는 `string`으로, `reversedHelloArray`는 `string[]`으로 추론되어야 할 것이다.

```typescript
// 아래 두 줄을 추가해준다.
function reverse(input: string): string;
function reverse(input: string[]): string[];

function reverse(input: string | string[]) {
  if (typeof input === "string") {
    return input
      .split("")
      .reverse()
      .join("");
  } else {
    return input.slice().reverse();
  }
}

const reversedHello = reverse("hello"); // 'olleh'
const reversedHelloArray = reverse(["h", "e", "l", "l", "o"]); // ['o', 'l', 'l', 'e', 'h']
```

맨 위에 두 줄을 추가해주면, 이제 reverse 함수가 input을 `string`으로 받으면 return 값도 `string`으로, `string[]`으로 받으면 리턴값의 타입도 `string[]`로 추론할 것이다.

하나의 사례를 더 보자.

```typescript
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampOryear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const date1 = makeDate(2000, 1, 1); // 1 Jan 2000
const date2 = makeDate(0); // 1 Jun 1970

const invalidDate = makeDate(2000, 1); // day가 없어서 else문으로 들어가면서 원치않는 결과 리턴
```

함수의 정의 상, 두번째 세번째 인자인 `month`와 `day`는 생략이 가능하다. 따라서 세번째 인자를 넣지 않아도 되는데, 그럴 경우 if 문이 아니라 else 문으로 들어가면서 의도치 않은 결과물이 리턴될 것이다.

```typescript
function makeDate(timeStamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
```

두 줄을 추가해주면, 이제 `makeDate(2000, 1)` 코드는 에러를 일으키게 될 것이다. 두번째 인자를 받는 순간, 세번째 인자도 필수로 받게 되도록 타입지정이 되었기 때문이다.
