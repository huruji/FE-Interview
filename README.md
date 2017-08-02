# 前端笔试面试简答题汇总

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
### 3.水平居中的方法
1.元素为行内元素，设置父元素text-align:center

2.如果元素宽度固定，可以设置左右margin为auto;

3.如果元素为绝对定位，设置父元素position为relative，元素设left:0;right:0;margin:auto;

4.使用flex-box布局，指定justify-content属性为center

5.display设置为tabel-ceil

### 4.垂直居中的方法

