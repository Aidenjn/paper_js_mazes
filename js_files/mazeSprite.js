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
        // Thickness of lines that draw the cells
        var lineThickness = 0.15 * size;
        // Extra length added to lines in order to make corners look nice
        var cornerFlushing = lineThickness/2;

        // (x1, y2)  (x2, y2)
        // (x1, y1)  (x2, y1)

        var x1 = xCoord;
        var y1 = yCoord;
        var x2 = xCoord + size;
        var y2 = yCoord - size;

        var centerX = (x1 + x2)/2;
        var centerY = (y1 + y2)/2;


        if (c.north === null) { // Get these lines horizontal
            var northPath = new Path();
            northPath.strokeWidth = lineThickness;
            northPath.strokeColor = 'purple';
            //northPath.add(new Point(x1, y1), new Point(x2, y1));
            northPath.add(new Point(x2 + cornerFlushing, y2), new Point(x1 - cornerFlushing, y2));
        }
        if (c.west === null) {
            var westPath = new Path();
            westPath.strokeColor = 'purple';
            westPath.strokeWidth = lineThickness;
            westPath.add(new Point(x1, y1), new Point(x1, y2));
        }
        if (c.hasLink(c.south) === false) {
            var southPath = new Path();
            southPath.strokeColor = 'purple';
            southPath.strokeWidth = lineThickness;
            //southPath.add(new Point(x1, y2), new Point(x2, y2));
            southPath.add(new Point(x1 - cornerFlushing, y1), new Point(x2 + cornerFlushing, y1));
        }
        if (c.hasLink(c.east) === false) {
            var eastPath = new Path();
            eastPath.strokeColor = 'purple';
            eastPath.strokeWidth = lineThickness;
            eastPath.add(new Point(x2, y1), new Point(x2, y2));
        }

        // Uncomment block below to print coordinates on each cell
        var text = new PointText(new Point(centerX, centerY));
        text.justification = 'center';
        text.fillColor = 'black';
        //text.content = "(" + c.column + ", " + c.row + ")";

    }


    // Function: drawGrid
    // Parameters: grid object, size of grid in pixels lengthwise, x & y coordinates of grid upper left corner
    // Description: Draw graphical representation of grid
    drawGrid(grid, size, xCoord, yCoord) {
        // Calculate bottom left of cell
        var cellSize = size / grid.rows;
        var bottomLeftY = yCoord + size;
        var canvasX = 0;
        var canvasY = 0;

        // Drawing begins from bottom left corner, one column at a time
        for (var x = 0; x < grid.columns; x++) {
            for (var y = 0; y < grid.rows; y++) {
                canvasX = xCoord + (cellSize * x);
                canvasY = bottomLeftY - (cellSize * y);
                this.drawCell(grid.getCell(x, y), cellSize, canvasX, canvasY);
            }
        }
    }
}

