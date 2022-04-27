<div align="center">
    <img src="https://gitee.com/xiaopeng77/typora-img/raw/master/img/Tools.png" style="zoom:100%;"></img>
    <h1>@flingyp/tools</h1>
</div>

## 介绍

一款集成各种常用工具方法库，通过 **@flingyp/tools** 可以快速找到常用的工具方法，极大增加开发时的效率

## 安装和快速上手

```sh
pnpm add @flingyp/tools --save
```

### browser

```javascript
<script src="@flingyp/tools/xxx.js"></script>

<script>
    // YTools 已经被注册到 Window 中，可直接使用
    YTools._string.SensitiveStringHandle('12345678901', 4, 5)
</script>
```

### esmodule

```javascript
import { _string } from '@flingyp/tools'
_string.SensitiveStringHandle('12345678901', 4, 5)
```

### commonjs

```javascript
const { _string } = require('@flingyp/tools')
_string.SensitiveStringHandle('12345678901', 4, 5)
```

## 代办事项

- [ ] 字符串
  - [x] 字符串敏感信息的处理
- [ ] 数字
  - [ ] 生成随机数
- [ ] 时间
  - [ ] 根据根据生成当前日期/时间
