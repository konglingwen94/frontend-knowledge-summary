

以下是对这段 HTML5 文件代码的讲解文章：

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



> source code

```html
<!DOCTYPE HTML>
<html id="html">
<head>
<meta charset="utf-8">
<title>line-height</title>
<script type="text/javascript" src="../../jquery.js"></script>
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
    hr.middleline{  
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
            background:blue content-box;
            left:0;
            min-height: 1.7px;
         }
        .font span{ 
                margin-right:70px;
             }
        label strong{   
                cursor:pointer;
             }
        mark {  
                font-size:100px;
                font:inherit;
                display:inline-block;
                line-height:100px;
             }
        .font input {   
                width:30px;
                height:30px;
                vertical-align: text-bottom;
                cursor:pointer;
             }
        .btn {  
                border-radius:10px;
                margin-top:40px;
                display:inline-block;
                background-color:#ccc;
                line-height:70px;
                width:200px;
                text-align:center;
             }
        span.text { 
                vertical-align:middle;
                position:relative;
                font-family:simsun;
                font-size:100px;
             }
        .controls-range input{  
                width:370px;
             }
        .btn span { 
                color:red;
                font-size:30px;
                font-weight:bold;
                vertical-align:-4px;
                display:inline-block;
                width:60px;
                text-align:center;
             }
        div.buttons button{ 
                width:180px;    
                height:70px;
                border-radius:10px;
                background-color:pink;
             }
        div.buttons input { 
                width:50px;
                height:50px;
                vertical-align: -15px;
             }
        div.buttons {   
                margin-top:30px;
             }
        span.inline-block { 
                margin:0;
             }
        span#x {    
                background-color:pink;
             }
</style>
</head>
<body id="body">
    <div id="wrap" class="">
        <div id="contain">
        <span class="text" id="mark"><mark id="spinx">spinx — 国 - </mark><hr class="baseline" /></span><span id="x">x</span> 
        <hr class="middleline" />
        </div>
    </div>
    <div id="" class="font">
        <span id="" class="yahei">
            <label for="rdo1"><strong>微软雅黑</strong>：</label><input type="radio" name="radio" class="radio" id="rdo1" />
        </span>
        <span id="" class="simsun">
            <label for="rdo2"><strong>SimSun</strong>：</label><input type="radio" name="radio" class="radio" id="rdo2" checked/>
        </span>
        <span id="" class="kaiti">
            <label for="rdo3"><strong>baseline</strong>：</label><input type="radio" name="radio2" class="radio" id="rdo3" />
        </span>
        <span id="" class="Arial">
            <label for="rdo4"><strong>middle</strong>：</label><input type="radio" name="radio2" class="radio" id="rdo4" checked/>
        </span>
        <span id="" class="inline">
            <label for="rdo5"><strong>inline</strong>：</label><input type="radio" name="radio1" class="radio" id="rdo5" />
        </span>
        <span id="" class="inline-block">
            <label for="rdo6"><strong>inline-block</strong>：</label><input type="radio" name="radio1" class="radio" id="rdo6" checked/>
        </span>
    </div>
    <div id="" class="controls-range">
        <span class="btn">容器大小<span id="number" >16</span>px</span>
        <span class="fs">0<input type="range" id="range" name="" value="16" max="300" >300</span>
        <span class="btn">文字大小<span id="number1" >100</span>px</span>
        <span class="fs">0<input type="range" id="range1" name=""  max="200" min="0" value="100">200</span><br>
        <span class="btn lht">容器行高<span id="inner1">200</span>px</span>
        <span>0<input type="range" id="nmb1" class="nmb" min="0" value="200" max="300">300</span>
        <span class="btn lht" >文字行高<span id="inner2">100</span>px</span>
        <span class="">0<input type="range" id="nmb2" class="nmb" value="100" min="0" max="300">300</span>
    </div>
    <script type="text/javascript">
        var obtn = {
            rdo1:function(){
                omark.style.fontFamily="Microsoft yahei";
            },
            rdo2:function(){
                omark.style.fontFamily="Simsun";
            },
            rdo3:function(){
                omark.style.verticalAlign="baseline";
            },
            rdo4:function(){
                omark.style.verticalAlign="middle";
            },
            rdo5:function(){
                ospx.style.display="inline";
            },
            rdo6:function(){
                ospx.style.display="inline-block";
            },
            bindEvent:function (){
                var rdos = document.getElementsByClassName("radio");
                var self = this;
                for (var i=0;i < rdos.length ;i++ )
                {
                    var el = rdos[i];
                    rdos[i].onclick=self[el.id];
                }
            }
        };
        obtn.bindEvent();
        var $ = function (id){return document.getElementById(id)};
        var ofs = $("btn");
        var orge = $("range");
        var onmb = $("number");
        var orge1 = $("range1");
        var onmb1 = $("number1");
        var omark = $("mark");
        var text = $("contain");
        var ox = $("x");
            orge.oninput=function (){
                text.style.fontSize=orge.value+"px";
                onmb.innerHTML=orge.value;
                ox.style.fontSize=orge.value+"px";
            }
            orge1.oninput=function (){
                omark.style.fontSize=orge1.value+"px";
                onmb1.innerHTML=orge1.value;
            }
        var ospx = $("spinx");
        var odl = $("nmb1");
        var onmb2 = $("nmb2");
        var oner1 = $("inner1");
        var oner2 = $("inner2");
            odl.oninput=function (){
                text.style.lineHeight=odl.value+"px";
                oner1.innerHTML=odl.value;
            }
            onmb2.oninput=function (){
                ospx.style.lineHeight=onmb2.value+"px";
                oner2.innerHTML=onmb2.value;
            }
    </script>
</body>
</html>
```
