---
title: (TS) Conditional Types with unions and never
author: Hyunsol Do
date: 2021-04-26
excerpt: union과 never를 이용하여 conditional type을 정의하는 방법 대해 정리한 내용입니다.
hero: ../hero/typescript.jpg
slug: conditional-types-with-unions-and-never
secret: false
---

## Conditional Types with Unions and Never

typescript에서 특정 함수가 어떤 값도 return하지 않을 경우 `never` 타입을 가지게 된다. error를 throw하거나, 프로그램의 실행을 종료시키는 경우 `never`가 리턴된다.

```typescript
function fail(msg: string): never {
  throw new Error(msg);
}
```

또는 union에서 남은 값이 없을 경우에도 `never`를 리턴한다.

```typescript
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

### `never`를 이용하여 원하는 타입 추론하기

```typescript
function error(message: string): never {
  throw new Error(message);
}

const notAllowed: never = "some string"; // Error
const allowed: never = error("allowed");
const example: string = error("example");
```

위 코드에서 `example` 부분은 타입 에러를 일으키지 않는다. 왜냐하면 위 코드를 타입스크립트는 "`example`은 string이 아니면 그 어떤 값도 할당되지 않을 거야."라는 의미로 해석하기 때문이다. 즉, example의 type을 `string | never`로 추론하는 것이다.

```typescript
type Verbose = string | never;
type Concise = string;
```

즉 위에서 `Verbose` type은 string 아니면 never가 타입이 할당되는데, `never`가 할당될 일은 없을 것이므로 그냥 `string` 타입으로 인지하고, 따라서 결국 `Concise`와 동일하게 `string` 타입으로만 추론이 된다.

이러한 never의 특성을 살려서 conditional typing을 할 수 있다.

---

```typescript
export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
type Expanded0 = NoEmpty<string> | NoEmtpy<null>;
type Expanded1 =
  | (string extends null | undefined ? never : string)
  | (null extends null | undefined ? never : string);
type Expanded2 = string | never;
type Result = string;
```

`NoEmpty<T>` 타입은 generic의 T 타입이 `null | undefined`이면 never를, 아니면 해당 type을 리턴해준다. 이를 조금씩 풀어서 내부 구현을 보자면 결국 `Expanded2`처럼 `string | never`로 추론되고, 이는 결국 간단하게는 `string`으로 추론이 된다.

즉 원하지 않는 타입을 정확하게 추론하기 위해서 이처럼 conditional typing에 never를 활용할 수 있다.

```typescript
type Result = string | number;
type OnlyNumber<T> = T extends string ? never : number;

type NumberResult = OnlyNumber<Result>;
```

만약 서버로부터의 response type이 `string` 혹은 `number`일 경우, `number` 타입일 때에만 골라서 어떤 처리를 하고 싶다면 위처럼 할 수 있을 것 같다.
