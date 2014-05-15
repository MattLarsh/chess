var redEnemyScan = {
	'compKing': function(){
		area = [];
    moves.kingMoves(redPieces['compKing'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
	},
	'compQueen': function(){
		area = [];
    moves.horiz(redPieces['compQueen'],area,'red');
    moves.vertical(redPieces['compQueen'],area,'red');
    moves.diagonal(redPieces['compQueen'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
	}
}
function redCaptureScan(){
	for(var i=0;i<redPieces['totalPieces'].length;i++){
		if(redPieces['totalPieces'][i] != undefined){
	    redEnemyScan[redPieces['totalPieces'][i]]();
	    if(redPieces['enemyInRange'].length > 0){
	      redPieces['currentPiece'] = redPieces['totalPieces'][i];
	      break;
	    }   
	  }
	}
}
function pieceInRedRange(){
	for(var i=0;i<bluePieces['totalPieces'].length;i++){
		if(bluePieces[bluePieces['totalPieces'][i]] == redPieces['enemyInRange']){
			redPieces['bluePieceInRange'] = bluePieces['totalPieces'][i];
		}
	}
}