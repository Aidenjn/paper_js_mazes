/*********************************************************************
** Filename: main.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Main control for maze game. Contains all paper.js rendering.
*********************************************************************/


// Function: drawCell
// Parameters: cell object, size of cell in pixels, x & y coordinates of cell
// Description: Draw graphical representation of cell
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

// Function: createPlayerSprite
// Parameters: player object, size of player in pixels, image being used for player sprite
// Description: Creates the sprite image representing the player
function createPlayerSprite(player, size, image, xCoord, yCoord) {
    var pSprite = {
        raster: new Raster('playerPic'),
        playerObj: player,
        imageSize: size,
        startXpos: xCoord,
        startYpos: yCoord,
        // Function: updatePosition
        // Parameters: none
        // Description: updates sprite position to player object position
        updatePosition: function() {
            var xLocation = this.startXpos * 2 - (this.imageSize * this.playerObj.x);
            var yLocation = this.startYpos  * 2 - (this.imageSize * this.playerObj.y);
            this.raster.position = new Point(xLocation, yLocation);
        },
        // Function: init
        // Parameters: none
        // Description: initializes sprite object
        init: function() {
            this.raster.width = this.imageSize;
            this.raster.height = this.imageSize;
            this.raster.position = new Point((xCoord * 2), (yCoord * 2));
        }
    }
    pSprite.init();
    return pSprite;
}

// Function: createGoalSprite
// Parameters: goal object, size of goal in pixels, image being used for goal sprite
// Description: Creates the sprite image representing the goal
function createGoalSprite(goal, size, image, gridX, gridY) {
    var gSprite = {
        raster: new Raster('goalPic'),
        goalObj: goal,
        imageSize: size,
        startXpos: gridX,
        startYpos: gridY,
        // Function: init
        // Parameters: none
        // Description: initializes sprite object
        init: function() {
            this.raster.width = this.imageSize;
            this.raster.height = this.imageSize;
            var xLocation = this.startXpos * 2 + (this.imageSize * this.goalObj.x);
            var yLocation = this.startYpos * 2 + (this.imageSize * this.goalObj.y);
            this.raster.position = new Point(xLocation, yLocation);
        }
    }
    gSprite.init();
    return gSprite;
}

// Function: checkWin
// Parameters: player, goal
// Description: checks to see if player has reached the goal
function checkWin(player, goal) {
    pX = player.currentCell.column;
    pY = player.currentCell.row;
    gX = goal.residingCell.column;
    gY = goal.residingCell.row;

    if (pX == gX && pY == gY) {
        alert("Yum!");
        window.location.reload();
    }
}


// game variables
var maze_rows = 10;
var maze_columns = 18;
var player_start_x = 0;
var player_start_y = 0;
var goal_location_x = maze_rows - 1;
var goal_location_y = maze_columns - 1;

// render variables
var maze_position_x = 20;
var maze_position_y = 20;
var maze_pixel_width = 400;

// Create grid object
var g = new Grid(maze_rows, maze_columns);

// Turn grid into binary tree maze
binaryTree(g);

// Draw maze
drawGrid(g, maze_pixel_width, maze_position_x, maze_position_y);

// Create game objects
var player = playerConstructor(g.getCell(player_start_x, player_start_y));
var goal = goalConstructor(g.getCell(goal_location_x, goal_location_y));

// Create game sprites
var playerSprite = createPlayerSprite(player, (maze_pixel_width / maze_rows), "playerPic", maze_position_x, maze_position_y);
var goalSprite = createGoalSprite(goal, (maze_pixel_width / maze_rows), "goalPic", maze_position_x, maze_position_y);

// Player controls
function onKeyDown(event) {
    var move = true;
    if (event.key === "up" && move === true) {
        player.move("north");
        playerSprite.updatePosition();
    }
    if (event.key === "left" && move === true) {
        player.move("west");
        playerSprite.updatePosition();
    }
    if (event.key === "right" && move === true) {
        player.move("east");
        playerSprite.updatePosition();
    }
    if (event.key === "down" && move === true) {
        player.move("south");
        playerSprite.updatePosition();
    }
    checkWin(player, goal);
}
