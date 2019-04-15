# angular CLI 命令参考

Angular CLI 是一个命令行界面工具，可用于初始化、开发、构建和维护 Angular 应用。 你可以在命令行窗口中直接使用此工具，也可以通过 Angular Console 这样的交互式界面来间接使用


## 安装Angular CLI

```git
npm install -g @angular/cli
```

## Basic workflow (基本工作流)

```
ng help
ng generage --help

ng new project
cd project
ng serve
```

### 工作区和项目文件

`ng new` 会创建一个Angular工作区目录, 并生成一个新的应用骨架

### 工作区和项目配置

工作区的配置文件 angular.json 位于此工作区的顶层。 在这里，你可以设置全工作区范围的默认值，并指定当 CLI 为不同目标构建项目时要用到的配置。
`ng config` 让你可以从命令行中设置和获取配置项的值。

### CLI 命令

命令语法如下：
```shell
ng commandNameOrAlias requiredArg [optionalArg] [options]

ng build my-app -c production

# 大多数命令以及少量选项，会有别名。别名会显示在每个命令的语法描述中。

# 选项名带有双中线前缀（--）。 选项别名带有单中线前缀（-）。 参数没有前缀。

# 通常，生成的工件（artifact）名称可以作为命令的参数进行指定，也可以使用 --name 选项。

# 参数和选项的名称可以用小驼峰或中线分隔的格式给出。 --myOptionName 等价于 --my-option-name。
```

### 逻辑型与枚举型选项
逻辑型选项有两种形式：--thisOption 可以设置标志，而 --noThisOption 可以清除标志。 如果没有提供选项，该标志就会留在文档中所列出的默认状态。

每个枚举选项的描述都给出了允许的值，其默认值是加粗显示的。

### 相对路径
用来指定文件的选项可以用绝对路径，也可以用相对于当前目录的相对路径，当前目录通常是工作区或项目的根目录

### 常用命令

1. 新建一个组件
```shell
ng generate component NameEditor

```

2. 创建一个可注入的服务类
```shell
ng generate service heroes/hero
```