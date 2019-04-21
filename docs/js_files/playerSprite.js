class PlayerSprite {

    // Function: createPlayerSprite
    // Parameters: player object, size of player in pixels, image being used for player sprite
    // Description: Creates the sprite image representing the player
    constructor(player, size, image, mazeHeight, xCoord, yCoord) {
        this.raster = new Raster(image);
        this.playerObj = player;
        this.spriteWidth = size;
        this.startXpos = xCoord;
        this.startYpos = yCoord;
        this.xPos = xCoord;
        this.yPos = yCoord;
        this.mazeHeight = mazeHeight;

        this.init();
    }

    // Function: updatePosition
    // Parameters: none
    // Description: updates sprite position to player object position
    updatePosition(x, y) {
        var canvasX = this.startXpos * 2 + (this.spriteWidth * x);
        var canvasY = this.mazeHeight - (this.spriteWidth * y);

        this.raster.position = new Point(canvasX, canvasY);
    }

    // Function: init
    // Parameters: none
    // Description: initializes sprite object
    init() {
        this.raster.width = this.spriteWidth;
        this.raster.height = this.spriteWidth;
        this.updatePosition(this.playerObj.x, this.playerObj.y);
    }
}


