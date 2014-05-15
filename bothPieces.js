var bothPieces = {
	'turn': 'blue',
	'currentMoves': []
}

function bluePositions(){
  var arr = [];
  for(var i=0;i<bluePieces['totalPieces'].length;i++){
    if(bluePieces[bluePieces['totalPieces'][i]] != undefined){
      arr.push(bluePieces[bluePieces['totalPieces'][i]]);
    }
  }
  bluePieces['bluePositions'] = arr;

}

function redPositions(){
  var arr = [];
  for(var i=0;i<redPieces['totalPieces'].length;i++){
    if(redPieces[redPieces['totalPieces'][i]] != undefined){
      arr.push(redPieces[redPieces['totalPieces'][i]]);
    }
  }
  redPieces['redPositions'] = arr;
}