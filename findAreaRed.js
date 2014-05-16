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
  },
  'compBishop1': function(){
    area = [];
    moves.diagonal(redPieces['compBishop1'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compBishop2': function(){
    area = [];
    moves.diagonal(redPieces['compBishop2'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compRook1': function(){
    area = [];
    moves.horiz(redPieces['compRook1'],area,'red');
    moves.vertical(redPieces['compRook1'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compRook2': function(){
    area = [];
    moves.horiz(redPieces['compRook2'],area,'red');
    moves.vertical(redPieces['compRook2'],area,'red');
    redPieces['currentArea'] = area;
  }
}