class MazeSprite {

    constructor(grid, size, xCoord, yCoord) {
        this.drawGrid(grid, size, xCoord, yCoord);
    }

    // Functthis.ion: drawCell
    // Parameters: cell object, size of cell in pixels, x & y coordinates of cell
    // Description: Draw graphical representation of cell
    drawCell(c, size, xCoord, yCoord) {

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
    drawGrid(grid, size, xCoord, yCoord) {
        var cellSize = size / grid.rows;
        for (var x = 0; x < grid.rows; x++) {
            for (var y = 0; y < grid.columns; y++) {
                this.drawCell(grid.getCell(x, y), cellSize, xCoord + (cellSize * x), yCoord + (cellSize * y));
            }
        }
    }
}

