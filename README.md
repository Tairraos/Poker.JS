Poker.JS
=================

# Usage

1. load poker.js: <script src="poker.min.js"></script>
2. add canvas to DOM: <canvas id="ct" width="1280" height="720"></canvas>
3. get canvas 2d object: canvas = document.getElementById('ct').getContext('2d');
4. draw card: canvas.drawPokerCard(10, 10, 120, 'hearts', '6');

*********************************************

# Public method (2)

## Draw card back side

canvas.drawPokerBack(x,y,size,color1,color2)
* x,y 左上角坐标，缺省值0,0
* size 牌高，宽高比固定为3:4，缺省值200
* color1 深色，缺省值'#a22'
* color2 浅色，缺省值'#b55'
例：
* canvas.drawPokerBack(10,10,300,'#a22','#b55')
* canvas.drawPokerBack(375,400,100,'#2E319C','#7A7BB8');

## Draw card number side

canvas.drawPokerCard(x,y,size,suit,point)
* x,y 左上角坐标，缺省值0,0
* size 牌高，宽高比固定为3:4，缺省值200
* suit 花色，用于JOKER时，红花色表示大王，黑花色表示小王。hearts,diamonds,spades,clubs
* point 牌面点。A,2,3,4,5,6,7,8,9,10,J,Q,K,JOKER
例：
* canvas.drawPokerCard(0,400,100,'hearts','joker');
* canvas.drawPokerCard(0,400,100,'hearts','Q');

*********************************************

## Inside method (9)

## Draw round corner rectangle

canvas.roundRect(x,y,w,h,r,[dir])
canvas.strokeRoundRect=(x,y,w,h,r,[dir])
canvas.fillRoundRect=(x,y,w,h,r,[dir])
* x,y 左上角坐标，缺省值0,0
* w,h 宽高
* r 圆角半径
* dir 圆角反向，缺省false
例：
* canvas.roundRect(0,0,200,200,30);
* canvas.roundRect(50,50,100,100,30,true);

## Draw SVG curve

canvas.svgCurve(svgPath,x,y,size)
* svgPath svg的path方法的d属性值，目前只支持绝对坐标和非连续命令。由于Canvas里没有对应的方法，svgPath里的AQ和T不支持。
* x,y 左上角坐标，缺省值0,0
* size 尺寸，使用时需要预在svg软件里把svgPath置于0,0，宽高中较大值为200时复制d属性值
例：（画一个心形）
* canvas.svgCurve('M100,30C60,7 0,7 0,76C0,131 100,190 100,190C100,190 200,131 200,76C200,7 140,7 100,30z',0,0,200));

## Draw poker symbol

canvas.drawPokerSymbol(symbol,x,y,size)
canvas.strokePokerSymbol(symbol,x,y,size)
canvas.fillPokerSymbol(symbol,x,y,size)
* symbol 符号名称：
  > 'hearts','diamonds','spades','clubs' 红心，方块，黑桃，草花
	> 'a','2','3','4','5','6','7','8','9','10','j','q','k' A-K 13张片点
	> 'joker' 大写JOKER字样
	> 'crown' 皇冠的一部分（用于拼Joker的图案）
	> 'nine' 粗胖的9字
* x,y 左上角坐标，缺省值0,0
* size 符号高或宽里的较大值，缺省为200
例：
* canvas.fillPokerSymbol('hearts',0,0,200);

## 画皇冠

canvas.drawPokerCrown(x,y,size,[c1],[c2],[c3])
* x,y 左上角坐标，缺省值0,0
* size 牌高，缺省200
* c1,c2 皇冠的渐变颜色，缺省值为c1='#fdf98b',c2='#e7bd4f'
* c3 中间宝石的填充色，缺省值为c3='#fff'
例：
* canvas.drawPokerCrown(0,0,200);

## Draw画空白牌

canvas.drawEmptyCard(x,y,size,[c1],[c2])
* x,y 左上角坐标，缺省值0,0
* size 牌高，缺省200
* c1,c2 牌的渐变颜色，缺省值为c1='#a22',c2='#b55'
例：
* canvas.drawEmptyCard(0,0,200);

