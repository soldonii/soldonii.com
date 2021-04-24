---
title: (TS) Generic Contraints
author: Hyunsol Do
date: 2021-04-25
excerpt: generic constraints 대해서 정리한 내용입니다.
hero: ../hero/typescript.jpg
slug: generic-constraints
secret: false
---

## Generic Constraints

```typescript
function addFullName<T>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`, // Error
  };
}
```

위 코드는 fullName이 있는 line에서 에러가 난다. 그리고 이 에러는 매우 합당한 에러이다. 왜냐면 obj의 타입인 `T`가 `firstName`, `lastName`을 가지고 있음을 보장할 수 없기 때문이다. 이 문제를 해결하기 위해서는 `T`라는 generic type이 어떤 모양을 가지고 있어야 하는지를 제한해두어야 하고 이 때 많이 사용하는 `extends` 키워드가 등장한다.

```typescript
interface NameFields {
  firstName: string;
  lastName: string;
}

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`, // Error
  };
}
```

이제 인자로 받는 `obj`는 `NameFields` 타입이 가지고 있는 `firstName`과 `lastName` 필드를 가진 객체로 제한이 된다. 만약 `addFullName({firstName: 'hyunsol'})` 이렇게 `firstName`만 있는 obj가 인자로 들어온다면 그 즉시 에러를 일으킨다.

`NameFields` 타입을 가진 obj로 제한을 둠으로써 위 문제를 해결할 수 있게 된다.
