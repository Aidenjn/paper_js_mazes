/*********************************************************************
** Filename: game.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Game class
*********************************************************************/

class Game {

    // Function: constructor
    // Parameters:
    // Description: Creates a game object
    constructor() {
        this.mazeRows = 10;
        this.mazeColumns = 18;
        this.playerStartX = 0;
        this.playerStartY = 0;
        this.goalLocationX = this.mazeRows - 1;
        this.goalLocationY = this.mazeColumns - 1;

        // Create grid object
        this.grid = new Grid(this.mazeRows, this.mazeColumns);

        // Turn grid into binary tree maze
        binaryTree(this.grid);

        // Create game objects
        this.player = new Player(this.grid.getCell(this.playerStartX, this.playerStartY));
        this.goal = new Goal(this.grid.getCell(this.goalLocationX, this.goalLocationY));

        // Uninitialized sprite objects
        this.mazeSprite = null;
        this.playerSprite = null;
        this.goalSprite = null;

    }

    // Function: setupVisuals
    // Parameters:
    // Description: Sets up game sprites
    setupVisuals(mazeWidth, positionX, positionY) {

        // Draw maze
        this.mazeSprite = new MazeSprite(this.grid, mazeWidth, positionX, positionY);

        // Create game sprites
        this.playerSprite = new PlayerSprite(this.player, (mazeWidth / this.mazeRows), "playerPic", positionX, positionY);
        this.goalSprite = new GoalSprite(this.goal, (mazeWidth / this.mazeRows), "goalPic", positionX, positionY);

    }

    // Function: start
    // Parameters:
    // Description: Starts game
    start() {
        // Empty
    }

    // Function: run
    // Parameters:
    // Description: Main logic loop
    run() {
        // Empty

    }

    // Function: end
    // Parameters:
    // Description: Cleanup for end of game
    end() {
        // Empty
    }

    // Function: handleInput
    // Parameters: input string
    // Description: Maps player inputs to appropriate game actions
    handleInput(input) {
        if (input == "up") {
            //alert(input);
            this.player.move("north");
            this.playerSprite.updatePosition(this.player.x, this.player.y);
        }
        if (input == "left") {
            this.player.move("west");
            this.playerSprite.updatePosition(this.player.x, this.player.y);
        }
        if (input == "right") {
            this.player.move("east");
            this.playerSprite.updatePosition(this.player.x, this.player.y);
        }
        if (input == "down") {
            this.player.move("south");
            this.playerSprite.updatePosition(this.player.x, this.player.y);
        }
        view.draw();
        this.checkWin();
    }

    // Function: checkWin
    // Parameters: none
    // Description: checks to see if the player has reached the goal
    checkWin() {
        console.log("player(" + this.player.x + ", " + this.player.y + ")  goal(" + this.goal.x + ", " + this.goal.y + ")");
        // Reversing coordinates because it won't work otherwise
        // THIS IS A TEMPORARY FIX
        if (-(this.player.x) == this.goal.x && -(this.player.y) == this.goal.y) {
            alert("Yum!");
            window.location.reload();
        }
    }

}
