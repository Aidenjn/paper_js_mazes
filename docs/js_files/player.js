/********************************************************************* 
** Filename: player.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Player class
*********************************************************************/

// Function: playerConstructor
// Parameters: starting cell of player
// Description: Creates a player that will navigate the grid
function playerConstructor(startCell) {
    var player = {
        currentCell: startCell,
        x: startCell.row,
        y: startCell.column,
        // Function: move
        // Parameters: direction of player movement
        // Description: Moves player to specified adjacent cell if there is a link to it 
        move: function (direction) {
            if (direction === "north" && this.currentCell.hasLink(this.currentCell.north) === true) {
                //alert("north");
                this.y++;
                this.currentCell = this.currentCell.north;
            }
            if (direction === "west" && this.currentCell.hasLink(this.currentCell.west) === true) {
                //alert("west");
                this.x++;
                this.currentCell = this.currentCell.west;
            }
            if (direction === "south" && this.currentCell.hasLink(this.currentCell.south) === true) {
                //alert("south");
                this.y--;
                this.currentCell = this.currentCell.south;
            }
            if (direction === "east" && this.currentCell.hasLink(this.currentCell.east) === true) {
                //alert("east");
                this.x--;
                this.currentCell = this.currentCell.east;
            }
        }
    }
    return player;
}