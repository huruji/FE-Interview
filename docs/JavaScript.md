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
加载方案，通过export和import来导出和导入模块。

### 6.如何实现一个JS的AMD模块加载器
AMD是解决JS模块化的规范，实现这样的一个模块加载器的关键在于解决每个模块依赖的解析。首先我们需要有一个模块的入口，也就是主模块，比如我们使用
一个use方法作为入口，之后以数组的形式列出了主模块的依赖，这时候我们要想到的是如何解析这一个一个的依赖，也就是如何解析出一个个js文件的绝对地址，
我们可以制定一个规则，如默认为主模块的路径为基准，也可以像requirejs一样使用一个config方法来指定一个baseurl和为每一个模块指定一个path，最后就是
模块的问题，我们需要暴露一个define方法来定义模块，也就是模块名，依赖以及每个模块的各自代码。其中每个模块的代码都应该在依赖加载完之后执行，这就是一个
回调函数，模块的依赖、回调函数、状态、名字、模块导出等可以看做是一个模块的属性，因此我们可以使用一个对象来保存所有的模块，然后每个模块的各个属性存放在一个对象中。
最后我们来考虑一下模块加载的问题，上面我们说到use方法，use方法的逻辑就是遍历依赖，然后对每个模块进行加载，也就是解析地址然后使用插入script，我们假设
使用loadModule方法来加载依赖，那么这个函数的逻辑就应该是检查我们的模块是否已经加载过来判断是否需要加载，如果这个模块还有依赖则调用use方法继续解析，模块依赖中我们
还没有提到的问题就是每个模块的依赖是需要被传进模块里来使用的，解决方法就是每个模块的callback方法执行后的返回的export记录下来然后使用apply之类的方法将这些参数传递进去。
大致就是这样子的。

参考：

