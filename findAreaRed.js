var findAreaRed = {
  'compQueen': function(){
    area = [];
    moves.horiz(redPieces['compQueen'],area,'red');
    moves.vertical(redPieces['compQueen'],area,'red');
    moves.diagonal(redPieces['compQueen'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compKing': function(){
    area = [];
    moves.kingMoves(redPieces['compKing'],area,'red');
    redPieces['currentArea'] = area;
  }
}