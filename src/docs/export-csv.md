# 导出csv文件

```ts
  download (blob) {
    var eleLink = document.createElement('a');
    eleLink.download = '导出文件.csv';
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址

    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};
```