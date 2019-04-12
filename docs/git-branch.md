## Git Flow 使用规范

## 什么是GitFlow (What Is GitFlow)
GitFiow 是 Git 的一种分支模式，非常适合协作开发团短

## 优点 （Key Benefits）
- 分布式存储 , 本地仓库包含了远程仓库的所有内容 . 安全性高 , 远程仓库文件丢失了也不怕
- 优秀的分支模型 , 创建/合并分支非常的方便
- 方便快速 , 由于代码本地都有存储 , 所以从远程拉取和分支合并时都非常快捷

##  提交的准则：
>
>1. 除了源码相关的东西之外，其他build产生的东西（如：maven的target文件夹，.idea文件夹等），均不能提交进入源码仓库，添加到.gitignore文件中忽略掉。
>2. 撰写规范的提交说明。一份好的提交说明可以帮助协作者更轻松更有效地配合工作。
>3. 要严格按照GitFlow流程切换到指定分支，开发相应的功能。


## GitFlow流程

<img src="./images/1753960-fa724bc56d6eb19d.png">

- 天蓝色圆点所在的线为我们源码的主线（master）。
- 天蓝色方形指向的节点就是每一个发布版本的标签（tag）。
- 紫色圆点所在的线为主要分支线（develop）。
- 橙色圆点所在的线为新功能开发分支线（feature）。
- 绿色圆点所在的线为新版本发布线（release）。
- 红色圆点所在的线为发布版本bug修复线（hotfix）。

## 主分支说明 (master | dev)

我们使用两个分支来记录源码轨迹：

1. 原来的master分支用来记录官方发布轨迹；
2. 新的dev分支是一个集成分支，用来记录开发新功能的轨迹。

> 除了master主线和dev主分支线，其他的分支都是临时的分支，有一定的生命周期的，其余的工作流程分支都是围绕这两个分支之间的区别进行的。

```
 命名:
 - 主分支名称: master
 - 主开发分支名称: dev(develop) 
```

## 新功能分支 (feature)

每一个新的功能都应该创建一个独立的分支，从dev分支中派生出来。当功能完成后，要合并（merged）回dev分支，合并后它的生命周期就结束。新功能分支不会与master分支有直接的交汇。

> 注意：对于所有意图和目的，新功能分支会合并到develop分支。但是，这个Gitflow工作流不会在此结束。

```
 命名:
 - 新功能开发分支名称: feature-*   feature/*
```

## 发布分支 (Release)
一旦开发的功能已经满足发布条件（或预定发布日期接近），应该合并所有满足发布条件的新功能分支到develop分支中，然后，开出一个发布分支（Release），开始准备一个发布版本。在这个分支上，不能再添加新的功能，只有bug修复和该版本为导向的任务。一旦到了发布日期，Release就要合并回master发布，并且，打出版本标签。另外，还需要合并回develop分支。

```
 命名:
 - 新功能开发分支名称: release-*   release/*
```

## 维护分支(Maintenance)

维护分支也就是线上bug修复分支，使用来快速修复生产环境的紧急问题

这个分支是唯一一个开放过程中直接从master分支派生来的分支。快速的修复问题后，它应该被合并回master和develop（或者当前发布分支），然后，master分支需要打一个版本标签。
一个专门的错误修复开发线，可以让团队在不等待下一个发布周期，导致中断工作流程情况下解决问题。可以将维护分支当做主要的问题修复分支，与master并行
。

```
 命名:
 - 主分支bug修复分支名称: hotfix-*   hotfix/*
```

## 工作流程

- 创建develop分支
```git
# 管理员创建分支
git branch develop
git push -u origin develop

# 开发人员拉取分支
git clone git@github****
git checkout -b develop origin/develop
```


- 新建新功能(feature)分支
```git
git checkout -b feature/demo develop

git push

git status
git add .
git commit -m "add some-file"

git pull origin develop
git checkout develop
git merge feature/demo
git push
git branch -d feature/demo
```

- 线上版本发布流程
```git
git checkout -b realease-0.0.1 develop
git push

git checkout master
git merge release-0.0.1
git push

git checkout develop
git merge release-0.1.0
git push
git branch -d release-0.1.0

git tag -a 0.1.0.RELEASE -m "Initial public release" master
git push --tags

```

- 线上bug修复流程

```git
git checkout -b issue-#001 master

git checkout master
git merge issue-#001
git push

git tag -a 0.1.1.RELEASE -m "Initial public release" master
git push --tags

git checkout develop
git merge issue-#001
git push
```

## Git 常用命令

- 开分支

```git
git branch 新分支名
git branch dev
```

- 切换到新分支

```
git checkout 分支名
git checkout dev
```

- 开分支和切换分支

```git
git checkout -b 新分支名
git checkout -b dev
```

- 切换回原分支

```
git checkout 原分支名
git checkout master
```

- 合并分支

```
git marge 需要合并的分支名
git merge dev
```
- 查看本地分支列表

```
git branch -a
```

- 查看远程分支列表

```
git branch -r
```

- 向远程提交本地新开的分支

```
git push origin dev
```

- 删除远程分支

```
git push origin: 远程分支名
git push origin: dev
```

- 删除本地分支

```
git branch 分支名称 -d
git branch dev -d
```

- 给信分支列表信息
```
git fetch -p
```