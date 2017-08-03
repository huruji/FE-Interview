# 前端笔试面试简答题汇总

## JavaScript部分
### 1.引起内存泄漏的操作有哪些
1.全局变量引起

2.闭包引起

3.dom清空，事件未清除

4.子元素存在引用

5.被遗忘的计时器

参考：

[【译】JavaScript 内存泄漏问题](http://octman.com/blog/2016-06-28-four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)

[JavaScript 常见的内存泄漏原因](https://juejin.im/entry/58158abaa0bb9f005873a843)



### 2.如何实现ajax请求

1.通过实例化一个XMLHttpRequest对象得到一个实例，调用实例的open方法为这次
ajax请求设定相应的http方法、相应的地址和以及是否异步，当然大多数情况下我们都是选异步，
以异步为例，之后调用send方法ajax请求，这个方法可以设定需要发送的报文主体，然后通过
监听readystatechange事件，通过这个实例的readyState属性来判断这个ajax请求的状态，其中分为0,1,2,3,4这四种
状态，当状态为4的时候也就是接收数据完成的时候，这时候可以通过实例的status属性判断这个请求是否成功
```javascript
var xhr = new XMLHttpRequest();
xhr.open('get', 'aabb.php', true);
xhr.send(null);
xhr.onreadystatechange = function() {
  if(xhr.readyState==4) {
    if(xhr.status==200) {
      console.log(xhr.responseText);
    }
  }
}
```

### 3.简要介绍ES6
ES6对

## Node.js部分


## CSS(3)部分
### 1.水平居中的方法
1.元素为行内元素，设置父元素text-align:center

2.如果元素宽度固定，可以设置左右margin为auto;

3.如果元素为绝对定位，设置父元素position为relative，元素设left:0;right:0;margin:auto;

4.使用flex-box布局，指定justify-content属性为center

5.display设置为tabel-ceil

### 2.垂直居中的方法

## HTML(5)


## 网络部分
### 1.页面从输入URL到展现发生了什么
输入URL之后，需要寻找到这个url域名的服务器IP，为了找到这个IP，浏览器首先会寻找缓存，
查看缓存中是否有记录，缓存中查找的顺序是浏览器缓存、系统缓存、路由器缓存，缓存中没有则
查找系统的hosts文件中是否有记录，如果没有记录则会查询DNS服务器，得到服务器的IP地址之
后，浏览器根据这个IP以及相应的端口号，（如HTTP协议默认的端口号为80，HTTPS协议的默认
端口号为443，当然可以在url中指定端口号）构造一个HTTP请求，并将这个HTTP包请求封装在
一个TCP包中，（这个HTTP请求报文会包含这次请求的信息，主要是请求方法、请求的说明和请
求附带的数据），这个tcp包依次会经过传输层、网络层、数据链路层、物理层到达服务器，服
务器解析这个请求来做出响应，（我们假定这个url是一个类似谷歌、淘宝这样的网站首页，而
不是简单的文件），服务器返回相应的HTML给浏览器，因为HTML是一个树形结构，浏览器根据
这个HTML来构建DOM树在DOM树的构建过程中如果遇到js脚本和外部js连接，则会停止构建DOM
树来执行和下载相应的代码，这会造成阻塞，这也就是为什么推荐js代码应该放在HTML代码的后
面，之后根据外部样式、内部样式、内联样式构建一个CSS对象模型树（CSSOM树），构建完成之
后和DOM树合并为渲染树，这里主要做的是排除非视觉节点，如script、meta标签和排除display
为none的节点，之后就是进行布局，布局主要是确定各个元素的位置和尺寸，之后就是渲染页面。
因为HTML文件中会含有图片、音频、视频等资源，在解析DOM的过程中，遇到这些都会进行并行下
载，当然浏览器对每个域的并行下载数量有一定的限制，一般是4-6个，当然在这些所有请求中我们
还需要关注的就是缓存，缓存一般通过Cache-Control、Last-Modify、Expires等首部字段控制。
Cache-Control和Expires的区别在于Cache-Control使用相对时间，Expires使用的是基于服务器
端的绝对时间，因为存在时差问题，一般采用Cache-Control，在请求这些有设置了缓存的数据时，会先
查看是否过期，如果没有过期则直接使用本地缓存，过期则请求并在服务器校验文件是否修改，如果上一次
响应设置了ETag值会在这次请求的时候作为If-None-Match的值交给服务器校验，如果一致，继续校验
Last-Modified，没有设置ETag则直接验证Last-Modified，再决定是否返回304

参考：

[缓存策略](http://ce.sysu.edu.cn/hope/Item/166703.aspx)

[浏览器内核、JS 引擎、页面呈现原理及其优化](https://www.zybuluo.com/yangfch3/note/671516)

[HTTP权威指南](https://book.douban.com/subject/10746113/)

## 性能相关
### 1.常见的网页性能优化方法
+ 减少HTTP请求

使用雪碧图、内联图片，合并脚本和样式表。

+ 使用内容分发网络（CDN）

+ 添加Expires头

+ 压缩组件

压缩样式表和脚本，开启gzip压缩大概减少70%的大小

+ 样式表放在顶部

+ 将脚本放在底部

+ 避免CSS表达式

+ 使用外部JavaScript和CSS

+ 减少DNS查找

+ 精简JavaScript

+ 避免重定向

网站中除了域名首页外缺少斜杠将引起301重定向，个人测试工作室网站这个重定向消耗的时间在30ms左右

+ 删除重复脚本

+ 配置ETag

+ 使Ajax可缓存

参考：
[高性能网站建设指南](https://book.douban.com/subject/3132277/)



## 数据结构与算法

## 其他
