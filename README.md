<div align="center">
    <img src="https://gitee.com/xiaopeng77/typora-img/raw/master/img/Tools.png" style="zoom:100%;" />
    <h1>@flingyp/tools</h1>
</div>

## 介绍

一款集成各种常用工具方法库，通过 **@flingyp/tools** 可以快速找到常用的工具方法，极大增加开发时的效率

## 安装和快速上手

```sh
pnpm install @flingyp/tools --save
```

### browser

```javascript
<script src="@flingyp/tools/xxx.js"></script>

<script>
    // YTools 已经被注册到 Window 中，可直接使用
</script>
```

### esmodule

```javascript
import * as YTools from "@flingyp/tools";
// or
import {} from "@flingyp/tools";
```

### commonjs

```javascript
const YTools = require("@flingyp/tools");
// or
const {} = require("@flingyp/tools");
```

