/********************************************************************* 
** Filename: grid.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Grid class
*********************************************************************/

// Function: gridConstructor
// Parameters: Amount of rows and columns for new grid
// Description: Returns a maze grid object
function gridConstructor(r, c) {
    var grid = {
        rows: r,
        columns: c,
        cells: null,
        // Function: prepareGrid
        // Parameters: None
        // Description: Initialize grid as a 2d array of cells
        prepareGrid: function() {
            cells = new Array(this.rows)
            for (var x = 0; x < cells.length; x++) {
                cells[x] = new Array(this.columns);
                for (var y = 0; y < cells[x].length; y++) {
                    cells[x][y] = cellConstructor(x, y);
                }
            }
            this.cells = cells;
        },
        // Function: gridConstructor
        // Parameters: row and column of cell
        // Description: Get cell at specified index, return null if cell doesn't exist
        getCell: function(row, col) {
            if (row < 0 || row >= this.rows)
                return null;
            else if (col < 0 || col >= this.columns)
                return null;
            else
                return this.cells[row][col];
        },
        // Function: getRandCell
        // Parameters: None
        // Description: Get a random existing cell from the grid
        getRandCell: function() {
            var x = Math.floor(Math.random() * this.rows);
            var y = Math.floor(Math.random() * this.columns);
            return this.cells[x][y];
        },
        // Function: configureCells
        // Parameters: None
        // Description: Configure cell neighbors in the grid
        configureCells: function() {
            for (var x = 0; x < cells.length; x++) {
                for (var y = 0; y < cells[x].length; y++) {
                    var row = this.cells[x][y].row;
                    var col = this.cells[x][y].column;
                    
                    this.cells[x][y].north = this.getCell((row - 1), col);
                    this.cells[x][y].east = this.getCell(row, (col + 1));
                    this.cells[x][y].south = this.getCell((row + 1), col);
                    this.cells[x][y].west = this.getCell(row, (col - 1));
                }
            }
        },
        // Function: init
        // Parameters: none
        // Description: Initial grid setup
        init: function() {
            this.prepareGrid();
            this.configureCells();
        }
    };
    grid.init();
    return grid;
}