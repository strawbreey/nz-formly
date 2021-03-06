## Angular 风格指导

### 风格指导词汇

#### 单一职责

> 对所有的组件, 服务等应用

1. 单一规则
- 坚持每个文件只定义一样东西
- 坚持定义简单函数

2. 命名 
- 坚持所有符合使用一致的命名规则
- 使用点和横杠来分隔文件名

3. 符号名和文件名
- 坚持为所有东西使用一致的命名约定，以它们所代表的东西命名。

4. 服务名
- 坚持使用一致的规则命名服务，以它们的特性来命名

5. 引导
- 坚持把应用的引导程序和平台相关的逻辑放到名为 main.ts 的文件里。坚持在引导逻辑中包含错误处理代码。避免把应用逻辑放在 main.ts 中，而应放在组件或服务里。

6. 组件选择器
- 坚持使用中线命名法（dashed-case）或叫烤串命名法（kebab-case）来命名组件的元素选择器。