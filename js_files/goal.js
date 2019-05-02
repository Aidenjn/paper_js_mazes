/*********************************************************************
** Filename: goal.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Goal class
*********************************************************************/

class Goal {

    // Function: constructor
    // Parameters: placement cell of goal
    // Description: Creates a goal in a grid
    constructor(cell) {
        this.residingCell = cell;
        this.x = cell.column;
        this.y = cell.row;
    }
}
