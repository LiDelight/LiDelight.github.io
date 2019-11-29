---
layout:     post                    # 使用的布局（不需要改）
title:      How to write a spider              # 标题 
subtitle:   find api, regex, python_csv          #副标题
date:       2019-11-25              # 时间
author:     LiDeng                     # 作者
header-img: img/post-bg-alitrip.jpg    #这篇文章标题背景图片
catalog: true                       # 是否归档
tags:                               #标签
    - Python
    - technology
---

### 记一次简单爬虫

主要内容: 网站接口寻找, 正则表达式匹配, 数据导入csv文件

#### 接口
- 利用chrome, 打开开发者工具F12, 然后在network里面观察网页刷新时候的数据载入情况
- 凭直觉找到相应的资源然后在新的标签页内打开, 这个就是网页数据的接口
- 一般来说接口分为很多类型有文本, json等等数据方式根据情况来进行选取, 本文考虑的是文本类接口
- 对于需要多个页面的数据, 一般来说接口的地址格式都存在一定的规律, 写代码的时候可以随机应变一点


#### 正则表达式
- 正则表达式我主要使用了捕获和匹配格式, 具体可以参考这四个网站博客
- 捕获组<https://blog.csdn.net/lxcnn/article/details/4146148> 
- 匹配文档<https://tool.oschina.net/uploads/apidocs/jquery/regexp.html>
- 测试和生成regex<https://www.sojson.com/regex/>
- 常用正则式<https://www.cnblogs.com/zqifa/p/regex-1.html>

#### 数据导入csv文件中
- python文档<https://docs.python.org/3/library/csv.html>