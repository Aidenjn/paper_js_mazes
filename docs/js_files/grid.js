/*********************************************************************
** Filename: grid.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Grid class
*********************************************************************/

class Grid {

    // Function: constructor
    // Parameters: Amount of rows and columns for new grid
    // Description: Returns a maze grid object
    constructor(columns, rows) {
        this.rows = rows;
        this.columns = columns;
        this.cells = null;
        this.init();
    }


    // Function: prepareGrid
    // Parameters: None
    // Description: Initialize grid as a 2d array of cells
    prepareGrid() {
        this.cells = new Array(this.columns)
        for (var x = 0; x < this.cells.length; x++) {
            this.cells[x] = new Array(this.rows);
            for (var y = 0; y < this.cells[x].length; y++) {
                this.cells[x][y] = new Cell(x, y);
            }
        }
    }

    // Function: gridConstructor
    // Parameters: row and column of cell
    // Description: Get cell at specified index, return null if cell doesn't exist
    getCell(col, row) {
        if (row < 0 || row >= this.rows)
            return null;
        else if (col < 0 || col >= this.columns)
            return null;
        else
            return this.cells[col][row];
    }

    // Function: getRandCell
    // Parameters: None
    // Description: Get a random existing cell from the grid
    getRandCell() {
        var x = Math.floor(Math.random() * this.rows);
        var y = Math.floor(Math.random() * this.columns);
        return this.cells[x][y];
    }

    // Function: configureCells
    // Parameters: None
    // Description: Configure cell neighbors in the grid
    configureCells() {
        for (var x = 0; x < this.cells.length; x++) {
            for (var y = 0; y < this.cells[x].length; y++) {
                var col = this.cells[x][y].column;
                var row = this.cells[x][y].row;

                // Establish neighbors
                this.cells[x][y].north = this.getCell(col, (row + 1));
                this.cells[x][y].east = this.getCell((col + 1), row);
                this.cells[x][y].south = this.getCell(col, (row - 1));
                this.cells[x][y].west = this.getCell((col - 1), row);

            }
        }
    }

    // Function: init
    // Parameters: none
    // Description: Initial grid setup
    init() {
        this.prepareGrid();
        this.configureCells();
    }

}
