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
// or
const YTools = require('@flingyp/tools')
YTools._string.SensitiveStringHandle('12345678901', 4, 5)
```

## 代办事项

- [ ] 字符串
  - [x] 字符串敏感信息的处理
- [ ] 数字
  - [x] 生成随机数
- [ ] 时间
  - [x] 根据日期/时间-输出对应格式的日期
- [ ] 格式校验
  - [x] 手机号码
  - [x] 身份证号码
  - [x] 邮箱校验
  - [x] QQ 号校验
  - [x] 校验字符串中是否包含中文
  - [x] 校验字符串中是否包含数字
- [ ] 函数
  - [x] 节流函数 Throttle
  - [x] 防抖函数 Debounce
- [ ] 数组
  - [x] 数组去重 DelRepeat
