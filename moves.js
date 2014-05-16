moves = {
  horiz: function(pos,area,color){
    var left = [];
    var right = [];
    var thisPos = 0;
    for(var i=0;i<64;i++){
     if(label[i] == pos) {
        thisPos++;
      }
      else if(label[i][1] == pos[1] && thisPos === 0){
        left.push(label[i]);
        }
      else if(thisPos == 1 && label[i][1] == pos[1]){
        right.push(label[i]);
      }
    }
    left = left.reverse();

    for(var i=0;i<left.length;i++){
      if(bluePieces['bluePositions'].indexOf(left[i]) == -1 && redPieces['redPositions'].indexOf(left[i]) == -1){
        area.push(left[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(left[i]) == -1){
        area.push(left[i]);
        i = i+1000;
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(left[i]) == -1){
        area.push(left[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    for(var i=0;i<right.length;i++){
      if(bluePieces['bluePositions'].indexOf(right[i]) == -1 && redPieces['redPositions'].indexOf(right[i]) == -1){
        area.push(right[i]);
      }
      else if(color === 'blue' && redPieces['redPositions'].indexOf(right[i]) != -1){
        area.push(right[i]);
        i = i+1000;
      }
      else if(color === 'red' && bluePieces['bluePositions'].indexOf(right[i]) != -1){
        area.push(right[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    
  },
  vertical:function(pos,area,color){
    var top = [];
    var bottom = [];
    var thisPos = 0;
    for(var i=0;i<64;i++){
      if(label[i] == pos) {
        thisPos++;
      }
      else if(label[i][0] == pos[0] && thisPos == 0){
        top.push(label[i]);
      }
      else if(label[i][0] == pos[0] && thisPos == 1){
        bottom.push(label[i]);
      }
    }
    top = top.reverse();
    for(var i=0;i<top.length;i++){
      if(bluePieces['bluePositions'].indexOf(top[i]) == -1 && redPieces['redPositions'].indexOf(top[i]) == -1){
        area.push(top[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(top[i]) == -1){
        area.push(top[i]);
        i = i+1000;
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(top[i]) == -1){
        area.push(top[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    for(var i=0;i<bottom.length;i++){
      if(bluePieces['bluePositions'].indexOf(bottom[i]) == -1 && redPieces['redPositions'].indexOf(bottom[i]) == -1){
        area.push(bottom[i]);
      }
      else if(color === 'blue' && redPieces['redPositions'].indexOf(bottom[i]) != -1){
        area.push(bottom[i]);
        i = i+1000;
      }
      else if(color === 'red' && bluePieces['bluePositions'].indexOf(bottom[i]) != -1){
        area.push(bottom[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    
  },
  diagonal:function(pos,area,color){
    var topLeft = [];
    var topRight = [];
    var bottomLeft = [];
    var bottomRight = [];
    var thisPos = 0;
    for(var i=0;i<64;i++){
      if(label[i] == pos){
        thisPos++;
      }
      else if(thisPos == 0){
        for(var j=1;j<8;j++){
          if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()-j)&&
            label[i][1] == parseInt(pos[1])+j){
            topLeft.push(label[i])
          }
          else if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()+j)&&
            label[i][1] == parseInt(pos[1])+j){
            topRight.push(label[i])
          }
        }
      }
      else if(thisPos == 1){
        for(var j=1;j<8;j++){
          if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()-j)&&
            label[i][1] == parseInt(pos[1])-j){
            bottomLeft.push(label[i])
          }
          else if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()+j)&&
            label[i][1] == parseInt(pos[1])-j){
            bottomRight.push(label[i])
          }
        }
      }
    }
    topLeft = topLeft.reverse();
    topRight = topRight.reverse();
    for(var i=0;i<topLeft.length;i++){
      if(bluePieces['bluePositions'].indexOf(topLeft[i]) == -1 && redPieces['redPositions'].indexOf(topLeft[i]) == -1){
        area.push(topLeft[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(topLeft[i]) == -1){
        area.push(topLeft[i]);
        i = i+1000;
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(top[i]) == -1){
        area.push(topLeft[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    for(var i=0;i<topRight.length;i++){
      if(bluePieces['bluePositions'].indexOf(topRight[i]) == -1 && redPieces['redPositions'].indexOf(topRight[i]) == -1){
        area.push(topRight[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(topRight[i]) == -1){
        area.push(topRight[i]);
        i = i+1000;
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(topRight[i]) == -1){
        area.push(topRight[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    for(var i=0;i<bottomLeft.length;i++){
      if(bluePieces['bluePositions'].indexOf(bottomLeft[i]) == -1 && redPieces['redPositions'].indexOf(bottomLeft[i]) == -1){
        area.push(bottomLeft[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(bottomLeft[i]) == -1){
        area.push(bottomLeft[i]);
        i = i+1000;
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(bottomLeft[i]) == -1){
        area.push(bottomLeft[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    for(var i=0;i<bottomRight.length;i++){
      if(bluePieces['bluePositions'].indexOf(bottomRight[i]) == -1 && redPieces['redPositions'].indexOf(bottomRight[i]) == -1){
        area.push(bottomRight[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(bottomRight[i]) == -1){
        area.push(bottomRight[i]);
        i = i+1000;
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(bottomRight[i]) == -1){
        area.push(bottomRight[i]);
        i = i+1000;
      }
      else i = i+1000;
    }
    
  },
  kingMoves:function(pos,area,color){
    var allKingSpots = [];
    
    for(var i=0;i<64;i++){
      if(label[i][0] == pos[0] && label[i][1] == parseInt(pos[1]) +1 ||
         label[i][0] == pos[0] && label[i][1] == parseInt(pos[1]) -1||
         label[i][1] == pos[1] && label[i][0] == String.fromCharCode(pos[0].charCodeAt() + 1)||
         label[i][1] == pos[1] && label[i][0] == String.fromCharCode(pos[0].charCodeAt() - 1)||
         label[i][1] == parseInt(pos[1])+1 && label[i][0] == String.fromCharCode(pos[0].charCodeAt() - 1)||
         label[i][1] == parseInt(pos[1])+1 && label[i][0] == String.fromCharCode(pos[0].charCodeAt() + 1)||
         label[i][1] == parseInt(pos[1])-1 && label[i][0] == String.fromCharCode(pos[0].charCodeAt() - 1)||
         label[i][1] == parseInt(pos[1])+1 && label[i][0] == String.fromCharCode(pos[0].charCodeAt() - 1)||
         label[i][1] == parseInt(pos[1])-1 && label[i][0] == String.fromCharCode(pos[0].charCodeAt() + 1)){
         allKingSpots.push(label[i]);
     }
    }
    for(var i=0;i<allKingSpots.length;i++){
      if(bluePieces['bluePositions'].indexOf(allKingSpots[i]) == -1 && redPieces['redPositions'].indexOf(allKingSpots[i]) == -1){
        area.push(allKingSpots[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(allKingSpots[i]) == -1){
        area.push(allKingSpots[i]);
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(allKingSpots[i]) == -1){
        area.push(allKingSpots[i]);
      }
    }
  },
  knightMoves:function(pos,area,color){
    var allKnightSpots = [];
    for(var i=0;i<64;i++){
      if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()-1) && label[i][1] == parseInt(pos[1])+2 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()+1) && label[i][1] == parseInt(pos[1])+2 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()+2) && label[i][1] == parseInt(pos[1])+1 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()+2) && label[i][1] == parseInt(pos[1])-1 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()+1) && label[i][1] == parseInt(pos[1])-2 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()-1) && label[i][1] == parseInt(pos[1])-2 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()-2) && label[i][1] == parseInt(pos[1])-1 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()-2) && label[i][1] == parseInt(pos[1])+1
        ){
        allKnightSpots.push(label[i]);
      }
    }
    for(var i=0;i<allKnightSpots.length;i++){
      if(bluePieces['bluePositions'].indexOf(allKnightSpots[i]) == -1 && redPieces['redPositions'].indexOf(allKnightSpots[i]) == -1){
        area.push(allKnightSpots[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(allKnightSpots[i]) == -1){
        area.push(allKnightSpots[i]);
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(allKnightSpots[i]) == -1){
        area.push(allKnightSpots[i]);
      }
    }

  },
  redPawnMoves:function(pos,area,color){
    var allRedPawnSpots = [];
    for(var i=0;i<64;i++){
      if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()) && label[i][1] == parseInt(pos[1])-1 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()) && label[i][1] == parseInt(pos[1])-2 
        ){
        allRedPawnSpots.push(label[i]);
      }
    }
    for(var i=0;i<allRedPawnSpots.length;i++){
      if(bluePieces['bluePositions'].indexOf(allRedPawnSpots[i]) == -1 && redPieces['redPositions'].indexOf(allRedPawnSpots[i]) == -1){
        area.push(allRedPawnSpots[i]);
      }
      else if(color === 'red' && redPieces['redPositions'].indexOf(allRedPawnSpots[i]) == -1){
        area.push(allRedPawnSpots[i]);
      }
    }
  },
  bluePawnMoves:function(pos,area,color){
    var allBluePawnSpots = [];
    for(var i=0;i<64;i++){
      if(label[i][0] == String.fromCharCode(pos[0].charCodeAt()) && label[i][1] == parseInt(pos[1])+1 ||
         label[i][0] == String.fromCharCode(pos[0].charCodeAt()) && label[i][1] == parseInt(pos[1])+2 
        ){
        allBluePawnSpots.push(label[i]);
      }
    }
    for(var i=0;i<allBluePawnSpots.length;i++){
      if(bluePieces['bluePositions'].indexOf(allBluePawnSpots[i]) == -1 && redPieces['redPositions'].indexOf(allBluePawnSpots[i]) == -1){
        area.push(allBluePawnSpots[i]);
      }
      else if(color === 'blue' && bluePieces['bluePositions'].indexOf(allBluePawnSpots[i]) == -1){
        area.push(allBluePawnSpots[i]);
      }
      
    }
  }
}