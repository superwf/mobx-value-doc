---
sidebar_position: 2
id: install
title: Install
---

# Install mobx-value

## command

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="language"
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

## Explain

### React class component

If your project only use function component, `mobx-react-lite` is enougth.

If your need use React class component, change `mobx-react-lite` to `mobx-react`.

<Tabs
  groupId="language"
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

### MobX Version requirement

Make sure `mobx` version >= 6
