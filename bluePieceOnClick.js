$('#board').on('click','.blue', function(e){
	bluePositions();
	redPositions();
  if(bothPieces['turn'] === 'blue'){
  	var piece = $(this).children().attr('id');
    findAreaBlue[piece]();
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
	}
}