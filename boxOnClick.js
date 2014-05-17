$('#board').on('click', '.box', function(e){
  var thisBox = $(this).text();
  if(bothPieces['turn'] === 'bluePieceUp' && bluePieces['currentArea'].indexOf(thisBox) != -1){
  	var blueMovesArr = bothPieces['currentMoves'];
  	blueMovesArr.push(thisBox);
  	var origPos = blueMovesArr[blueMovesArr.length-2];
  	var nextPos = blueMovesArr[blueMovesArr.length-1];
  	bluePieces['nextSquare'] = $(this);
  	bluePieces['nextSquare'].addClass('blue').removeClass('box').css('color', '#267B93').children().text(bluePieces['actualPiece']).attr('id', bluePieces['currentPiece']);
  	colorClear();
    bluePieces[bluePieces['currentPiece']] = nextPos;
    redPositions();
	  bluePositions();
	  redCaptureScan();
	  if(redPieces['enemyInRange'].indexOf(bluePieces['King'])!= -1){
	  	if(bluePieces['inCheck'] === 'yes'){
	  		console.log("You are still in check!");
	  	}
	  	else{
	  		console.log('That puts you in check!');
	  	}
	    blueReverseInCheck();
	    redPieces['enemyInRange'] = [];
	    return;
	  }

	  bluePieces['inCheck'] = 'no';
	  bothPieces['turn'] = 'red';
	  redPieces['enemyInRange'] = []; 

	  if(bothPieces['turn'] === 'red'){
	  	redsTurn();
	  }
  }
});

