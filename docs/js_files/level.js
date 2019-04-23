/*********************************************************************
** Filename: level.js
** Author: Aiden Nelson
** Date: 4/22/2019
** Description: Class for storing level info that decides how the game will be designed
*********************************************************************/

class Level {

    // Function: constructor
    // Parameters:
    // Description: Creates level object
    constructor() {
        // Logic
        this.mazeColumns = 18;
        this.mazeRows = 10;
        this.playerStartX = 0;
        this.playerStartY = 0;
        this.goalLocationX = this.mazeColumns - 1;
        this.goalLocationY = this.mazeRows - 1;
        this.algorithm = "binaryTree";

        // Graphics
        this.mazeSpriteX = 20;
        this.mazeSpriteY = 20;
        this.mazeSpriteHeight = 400;
    }


