---
sidebar_position: 2
id: install
title: Install
---

# Install mobx-value

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Use only function component

If your project use only function component, `mobx-react-lite` is enougth.

<Tabs
  groupId="install-fc"
  defaultValue="npm"
  values={[
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', }
  ]
}>
<TabItem value="npm">

```sh
npm install mobx mobx-react-lite mobx-value
```

</TabItem>

<TabItem value="yarn">

```sh
yarn add mobx mobx-react-lite mobx-value
```

</TabItem>

</Tabs>

## Use class component

If your need use React class component, change `mobx-react-lite` to `mobx-react`.

`mobx-react` includes `mobx-react-lite`.

<Tabs
  groupId="install-for-class"
  defaultValue="npm"
  values={[
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', }
  ]
}>
<TabItem value="npm">

```sh
npm install mobx mobx-react mobx-value
```

</TabItem>

<TabItem value="yarn">

```sh
yarn add mobx mobx-react mobx-value
```

</TabItem>

</Tabs>

## Requirement

Make sure `mobx` version >= 6
