class PlayerSprite {

    // Function: createPlayerSprite
    // Parameters: player object, size of player in pixels, image being used for player sprite
    // Description: Creates the sprite image representing the player
    constructor(player, size, image, xCoord, yCoord) {
        this.raster = new Raster(image);
        this.playerObj = player;
        this.imageSize = size;
        this.startXpos = xCoord;
        this.startYpos = yCoord;
        this.xPos = xCoord;
        this.yPos = yCoord;
        this.init();
    }

    // Function: updatePosition
    // Parameters: none
    // Description: updates sprite position to player object position
    updatePosition(x, y) {
        var xLocation = this.startXpos * 2 - (this.imageSize * x);
        var yLocation = this.startYpos  * 2 - (this.imageSize * y);
        this.raster.position = new Point(xLocation, yLocation);
    }

    // Function: init
    // Parameters: none
    // Description: initializes sprite object
    init() {
        this.raster.width = this.imageSize;
        this.raster.height = this.imageSize;
        this.raster.position = new Point((this.startXpos * 2), (this.startYpos * 2));
    }
}


