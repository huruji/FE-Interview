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

### 7.如何使用CSS实现硬件加速？

### 8.重绘和重流是什么，如何避免？