*********************************************
Chinese version of readme below
*********************************************

# 使用方法

1. 加载库 <script src="poker.min.js"></script>
2. 为页面添加canvas DOM，<canvas id="ct" width="975" height="500"></canvas>
3. canvas的2D方法里就包含了下列方法，canvas = document.getElementById('ct').getContext('2d')

*********************************************

# 库内公开方法

## 画牌背

canvas.drawPokerBack(x,y,size,color1,color2)
* x,y 左上角坐标，缺省值0,0
* size 牌高，宽高比固定为3:4，缺省值200
* color1 深色，缺省值'#a22'
* color2 浅色，缺省值'#b55'
例：
* canvas.drawPokerBack(10,10,300,'#a22','#b55')
* canvas.drawPokerBack(375,400,100,'#2E319C','#7A7BB8');

## 画牌面

canvas.drawPokerCard(x,y,size,suit,point)
* x,y 左上角坐标，缺省值0,0
* size 牌高，宽高比固定为3:4，缺省值200
* suit 花色，用于JOKER时，红花色表示大王，黑花色表示小王。hearts,diamonds,spades,clubs
* point 牌面点。A,2,3,4,5,6,7,8,9,10,J,Q,K,JOKER
例：
* canvas.drawPokerCard(0,400,100,'hearts','joker');
* canvas.drawPokerCard(0,400,100,'hearts','Q');

*********************************************

## 库内内部方法

## 画圆角矩形

canvas.roundRect(x,y,w,h,r,[dir])
canvas.strokeRoundRect=(x,y,w,h,r,[dir])
canvas.fillRoundRect=(x,y,w,h,r,[dir])
* x,y 左上角坐标，缺省值0,0
* w,h 宽高
* r 圆角半径
* dir 圆角反向，缺省false
例：
* canvas.roundRect(0,0,200,200,30);
* canvas.roundRect(50,50,100,100,30,true);

## 画SVG曲线

canvas.svgCurve(svgPath,x,y,size)
* svgPath svg的path方法的d属性值，目前只支持绝对坐标和非连续命令。由于Canvas里没有对应的方法，svgPath里的AQ和T不支持。
* x,y 左上角坐标，缺省值0,0
* size 尺寸，使用时需要预在svg软件里把svgPath置于0,0，宽高中较大值为200时复制d属性值
例：（画一个心形）
* canvas.svgCurve('M100,30C60,7 0,7 0,76C0,131 100,190 100,190C100,190 200,131 200,76C200,7 140,7 100,30z',0,0,200));

## 画扑克符号

canvas.drawPokerSymbol(symbol,x,y,size)
canvas.strokePokerSymbol(symbol,x,y,size)
canvas.fillPokerSymbol(symbol,x,y,size)
* symbol 符号名称：
	> 'hearts','diamonds','spades','clubs' 红心，方块，黑桃，草花
	> 'a','2','3','4','5','6','7','8','9','10','j','q','k' A-K 13张片点
	> 'joker' 大写JOKER字样
	> 'crown' 皇冠的一部分（用于拼Joker的图案）
	> 'nine' 粗胖的9字
* x,y 左上角坐标，缺省值0,0
* size 符号高或宽里的较大值，缺省为200
例：
* canvas.fillPokerSymbol('hearts',0,0,200);

## 画皇冠

canvas.drawPokerCrown(x,y,size,[c1],[c2],[c3])
* x,y 左上角坐标，缺省值0,0
* size 牌高，缺省200
* c1,c2 皇冠的渐变颜色，缺省值为c1='#fdf98b',c2='#e7bd4f'
* c3 中间宝石的填充色，缺省值为c3='#fff'
例：
* canvas.drawPokerCrown(0,0,200);

## 画空白牌

canvas.drawEmptyCard(x,y,size,[c1],[c2])
* x,y 左上角坐标，缺省值0,0
* size 牌高，缺省200
* c1,c2 牌的渐变颜色，缺省值为c1='#a22',c2='#b55'
例：
* canvas.drawEmptyCard(0,0,200);
