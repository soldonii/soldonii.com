---
title: (TS) Const assertion
author: Hyunsol Do
date: 2021-04-24
excerpt: const assertion에 대해 정리한 내용입니다.
hero: ../hero/typescript.jpg
slug: const-assertion
secret: false
---

## 1. const assertion

```typescript
const name = "hyunsol";
name = "soldonii"; // Error

const myself = {
  name: "hyunsol",
  role: "frontend",
  skills: ["typescript", "javascript"],
};

/*
myself = {
  name: 'soldonii',
  role: 'backend',
  skills: ['nodejs', 'expressjs']
};
const로 선언된 값을 변형하려 하므로 Error
*/

// 하지만 아래의 값 변형은 허용됨
myself.name = "soldonii";
myself.role = "backend";
myself.skills = ["nodejs", "expressjs"];
```

위와 같은 원치않는 변형을 방지해주기 위해서 `as const`를 이용할 수 있다. `as const` 문법은 3가지 역할을 해준다.

1. `myself` 객체 내 모든 property를 `readonly`로 하여 변형 불가능하도록 한다.
2. primitive type으로 추론되는 것을 모두 litral로 추론하도록 바꿔준다.(e.g. myself.name은 원래 `string`으로 추론되지만, `as const`를 붙여주면 `'hyunsol'`로 추론된다. 따라서 `'soldonii'` 같이 string인 값도 유효하지 않은 것으로 추론된다.)
3. 배열(tuple)도 모두 `readonly`로 바꿔준다. 따라서 `myself.skills.push('react')`와 같이 값 추가 및 삭제 등의 변형이 불가하다.

---

const assertion이 가장 필요한 순간 중 하나가 바로 아래와 같은 상황일 것 같다. 실무에서 많이 부딪힌 경우이다.

```typescript
function layout(settings: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log("Performing layout: ", settings);
}

const example = {
  align: "left",
  padding: 0,
};

layout(example); // Error
```

이 코드는 type 에러를 일으킨다. 왜냐하면 `example`의 타입은 `{align: string; padding: number}`로 추론이 되는데, `layout` 함수에서의 `align`은 `'left' | 'center' | 'right'`만 받을 수 있기 때문이다. string으로 추론된 example은 우리가 눈으로 보기에는 그 값이 `left`일지라도, typescript 입장에서 string으로 추론된다는 것은 곧 `'foo'` 와 같은 string 타입의 어떤 문자열이든 다 가능하기 때문이다.

따라서 에러가 나는 것이 정상적인 상황이다.

이런 경우에 `example`에 `as const`를 붙여주면?

```typescript
const example = {
  align: "left",
  padding: 0,
} as const;
```

이제 `example`은 `{readonly align: 'left'; readonly padding: 0}`으로 추론되므로 이제 타입 에러가 사라진다. 하지만 이 보다 조금 더 낫게? 안전하게 한다면 사실 example 전체보다는 `align`에만 `as const`를 붙여주는 게 좋다.

```typescript
const example = {
  align: 'left' as const;
  padding: 0
};
```
