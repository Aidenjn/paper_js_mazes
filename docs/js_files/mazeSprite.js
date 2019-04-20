class MazeSprite {

    constructor(grid, size, xCoord, yCoord) {
        this.drawGrid(grid, size, xCoord, yCoord);

        //var testCell = new Cell(0,0);
        //var testCell1 = new Cell(1,0);

        //testCell.link(testCell1, true);

        //testCell.south = testCell1;
        //testCell1.north = testCell;

        //testCell2 = new Cell(0,1);
        //testCell3 = new Cell(1,1);
        //testCell4 = new Cell(1,2);
        //this.drawCell(testCell, 20, 0, 200)
        //this.drawCell(testCell, 20, 0, 20)
        //this.drawCell(testCell1, 20, 0, 40)
    }

    // Function: drawCell
    // Parameters: cell object, size of cell in pixels, x & y coordinates of cell
    // Description: Draw graphical representation of cell
    drawCell(c, size, xCoord, yCoord) {

/*
        var x1 = yCoord;
        var y1 = xCoord;
        var x2 = yCoord + size;
        var y2 = xCoord + size;
*/


        var x1 = xCoord;
        var y1 = yCoord;
        var x2 = xCoord + size;
        var y2 = yCoord - size;

        var centerX = (x1 + x2)/2;
        var centerY = (y1 + y2)/2;


        if (c.north === null) { // Get these lines horizontal
            var northPath = new Path();
            northPath.strokeWidth = 6;
            northPath.strokeColor = 'purple';
            //northPath.add(new Point(x1, y1), new Point(x2, y1));
            northPath.add(new Point(x2, y2), new Point(x1, y2));
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
            //southPath.add(new Point(x1, y2), new Point(x2, y2));
            southPath.add(new Point(x1, y1), new Point(x2, y1));
        }
        if (c.hasLink(c.east) === false) {
            var eastPath = new Path();
            eastPath.strokeColor = 'purple';
            eastPath.strokeWidth = 6;
            eastPath.add(new Point(x2, y1), new Point(x2, y2));
        }

        // Uncomment block below to print coordinates on each cell
        var text = new PointText(new Point(centerX, centerY));
        text.justification = 'center';
        text.fillColor = 'black';
        text.content = "(" + c.column + ", " + c.row + ")";

    }


    // Function: drawGrid
    // Parameters: grid object, size of grid in pixels lengthwise, x & y coordinates of grid upper left corner
    // Description: Draw graphical representation of grid
    drawGrid(grid, size, xCoord, yCoord) {
        // Calculate bottom left of cell
        var cellSize = size / grid.rows;
        var bottomLeftY = yCoord + size;
        yCoord = bottomLeftY;

        var cellSize = size / grid.rows;
        for (var x = 0; x < grid.columns; x++) {
        //for (var x = 0; x < 1; x++) {
            //for (var y = 0; y < 1; y++) {
            for (var y = 0; y < grid.rows; y++) {
                this.drawCell(grid.getCell(x, y), cellSize, xCoord + (cellSize * x), yCoord - (cellSize * y));
                //this.drawCell(grid.getCell(x, y), cellSize, xCoord + (cellSize * x), yCoord + (cellSize * y));
            }
        }
    }
}

