/*********************************************************************
** Filename: player.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Contains all the functions that are used to turn grid
**              objects into mazes
*********************************************************************/

// Function: btMaze
// Parameters: grid object
// Description: Uses the binary tree algorithm to turn a grid object into a randomly generated maze.
function binaryTree(grid) {
    for (var x = 0; x < grid.columns; x++) {
        for (var y = 0; y < grid.rows; y++) {
            currentCell = grid.getCell(x, y);
            var possibleDirections = [];
            if (x > 0) {
                possibleDirections.push(currentCell.west);
                //console.log("West possible");
            }
            if (y < grid.rows - 1) {
                possibleDirections.push(currentCell.north);
                //console.log("North possible");
            }

            randNum = Math.floor(Math.random() * possibleDirections.length)
            chosenDirection = possibleDirections[randNum];

            if (possibleDirections.length > 0) {
                //console.log("(" + currentCell.column + ", " + currentCell.row + ") dir: (" + chosenDirection.column  + ", "+ chosenDirection.row + ")");
                currentCell.link(chosenDirection, true);
            }

        }
    }
}
