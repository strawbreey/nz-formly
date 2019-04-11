## Git commit log 的核心结构和规范

### 提交信息的结构

一条commit信息通常包括3个部分

```
type: [标题]

body

footer

```

### Type： 类型

具体来说，Type分为:
- feat: 增加新功能
- fix： 修复错误
- docs: 修改文档
- style: 修改样式
- refactor: 代码重构
- text: 增加测试模块, 不涉及生产环境的代码
- chore: 更新核心模块, 保存配置文件，不涉及生产环境的代码

### Subject 标题

标题不超过50个字符，结尾不需要对应的句号；应该使用祈使句来描述，比如：修复标点符号错误。

### Body：正文

并不是所有的 Commit 都需要正文，所以这一模块是可选的，必要的时候对本次 Commit 做一些背景说明，阐释具体的原因和内容，但是不解释具体的过程。

### Footer：结尾

结尾是可选的，通常来说可以添加对一些错误信息ID的补充。

### Example: 举例
```
docs: add FAQ in readme file
```