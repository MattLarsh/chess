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
  },
  'compKnight1': function(){
    area = [];
    moves.knightMoves(redPieces['compKnight1'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compKnight2': function(){
    area = [];
    moves.knightMoves(redPieces['compKnight2'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn1': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn1'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn2': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn2'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn3': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn3'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn4': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn4'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn5': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn5'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn6': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn6'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn7': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn7'],area,'red');
    redPieces['currentArea'] = area;
  },
  'compPawn8': function(){
    area = [];
    moves.redPawnMoves(redPieces['compPawn8'],area,'red');
    redPieces['currentArea'] = area;
  }
}