---
layout:     post                    # 使用的布局（不需要改）
title:      Grammar of markdown               # 标题 
subtitle:   some thoughts #副标题
date:       2019-11-24              # 时间
author:     LiDeng                     # 作者
header-img: img/post-bg-alitrip.jpg    #这篇文章标题背景图片
catalog: true                       # 是否归档
tags:                               #标签
    - technology
---
## 介绍
 markdown 作为一种轻量级标记语言, 可以让写作者只关注文章内容而非样式和排版, 从而更好的进行创作. 现在很多博客, 或者技术类文档均采用的是markdown的形式进行编写, 除此之外, markdown在vscode编辑器环境下再搭配不同种类的插件, 从而可以pdf,ppt,html等各种内容的创作. 本文不对具体的语法进行重新解释和阐述, 具体可以参考[markdown中文文档](https://markdown-zh.readthedocs.io/en/latest/)和[Coding.net](https://coding.net/help/doc/project/markdown.html)的教程
 其主要特性有, 
 * 内联HTML(在markdown内插入HTML代码), 
 * 特殊字符的转义(&copy;&lt;& ), 
 * 块级元素(标题'#', 引用'>',列表'*/+/-/1.'/-[ ], 
 * 代码\```), 
 * 强调(斜线```*/_```, 加粗则double), 
 * 表格(对齐, 居中),  
 * 图片(inline&cite), 流程图, 甘特图,时序图
 * 自动链接, 分割线,


#### 图片补充: 
inline
 ```markdown
 ![Alt text](/path/to/img.jpg)
或
![Alt text](/path/to/img.jpg "Optional title")
 ```
 cite, 其中id在源文件中任意位置可以独占一行
 ```markdown
 ![Alt text][id]
 ```
![lllllc](https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_nav.4d940ca72.png "Leetcode")
```markdown
![Alt text][1]

[1]: https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_nav.4d940ca72.png "Leetcode"
```
#### 其他特点
1. 自动链接
\<http:/baidu.com>
<http:/baidu.com>


2. 反斜杠转义
    >\\   backslash
    >\`   backtick
    >\*   asterisk
    >\_   underscore
    >\{}  curly braces
    >\[]  square brackets
    >\()  parentheses
    >\#   hash mark
    >\+   plus sign
    >\-   minus sign (hyphen)
    >\.   dot
    >\!   exclamation mark
3. markdown中的Latex 公式书写
   推荐<http://www.wiris.com/editor/demo/en/developers#mathml-latex>
   eg: ${\frac12}_\zeta$
   在网站生成公式后然后再加上$$符号就可以了

#### 流程图&甘特图&时序图
没必要用markdown来画, 推荐一个画图网站<https://www.processon.com/>

除了上述之外还有markdown内的更换字体, 图片, 插入音乐, 格式更加美观等等, 但是主要还是有关html方面的操作所以本文不再赘述, 可以看相关博客
<https://blog.csdn.net/qq_39422642/article/details/78453376>
<https://www.w3school.com.cn/tags/index.asp>