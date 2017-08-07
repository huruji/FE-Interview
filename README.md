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
ES6在变量的声明和定义方面增加了let、const声明变量，有局部变量的概念，赋值中有比较吸引人的结构赋值，同时ES6对字符串、
数组、正则、对象、函数等拓展了一些方法，如字符串方面的模板字符串、函数方面的默认参数、对象方面属性的简洁表达方式，ES6也
引入了新的数据类型symbol，新的数据结构set和map,symbol可以通过typeof检测出来，为解决异步回调问题，引入了promise和
generator，还有最为吸引人了实现Class和模块，通过Class可以更好的面向对象编程，使用模块加载方便模块化编程，当然考虑到
浏览器兼容性，我们在实际开发中需要使用babel进行编译。

### 4.对js原型的理解

### 5.对js模块化的理解

### 6.如何实现一个JS的AMD模块加载器

### 7.简要介绍事件代理，以及什么时候使用

## Node.js部分
### 1.Express中实现中间件的原理


## CSS(3)部分
### 1.水平居中的方法
1.元素为行内元素，设置父元素text-align:center

2.如果元素宽度固定，可以设置左右margin为auto;

3.如果元素为绝对定位，设置父元素position为relative，元素设left:0;right:0;margin:auto;

4.使用flex-box布局，指定justify-content属性为center

5.display设置为tabel-ceil

### 2.垂直居中的方法

### 3.如何实现一个自适应的正方形

## HTML(5)
### 1.viewport的常见设置有哪些

### 2.简要介绍HTML5的新特性

### 3.HTML5的存储方案有哪些

### 4.

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

### 2.cookie和session的异同
cookie和session都可以用来存储用户信息，cookie存放于客户端，session存放于服务端，因为cookie存放于客户端
有可能被窃取，因此cookie一般用来存放不敏感的信息，如用户设置的网站主题等，敏感的信息采用session存储，如用户
的登陆信息，session可以存放于文件、数据库、内存中都可以，cookie可以服务端响应的时候设置，也可以客户端通过js设置
cookie会在请求时在http首部发送给客户端，cookie一般在客户端有大小限制，一般为4k。

### 3.HTTP和HTTPS的区别
首先HTTP和HTTPS的默认端口号就不一样，HTTP的默认端口号为80，HTTPS的默认端口号为443，HTTP在传输过程中使用的是明文
传输，内容可能被窃取，而且无法验证通信方的身份，还有可能遭遇身份伪装，而HTTPS在应用层和传输层之间增加了ssl协议用来加密
内容，因此通过证书验证来验证身份，即使数据被窃取也无法解密，数据的传输更加安全。

### 4.ssl加密使用了那种算法，如何加密

### 5.TCP三次握手的过程，为什么是三次而不是四次？


### 6.TCP的四次挥手

### 7.HTTP报文的格式，传输中以何种方式传输

### 8.常见的HTTP头部
可以将HTTP首部分为通用首部、请求首部、响应首部、实体首部，通用首部表示一些通用信息，如Date表示报文创建时间，请求首部就是请求报文中
独有的，如cookie、和缓存相关的If-Modified-Since，响应首部就是响应报文中独有的，如set-cookie和重定向有关的location，实体首部用来
描述实体部分，如Allow用来描述可执行的请求方法，Content-Type描述主体类型，Content-Encoding描述主体的编码方式

参考：

[HTTP权威指南](https://book.douban.com/subject/10746113/)

### 9.HTTP状态的简要分类
可以按照HTTP状态码的第一个数字分类，1xx表示信息，2xx表示成功，3xx表示重定向，这里需要注意的是304，表示未修改，
4xx表示客户端错误，最常见的是404，5xx表示服务端错误

### 10.HTTP状态码101、200、301、302、304的具体含义
101：切换协议 200：正常，OK，301：永久重定向，302：临时重定向，304：未修改

### 11.301和302的区别


### 12.简要介绍一次302的过程

### 13.HTTP2.0的简要介绍

### 14.用户登陆过程的简要说明

### 15.tcp和udp的区别

### 16.udp的阻塞机制，如何处理


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

## React
### 1.虚拟DOM的原理
我们知道前端的DOM是一棵树，对于一个element来说，我们需要关注的是这个element的
tagName、属性、以及子元素，而这完全可以用一个js对象来表示，比如，使用tagName属性
来说明标签名，将所有的属性和值作为一个对象表示为props，children属性来表示这个element的
子元素，同样有了这个js对象，我们就可以构建一棵真实的DOM树，我们可以在每一次元素也就是js对象
有任何变动的时候来重新构造一棵树，将这棵新的树与旧的DOM数进行比对，找出真正差异的地方，然后
将这些差异应用在真实的DOM中，也就实现了一个简单的Vitual DOM算法。

参考
[深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)

### 2.简要介绍一下React组件的生命周期
React的组件在第一次挂载的时候回首先获得父组件传递的props，接着获取初始的state值，接着经历挂载
阶段的三个生命周期函数也就是ComponentWillMount、render、ComponentDidMount，这三个函数
分别代表着组件将会挂载、组件渲染、组件挂载完毕三个阶段。在组件挂载完成之后，组件的props和state的任一
改变都会导致组件进入更新状态，在组件更新阶段如果是props改变，则进入ComponentWillReceiveProps函数，
接着进入ComponetShouldUpdate进行判定是否需要更新，如果是state的改变则直接进入ComponentShouldUpdate
判定，这个默认是true，当判定不需要更新的话，组件继续运行，需要更新则依次进入ComponentWillUpdate、render、
ComponentDidUpdate三个生命周期函数，依次代表着组件将要更新、组件在渲染、组件更新完毕。当组件卸载时，会首先
进入生命周期函数ComponentWillUnmount，之后才进行卸载。如下图：
![](./image/react1.png)

## Angular
### 1.依赖注入的原理

## Vue

## Web安全

## SQL

## 其他
