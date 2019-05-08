class CellContentSprite{

    // Function: constructor
    // Parameters: size of sprite width in pixels, image being used for sprite, size of maze height in pixels, maze canvas coordinates (x, y), grid/maze coordinates (x, y)
    // Description: Creates a sprite for an object that can be contained in a cell (player, goal, etc...)
    constructor(size, imagePath, mazeHeight, canvasX, canvasY, gridX, gridY) {
        this.spriteWidth = size;
        this.mazeHeight = mazeHeight;

        //circle rasters need some work
        if (imagePath === "") {
            var circle = new Path.Circle({
                center: [80, 50],
                radius: 100,
                fillColor: 'red'
            });
            this.raster = circle.rasterize();
            circle.remove();
        }
        else {
            var domImg = new Image();
            //domImg.src = 'http://paperjs.org/about/paper-js.gif';
            domImg.src = imagePath;
            this.raster = new Raster(domImg);
        }
        this.raster.scale(this.spriteWidth/this.mazeHeight, this.spriteWidth/this.mazeHeight);
        //this.raster.selected = true;

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
        //this.raster.width = this.spriteWidth;
        //this.raster.height = this.spriteWidth;
        this.updatePosition(this.gridX, this.gridY);
    }
}


