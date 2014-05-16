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
	},
	'compBishop1': function(){
		area = [];
    moves.diagonal(redPieces['compBishop1'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
	},
	'compBishop2': function(){
		area = [];
    moves.diagonal(redPieces['compBishop2'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
	},
	'compRook1': function(){
		area = [];
    moves.horiz(redPieces['compRook1'],area,'red');
    moves.vertical(redPieces['compRook1'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
	},
	'compRook2': function(){
		area = [];
    moves.horiz(redPieces['compRook2'],area,'red');
    moves.vertical(redPieces['compRook2'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
	},
  'compKnight1': function(){
    area = [];
    moves.knightMoves(redPieces['compKnight1'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compKnight2': function(){
    area = [];
    moves.knightMoves(redPieces['compKnight2'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn1': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn1'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn2': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn2'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn3': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn3'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn4': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn4'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn5': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn5'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn6': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn6'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn7': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn7'],area,'red');
    for(var i=0;i<bluePieces['bluePositions'].length;i++){
      for(var j=0;j<area.length;j++){
        if(bluePieces['bluePositions'][i] == area[j]){
          redPieces['enemyInRange'].push(area[j]);
        }
      }
    }
  },
  'compPawn8': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn8'],area,'red');
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