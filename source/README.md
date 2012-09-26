Poker.JS
=================

*****************************************
#Provided 'Poker' namespace and 6 methods
*****************************************
### Draw card number side
```text
Poker.getCardImage  ([size[, suit[, point]]])
Poker.getCardCanvas ([size[, suit[, point]]])
Poker.getCardData   ([size[, suit[, point]]])
```
```text
size  - Height pixel of card. The ratio of card width and height is fixed to 3:4.
          Default value is 200.
suit  - Poker suit. The value is case insensitive and it should be one of these value in []: 
          ['hearts', 'diamonds', 'spades', 'clubs'] 
          When card point is 'JOKER', 'heart' or 'diamonds' means big joker, 'spades' or 'clubs' means little joker.
          Default value is 'hearts'.
point - Card point. The value is case insensitive and it should be one of these value in []: 
        ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'JOKER']
        Default value is 'JOCKER'.
```
```js
//Example:
document.body.appendChild(Poker.getCardCanvas(100, 'hearts', 'Q'));
```

### Draw card back side
```text
Poker.getBackImage  ([size[, foregroundColor, backgroundColor]])
Poker.getBackCanvas ([size[, foregroundColor, backgroundColor]])
Poker.getBackData   ([size[, foregroundColor, backgroundColor]])
```
```text
size            - Height pixel of card. The ratio of card width and height is fixed to 3:4.
                    Default value is 200.
foregroundColor - Foreground color. Default value is '#AA2222'.
backgroundColor - Background color. Default value is '#BB5555'.
```
```js
//Example:
document.body.appendChild(Poker.getBackCanvas(300, '#2E319C', '#7A7BB8'));
```

***************************************************************
#Extend 2 public mothods into `window.CanvasRenderingContext2D`
***************************************************************
### Draw card back side
```text
canvas.drawPokerBack ([x, y[, size[, foregroundColor[, backgroundColor]]]])
```
```text
x, y            - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size            - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
foregroundColor - Foreground color. Default value is '#AA2222'.
backgroundColor - Background color. Default value is '#BB5555'.
```
```js
//Example:
canvas.drawPokerBack (10, 10, 300, '#a22', '#b55')
canvas.drawPokerBack (375, 400, 100, '#2E319C', '#7A7BB8');
```

### Draw card number side
```text
canvas.drawPokerCard ([x, y[, size[, suit[, point]]]])
```
```text
x, y  - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size  - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
suit  - Poker suit. The value is case insensitive and it should be one of these value in []: 
        ['hearts', 'diamonds', 'spades', 'clubs'] 
        When card point is 'JOKER', 'heart' or 'diamonds' means big joker, 'spades' or 'clubs' means little joker.
        Default value is 'hearts'.
point - Card point. The value is case insensitive and it should be one of these value in []: 
        ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'JOKER']
        Default value is 'JOCKER'.
```
```js
//Example:
canvas.drawPokerCard (0, 400, 100, 'hearts', 'joker');
canvas.drawPokerCard (0, 400, 100, 'hearts', 'Q');
```

***************************************************************
#Extend 9 public mothods into `window.CanvasRenderingContext2D`
***************************************************************
### Draw round corner rectangle
```text
canvas.roundRect       ([x, y[, width, height[, radius[, [direction]]]]])
canvas.strokeRoundRect ([x, y[, width, height[, radius[, [direction]]]]])
canvas.fillRoundRect   ([x, y[, width, height[, radius[, [direction]]]]])
```
```text
x, y          - The x, y coordinate of top left corner of the rectangle in canvas. Default value is 0, 0.
width, height - Width and height of the rectangle. Default value of width and height both are 200.
radius        - Radius of corner round. Default value is 20.
direction     - Direction of corner round. Boolean true means inward, false means outward. Default value is false.
```
```js
//Example:
canvas.roundRect (0, 0, 200, 200, 30);
canvas.roundRect (50, 50, 100, 100, 30, true);
```

