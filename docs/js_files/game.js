/*********************************************************************
** Filename: game.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Game class
*********************************************************************/

class Game {

    // Remember: Columns are x axis
    //           Rows are y axis

    // Function: constructor
    // Parameters:
    // Description: Creates a game object
    constructor() {
        this.mazeColumns = 18;
        this.mazeRows = 10;
        this.playerStartX = 0;
        this.playerStartY = 0;
        this.goalLocationX = this.mazeColumns - 1;
        this.goalLocationY = this.mazeRows - 1;

        // Create grid object
        this.grid = new Grid(this.mazeColumns, this.mazeRows);

        // Turn grid into binary tree maze
        binaryTree(this.grid);

        // Create game objects
        this.player = new Player(this.grid.getCell(this.playerStartX, this.playerStartY));
        this.goal = new Goal(this.grid.getCell(this.goalLocationX, this.goalLocationY));

        // Experimental extra moving player
        //this.npc = new Player(this.grid.getCell(this.playerStartX + 3, this.playerStartY));

        // Uninitialized sprite objects
        this.mazeSprite = null;
        this.playerSprite = null;
        this.goalSprite = null;

        // Experimental
        //this.npcSprite = null;

    }

    // Function: setupVisuals
    // Parameters:
    // Description: Sets up game sprites
    setupVisuals(mazeHeight, positionX, positionY) {

        var bottomLeftY = mazeHeight / this.grid.rows;

        // Draw maze
        this.mazeSprite = new MazeSprite(this.grid, mazeHeight, positionX, positionY);

        // Create game sprites
        var standardSpriteWidth = mazeHeight / this.mazeRows;
        this.playerSprite = new CellContentSprite(standardSpriteWidth, "playerPic", mazeHeight, positionX, positionY, this.player.x, this.player.y);
        this.goalSprite = new CellContentSprite(standardSpriteWidth, "goalPic", mazeHeight, positionX, positionY, this.goal.x, this.goal.y);

        // Experimental extra moving player
        //this.npcSprite = new CellContentSprite(standardSpriteWidth, "playerPic", mazeHeight, positionX, positionY, this.npc.x, this.npc.y);


    }

    // Function: start
    // Parameters:
    // Description: Starts game
    start() {
        // NPC movement below
        /*
        var that = this;
        window.setInterval( function() {
            //that.moveNPC();
            console.log("npc moved X:" + that.npc.x + "Y:" + that.npc.y);
            that.npc.move("north");
            that.npcSprite.updatePosition(that.npc.x, that.npc.y);
            view.draw();
        }, 2000 );
        */
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
            this.player.move("north");
        }
        else if (input == "left") {
            this.player.move("west");
        }
        else if (input == "right") {
            this.player.move("east");
        }
        else if (input == "down") {
            this.player.move("south");
        }
        this.playerSprite.updatePosition(this.player.x, this.player.y);
        view.draw();
        this.checkWin();
    }

    // Function: checkWin
    // Parameters: none
    // Description: checks to see if the player has reached the goal
    checkWin() {
        //console.log("player(" + this.player.x + ", " + this.player.y + ")  goal(" + this.goal.x + ", " + this.goal.y + ")");
        if (this.player.x == this.goal.x && this.player.y == this.goal.y) {
            alert("Yum!");

            //alert("player(" + this.npc.x + ", " + this.npc.y + ")  goal(" + this.goal.x + ", " + this.goal.y + ")");
            window.location.reload();
        }
    }

}
