/********************************************************************* 
** Filename: goal.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Goal class
*********************************************************************/

// Function: playerConstructor
// Parameters: starting cell of player
// Description: Creates a player that will navigate the grid
function goalConstructor(cell) {
    var goal = {
        residingCell: cell,
        x: cell.column,
        y: cell.row,
    }
    return goal;
}