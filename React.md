## React
### 1.虚拟DOM的原理
我们知道前端的DOM是一棵树，对于一个element来说，我们需要关注的是这个element的
tagName、属性、以及子元素，而这完全可以用一个js对象来表示，比如，使用tagName属性
来说明标签名，将所有的属性和值作为一个对象表示为props，children属性来表示这个element的
子元素，同样有了这个js对象，我们就可以构建一棵真实的DOM树，我们可以在每一次元素也就是js对象
有任何变动的时候来重新构造一棵树，将这棵新的树与旧的DOM数进行比对，找出真正差异的地方，然后
将这些差异应用在真实的DOM中，也就实现了一个简单的Virtual DOM算法。

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

### 3.简要介绍一下React中的refs以及它的作用
ref允许我们访问DOM元素，我们通过在组件中指定ref属性，属性值为一个回调函数，这个回调函数接受一个DOM元素或者react组件
作为参数，当我们不得不要直接访问DOM元素的时候才去使用它，如我需要在组件加载完成就立即让组件中的表单有焦点，即触发
focus事件

### 4.简要介绍一下key以及它的作用
在react中我们渲染一个列表的时候，我们需要为每一个列表项指定一个唯一的key，当没有指定key时，会收到一个warning，
如果指定的key不唯一，只会渲染第一个指定唯一的key的那个元素，使用key可以使得DOM diff更加高效，避免不必要的
列表项更新

### 5.在实际开发中shouldComponentUpdate有什么作用

### 6.简要介绍一下Redux

### 7.setState的第二个参数是什么，作用又是什么？
setState的第二个参数是一个回调函数，组件更新完后执行的回调函数（setState函数是异步的）

### 8.简要介绍一下你所了解的flux架构的思想？

### 9.聊一聊你对React的DOM diff算法的理解

### 10.虚拟DOM的优缺点有哪些？
