class CellContentSprite{

    // Function: constructor
    // Parameters: size of sprite width in pixels, image being used for sprite, size of maze height in pixels, maze canvas coordinates (x, y), grid/maze coordinates (x, y)
    // Description: Creates a sprite for an object that can be contained in a cell (player, goal, etc...)
    constructor(size, image, mazeHeight, canvasX, canvasY, gridX, gridY) {
        this.spriteWidth = size;
        this.raster = new Raster(image);
        this.mazeHeight = mazeHeight;
        this.startCanvasX = canvasX;
        this.startCanvasY = canvasY;
        this.gridX = gridX;
        this.gridY = gridY;

        this.init();
    }

    // Function: updatePosition
    // Parameters: none
    // Description: updates sprite position
    updatePosition(x, y) {
        // maze position, sprite width, grid places over
        var canvasX = this.startCanvasX + this.spriteWidth/2 + (this.spriteWidth * x);
        var canvasY = this.startCanvasY - this.spriteWidth/2 + this.mazeHeight - (this.spriteWidth * y);

        this.raster.position = new Point(canvasX, canvasY);
    }

    // Function: init
    // Parameters: none
    // Description: initializes sprite object
    init() {
        this.raster.width = this.spriteWidth;
        this.raster.height = this.spriteWidth;
        this.updatePosition(this.gridX, this.gridY);
    }
}


