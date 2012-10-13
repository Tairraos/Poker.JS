/**
 * MIT license source code.
 *
 * poker.js
 * Created by Xiaole Tao (http://xiaole.happylive.org)
 * Last update - 2012/09/26.
 */
(function() {
	if (window.CanvasRenderingContext2D) {
		var symbolPath = {
			'a' : 'M6,200V183H23L58,0H78L117,183H131V200H85V183H97L92,156H46L42,183H54V200H6zM88,135L68,37L49,135H88z',
			'2' : 'M10,200L11,187C15,149,23,136,70,97C93,78,100,68,101,57C104,31,81,23,65,23C46,22,23,34,35,62L12,68C8,43,12,18,33,8C61,-6,96,-1,115,21C127,36,129,56,123,72C104,113,39,131,35,179H105V152H127V200L10,200z',
			'3' : 'M2,156L18,145C31,167,47,181,70,178C104,176,119,140,112,113C105,89,76,77,53,90C47,93,43,96,41,96C39,96,33,85,34,82C50,59,87,21,87,21H28V47H6V0H120V16C120,16,90,48,80,64C104,65,125,81,132,105C136,118,135,148,129,160C119,182,94,199,71,200C33,202,12,176,2,156L2,156z',
			'4' : 'M70,200L70,183L86,183L86,153L5,153L5,133L93,0L107,0L107,133L132,133L132,153L107,153L107,183L120,183L120,200zM86,49L30,133L86,133z',
			'5' : 'M4,148L24,148C28,160,37,173,48,176C80,183,101,166,108,144C116,120,107,84,85,71C67,61,40,70,27,92L13,83L20,0H112V20H37L37,55C52,44,77,44,93,52C123,66,137,98,131,137C123,175,105,197,64,200C20,201,4,170,4,148L4,148z',
			'6' : 'M8,139C6,122,6,78,8,65C15,26,30,7,55,2C81,-4,116,3,124,35L103,36C91,14,60,15,46,29C34,37,28,68,30,70C30,70,50,55,73,55C120,55,132,94,130,127C129,167,116,198,73,200C31,198,12,177,8,139zM110,128C111,101,98,80,73,77C50,76,26,99,27,127C29,155,40,179,69,179C101,179,110,147,110,128z',
			'7' : 'M37,200C50,131,65,79,102,22H26V46H6V0H117L131,22C91,64,54,202,61,200H37z',
			'8' : 'M2,142C3,115,13,105,32,90C17,79,10,63,12,50C15,17,41,0,69,0C98,1,123,24,125,48C127,69,120,79,105,90C123,105,135,115,135,141C134,168,111,199,71,200C31,201,1,168,2,142L2,142zM113,142C115,117,93,101,69,101C45,101,23,121,23,143C23,166,51,178,69,178C91,178,112,163,113,142L113,142zM105,55C106,34,87,20,67,21C50,21,31,34,31,51C31,72,52,83,70,83C86,84,105,71,105,55L105,55z',
			'9' : 'MM11,161L30,156C37,174,52,180,67,178C94,176,102,146,104,120C94,131,78,137,64,136C21,134,10,100,10,65C9,35,21,13,43,3C55,-1,81,-1,92,4C118,18,128,42,126,98C126,144,117,198,66,200C36,204,14,181,11,161L11,161zM85,111C94,105,98,100,102,92C106,86,106,83,106,69C103,36,86,17,60,21C44,23,36,31,33,46C24,73,35,105,55,112C63,116,78,115,85,111L85,111z',
			//10
			'0' : 'M6,200V0H26V200H6M85,0C66,0,50,17,50,39V162C50,183,66,200,85,200H96C115,200,130,183,130,162V39C130,17,115,0,96,0H85M90,19C102,19,110,28,110,38V163C110,174,102,183,90,183C79,183,70,174,70,163V38C70,28,79,19,90,19L90,19z',
			'j' : 'M68,0V21H88C88,21,89,41,89,84C89,126,90,146,88,158C81,185,40,185,32,166C27,155,28,146,28,134H6C6,134,6,140,6,147C6,178,17,193,41,198C65,204,95,194,105,174C111,162,111,161,111,89C111,41,111,21,111,21H130V0H68z',
			'q' : 'M24,134L6,134L6,112L24,112C24,112,24,60,24,40C24,18,40,0,66,0C92,0,110,18,110,40C110,62,111,148,110,155C110,168,108,170,108,171C110,176,130,178,130,177L130,199C115,201,109,199,96,190C88,198,65,205,46,196C32,190,24,174,24,134zM81,174C73,162,58,145,44,140C44,156,46,165,51,171C59,181,71,183,81,174zM66,22C50,22,44,30,44,70C44,94,44,116,44,116C67,123,90,150,90,150L90,70C90,30,82,22,66,22z',
			'k' : 'M76,180L96,180L64,106L40,142L40,180L56,180L56,200L0,200L0,180L20,180L20,20L0,20L0,0L56,0L56,20L40,20L40,100L92.0636,19.841L76,20L76,0L136,0L136,20L120,20L76,88L116,180L136,180L136,200L76,200z',
			//jOker,jo
			'o' : 'M141,0L181,0C168,55,161,150,129,183C91,219,15,198,21,141L60,137C58,157,62,166,81,166C102,165,110,143,115,118M6,378C6,306,53,256,119,256C197,256,213,346,187,398C164,438,130,458,88,459C39,458,7,422,6,378M47,377C49,406,67,425,93,425C168,423,182,292,115,290C69,294,47,338,47,377M0,714L42,518L84,518L66,601L159,518L215,518L124,595L191,714L144,714L94,621L55,654L42,714M8,973L50,777L200,777L193,809L85,809L75,854L180,854L173,887L68,887L56,940L173,940L166,973M43,1231L1,1231L44,1035L133,1035C170,1037,197,1051,198,1087C195,1127,169,1143,136,1148C158,1171,171,1206,182,1231L137,1231C116,1182,112,1150,60,1150M67,1121C96,1121,155,1126,156,1087C151,1061,100,1068,78,1068z',
			//Hearts
			'h' : 'M100,30C60,7,0,7,0,76C0,131,100,190,100,190C100,190,200,131,200,76C200,7,140,7,100,30z',
			//Diamonds
			'd' : 'M184,100C152,120,120,160,100,200C80,160,48,120,16,100C48,80,80,40,100,0C120,40,152,80,184,100z',
			//Spades
			's' : 'M200,120C200,168,144,176,116,156C116,180,116,188,128,200C112,196,88,196,72,200C84,188,84,180,84,156C56,176,0,168,0,120C0,72,60,36,100,0C140,36,200,72,200,120z',
			//Clubs
			'c' : 'M80,200C92,184,92,160,92,136C76,180,0,176,0,124C0,80,40,76,68,88C80,92,80,88,72,84C44,64,40,0,100,0C160,0,156,64,128,84C120,88,120,92,132,88C160,76,200,80,200,124C200,176,124,180,108,136C108,160,108,184,120,200C100,196,100,196,80,200z',
			//cRown,cr
			'r' : 'M44,60,C45,56,-3,33,0,70,C2,107,39,146,48,150,C57,154,12,107,12,77,C12,45,43,65,44,60,M37,65,C31,64,20,60,19,81,C19,100,63,158,65,149,C65,139,33,102,37,65,M86,56,C87,52,38,28,40,66,C43,103,69,141,78,148,C86,155,54,102,54,71,C54,39,86,60,86,56,M82,65,C77,64,59,54,59,74,C60,95,82,146,84,138,C86,132,78,102,82,65,M154,60,C153,56,203,33,200,70,C197,107,159,146,151,150,C142,154,187,107,187,77,C187,45,155,65,154,60,M161,65,C167,64,179,60,180,81,C181,100,137,158,135,149,C134,139,165,102,161,65,M113,56,C112,52,161,28,158,66,C155,103,130,141,122,148,C114,155,145,102,145,71,C145,39,114,60,113,56,M117,65,C123,64,141,54,141,74,C140,95,118,146,116,138,C114,132,121,102,117,65z',
			//Nine
			'n' : 'M157,89C159,188,80,211,16,196L23,160C62,172,100,167,107,119C93,127,83,133,62,132C28,133,0,113,0,70C0,25,37,0,78,0C137,0,157,41,157,89M105,56C100,42,92,34,77,33C59,33,49,49,49,69C52,101,83,104,107,95C107,82,108,66,105,56z'
		}, ax = function(n) {
			var args = arguments.callee.caller.arguments;
			return args[0] + n * args[2] / 200;
		}, ay = function(n) {
			var args = arguments.callee.caller.arguments;
			return args[1] + n * args[2] / 200;
		}, as = function(n) {
			return n * arguments.callee.caller.arguments[2] / 200;
		}, pc = function(size) {
			var canvas = document.createElement('canvas');
			canvas.height = size;
			canvas.width = size * 3 / 4;
			return canvas;
		}, fixSuit = function(suit) {
			//hearts, diamonds, spades, clubs
			return (suit || 'h').substr(0, 1).toLowerCase();
		}, fixSymbol = function(symbol) {
			//A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, JOKER, NINE, CROWN
			symbol = (symbol || 'o').toString().toLowerCase();
			return symbol.substr((symbol.match(/jo|10|cr/)) ? 1 : 0, 1);
		};
		/**
		 * ### Draw card number side
		 * canvas.drawPokerCard (x, y, size, suit, point)
		 *
		 * x, y  - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
		 * size  - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
		 * suit  - Poker suit. The value is case insensitive and it should be one of these value in []:
		 *         ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
		 *         'h', 'd', 's', 'c' are abbreviation
		 *         When card point is 'O', 'h' or 'd' means big joker, 's' or 'c' means little joker.
		 *         Default value is 'h'.
		 * point - Card point. The value is case insensitive and it should be one of these value in []:
		 *         ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
		 *         'O'(letter O) is abbreviation of 'JOKER'
		 *         Default value is 'O'.
		 *
		 * Example:
		 * canvas.drawPokerCard (0, 400, 100, 'hearts', 'O');
		 * canvas.drawPokerCard (0, 400, 100, 'hearts', 'Q');
		 */
		CanvasRenderingContext2D.prototype.drawPokerCard = function(x, y, size, suit, point) {

			suit = fixSuit(suit);
			point = fixSymbol(point);

			this.drawEmptyCard(ax(0), ay(0), as(200));
			this.fillStyle = (suit === 'h' || suit === 'd') ? '#a22' : '#000';
			if (size >= 100) {
				if (point !== 'o') {
					this.fillPokerSymbol(ax(40), ay(65), as(70), suit);
					this.fillPokerSymbol(ax(10), ay(10), as(40), point);
					this.fillPokerSymbol(ax(11), ay(55), as(25), suit);
					this.fillPokerSymbol(ax(140), ay(190), as(-40), point);
					this.fillPokerSymbol(ax(139), ay(145), as(-25), suit);
				} else {
					this.fillPokerSymbol(ax(11), ay(10), as(18), 'o');
					this.fillPokerSymbol(ax(139), ay(190), as(-18), 'o');
					if (suit === 'h' || suit === 'd') {
						this.drawPokerCrown(ax(38), ay(63), as(74), '#b55', '#a22');
						this.drawPokerCrown(ax(40), ay(65), as(70), '#fdf98b', '#e7bd4f', '#a22');
					} else {
						this.drawPokerCrown(ax(38), ay(63), as(74), '#000', '#000');
						this.drawPokerCrown(ax(40), ay(65), as(70), '#eee', '#888', '#333');
					}
				}
			} else {
				if (point !== 'o') {
					this.fillPokerSymbol(ax(30), ay(75), as(100), suit);
					this.fillPokerSymbol(ax(15), ay(15), as(50), point);
				} else {
					this.fillPokerSymbol(ax(11), ay(10), as(22), 'o');
					if (suit === 'hearts' || suit === 'd') {
						this.drawPokerCrown(ax(45), ay(73), as(89), '#b55', '#a22');
						this.drawPokerCrown(ax(47), ay(75), as(85), '#fdf98b', '#e7bd4f', '#a22');
					} else {
						this.drawPokerCrown(ax(45), ay(73), as(89), '#000', '#000');
						this.drawPokerCrown(ax(47), ay(75), as(85), '#eee', '#888', '#333');
					}
				}
			}
		};

		/**
		 * ### Draw card back side
		 * canvas.drawPokerBack (x, y, size[, foregroundColor, backgroundColor])
		 *
		 * x, y            - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
		 * size            - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
		 * foregroundColor - Foreground color. Default value is '#BB5555'.
		 * backgroundColor - Background color. Default value is '#AA2222'.
		 *
		 * Example:
		 * canvas.drawPokerBack (10, 10, 300, '#a22', '#b55')
		 * canvas.drawPokerBack (375, 400, 100, '#2E319C', '#7A7BB8');
		 */
		CanvasRenderingContext2D.prototype.drawPokerBack = function(x, y, size, foregroundColor, backgroundColor) {
			foregroundColor = foregroundColor || '#b55';
			backgroundColor = backgroundColor || '#a22';

			this.drawEmptyCard(x, y, size);

			this.fillStyle = foregroundColor;
			this.fillRoundRect(ax(10), ay(10), as(130), as(180), as(8));
			this.strokeStyle = foregroundColor;
			this.strokeRoundRect(ax(18), ay(18), as(114), as(164), as(4));
			this.fillStyle = foregroundColor;
			this.fillRoundRect(ax(26), ay(26), as(96), as(148), as(24), true);

			this.fillPokerSymbol(ax(24), ay(24), as(20), 's');
			this.fillPokerSymbol(ax(106), ay(24), as(20), 's');
			this.fillPokerSymbol(ax(44), ay(176), as(-20), 's');
			this.fillPokerSymbol(ax(126), ay(176), as(-20), 's');
			this.fillStyle = foregroundColor;
			this.fillRoundRect(ax(50), ay(40), as(50), as(120), as(24));
			this.fillPokerSymbol(ax(32), ay(54), as(86), 's');
			this.fillPokerSymbol(ax(30), ay(60), as(16), 's');
			this.fillPokerSymbol(ax(104), ay(60), as(16), 's');
			this.fillPokerSymbol(ax(30), ay(128), as(16), 's');
			this.fillPokerSymbol(ax(104), ay(128), as(16), 's');
			this.strokePokerSymbol(ax(31), ay(53), as(88), 's');
			this.fillStyle = foregroundColor;
			this.fillPokerSymbol(ax(47), ay(80), as(35), 'c');
			this.fillPokerSymbol(ax(77), ay(80), as(35), 'c');
		};

		/**
		 * ### Draw round corner rectangle
		 * canvas.roundRect       (x, y[, width, height[, radius[, direction]]])
		 * canvas.strokeRoundRect (x, y[, width, height[, radius[, direction]]])
		 * canvas.fillRoundRect   (x, y[, width, height[, radius[, direction]]])
		 *
		 * x, y          - The x, y coordinate of top left corner of the rectangle in canvas. Default value is 0, 0.
		 * width, height - Width and height of the rectangle. Default value of width and height both are 200.
		 * radius        - Radius of corner round. Default value is 20.
		 * direction     - Direction of corner round. Boolean true means inward, false means outward. Default value is false.
		 *
		 * Example:
		 * canvas.roundRect (0, 0, 200, 200, 30);
		 * canvas.roundRect (50, 50, 100, 100, 30, true);
		 */
		CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius, direction) {
			width = width || 200;
			height = height || 200;
			radius = radius || 20;

			this.beginPath();
			if (!direction) {
				this.moveTo(x + radius, y);
				this.lineTo(x + width - radius, y);
				this.arc(x + width - radius, y + radius, radius, (Math.PI / 180) * 270, 0);
				this.lineTo(x + width, y + height - radius);
				this.arc(x + width - radius, y + height - radius, radius, 0, (Math.PI / 2));
				this.lineTo(x + radius, y + height);
				this.arc(x + radius, y + height - radius, radius, (Math.PI / 2), Math.PI);
				this.lineTo(x, y + radius);
				this.arc(x + radius, y + radius, radius, Math.PI, (Math.PI / 180) * 270);
			} else {
				this.moveTo(x, y + radius);
				this.lineTo(x, y + height - radius);
				this.arc(x, y + height, radius, (Math.PI / 180) * 270, 0);
				this.lineTo(x + width - radius, y + height);
				this.arc(x + width, y + height, radius, Math.PI, (Math.PI / 180) * 270);
				this.lineTo(x + width, y + radius);
				this.arc(x + width, y, radius, Math.PI / 2, Math.PI);
				this.lineTo(x + radius, y);
				this.arc(x, y, radius, 0, Math.PI / 2);
			}
			this.closePath();
		};
		CanvasRenderingContext2D.prototype.strokeRoundRect = function(x, y, width, height, radius, direction) {
			this.roundRect(x + 0.5, y + 0.5, width - 1, height - 1, radius, direction);
			this.stroke();
		};
		CanvasRenderingContext2D.prototype.fillRoundRect = function(x, y, width, height, radius, direction) {
			this.roundRect(x, y, width, height, radius, direction);
			this.fill();
		};

		/**
		 * ### Draw SVG curve
		 * canvas.svgCurve (x, y, size, svgPath)
		 *
		 * x, y    - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
		 * size    - The pixel size of the curve.
		 * svgPath - Value of property 'd' of SVG 'path' method.
		 *             When create the curve by svg software, please move the origin of coordinate be 0,0.
		 *             And keep the bigger size of height and width to 200px.
		 *             Don't use AQ or T methon in svg software, browser canvas have not relative methon to render it.
		 *
		 * Example, draw a heart symbol:
		 * canvas.svgCurve ('M100,30C60,7 0,7 0,76C0,131 100,190 100,190C100,190 200,131 200,76C200,7 140,7 100,30z', 0, 0, 200));
		 */
		CanvasRenderingContext2D.prototype.svgCurve = function(x, y, size, svgPath) {
			var relativeX, relativeY, pathNumber, pathArray, svgpathArray, ax = function(n) {
				return ( relativeX = x + n * size / 200);
			}, ay = function(n) {
				return ( relativeY = y + n * size / 200);
			};
			svgpathArray = svgPath.replace(/ *([MZLHVCSQTA]) */gi, '|$1,').replace(/^\||\|[Z],/gi, '').split(/\|/);

			this.beginPath();
			for (pathNumber in svgpathArray) {
				pathArray = svgpathArray[pathNumber].split(/[, ]/);
				// @formatter:off
				(pathArray[0] === 'M') ? (this.moveTo(ax(pathArray[1]), ay(pathArray[2]))):
				(pathArray[0] === 'L') ? (this.lineTo(ax(pathArray[1]), ay(pathArray[2]))):
				(pathArray[0] === 'H') ? (this.lineTo(ax(pathArray[1]), relativeY)):
				(pathArray[0] === 'V') ? (this.lineTo(relativeX, ay(pathArray[1]))):
				(pathArray[0] === 'C') ? (this.bezierCurveTo(ax(pathArray[1]), ay(pathArray[2]), ax(pathArray[3]), ay(pathArray[4]), ax(pathArray[5]), ay(pathArray[6]))):
				(pathArray[0] === 'Q') && (this.quadraticCurveTo(ax(pathArray[1]), ay(pathArray[2]), ax(pathArray[3]), ay(pathArray[4])));
				// @formatter:on
			}
			this.closePath();
		};

		/**
		 * ### Draw poker symbol
		 * canvas.drawPokerSymbol   (x, y, size[, symbol])
		 * canvas.strokePokerSymbol (x, y, size[, symbol])
		 * canvas.fillPokerSymbol   (x, y, size[, symbol])
		 *
		 * x, y   - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
		 * size   - The pixel size of symbol. Default value is 200.
		 * symbol - The name of symbol.  Value is case insensitive and should be one of below:
		 *          ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
		 *          'h', 'd', 's', 'c' are abbreviation
		 *          ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
		 *          'O'(letter O) is abbreviation of 'JOKER'
		 *          ['R', 'CROWN']  // crown, a part of crown, to jointing a crown of JOKER card
		 *          ['N', 'NINE']  // Nine, bold '9' for jointing '99' pattern
		 *
		 * Example:
		 * canvas.fillPokerSymbol ('hearts', 0, 0, 200);
		 */
		CanvasRenderingContext2D.prototype.drawPokerSymbol = function(x, y, size, symbol) {
			symbol = fixSymbol(symbol);
			if (symbolPath[symbol])
				this.svgCurve(x, y, size, symbolPath[symbol]);
		};
		CanvasRenderingContext2D.prototype.strokePokerSymbol = function(x, y, size, symbol) {
			this.drawPokerSymbol(x + 0.5, y + 0.5, size - 1, symbol);
			this.stroke();
		};
		CanvasRenderingContext2D.prototype.fillPokerSymbol = function(x, y, size, symbol) {
			this.drawPokerSymbol(x, y, size, symbol);
			this.fill();
		};

		/**
		 * ### Draw crown
		 * canvas.drawPokerCrown (x, y, size[, startColor, endColor[, fillColor]])
		 *
		 * x, y       - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
		 * size       - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
		 * startColor - Start color of gradient background color. Default value is '#FDF98B'.
		 * endColor   - End color of gradient background color. Default value is '#E7BD4F'.
		 * fillColor  - Fill color of jewel of crown. Default value is '#FFFFFF'.
		 *
		 * Example:
		 * canvas.drawPokerCrown(0, 0, 200);
		 */
		CanvasRenderingContext2D.prototype.drawPokerCrown = function(x, y, size, startColor, endColor, fillColor) {
			var fillLinGrad;

			startColor = startColor || '#fdf98b';
			endColor = endColor || '#e7bd4f';
			fillColor = fillColor || '#fff';

			fillLinGrad = this.createLinearGradient(ax(5), ay(5), ax(100), ay(200));
			fillLinGrad.addColorStop(0, startColor);
			fillLinGrad.addColorStop(1, endColor);

			this.fillStyle = fillLinGrad;
			this.fillPokerSymbol(ax(0), ay(0), as(200), 'r');
			this.fillRoundRect(ax(88), ay(42), as(23), as(110), as(12));
			this.fillPokerSymbol(ax(86), ay(18), as(27), 's');
			this.fillRoundRect(ax(40), ay(150), as(120), as(24), as(10));
			this.fillStyle = fillColor;
			this.fillPokerSymbol(ax(92), ay(26), as(15), 'd');
			this.fillPokerSymbol(ax(93), ay(60), as(13), 'h');
			this.fillPokerSymbol(ax(93), ay(80), as(13), 'h');
			this.fillPokerSymbol(ax(93), ay(100), as(13), 'h');
			this.fillPokerSymbol(ax(93), ay(120), as(13), 'h');
			this.fillPokerSymbol(ax(93), ay(155), as(13), 'h');
			this.fillPokerSymbol(ax(73), ay(155), as(13), 'h');
			this.fillPokerSymbol(ax(53), ay(155), as(13), 'h');
			this.fillPokerSymbol(ax(113), ay(155), as(13), 'h');
			this.fillPokerSymbol(ax(133), ay(155), as(13), 'h');
		};

		/**
		 * ### Draw blank card
		 * canvas.drawEmptyCard (x, y, size[, startColor, endColor])
		 *
		 * x, y       - The x, y coordinate of top left corner of card in canvas. Default value is 0, 0.
		 * size       - Height pixel of card. The ratio of card width and height is fixed to 3:4. Default value is 200.
		 *
		 * Example:
		 * canvas.drawEmptyCard(0, 0, 200);
		 */
		CanvasRenderingContext2D.prototype.drawEmptyCard = function(x, y, size) {
			var fillLinGrad;

			fillLinGrad = this.createLinearGradient(ax(5), ay(5), ax(55), ay(200));
			fillLinGrad.addColorStop(0, '#fff');
			fillLinGrad.addColorStop(1, '#e0e0e0');

			this.fillStyle = fillLinGrad;
			this.fillRoundRect(ax(0), ay(0), as(150), as(200), as(16));
			this.strokeStyle = '#666';
			this.strokeRoundRect(ax(0), ay(0), as(150), as(200), as(16));
		};

		window.Poker = {
			/**
			 * ### Draw card number side
			 * Poker.getCardImage  (size, suit, point)
			 * Poker.getCardCanvas (size, suit, point)
			 * Poker.getCardData   (size, suit, point)
			 *
			 * size  - Height pixel of card. The ratio of card width and height is fixed to 3:4.
			 *         Default value is 200.
			 * suit  - Poker suit. Value is case insensitive and should be one of below:
			 *         ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
			 *         'h', 'd', 's', 'c' are abbreviation
			 *         For joker, 'h' & 'd' means big joker, 's' & 'c' means little joker.
			 *         Default value is 'h'.
			 * point - Card point. Value is case insensitive and should be one of below:
			 *         ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
			 *         'O'(letter O) is abbreviation of 'JOKER'
			 *         Default value is 'O'.
			 *			 *
			 * Example:
			 * document.body.appendChild(Poker.getCardCanvas(100, 'h', 'Q'));
			 */
			getCardImage : function(size, suit, point) {
				var image = document.createElement('img');
				image.src = this.getCardData(size, suit, point);
				return image;
			},
			getCardCanvas : function(size, suit, point) {
				var canvas = pc(size);
				canvas.getContext('2d').drawPokerCard(0, 0, size, suit, point);
				return canvas;
			},
			getCardData : function(size, suit, point) {
				return this.getCardCanvas(size, suit, point).toDataURL();
			},

			/**
			 * ### Draw card back side
			 * Poker.getBackImage  (size[, foregroundColor, backgroundColor])
			 * Poker.getBackCanvas (size[, foregroundColor, backgroundColor])
			 * Poker.getBackData   (size[, foregroundColor, backgroundColor])
			 *
			 * size            - Height pixel of card. The ratio of card width and height is fixed to 3:4.
			 *                   Default value is 200.
			 * foregroundColor - Foreground color. Default value is '#BB5555'.
			 * backgroundColor - Background color. Default value is '#AA2222'.
			 *
			 * Example:
			 * document.body.appendChild(Poker.getBackCanvas(300, '#2E319C', '#7A7BB8'));
			 */
			getBackImage : function(size, foregroundColor, backgroundColor) {
				var image = document.createElement('img');
				image.src = this.getBackData(size, foregroundColor, backgroundColor);
				return image;
			},
			getBackCanvas : function(size, foregroundColor, backgroundColor) {
				var canvas = pc(size);
				canvas.getContext('2d').drawPokerBack(0, 0, size, foregroundColor, backgroundColor);
				return canvas;
			},
			getBackData : function(size, foregroundColor, backgroundColor) {
				return this.getBackCanvas(size, foregroundColor, backgroundColor).toDataURL();
			}
		};
	}
})();
