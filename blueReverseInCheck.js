function blueReverseInCheck(){
  if(bluePieces['freshCaptive'] === 'yes'){
  	// do stuff here!
  }
  bluePieces[bluePieces['currentPiece']] = bothPieces['currentMoves'][bothPieces['currentMoves'].length-2];
  bluePieces['nextSquare'].addClass('box').removeClass('blue').css('color','grey').children().text(bothPieces['currentMoves'][bothPieces['currentMoves'].length-1]).attr('id', '');
  bluePieces['origSquare'].addClass('blue').removeClass('box').css('color','#267B93').children().text(bluePieces['actualPiece']).attr('id',bluePieces['currentPiece']);
  bothPieces['turn'] = 'blue';
  bluePositions();
  redPositions();
}