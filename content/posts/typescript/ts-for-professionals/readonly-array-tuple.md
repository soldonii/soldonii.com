---
title: (TS) Readonly Arrays and tuples
author: Hyunsol Do
date: 2021-04-24
excerpt: readonly가 필요한 경우에 대해 정리한 내용입니다.
hero: ../hero/typescript.jpg
slug: readonly-array-tuple
secret: false
---

## 1. Readonly Arrays and tuples

숫자로 된 배열을 input으로 받아서, reverse하는 함수가 있다.

```typescript
function reverseSorted(input: number[]): number[] {
  return input.sort().reverse();
}

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

console.log(start); // [5, 4, 3, 2, 1]
console.log(result); // [5, 4, 3, 2, 1]
```

둘 다 똑같이 `[5, 4, 3, 2, 1]`이 되었다! 왜냐면 인자로 받은 `input`을 복사하지 않고 그대로 변형했기 때문이다. 만약 타입으로 `input` 인자는 그대로 직접 사용할 수 없고 복사해서 사용해야 한다는 것을 알려주면 compile 단계에서 에러를 발생시켜 위와 같은 버그를 만나지 않을 것이다.

여기서 `input`을 직접 사용할 수 없게 타입으로 정의해주려면, `readonly`만 붙여주면 된다.

```typescript
function reverseSorted(input: readonly number[]): number[] {
  // return input.sort().reverse(); => input.sort()를 시도하는 순간 readonly인 값을 사용하려고 해서 에러가 난다.
  return input
    .slice()
    .sort()
    .reverse();
}
```

`readonly`를 붙여주면 해당 값에 직접 접근하려고 할 때 에러를 발생시키므로 `.slice()`를 통해 한 번 복사해서 사용하도록 되고, 위와 같은 문제를 방지할 수 있다.
