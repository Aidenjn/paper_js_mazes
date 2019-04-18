class GoalSprite {

    // Function: constructor
    // Parameters: goal object, size of goal in pixels, image being used for goal sprite
    // Description: Creates the sprite image representing the goal
    constructor(goal, size, image, gridX, gridY) {
        this.raster = new Raster('goalPic'),
        this.goalObj = goal;
        this.imageSize = size;
        this.startXpos = gridX;
        this.startYpos = gridY;
        this.init();
    }

    // Function: init
    // Parameters: none
    // Description: initializes sprite object
    init() {
        this.raster.width = this.imageSize;
        this.raster.height = this.imageSize;
        var xLocation = this.startXpos * 2 + (this.imageSize * this.goalObj.x);
        var yLocation = this.startYpos * 2 + (this.imageSize * this.goalObj.y);
        this.raster.position = new Point(xLocation, yLocation);
    }
}


