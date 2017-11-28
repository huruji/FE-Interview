## HTML(5)
### 1.viewport的常见设置有哪些
viewport常常使用在响应式开发以及移动web开发中，viewport顾名思义就是用来设置视口，主要是规定视口的宽度、视口的初始缩放值、
视口的最小缩放值、视口的最大缩放值、是否允许用户缩放等。一个常见的viewport设置如下：
```html
<meta name="viewport"  content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width" />
```
其中同时设置width和initial-scale的目的是为了解决iphone、ipad、ie横竖屏不分的情况，因为这两个值同时存在时会取较大值。

参考：

> [A tale of two viewports — part one](https://www.quirksmode.org/mobile/viewports.html) [(译)](http://weizhifeng.net/viewports.html)

> [A tale of two viewports — part two](https://www.quirksmode.org/mobile/viewports2.html) [(译)](http://weizhifeng.net/viewports2.html)

> [Meta viewport](https://www.quirksmode.org/mobile/metaviewport/)

### 2.简要介绍HTML5的新特性
首先HTML5为了更好的实践Web语义化，增加了header、footer、nav、aside、article、section等语义化标签。
在表单方面，为了增强表单，为input增加color、email、date、range等类型，在存储方面提供了sessionStorage
、localStorage和离线存储，通过这些存储方式方便数据在客户端的存储和获取，在多媒体方面规定了音频和视频元素audio和vedio；
另外还有地理定位、canvas画布、拖放、多线程编程的web workers和websocket协议

### 3.HTML5的存储方案有哪些
HTML5提供了sessionStorage、localStorage和离线存储作为新的存储方案，其中sessionStorage和localStorage
都是采用键值对的形式存储，两者都是通过setItem、getItem、removeItem来实现增删查改，而sessionStorage是会话存储，也就是说
当浏览器关闭之后sessionStorage也自动清空了，而localStorage不会，它没有时间上的限制。离线存储也就是应用程序缓存，这个通常用来
确保web应用能够在离线情况下使用，通过在html标签中属性manifest来声明需要缓存的文件，这个属性的值是一个包含需要缓存的文件的文件名的文件，
这个manifest文件声明的缓存文件可在初次加载后缓存在客户端，可以通过更新这个manifest文件来达到更新缓存文件的目的。

### 4.块级元素和行内元素有哪些？
块级元素有表示布局类的div、section、header、footer、aside、nav、article等，列表类ul li、ol之类的，form、p、table、标题h1~h6
行内元素：a、span、button、input、select、textarea、i、em、strong

参考：

[前端入门培训（一）](http://www.jianshu.com/p/0122c846a0bd)
