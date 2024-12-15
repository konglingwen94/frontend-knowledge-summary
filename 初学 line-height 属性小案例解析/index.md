

以下是对这段 HTML5 文件代码的讲解文章：

> online preview
>https://konglingwen94.github.io/frontend-knowledge-summary/%E5%88%9D%E5%AD%A6%20line-height%20%E5%B1%9E%E6%80%A7%E5%B0%8F%E6%A1%88%E4%BE%8B%E8%A7%A3%E6%9E%90.html


> source code
>https://github.com/konglingwen94/frontend-knowledge-summary/blob/master/%E5%88%9D%E5%AD%A6%20line-height%20%E5%B1%9E%E6%80%A7%E5%B0%8F%E6%A1%88%E4%BE%8B%E8%A7%A3%E6%9E%90.html


### HTML5 文件结构分析

这段代码创建了一个动态文本容器，用户可以通过调整控件来更改文本的字体、大小和行高。代码结合了 HTML、CSS 和 JavaScript，提供了良好的用户交互体验。以下是对代码的详细解析：

#### 1. 文档声明与基本设置

```html
<!DOCTYPE HTML>
<html id="html">
<head>
<meta charset="utf-8">
<title>line-height</title>

```

+ `<!DOCTYPE HTML>`: 声明文档类型为 HTML5。
+ `<meta charset="utf-8">`: 设置字符编码为 UTF-8。
+ `<title>line-height</title>`: 设置网页标题为“line-height”。

#### 2. 样式设置

```css
<style>
    * {    
            font:22px "microsoft yahei";
    }
    body {    
            text-align:center;
    }
    #wrap {    
            height:340px;
            margin-bottom:30px;
    }
    #contain {    
            background-color:#ccc;
            line-height:200px;
            font-size:16px;
            text-align:center;
            position:relative;
            width:100%;
    }
    hr.middleline {
            border:0;
            height:1%;
            position:absolute;
            top:49.5%;
            width:100%;
            margin:0;
            background:red;
            min-height: 1px;
    }
    .baseline {    
            position:absolute;
            top:49.5%;
            border: 0;
            width:800px;
            margin:0;
            height:1%;
            background:blue;
            left:0;
            min-height: 1.7px;
    }
    /* 其他样式规则 */
</style>

```

+ 使用通配符选择器设置默认字体为“Microsoft YaHei”并调整字体大小。
+ `#wrap` 和 `#contain` 设置容器的高度和背景颜色。
+ 使用 `hr` 标签创建分割线，通过 CSS 设置其位置和样式。

#### 3. 结构与内容

```html
<body id="body">
    <div id="wrap">
        <div id="contain">
            <span class="text" id="mark"><mark id="spinx">spinx — 国 - </mark><hr class="baseline" /></span><span id="x">x</span> 
            <hr class="middleline" />
        </div>

    </div>

    <!-- 其他内容 -->
</body>

```

+ 包含文本的 `<div>`，其中 `<mark>` 标签用于突出显示文本。
+ 通过 `hr` 标签分隔不同的部分，增强视觉效果。

#### 4. 控件与用户交互

```html
<div id="" class="font">
    <span id="" class="yahei">
        <label for="rdo1"><strong>微软雅黑</strong>：</label><input type="radio" name="radio" class="radio" id="rdo1" />
    </span>

    <!-- 其他字体选项 -->
</div>

```

+ 提供多个单选按钮，允许用户选择不同的字体和对齐方式。
+ 每个选项都有对应的标签，提升可用性。

#### 5. 通过滑块调整样式

```html
<div id="" class="controls-range">
    <span class="btn">容器大小<span id="number" >16</span>px</span>

    <span class="fs">0<input type="range" id="range" name="" value="16" max="300">300</span>

    <!-- 其他调整控件 -->
</div>

```

+ 使用 `<input type="range">` 创建滑块控件，允许用户调整容器大小、字体大小和行高。
+ 每个滑块的值动态更新，显示在对应的 `<span>` 中。

#### 6. JavaScript 交互逻辑

```javascript
<script type="text/javascript">
    var obtn = {
        rdo1:function(){
            omark.style.fontFamily="Microsoft yahei";
        },
        // 其他字体选择函数
        bindEvent:function (){
            var rdos = document.getElementsByClassName("radio");
            var self = this;
            for (var i=0;i < rdos.length ;i++ ){
                var el = rdos[i];
                rdos[i].onclick=self[el.id];
            }
        }
    };
    obtn.bindEvent();
```

+ `obtn` 对象管理用户交互，处理字体选择和样式调整。
+ `bindEvent` 方法将单选按钮与相应的样式函数绑定，确保用户点击后能即时反映在页面上。

#### 7. 总结

这段代码通过结合 HTML、CSS 和 JavaScript，实现了一个功能丰富的文本样式调整器。用户可以通过简单的交互操作，动态更改文本的外观，了解 CSS 中 `line-height` 和其他属性的实际效果。这种实时反馈的设计不仅提升了用户体验，也为学习 CSS 提供了直观的方式。