[动手实现一个AMD模块加载器(一)](https://github.com/huruji/blog/issues/13)

[动手实现一个AMD模块加载器(二)](https://github.com/huruji/blog/issues/16)

[动手实现一个AMD模块加载器(三)](https://github.com/huruji/blog/issues/17)

### 7.简要介绍事件代理，以及什么时候使用，事件代理发生在事件处理流程的哪个阶段，有什么好处？
事件代理就是说我们将事件添加到本来要添加事件的父节点，将事件委托给父节点来触发处理函数，这通常会在
这通常会使用在大量的同级元素需要添加同一类事件的时候，比如一个动态的非常多的列表，需要为每个列表项都添加
点击事件，这时可以使用事件代理，通过判断e.target.nodeName来判断发生的具体元素，从而判断是否是在
列表项中触发，这样的好处是可以减少事件绑定，同时动态的DOM结构仍然可以监听。事件代理发生在冒泡阶段。

参考：

[事件代理](http://www.bubuko.com/infodetail-2290096.html)

[浅析JavaScript的事件代理和委托](https://yq.aliyun.com/articles/185645)

### 8.使用new操作符实例化一个对象的具体步骤
1.构造一个新的对象

2.将构造函数的作用域赋给新对象（也就是说this指向了新的对象）

3.执行构造函数中的代码

4.返回新对象

### 9.js如何判断网页中图片加载成功或者失败
使用onload事件运行加载成功，使用onerror事件判断失败

### 10.递归和迭代的区别是什么，各有什么优缺点？
程序调用自身称为递归，利用变量的原值推出新值称为迭代，递归的优点
大问题转化为小问题，可以减少代码量，同时应为代码精简，可读性好，
缺点就是，递归调用浪费了空间，而且递归太深容易造成堆栈的溢出。迭代的好处
就是代码运行效率好，因为时间只因循环次数增加而增加，而且没有额外的空间开销，
缺点就是代码不如递归简洁

参考：

[深究递归和迭代的区别、联系、优缺点及实例对比](http://blog.csdn.net/laoyang360/article/details/7855860)

[「递归」和「迭代」有哪些区别？](https://www.zhihu.com/question/20278387)
### 11.策略模式是什么，说一下你的理解？
策略模式就是说我们将一系列的算法封装起来，使其相互之间可以替换，封装的算法具有一定的独立性，不会随客户端的变化而变化，比较常见的使用常见就是类似于
表单验证这种多场景的情况，我们使用策略模式就可以避免使用一堆的if...else。

### 12.什么是事件循环（EVENT LOOP）？
我们常常说js是单线程的，是指js执行引擎是单线程的，除了这个单线程，还有一个
任务队列，在执行js代码的过程中，执行引擎遇到注册的延时方法，如定时器，DOM事件，
会将这些方法交给相应的浏览器模块处理，当这些延时方法有触发条件去触发的时候，
这些延时方法会被添加至任务队列，而这些任务队列中的方法只有js的主线程空闲了才会执行，
这也就是说我们常常用的定时器定的时间参数只是一个触发条件，具体多少时间后执行其实还需要看
js主线程空闲与否

参考：

[【转向Javascript系列】从setTimeout说事件循环模型](http://www.alloyteam.com/2015/10/turning-to-javascript-series-from-settimeout-said-the-event-loop-model/)

[深入浅出Javascript事件循环机制(上)](https://zhuanlan.zhihu.com/p/26229293)

[深入浅出JavaScript事件循环机制(下)](https://zhuanlan.zhihu.com/p/26238030)

[并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

### 13.原生JS操作DOM的方法有哪些？
获取节点的方法getElementById、getElementsByClassName、getElementsByTagName、
getElementsByName、querySelector、querySelectorAll,对元素属性进行操作的 getAttribute、
setAttribute、removeAttribute方法，对节点进行增删改的appendChild、insertBefore、replaceChild、removeChild、
createElement等

### 14.typeof操作符返回值有哪些，对undefined、null、NaN使用这个操作符分别返回什么
typeof的返回值有undefined、boolean、string、number、object、function、symbol。对undefined
使用返回undefined、null使用返回object，NaN使用返回number

### 15.实现一个类型判断函数，需要鉴别出基本类型、function、null、NaN、数组、对象？
只需要鉴别这些类型那么使用typeof即可，要鉴别null先判断双等判断是否为null，之后使用typeof判断，如果是obejct的话，再用Array.isArray判断
是否为数组，如果是数字再使用isNaN判断是否为NaN,（需要注意的是NaN并不是JavaScript数据类型，而是一种特殊值）如下：
```javascript
function type(ele) {
  if(ele===null) {
    return null;
  } else if(typeof ele === 'object') {
    if(Array.isArray(ele)) {
      return 'array';
    } else {
      return typeof ele;
    }
  } else if(typeof ele === 'number') {
    if(isNaN(ele)) {
      return NaN;
    } else {
      return typeof ele;
    }
  } else{
    return typeof ele;
  }
}
``` 

### 16.javascript做类型判断的方法有哪些？
typeof、instanceof 、 Object.prototype.toString()(待续)

### 17.JavaScript严格模式下有哪些不同？
+ 不允许不使用var关键字去创建全局变量，抛出ReferenceError
+ 不允许对变量使用delete操作符，抛ReferenceError
+ 不可对对象的只读属性赋值，不可对对象的不可配置属性使用delete操作符，不可为不可拓展的对象添加属性，均抛TypeError
+ 对象属性名必须唯一
+ 函数中不可有重名参数
+ 在函数内部对修改参数不会反映到arguments中
+ 淘汰arguments.callee和arguments.caller
+ 不可在if内部声明函数
+ 抛弃with语句

参考：

1.[javascript高级程序设计](https://book.douban.com/subject/10546125/)


### 18.setTimeout和setInterval的区别，包含内存方面的分析？
setTimeout表示间隔一段时间之后执行一次调用，而setInterval则是每间隔一段时间循环调用，直至clearInterval结束。
内存方面，setTimeout只需要进入一次队列，不会造成内存溢出，setInterval因为不计算代码执行时间，有可能同时执行多次代码，
导致内存溢出。

参考：

[JS 中settimeout和setinterval函数的区别](https://my.oschina.net/u/3636678/blog/1499852)

[setTimeout() 和 setInterval() 本质区别在哪里？](https://segmentfault.com/q/1010000005989491)

### 19.同源策略是什么？
同源策略是指只有具有相同源的页面才能够共享数据，比如cookie，同源是指页面具有相同的协议、域名、端口号，有一项不同就不是同源。
有同源策略能够保证web网页的安全性。

参考：

[前端必备HTTP技能之同源策略详解](http://www.jianshu.com/p/beb059c43a8b)

[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

[浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

### 20.ES6之前JavaScript如何实现继承？
ES6之前的继承是通过原型来实现的，也就是每一个构造函数都会有一个prototype属性，然后如果我们调用一个实例的方法或者属性，首先会在自身寻找，然后在
构造函数的prototype上寻找，而prototype本质上就是一个实例，因此如果prototype上还没有则会往prototype上的构造函数的prototype寻找，因此实现继承
可以让构造函数的prototype是父级的一个实例就是以实现继承。

### 21.如何阻止事件冒泡和默认事件？
标准的DOM对象中可以使用事件对象的stopPropagation()方法来阻止事件冒泡，但在IE8以下中IE的事件对象通过设置事件对象的cancelBubble属性为true来阻止冒泡；
默认事件的话通过事件对象的preventDefault()方法来阻止，而IE通过设置事件对象的returnValue属性为false来阻止默认事件。

### 22.addEventListener有哪些参数？
有三个参数，第一个是事件的类型，第二个是事件的回调函数，第三个是一个表示事件是冒泡阶段还是捕获阶段捕获的布尔值，true表示捕获，false表示冒泡

### 23.介绍一下Promise，底层如何实现？


### 24.如何实现懒加载？
懒加载就是根据用户的浏览需要记载内容，也就是在用户即将浏览完当前的内容时进行继续加载内容，这种技术常常用来加载图片的时候使用。我们判断用户是否即将浏览到底部之后进行在家内容
这时候可能会需要加载大量的内容，可以使用fragment来优化一下，因为大部分是使用滑动和滚轮来触发的，因此很有可能会不断触发，可以使用函数节流做一个优化，防止用户不断触发。

### 25.函数节流是什么？
函数节流就是让一个函数无法在很短的时间间隔内连续调用，而是间隔一段时间执行，这在我们为元素绑定一些事件的时候经常会用到，比如我们
为window绑定了一个resize事件，如果用户一直改变窗口大小，就会一直触发这个事件处理函数，这对性能有很大影响。

[什么是函数节流？](http://www.alloyteam.com/2012/11/javascript-throttle/)

### 26.浏览器内核有哪些？分别对应哪些浏览器？
常见的浏览器内核有Trident、Gecko、WebKit、Presto，对应的浏览器为Trident对应于IE，Gecko对应于火狐浏览器，Webkit有chrome和safari，Presto
有Opera。

### 27.什么是深拷贝，什么是浅拷贝？
浅拷贝是指仅仅复制对象的引用，而不是复制对象本身；深拷贝则是把复制对象所引用的全部对象都复制一遍。

### 28.原生js字符串方法有哪些？
简单分为获取类方法，获取类方法有charAt方法用来获取指定位置的字符，获取指定位置字符的unicode编码的charCodeAt方法，
与之相反的fromCharCode方法，通过传入的unicode返回字符串。查找类方法有indexof()、lastIndexOf()、search()、match()
方法。截取类的方法有substring、slice、substr三个方法，其他的还有replace、split、toLowerCase、toUpperCase方法。

### 29.原生js字符串截取方法有哪些？有什么区别？
js字符串截取方法有substring、slice、substr三个方法，substring和slice都是指定截取的首尾索引值，不同的是传递负值的时候
substring会当做0来处理，而slice传入负值的规则是-1指最后一个字符，substr方法则是第一个参数是开始截取的字符串，第二个是截取的字符数量，
和slice类似，传入负值也是从尾部算起的。

### 30.SVG和Canvas的区别？

### 31.介绍一下ES6的暂时性死区和块级作用域


### 32.请介绍一下装饰者模式，并实现
在不改变元对象的基础上，对这个对象进行包装和拓展（包括添加属性和方法），从而使这个对象可以有更复杂的功能。

### 33.介绍一下职责链模式？
将一个流程进行分解，让这个流程在多个对象中进行传递，由最后一个对象完成这个流程。通过职责链模式能够将流程进行分解，从而解耦。

### 33.介绍一下桶排序和基数排序、快速排序

### 34.请说一下实现jsonp的实现思路？
jsonp的原理是使用script标签来实现跨域，因为script标签的的src属性是不受同源策略的影响的，因此可以使用其来跨域。一个最简单的jsonp就是创建一个script标签，设置src为相应的url，在url之后添加相应的callback，格式类似于
url?callback=xxx，服务端根据我们的callback来返回相应的数据，类似于res.send(req.query.callback + '('+ data + ')')，这样就实现了一个最简单的jsonp

参考：

[动手实现一个JSONP]()

[jsonp的原理与实现](https://segmentfault.com/a/1190000007665361)

[fetch-jsonp源码](https://github.com/camsong/fetch-jsonp/blob/master/src/fetch-jsonp.js)
### 35.如何实现一个双向数据绑定？

### 36.如何实现一个前端模板引擎？

### 37.请简要介绍一下PWA？

### 38.chrome浏览器的JS引擎是哪个？这个引擎做了哪些优化？
chrome的JS引擎是V8，V8是谷歌公司使用C++开发的

参考：

[ 为什么V8引擎这么快？](http://blog.csdn.net/horkychen/article/details/7761199)

### 39.请介绍一下你所了解的函数式编程？

### 40.let和const的异同有哪些？
let和const都是对变量的声明，都有块级作用域的概念，不同的是const是对常量的声明，因此声明同时必须赋值，且之后不能更改，而let则可以。


### 41.将静态资源放在其他域名的目的是什么？
这样做的主要目的是在请求这些静态资源的时候不会发送cookie，节省了流量，需要注意的是cookie是会发送给子域名的（二级域名），所以这些静态资源是不会放在子域名下的，
而是单独放在一个单独的主域名下。同时还有一个原因就是浏览器对于一个域名会有请求数的限制，这种方法可以方便做CDN。

参考：

[为什么淘宝、腾讯等会把静态资源放在另外一个主域名下？](https://www.zhihu.com/question/20627139)

[为什么很多网站的静态资源会使用独立的域名？](https://www.zhihu.com/question/20534662)

### 42.前端如何实现PV和UV的统计？

### 43.简要介绍一下RSA

### 44.如何实现对一个DOM元素的深拷贝，包括元素的绑定事件？

### 45.canvas性能优化的方法有哪些？

### 46.介绍一下KMP算法？

### 47.简要介绍一下WebPack的底层实现原理？

### 48.简要介绍一下gulp的底层实现原理？

### 49.ajax的readyState有哪几个状态，含义分别是什么？
ajax的readyState共有5个状态，分别是0-4，其中每个数字的含义分别是0代表还没调用open方法，1代表的是未调用send方法，也就是还没发送数据给服务器
2代表的是还没有接收到响应，3代表的是开始接收到了部分数据，4代表的是接收完成，数据可以在客户端使用了。


### 50.对于ES7你了解多少？


### 51.请简要介绍一下service worker？

### 52.SPA的路由是如果实现的，如果你来做一个前端路由，你会怎么做？

### 53.AMD与CMD的区别有哪些？

### 54.听说过UMD吗？可以简要介绍一下吗？

### 55.百度的构建工具FIS你了解吗？
