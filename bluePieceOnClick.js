$('#board').on('click','.blue', function(e){
	bluePositions();
	redPositions();
  if(bothPieces['turn'] === 'blue'){
  	var piece = $(this).children().attr('id');
  	bothPieces['currentMoves'].push(bluePieces[piece]);
  	bluePieces['actualPiece'] = $(this).children().text();
    findAreaBlue[piece]();
    bluePieces['origSquare'] = $(this);
    bluePieces['origSquare'].removeClass('blue').addClass('box').children().attr('id','').text(bluePieces[piece]);
    bluePieces['currentPiece'] = piece;
    bothPieces['turn'] = 'bluePieceUp';
  }
});






var findAreaBlue = {
	'Queen': function(){
		area = [];
	  moves.horiz(bluePieces['Queen'],area,'blue');
	  moves.vertical(bluePieces['Queen'],area,'blue');
	  moves.diagonal(bluePieces['Queen'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'King': function(){
	  area = [];
	  moves.kingMoves(bluePieces['King'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Bishop1': function(){
		area = [];
	  moves.diagonal(bluePieces['Bishop1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Bishop2': function(){
		area = [];
	  moves.diagonal(bluePieces['Bishop2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Rook1': function(){
		area = [];
	  moves.horiz(bluePieces['Rook1'],area,'blue');
	  moves.vertical(bluePieces['Rook1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Rook2': function(){
		area = [];
	  moves.horiz(bluePieces['Rook2'],area,'blue');
	  moves.vertical(bluePieces['Rook2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Knight1': function(){
		area = [];
	  moves.knightMoves(bluePieces['Knight1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Knight2': function(){
		area = [];
	  moves.knightMoves(bluePieces['Knight2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	}


}