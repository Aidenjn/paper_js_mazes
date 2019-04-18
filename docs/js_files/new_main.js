/*********************************************************************
** Filename: main.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Main control for maze game. Contains all paper.js rendering.
*********************************************************************/


// Make the paper scope global, by injecting it into window:
paper.install(window);

// Create a game instance
var gameInstance = new Game();


// Upon window loading
window.onload = function() {

	// Setup directly from canvas id:
	paper.setup('myCanvas');

    // Set up game
    gameInstance.setupVisuals(400, 20, 20);

    // Start game
    gameInstance.start();

	view.draw();

    view.onKeyDown = function(event) {
        gameInstance.handleInput(event.key);
    }
}
