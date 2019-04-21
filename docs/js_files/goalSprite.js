class GoalSprite {

    // Function: constructor
    // Parameters: goal object, size of goal in pixels, image being used for goal sprite
    // Description: Creates the sprite image representing the goal
    constructor(goal, size, image, mazeHeight, gridX, gridY) {
        this.raster = new Raster('goalPic'),
        this.goalObj = goal;
        this.spriteWidth = size;
        this.startXpos = gridX;
        this.startYpos = gridY;
        this.mazeHeight = mazeHeight;
        this.init();
    }

    // Function: init
    // Parameters: none
    // Description: initializes sprite object
    init() {
        this.raster.width = this.spriteWidth;
        this.raster.height = this.spriteWidth;
        var xLocation = this.startXpos * 2 + (this.spriteWidth * this.goalObj.x);
        var yLocation = this.mazeHeight - (this.spriteWidth * this.goalObj.y);
        this.raster.position = new Point(xLocation, yLocation);
    }
}