### Draw SVG curve
```text
canvas.svgCurve (x, y, size, svgPath)
```
```text
x, y    - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size    - The pixel size of the curve.
svgPath - Value of property 'd' of SVG 'path' method.
          When create the curve by svg software, please move the origin of coordinate be 0,0.
          And keep the bigger size of height and width to 200px.
          Don't use AQ or T methon in svg software, browser canvas have not relative methon to render it.
```
```js
//Example, draw a heart symbol:
canvas.svgCurve ('M100,30C60,7 0,7 0,76C0,131 100,190 100,190C100,190 200,131 200,76C200,7 140,7 100,30z', 0, 0, 200));
```

### Draw poker symbol
```text
canvas.drawPokerSymbol   ([x, y[, size[, symbol]]])
canvas.strokePokerSymbol ([x, y[, size[, symbol]]])
canvas.fillPokerSymbol   ([x, y[, size[, symbol]]])
```
```text
x, y   - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size   - The pixel size of symbol. Default value is 200.
symbol - The name of symbol.  The value is case insensitive and it should be one of these value in []:
         ['hearts', 'diamonds', 'spades', 'clubs']
         ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
         ['JOKER']  // uppercase 'JOKER'
         ['CROWN']  // a part of crown, to jointing a crown of JOKER card
         ['NINE']   // bold '9' for jointing '99' pattern 
```
```js
//Example:
canvas.fillPokerSymbol ('hearts', 0, 0, 200);
```

### Draw crown
```text
canvas.drawPokerCrown ([x, y[, size[, startColor, endColor[, fillColor]]]])
```
```text
x, y       - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size       - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
startColor - Start color of gradient background color. Default value is '#FDF98B'.
endColor   - End color of gradient background color. Default value is '#E7BD4F'.
fillColor  - Fill color of jewel of crown. Default value is '#FFFFFF'.
```
```js
//Example:
canvas.drawPokerCrown(0, 0, 200);
```

### Draw blank card
```text
canvas.drawEmptyCard ([x, y[, size[, startColor, endColor]]])
```
```text
x, y       - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size       - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
startColor - Start color of gradient background color. Default value is '#AA2222'.
endColor   - End color of gradient background color. Default value is '#BB5555'.
```
```js
//Example:
canvas.drawEmptyCard(0, 0, 200);
```

*********************************************
Chinese version readme 中文版本读我文档
*********************************************

************************
#提供了'Poker'命名空间和6个方法
************************
### 画牌面
```text
Poker.getCardImage  ([size[, suit[, point]]])
Poker.getCardCanvas ([size[, suit[, point]]])
Poker.getCardData   ([size[, suit[, point]]])
```
```text
size  - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
suit  - 牌面花色。取值大小写不敏感，必须为下列[]内的值之一：
        ['hearts', 'diamonds', 'spades', 'clubs']
        值对应红桃，方块，黑桃，梅花
        当牌面点数为'JOKER'时，红桃和方块表示牌为大王；黑桃和梅花表示牌为小王。
        缺省值为'hearts'。
point - 牌面点数。取值大小写不敏感，必须为下列[]内的值之一：
        ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'JOKER']
        'JOKER'表示大王小王。缺省值为'JOCKER'。
```
```js
//例子:
document.body.appendChild(Poker.getCardCanvas(100, 'hearts', 'Q'));
```

### 画牌背
```text
Poker.getBackImage  ([size[, foregroundColor, backgroundColor]])
Poker.getBackCanvas ([size[, foregroundColor, backgroundColor]])
Poker.getBackData   ([size[, foregroundColor, backgroundColor]])
```
```text
size            - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
foregroundColor - 前景色。缺省值为'#a22'。
backgroundColor - 背景色。缺省值为'#b55'。
```
```js
//例子:
document.body.appendChild(Poker.getBackCanvas(300, '#2E319C', '#7A7BB8'));
```

*************************************************
#在`window.CanvasRenderingContext2D`里扩展了2个公开方法
*************************************************
### 画牌背
```text
canvas.drawPokerBack ([x, y[, size[, foregroundColor[, backgroundColor]]]])
```
```text
x, y            - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size            - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
foregroundColor - 前景色。缺省值为'#a22'。
backgroundColor - 背景色。缺省值为'#b55'。
```
```js
//例子：
canvas.drawPokerBack (10, 10, 300, '#a22', '#b55')
canvas.drawPokerBack (375, 400, 100, '#2E319C', '#7A7BB8');
```

