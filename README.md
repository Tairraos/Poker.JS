Poker.JS
=================

# Usage

First, load poker.js:
```html
<script src="poker.min.js"></script>
```

Then there have 3 ways to create card by your choice

## Way 1, Create DOM element
#### Call `Poker.getCardImage` or `Poker.getCardCanvas` to get <img> or <canvas> element
```js
//insert a <img> to the end of body
document.body.appendChild(Poker.getCardImage(60,'hearts','q'));
//insert a <canvas> to the end of body
document.body.appendChild(Poker.getCardCanvas(60,'hearts','q'));
```

## Way 2, Get base64 png image data
#### Call `Poker.getCardData` to get image data
```js
//get image data and store in variable pokerHQ
var pokerHQ = Poker.getCardData(60,'hearts','q');
```

## Way 3, Draw card in your own canvas
#### Add your own canvas to DOM
```html
<canvas id="myowncanvas" width="1280" height="720"></canvas>
```
#### Get canvas 2d object and draw card
```js
var canvas = document.getElementById('myowncanvas').getContext('2d');
canvas.drawPokerCard(10, 10, 120, 'hearts', '6');
```

*********************************************
# Methon and parameters

## Draw card number side

#### Method
```text
Poker.getCardImage  ([size[, suit[, point]]])
Poker.getCardCanvas ([size[, suit[, point]]])
Poker.getCardData   ([size[, suit[, point]]])
canvas.drawPokerCard ([x, y[, size[, suit[, point]]]])
```

#### Parameters
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

#### Example
```js
document.body.appendChild(Poker.getCardCanvas(100, 'hearts', 'Q'));
canvas.drawPokerCard (0, 400, 100, 'hearts', 'joker');
canvas.drawPokerCard (0, 400, 100, 'hearts', 'Q');
```

## Draw card back side

#### Method
```text
Poker.getBackImage  ([size[, foregroundColor, backgroundColor]])
Poker.getBackCanvas ([size[, foregroundColor, backgroundColor]])
Poker.getBackData   ([size[, foregroundColor, backgroundColor]])
canvas.drawPokerBack ([x, y[, size[, foregroundColor[, backgroundColor]]]])
```

#### Parameters
```text
x, y            - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
size            - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
foregroundColor - Foreground color. Default value is '#AA2222'.
backgroundColor - Background color. Default value is '#BB5555'.
```

#### Example
```js
document.body.appendChild(Poker.getBackCanvas(300, '#2E319C', '#7A7BB8'));
canvas.drawPokerBack (10, 10, 300, '#a22', '#b55')
canvas.drawPokerBack (375, 400, 100, '#2E319C', '#7A7BB8');
```

*********************************************
Chinese version readme 中文版本读我文档
*********************************************

# 使用方法

首先，加载 poker.js
```html
<script src="poker.min.js"></script>
```

接下去你可以从3种方法里选择一种来创建牌

## 方法1，创建DOM元素
#### 调用`Poker.getCardImage`或`Poker.getCardCanvas`来获取`<img>`或`<canvas>`元素
```js
//在body末尾插入一个<img>
document.body.appendChild(Poker.getCardImage(60,'hearts','q'));
//在body末尾插入一个<canvas>
document.body.appendChild(Poker.getCardCanvas(60,'hearts','q'));
```

## 方法2，获取base64的png图像数据
#### 调用`Poker.getCardData`来获取数据
```js
//获取图像数据并且存储在变量pokerHQ里
var pokerHQ = Poker.getCardData(60,'hearts','q');
```

## 方法3，在你自己的canvas里画牌
#### 在DOM里添加你自己的canvas容器
```html
<canvas id="myowncanvas" width="1280" height="720"></canvas>
```
#### 取得canvas的2d对象，在里面画牌
```js
var canvas = document.getElementById('myowncanvas').getContext('2d');
canvas.drawPokerCard(10, 10, 120, 'hearts', '6');
```

*********************************************
# 方法和参数

## 画牌面

#### 方法
```text
Poker.getCardImage  ([size[, suit[, point]]])
Poker.getCardCanvas ([size[, suit[, point]]])
Poker.getCardData   ([size[, suit[, point]]])
canvas.drawPokerCard ([x, y[, size[, suit[, point]]]])
```

#### 参数
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

#### 例子
```js
document.body.appendChild(Poker.getCardCanvas(100, 'hearts', 'Q'));
canvas.drawPokerCard (0, 400, 100, 'hearts', 'joker');
canvas.drawPokerCard (0, 400, 100, 'hearts', 'Q');
```

## 画牌背

#### 方法
```text
Poker.getBackImage  ([size[, foregroundColor, backgroundColor]])
Poker.getBackCanvas ([size[, foregroundColor, backgroundColor]])
Poker.getBackData   ([size[, foregroundColor, backgroundColor]])
canvas.drawPokerBack ([x, y[, size[, foregroundColor[, backgroundColor]]]])
```

#### 参数
```text
x, y            - 牌的左上角在Canvas里的坐标。缺省值为0, 0。
size            - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
foregroundColor - 前景色。缺省值为'#a22'。
backgroundColor - 背景色。缺省值为'#b55'。
```

#### 例子
```js
document.body.appendChild(Poker.getBackCanvas(300, '#2E319C', '#7A7BB8'));
canvas.drawPokerBack (10, 10, 300, '#a22', '#b55')
canvas.drawPokerBack (375, 400, 100, '#2E319C', '#7A7BB8');
```
