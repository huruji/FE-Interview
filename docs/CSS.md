## CSS(3)部分
### 1.水平居中的方法
1.元素为行内元素，设置父元素text-align:center

2.如果元素宽度固定，可以设置左右margin为auto;

3.如果元素为绝对定位，设置父元素position为relative，元素设left:0;right:0;margin:auto;

4.使用flex-box布局，指定justify-content属性为center

5.display设置为tabel-ceil

### 2.垂直居中的方法
1.将显示方式设置为表格，display:table-cell,同时设置vertial-align：middle

2.使用flex布局，设置为align-item：center

3.绝对定位中设置bottom:0,top:0,并设置margin:auto

4.绝对定位中固定高度时设置top:50%，margin-top值为高度一半的负值

5.文本垂直居中设置line-height为height值

参考：

1.[CSS实现垂直居中的5种方法](https://www.qianduan.net/css-to-achieve-the-vertical-center-of-the-five-kinds-of-methods/)

2.[16种方法实现水平居中垂直居中](https://juejin.im/post/58f818bbb123db006233ab2a)

### 3.如何实现一个自适应的正方形
利用padding设置为百分比时是相对于父级元素的，因此同时设置width与padding-top(padding-bottom)为同一个百分数，
并且设置height:0即可实现一个正方形。

### 4.简要介绍一下flex布局

### 5.如何实现两列布局
1.将元素的display设置为行内元素

2.两个元素全部使用浮动

3.一个元素左浮动，第二个元素不便，同时设置一个margin-left值

4.使用flex-box布局

### 6.简要介绍一下CSS3的新特性
可以对CSS3的新特性做一个简单的分类，在布局方面新增了flex布局，在选择器方面新增了例如:first-of-type,nth-child等选择器，
在盒模型方面添加了box-sizing来改变盒模型，在动画方面增加了animation、2d变换、3d变换等。在颜色方面添加透明、rgba等，在字体方面
允许嵌入字体和设置字体阴影，同时当然也有盒子的阴影，最后还有关键的媒体查询。

### 7.如何使用CSS实现硬件加速？
硬件加速是指通过创建独立的复合图层，让GPU来渲染这个图层，从而提高性能，
一般触发硬件加速的CSS属性有transform、opacity、filter，为了避免2D动画在
开始和结束的时候的repaint操作，一般使用tranform:translateZ(0)

参考：

[CSS动画原理及硬件加速](http://www.cnblogs.com/shytong/p/5419565.html)

[CSS动画之硬件加速](https://www.w3cplus.com/css3/introduction-to-hardware-acceleration-css-animations.html)

[CSS3硬件加速也有坑！！！](https://div.io/topic/1348)

### 8.重绘和回流（重排）是什么，如何避免？
DOM的变化影响到了元素的几何属性（宽高）,浏览器重新计算元素的几何属性，其他元素的几何
属性和位置也会受到影响，浏览器需要重新构造渲染树，这个过程称为重排，浏览器将受到影响的部分
重新绘制到屏幕上的过程称为重绘。引起重排的原因有1.添加或者删除可见的DOM元素，2.元素位置、
尺寸、内容改变，3.浏览器页面初始化，4.浏览器窗口尺寸改变，重排一定重绘，重绘不一定重排，减少
重绘和重排的方法：1.不在布局信息改变时做DOM查询，2.使用cssText或者className一次性改变属性
3.使用fragment，4.对于多次重排的元素，如动画，使用绝对定位脱离文档流，让他的改变不影响到其他
元素

参考：

1.[高性能JavaScript 重排与重绘](http://www.cnblogs.com/zichi/p/4720000.html)

2.[网页性能管理详解](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

3.[重排重绘，看这一篇就够了](https://juejin.im/entry/582f16fca22b9d006b7afd89)

### 9.说一说你了解的圣杯布局和双飞翼布局？

### 10.说一说css3的animation
css3的animation是css3新增的动画属性，这个css3动画的每一帧是通过@keyframes来声明的，keyframes声明了动画的名称，通过from、to或者是百分比来定义
每一帧动画元素的状态，通过animation-name来引用这个动画，同时css3动画也可以定义动画运行的时长、动画开始时间、动画播放方向、动画循环次数、动画播放的方式，
这些相关的动画子属性有：animation-name定义动画名、animation-duration定义动画播放的时长、animation-delay定义动画延迟播放的时间、animation-direction定义
动画的播放方向、animation-iteration-count定义播放次数、animation-fill-mode定义动画播放之后的状态、animation-play-state定义播放状态，如暂停运行等、animation-timing-function
定义播放的方式，如恒速播放、艰涩播放等。

### 11.绝对定位和相对定位的区别？
绝对定位是相对于最近的已经定位的祖先元素，没有则相对于body，绝对定位脱离文档流，而相对定位是相对于元素在文档中的初始位置，并且
相对定位的元素仍然占据原有的空间。

### 12.说一下你了解的CSS选择器？

参考：

[CSS 选择器参考手册](http://www.w3school.com.cn/cssref/css_selectors.asp)


### 13.BFC是什么？介绍一下，如何触发BFC？
BFC也就是常说的块格式化上下文，这是一个独立的渲染区域，规定了内部如何布局，并且这个区域的子元素不会影响到外面的元素。其中比较重要的布局规则有内部box垂直放置、计算BFC的高度的时候，浮动元素也参与计算。
触发BFC的规则有根元素、浮动元素、position为absolute或fixed的元素、display属性为inline-block、table-cell、table-caption、flex、inline-fllex、overflow不为visible的元素。

参考：

[前端精选文摘：BFC 神奇背后的原理](http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)

[块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

### 14.CSS3动画如何实现暂停？
css3动画可以通过设置animation-play-state属性为paused来设置这个动画暂停。

### 15.说一说你知道哪些伪类选择器？

### 16.简要介绍一下一种css预处理器？