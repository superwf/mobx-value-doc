---
sidebar_position: 3
id: gist
title: Gist
---

# The gist of mobx-value

`Mobx-value` works with `mobx` version >=6

It is a member of mobx ecosystem.

It can work with or without `React`.

When work with `React`, use `mobx-react-lite` or `mobx-react` as a bridge.

## Concepts

The core concepts of `mobx-value` variable:

1. value

1. set

1. restore

## 1. Define a `mobx-value` variable

```typescript
import { setter } from 'mobx-value'

const counter = setter({ value: 0 })
console.log(counter.value) // 0

counter.set(counter.value + 1)
console.log(counter.value) // 1

counter.restore()
console.log(counter.value) // 0
```

That`s all, very simple.
