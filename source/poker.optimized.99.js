/**
 * Poker.JS
 * Project on https://github.com/Tairraos/Poker.JS
 * File for 99 point project only.
 * This file used some tricks and reduce readability, but minified file small and quickly.
 *
 * @author Xiaole Tao (http://xiaole.happylive.org)
 * @license MIT license source code.
 * @version 1.0
 */
(function() {
	if (window.CanvasRenderingContext2D) {
		var A = '#000', B = '#a22', C = '#b55', D = '#fdf98b', E = '#e7bd4f',
		    H = 200, I = 150, J = 155, K = 16, L = 93, M = 24, N = 40, O = 10, P = 13, 
		    R = document, S = CanvasRenderingContext2D.prototype, T = Math.PI,
		symbolPath = {
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
			//Nine only for 99
			'n' : 'M157,89C159,188,80,211,16,196L23,160C62,172,100,167,107,119C93,127,83,133,62,132C28,133,0,113,0,70C0,25,37,0,78,0C137,0,157,41,157,89M105,56C100,42,92,34,77,33C59,33,49,49,49,69C52,101,83,104,107,95C107,82,108,66,105,56z'
		}, ax = function(n) {
			var args = arguments.callee.caller.arguments;
			return args[0] + n * args[2] / H;
		}, ay = function(n) {
			var args = arguments.callee.caller.arguments;
			return args[1] + n * args[2] / H;
		}, as = function(n) {
			return n * arguments.callee.caller.arguments[2] / H;
		}, pc = function(size) {
			var canvas = R.createElement('canvas');
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

		S.drawPokerCard = function(x, y, size, suit, point) {
			var Z = this, X = Z.fillPokerSymbol, Y = Z.drawPokerCrown;
			suit = fixSuit(suit);
			point = fixSymbol(point);

			Z.drawEmptyCard(ax(0), ay(0), as(H));
			Z.fillStyle = (suit === 'h' || suit === 'd') ? B : A;
			if (size >= 100) {
				if (point !== 'o') {
					X.call(Z, ax(N), ay(65), as(70), suit);
					X.call(Z, ax(O), ay(O), as(N), point);
					X.call(Z, ax(11), ay(55), as(25), suit);
					X.call(Z, ax(140), ay(190), as(-N), point);
					X.call(Z, ax(139), ay(145), as(-25), suit);
				} else {
					X.call(Z, ax(11), ay(O), as(18), 'o');
					X.call(Z, ax(139), ay(190), as(-18), 'o');
					if (suit === 'h' || suit === 'd') {
						Y.call(Z, ax(38), ay(63), as(74), C, B);
						Y.call(Z, ax(N), ay(65), as(70), D, E, B);
					} else {
						Y.call(Z, ax(38), ay(63), as(74), A, A);
						Y.call(Z, ax(N), ay(65), as(70), '#eee', '#888', '#333');
					}
				}
			} else {
				if (point !== 'o') {
					X.call(Z, ax(30), ay(75), as(100), suit);
					X.call(Z, ax(15), ay(15), as(50), point);
				} else {
					X.call(Z, ax(11), ay(O), as(22), 'o');
					if (suit === 'h' || suit === 'd') {
						Y.call(Z, ax(45), ay(73), as(89), C, B);
						Y.call(Z, ax(47), ay(75), as(85), D, E, B);
					} else {
						Y.call(Z, ax(45), ay(73), as(89), A, A);
						Y.call(Z, ax(47), ay(75), as(85), '#eee', '#888', '#333');
					}
				}
			}
		};

		S.drawPokerBack = function(x, y, size, foregroundColor, backgroundColor) {
			var Z = this, X = Z.fillPokerSymbol, Y = Z.fillRoundRect;
			foregroundColor = foregroundColor || C;
			backgroundColor = backgroundColor || B;

			Z.drawEmptyCard(x, y, size);

			Z.fillStyle = backgroundColor;
			Y.call(Z, ax(O), ay(O), as(130), as(180), as(8));
			Z.strokeStyle = foregroundColor;
			Z.strokeRoundRect(ax(18), ay(18), as(114), as(164), as(4));
			Z.fillStyle = foregroundColor;
			Y.call(Z, ax(26), ay(26), as(96), as(148), as(M), true);

			X.call(Z, ax(M), ay(M), as(20), 's');
			X.call(Z, ax(106), ay(M), as(20), 's');
			X.call(Z, ax(44), ay(176), as(-20), 's');
			X.call(Z, ax(126), ay(176), as(-20), 's');
			Z.fillStyle = backgroundColor;
			Y.call(Z, ax(50), ay(N), as(50), as(120), as(M));
			X.call(Z, ax(32), ay(54), as(86), 's');
			X.call(Z, ax(30), ay(60), as(K), 's');
			X.call(Z, ax(104), ay(60), as(K), 's');
			X.call(Z, ax(30), ay(128), as(K), 's');
			X.call(Z, ax(104), ay(128), as(K), 's');
			Z.strokePokerSymbol(ax(31), ay(53), as(88), 's');
			Z.fillStyle = foregroundColor;
			X.call(Z, ax(47), ay(80), as(35), 'n');
			X.call(Z, ax(77), ay(80), as(35), 'n');
		};

		S.roundRect = function(x, y, width, height, radius, direction) {
			var Z = this;

			width = width || H;
			height = height || H;
			radius = radius || 20;

			Z.beginPath();
			if (!direction) {
				Z.moveTo(x + radius, y);
				Z.lineTo(x + width - radius, y);
				Z.arc(x + width - radius, y + radius, radius, (T / 180) * 270, 0);
				Z.lineTo(x + width, y + height - radius);
				Z.arc(x + width - radius, y + height - radius, radius, 0, (T / 2));
				Z.lineTo(x + radius, y + height);
				Z.arc(x + radius, y + height - radius, radius, (T / 2), T);
				Z.lineTo(x, y + radius);
				Z.arc(x + radius, y + radius, radius, T, (T / 180) * 270);
			} else {
				Z.moveTo(x, y + radius);
				Z.lineTo(x, y + height - radius);
				Z.arc(x, y + height, radius, (T / 180) * 270, 0);
				Z.lineTo(x + width - radius, y + height);
				Z.arc(x + width, y + height, radius, T, (T / 180) * 270);
				Z.lineTo(x + width, y + radius);
				Z.arc(x + width, y, radius, T / 2, T);
				Z.lineTo(x + radius, y);
				Z.arc(x, y, radius, 0, T / 2);
			}
			Z.closePath();
		};
		S.strokeRoundRect = function(x, y, width, height, radius, direction) {
			this.roundRect(x + 0.5, y + 0.5, width - 1, height - 1, radius, direction);
			this.stroke();
		};
		S.fillRoundRect = function(x, y, width, height, radius, direction) {
			this.roundRect(x, y, width, height, radius, direction);
			this.fill();
		};

		S.svgCurve = function(x, y, size, svgPath) {
			var Z = this, relativeX, relativeY, pathNumber, pathArray, svgPathArray, svgCmd, ax = function(n) {
				return ( relativeX = x + n * size / H);
			}, ay = function(n) {
				return ( relativeY = y + n * size / H);
			};
			svgPathArray = svgPath.replace(/ *([MZLHVCSQTA]) */gi, '|$1,').replace(/^\||\|[Z],/gi, '').split(/\|/);

			Z.beginPath();
			for (pathNumber in svgPathArray) {
				pathArray = svgPathArray[pathNumber].split(/[, ]/);
				svgCmd = pathArray[0];
		                (svgCmd === 'M') ? (Z.moveTo(ax(pathArray[1]), ay(pathArray[2]))):
		                (svgCmd === 'L') ? (Z.lineTo(ax(pathArray[1]), ay(pathArray[2]))):
		                (svgCmd === 'H') ? (Z.lineTo(ax(pathArray[1]), relativeY)):
		                (svgCmd === 'V') ? (Z.lineTo(relativeX, ay(pathArray[1]))):
		                (svgCmd === 'C') ? (Z.bezierCurveTo(ax(pathArray[1]), ay(pathArray[2]), ax(pathArray[3]), ay(pathArray[4]), ax(pathArray[5]), ay(pathArray[6]))):
		                (svgCmd === 'Q') && (Z.quadraticCurveTo(ax(pathArray[1]), ay(pathArray[2]), ax(pathArray[3]), ay(pathArray[4])));
			}
			Z.closePath();
		};

		S.drawPokerSymbol = function(x, y, size, symbol) {
			symbol = fixSymbol(symbol);
			if (symbolPath[symbol])
				this.svgCurve(x, y, size, symbolPath[symbol]);
		};
		S.strokePokerSymbol = function(x, y, size, symbol) {
			this.drawPokerSymbol(x + 0.5, y + 0.5, size - 1, symbol);
			this.stroke();
		};
		S.fillPokerSymbol = function(x, y, size, symbol) {
			this.drawPokerSymbol(x, y, size, symbol);
			this.fill();
		};

		S.drawPokerCrown = function(x, y, size, startColor, endColor, fillColor) {
			var Z = this, X = Z.fillPokerSymbol, Y = Z.fillRoundRect, fillLinGrad;

			startColor = startColor || D;
			endColor = endColor || E;
			fillColor = fillColor || '#fff';

			fillLinGrad = Z.createLinearGradient(ax(5), ay(5), ax(100), ay(H));
			fillLinGrad.addColorStop(0, startColor);
			fillLinGrad.addColorStop(1, endColor);

			Z.fillStyle = fillLinGrad;
			X.call(Z, ax(0), ay(0), as(H), 'r');
			Y.call(Z, ax(88), ay(42), as(23), as(110), as(12));
			X.call(Z, ax(86), ay(18), as(27), 's');
			Y.call(Z, ax(N), ay(I), as(120), as(M), as(O));
			Z.fillStyle = fillColor;
			X.call(Z, ax(92), ay(26), as(15), 'd');
			X.call(Z, ax(L), ay(60), as(P), 'h');
			X.call(Z, ax(L), ay(80), as(P), 'h');
			X.call(Z, ax(L), ay(100), as(P), 'h');
			X.call(Z, ax(L), ay(120), as(P), 'h');
			X.call(Z, ax(L), ay(J), as(P), 'h');
			X.call(Z, ax(73), ay(J), as(P), 'h');
			X.call(Z, ax(53), ay(J), as(P), 'h');
			X.call(Z, ax(113), ay(J), as(P), 'h');
			X.call(Z, ax(133), ay(J), as(P), 'h');
		};

		S.drawEmptyCard = function(x, y, size) {
			var Z = this, fillLinGrad;

			fillLinGrad = Z.createLinearGradient(ax(5), ay(5), ax(55), ay(H));
			fillLinGrad.addColorStop(0, '#fff');
			fillLinGrad.addColorStop(1, '#e0e0e0');

			Z.fillStyle = fillLinGrad;
			Z.fillRoundRect(ax(0), ay(0), as(I), as(H), as(K));
			Z.strokeStyle = '#666';
			Z.strokeRoundRect(ax(0), ay(0), as(I), as(H), as(K));
		};

		window.Poker = {
			getCardImage : function(size, suit, point) {
				var image = R.createElement('img');
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
			getBackImage : function(size, foregroundColor, backgroundColor) {
				var image = R.createElement('img');
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

