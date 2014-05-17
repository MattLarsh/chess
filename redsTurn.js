function redsTurn(){
  redPositions();
  bluePositions();

	var randIndex = Math.floor(Math.random()*redPieces['totalPieces'].length);
	redPieces['currentPiece'] = redPieces['totalPieces'][randIndex];
	redCaptureScan();
  redPieces['origSpot'] = redPieces[redPieces['currentPiece']];
  var origBox = $("#"+redPieces['currentPiece']);
  redPieces['actualPiece'] = origBox.text();
  origBox.attr('id','').text(redPieces['origSpot']).css('color','gray').parent().addClass('box').removeClass('red');
  pieceInRedRange();
  if(redPieces['enemyInRange'].length > 0){
    $("#"+redPieces['bluePieceInRange']).attr('id',redPieces['currentPiece']).css('color','#BD2C06').text(redPieces['actualPiece']).parent().removeClass('blue').addClass('red');
    redPieces[redPieces['currentPiece']] = bluePieces[redPieces['bluePieceInRange']];

    delete bluePieces[redPieces['bluePieceInRange']];
    var blueIndex = bluePieces['totalPieces'].indexOf(redPieces['bluePieceInRange']);
    delete bluePieces['totalPieces'][blueIndex];
  }
  else{
    
    findAreaRed[redPieces['currentPiece']]();
    var randNum = Math.floor(Math.random()*redPieces['currentArea'].length);
    var randSpot = redPieces['currentArea'][randNum];
    if(randSpot == undefined){
      console.log(redPieces['currentPiece']);
      origBox.attr('id',redPieces['currentPiece']).text(redPieces['actualPiece']).css('color','#BD2C06').parent().addClass('red').removeClass('box');
      redsTurn();
      return;
    }
    $(".box:contains(" + randSpot + ")").removeClass('box').addClass('red').children().text(redPieces['actualPiece']).attr('id',redPieces['currentPiece']).css('color', '#BD2C06');
    redPieces[redPieces['currentPiece']] = randSpot;
  }
  
  bluePositions();
  redPositions();
  
  redPieces['enemyInRange'] = [];
  redCaptureScan();
  if(redPieces['enemyInRange'].indexOf(bluePieces['King'])!= -1){
    console.log('Check!');
    bluePieces['inCheck'] = 'yes';
  }
  redPieces['enemyInRange'] = [];
  bothPieces['turn'] = 'blue';
  
}