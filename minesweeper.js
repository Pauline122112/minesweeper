document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row:1, col:1, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:1, col:2, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:1, col:3, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:1, col:4, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:2, col:1, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:2, col:2, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:2, col:3, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:2, col:4, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:3, col:1, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:3, col:2, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:3, col:3, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:3, col:4, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:4, col:1, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:4, col:2, isMine:true, isMarked: true, hidden:true, surroundingMines: 0},
    {row:4, col:3, isMine:false, isMarked: false, hidden:true, surroundingMines: 0},
    {row:4, col:4, isMine:false, isMarked: false, hidden:true, surroundingMines: 0}
  ]

};



function startGame () {
  for(i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    document.addEventListener("click", checkForWin);
    document.addEventListener("contextmenu", checkForWin);
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(i = 0; i < board.cells.length;i++){
if ((board.cells[i].isMine && board.cells[i].isMarked) || (!board.cells[i].isMine && !board.cells[i].hidden)) {

} else{
  return;
}
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
var surroundingCells =
  getSurroundingCells(cell.row, cell.col, cell.isMine, cell.isMarked);

  var count = 0;

  for(var i = 0; i < surroundingCells.length; i++){
    if(surroundingCells[i].isMine === true)
    {

      count += 1000;
    }
  }
  return count;
}
