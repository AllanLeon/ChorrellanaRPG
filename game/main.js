var Game, game;

// Contains general Game info, such as the states.
Game = {
  States: States
};

// Initializes the Phaser game.
window.game = game = new Phaser.Game(800, 600, Phaser.AUTO, '');

// Adds the necessary states to the game.
game.state.add('Boot', Game.States.Boot);
game.state.add('Play', Game.States.Play);
game.state.add('GameOver', Game.States.GameOver);

// Adds the different stages of the game as states.
//game.state.add('TestStage', Game.States.TestStage);
game.state.add('Roberto', Game.States.Roberto);
game.state.add('RobertoSecond', Game.States.RobertoSecond);

// Starts the initial state.
game.state.start('Boot');
