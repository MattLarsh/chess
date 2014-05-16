$('#board').on('click','.red',function(e){
  if(bothPieces['turn'] === 'bluePieceUp'){
    var redPiece = $(this).children().attr('id');
    if(bluePieces['currentArea'].indexOf(redPieces[redPiece]) != -1){
  		var blueMovesArr = bothPieces['currentMoves'];
  		blueMovesArr.push(redPieces[redPiece]);
  		var origPos = blueMovesArr[blueMovesArr.length-2];
  	  var nextPos = blueMovesArr[blueMovesArr.length-1];
    	$(this).addClass('blue').children().text(bluePieces['actualPiece']).attr('id', bluePieces['currentPiece']).css('color','#267B93');
    	redPieces['capturedRedPieces'] = redPiece;
    	delete redPieces[redPiece];
      var redIndex = redPieces['totalPieces'].indexOf(redPiece);
      delete redPieces['totalPieces'][redIndex];
      redPieces['totalPieces'].length = redPieces['totalPieces'].length -1;
      delete redEnemyScan[redPiece];
    	bluePieces['freshCaptive'] = 'yes';
    	colorClear();
    	bluePieces[bluePieces['currentPiece']] = nextPos;
    	bluePositions();
    	redPositions();
    	if(redPieces['enemyInRange'].indexOf(bluePieces['King'])!= -1){
    	  console.log('That puts you in check!');
    	  blueReverseInCheck();
    	  return;
    	}
    	bothPieces['turn'] = 'red';
    	bluePieces['freshCaptive'] = 'no';
    	redsTurn();
    }
  }
});