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
我们知道在es6之前，js没有类和继承的概念，js是通过原型来实现继承的。在js中一个构造函数默认自带有一个prototype属性，
这个的属性值是一个对象，同时这个prototype对象自带有一个constructor属性，这个属性指向这个构造函数，同时每一个实例
都有一个__proto__属性指向这个prototype对象，我们可以将这个叫做隐式原型，我们在使用一个实例的方法的时候，会先检查
这个实例中是否有这个方法，没有则会继续向上查找这个prototype对象是否有这个方法，刚刚我们说到prototype是一个对象，
那么也即是说这个是一个对象的实例，那么这个对象同样也会有一个__proto__属性指向对象的prototype对象。

### 5.对js模块化的理解
在ES6出现之前，js没有标准的模块化概念，这也就造成了js多人写作开发容易造成全局污染的情况，以前我们可能会采用立即执行
函数、对象等方式来尽量减少变量这种情况，后面社区为了解决这个问题陆续提出了AMD规范和CMD规范，这里不同于Node.js的
CommonJS的原因在于服务端所有的模块都是存在于硬盘中的，加载和读取几乎是不需要时间的，而浏览器端因为加载速度取决于网速，
因此需要采用异步加载，AMD规范中使用define来定义一个模块，使用require方法来加载一个模块，现在ES6也推出了标准的模块
加载方案，通过exports和require来导出和导入模块。

### 6.如何实现一个JS的AMD模块加载器

### 7.简要介绍事件代理，以及什么时候使用

### 8.使用new操作符实例化一个对象的具体步骤
1.构造一个新的对象

2.将构造函数的作用域赋给新对象（也就是说this指向了新的对象）

3.执行构造函数中的代码

4.返回新对象

### 9.js如何判断网页中图片加载成功或者失败
使用onload事件运行加载成功，使用onerror事件判断失败

### 10.递归和迭代的区别是什么，各有什么优缺点？

### 11.策略模式是什么，说一下你的理解？

### 12.什么是事件循环？

### 13.原生JS操作DOM的方法有哪些？