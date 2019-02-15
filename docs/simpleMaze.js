// ****** Begin JavaScript ****** 

// Function: cellConstructor
// Parameters: row and column coordinants of cell
// Description: Returns a maze cell object
function cellConstructor(r, c) {
    var cell = {
        row:    r,
        column: c,
        links:  {}, // Links to other cells
        type:   "Normal",
        north:  null,
        east:   null,
        south:  null,
        west:   null,
        // Function: getKey
        // Parameters: none
        // Description: Returns a unique key for the cell
        getKey: function() {
            return (String(this.row) + "," + String(this.column));
            //return "dog";
        },
        // Function: link
        // Parameters: Cell to link, bidirectional option
        // Description: Links the cell to another
        link: function(c, bidi) {
            this.links[c.getKey()] = true;
            if (bidi === true)
                c.link(this, false);
        },
        // Function: unlink
        // Parameters: Cell to unlink, bidirectional option
        // Description: unlinks the cell from another
        unlink: function(c, bidi) {
            delete this.links[c.getKey()];
            if (bidi === true)
                c.link(self, false);
        },
        // Function: getLinks
        // Parameters: none
        // Description: Returns a list of linked cells
        getLinks: function() {
            //return this.keys(this.links);
        },
        // Function: hasLink
        // Parameters: Cell
        // Description: Returns weither the cell has a link to the onther cell
        hasLink: function(c) {
            if (c === null)
                return false;
            else
                return (c.getKey() in this.links);
        },
        // Function: getNeighbors
        // Parameters: none
        // Description: Returns a list of neighboring cells
        getNeighbors: function() {
            list = [];
            if (this.north)
                list.push(this.north);
            if (this.east)
                list.push(this.east);
            if (this.south)
                list.push(this.south);
            if (this.west)
                list.push(this.west);
            return list;
        }
    };
    return cell;
}

function gridConstructor(r, c) {
    var grid = {
        rows: r,
        columns: c,
        cells: null,
        // Initialize grid as a 2d array of cells
        prepareGrid: function() {
            cells = new Array(this.rows)
            for (var x = 0; x < cells.length; x++) {
                cells[x] = new Array(this.columns);
                for (var y = 0; y < cells[x].length; y++) {
                    cells[x][y] = cellConstructor(x, y);
                }
            }
            this.cells = cells;
            //console.log(this.cells[1][0].row);
        },
        // Get cell at specified index, return null if cell doesn't exist
        getCell: function(row, col) {
            //console.log("Requesting: " + row + ", " + col);
            if (row < 0 || row >= this.rows)
                return null;
            else if (col < 0 || col >= this.columns)
                return null;
            else
                return this.cells[row][col];
        },
        // Get a random existing cell from the grid
        getRandCell: function() {
            var x = Math.floor(Math.random() * this.rows);
            var y = Math.floor(Math.random() * this.columns);
            return cells[x][y];
        },
        // Configure cells in the grid
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
        init: function() {
            this.prepareGrid();
            this.configureCells();
        }
    };
    grid.init();
    //console.log(grid.cells[1][0].row);
    return grid;
}

function drawCell(c, size, xCoord, yCoord) {
  
    var x1 = yCoord;
    var y1 = xCoord;
    var x2 = yCoord + size;
    var y2 = xCoord + size;
    
    if (c.north === null) { // Get these lines horizontal
        var northPath = new Path();
        northPath.strokeWidth = 6;
        northPath.strokeColor = 'purple';
        northPath.add(new Point(x1, y1), new Point(x2, y1));
    }
    if (c.west === null) {
        var westPath = new Path();
        westPath.strokeColor = 'purple';
        westPath.strokeWidth = 6;
        westPath.add(new Point(x1, y1), new Point(x1, y2));
    }
    if (c.hasLink(c.south) === false) {
        var southPath = new Path();
        southPath.strokeColor = 'purple';
        southPath.strokeWidth = 6;
        southPath.add(new Point(x1, y2), new Point(x2, y2));
    }
    if (c.hasLink(c.east) === false) {
        var eastPath = new Path();
        eastPath.strokeColor = 'purple';
        eastPath.strokeWidth = 6;
        eastPath.add(new Point(x2, y1), new Point(x2, y2));
    }
}