### 画牌面
```text
canvas.drawPokerCard ([x, y[, size[, suit[, point]]]])
```
```text
x, y  - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size  - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
suit  - 牌面花色。取值大小写不敏感，必须为下列[]内的值之一：
        ['hearts', 'diamonds', 'spades', 'clubs']
        值对应红桃，方块，黑桃，梅花
        当牌面点数为'JOKER'时，红桃和方块表示牌为大王；黑桃和梅花表示牌为小王。
        缺省值为'hearts'。
point - 牌面点数。取值大小写不敏感，必须为下列[]内的值之一：
        ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'JOKER']
        'JOKER'表示大王小王。缺省值为'JOCKER'。
```
```js
//例子：
canvas.drawPokerCard (0, 400, 100, 'hearts', 'joker');
canvas.drawPokerCard (0, 400, 100, 'hearts', 'Q');
```

*************************************************
#在`window.CanvasRenderingContext2D`里扩展了9个私有方法
*************************************************
### 画圆角矩形
```text
canvas.roundRect       ([x, y[, width, height[, radius[, [direction]]]]])
canvas.strokeRoundRect ([x, y[, width, height[, radius[, [direction]]]]])
canvas.fillRoundRect   ([x, y[, width, height[, radius[, [direction]]]]])
```
```text
x, y          - 矩形的左上角在Canvas里的坐标。缺省值为0, 0。
width, height - 矩形的宽和高。宽和高的缺省值都是200。
radius        - 圆角的半径。缺省值为20。
direction     - 圆角的方向。布尔值true表示圆角内凹，false表示圆角外凸。缺省值为false。
```
```js
//例子：
canvas.roundRect (0, 0, 200, 200, 30);
canvas.roundRect (50, 50, 100, 100, 30, true);
```

### 画SVG曲线
```text
canvas.svgCurve (x, y, size, svgPath)
```
```text
x, y    - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size    - 曲线的象素尺寸。
svgPath - SVG的path方法使用的d属性值。
          使用SVG软件来创建曲线时，请把曲线原点置为0,0。
          确保曲线的宽和高里较大的那个值为200象素。
          不要在软件里使用AQ或T方法，浏览器的canvas没有对应的方法来渲染。
```
```js
//例子，画一个心型符号：
canvas.svgCurve ('M100,30C60,7 0,7 0,76C0,131 100,190 100,190C100,190 200,131 200,76C200,7 140,7 100,30z', 0, 0, 200));
```

### 画扑克符号
```text
canvas.drawPokerSymbol   ([x, y[, size[, symbol]]])
canvas.strokePokerSymbol ([x, y[, size[, symbol]]])
canvas.fillPokerSymbol   ([x, y[, size[, symbol]]])
```
```text
x, y   - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size   - 符号的象素尺寸。缺省值为200。
symbol - 符号的名称，取值大小写不敏感，必须为下列[]内的值之一：
         ['hearts', 'diamonds', 'spades', 'clubs']
         ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
         ['JOKER']  // 大写的'JOKER'
         ['CROWN']  // 皇冠的一部分，用来为大小王牌拼出王冠
         ['NINE']   // 粗粗的'9'用来拼出'99'图案

```
```js
//例子：
canvas.fillPokerSymbol ('hearts', 0, 0, 200);
```

### 画皇冠
```text
canvas.drawPokerCrown ([x, y[, size[, startColor, endColor[, fillColor]]]])
```
```text
x, y       - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size       - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
startColor - 背景渐变色的起始颜色。缺省值为'#FDF98B'。
endColor   - 背景渐变色的终止颜色。缺省值为'#E7BD4F'。
fillColor  - 皇冠上的宝石填充色。缺省值为'#FFFFFF'。
```
```js
//例子：
canvas.drawPokerCrown(0, 0, 200);
```

### 画空白牌
```text
canvas.drawEmptyCard ([x, y[, size[, startColor, endColor]]])
```
```text
x, y       - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size       - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
startColor - 背景渐变色的起始颜色。缺省值为'#AA2222'。
endColor   - 背景渐变色的终止颜色。缺省值为'#BB5555'。
```
```js
//例子：
canvas.drawEmptyCard(0, 0, 200);
```
