# Button 按钮组件

按钮是一种命令组件，可发起一个即时操作。

## 基本用法

按钮分为 primary - 主要按钮、secondary - 次要按钮（默认）、dashed - 虚线按钮、outline - 线形按钮、text - 文本按钮五种类型。

按钮类型

::: info 提示

按钮分为 `primary` - 主要按钮、`default` - 次要按钮（默认）、`plain`- plain按钮、`mini`- mini按钮四种类型。

:::

<demo src="../components/Button/Button.vue"></demo>

## 禁用状态

不可以点击

<demo src="../components/Button/Button-disabled.vue"></demo>


## 大小形状

分为三种形状：`round` - 圆形、`circle` - 圆角、`default` - 默认

<demo src="../components/Button/Button-shap.vue"></demo>

## 图标按钮

按钮可以带图标,使用图标请先安装[`@ionic/vue`](iconsMd/icon.md)组件库

<demo src="../components/Button/Button-icon.vue"></demo>


## 加载中

按钮可以进入加载状态

<demo src="../components/Button/Button-loading.vue"></demo>


## 事件处理

::: info 提示

`@handle-click` 事件处理

:::

<demo src="../components/Button/Button-click.vue"></demo>


## API

`<Tbutton>` 组件提供了以下可配置的 Props：

| 参数名 | 描述                              | 类型                                  |  默认值   |
| :----- | :-------------------------------- | :------------------------------------ | :-------: |
| type   | 按钮的类型:用于给当前按钮附加类型 | `large` 、`middle`、`small`、`mini`   | `middle`  |
| size   | 按钮的尺寸                        | `default`、`primary`、`plain`、`gray` | `default` |
| loading   | 按钮的状态                      | `boolaen` | `false` |

`<Tbutton>` 组件提供了以下可配置的 Slot：

| 参数名 | 描述                              | 类型                                  |  默认值   |
| :----- | :-------------------------------- | :------------------------------------ | :------- |
| icon  | 按钮的图标 | `string`   | 默认为空,具体参考该<a href="https://ionicons.com/" target="_blank">ionicons</a>网站的图标，只取出名字即可  |





`<Tbutton>` 组件提供了以下事件类型：Event

| 事件名         | 描述           | 参数               |
| -------------- | -------------- | ------------------ |
| `handle-click` | 点击按钮时触发 | `ev`: `MouseEvent` |