// Function: drawGrid
// Parameters: grid object, size of grid in pixels lengthwise, x & y coordinates of grid
// Description: Draw graphical representation of grid
function drawGrid(grid, size, xCoord, yCoord) {
    cellSize = size / grid.rows;
    for (var x = 0; x < grid.rows; x++) {
        for (var y = 0; y < grid.columns; y++) {
            drawCell(grid.getCell(x, y), cellSize, xCoord + (cellSize * x), yCoord + (cellSize * y));
        }
    }
}

// Function: btMaze
// Parameters: grid object
// Description: Uses the binary tree algorithm to turn a grid object into a randomly generated maze.
function binaryTree(grid) {
    for (var x = 0; x < grid.rows; x++) {
        for (var y = 0; y < grid.columns; y++) {
            currentCell = g.getCell(x, y);
            var possibleDirections = [];
            if (x > 0)
                possibleDirections.push(currentCell.north);
            if (y > 0)
                possibleDirections.push(currentCell.west);
            
            randNum = Math.floor(Math.random() * possibleDirections.length) 
            chosenDirection = possibleDirections[randNum];
            
            if (possibleDirections.length > 0)
                currentCell.link(chosenDirection, true);
        }
    }
}

function createPlayer(pixelSize, startX, startY, startCell) {
    var player = {
        raster: new Raster('playerPic'),
        currentCell: startCell,
        x: 0,
        y: 0,
        imageSize: pixelSize,
        startXpos: startX,
        startYpos: startY,
        updatePosition: function() {
//            this.x = xPos;
//            this.y = yPos;
        this.raster.position = new Point((this.startXpos * 2 - (this.imageSize * this.x)), (this.startYpos  * 2- (this.imageSize * this.y)));
            //this.raster.position = new Point((this.startXpos - (this.imageSize), (this.startYpos));
//            this.raster.position = new Point((this.startXpos + (this.imageSize * this.x)), (this.startYpos + (this.imageSize * this.y)));

        },
        move: function (direction) {
            if (direction === "north" && this.currentCell.hasLink(this.currentCell.north) === true) {
                //alert("north");
                this.y++;
                this.currentCell = this.currentCell.north;
                this.updatePosition();
            }
            if (direction === "west" && this.currentCell.hasLink(this.currentCell.west) === true) {
                //alert("west");
                this.x++;
                this.currentCell = this.currentCell.west;
                this.updatePosition();
            }
            if (direction === "south" && this.currentCell.hasLink(this.currentCell.south) === true) {
                //alert("south");
                this.y--;
                this.currentCell = this.currentCell.south;
                this.updatePosition();
            }
            if (direction === "east" && this.currentCell.hasLink(this.currentCell.east) === true) {
                //alert("east");
                this.x--;
                this.currentCell = this.currentCell.east;
                this.updatePosition();
            }
        }

    }
    
    player.raster.width = pixelSize;
    player.raster.height = pixelSize;
    player.raster.position = new Point((startX * 2), (startY * 2));
    
    
    return player;
}


//var c = cellConstructor(0, 0);
var g = gridConstructor(10, 18);

//g.getCell(0, 0).link(g.getCell(0, 1), true);

//g.getCell(0, 2).link(g.getCell(0, 3), true);
//console.log(g.getCell(0, 0), g.getCell(1, 0), g.getCell(0, 1));

binaryTree(g);

drawGrid(g, 400, 20, 20);

var player = createPlayer(40, 20, 20, g.getCell(0,0));

//player.updatePosition(20, 20);

function onKeyDown(event) {
    var move = true;
    if (event.key === "up" && move === true) {
        player.move("north");
    }
    if (event.key === "left" && move === true) {
        player.move("west");
    }
    if (event.key === "right" && move === true) {
        player.move("east");
    }
    if (event.key === "down" && move === true) {
        player.move("south");
    }
}



// ****** End JavaScript ****** 