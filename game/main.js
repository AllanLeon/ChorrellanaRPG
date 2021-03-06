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
game.state.add('HouseStage', Game.States.HouseStage); //Skups
game.state.add('BasementStage', Game.States.BasementStage); //Skups
game.state.add('mauricioStage', Game.States.mauricioStage); //Zhuku
game.state.add('BoatStage', Game.States.BoatStage); //Zergio
game.state.add('UnderwaterStage', Game.States.UnderwaterStage); //Zergio
game.state.add('DockStage', Game.States.DockStage); //Zergio
game.state.add('LvlCesped', Game.States.LvlCesped); //Squirtle
game.state.add('Roberto', Game.States.Roberto); //Shapy
game.state.add('RobertoSecond', Game.States.RobertoSecond); //Shapy
game.state.add('forestStage', Game.States.forestStage); //Baleh
game.state.add('forestRun', Game.States.forestRun); //Baleh
game.state.add('MiniDragonTestStage',Game.States.MiniDragonTestStage);//ioto
game.state.add('BlueDragonStage',Game.States.BlueDragonStage); //ioto
game.state.add('OrangeDragonStage',Game.States.OrangeDragonStage); //ioto
game.state.add('MiniGreenDragonStage',Game.States.MiniGreenDragonStage); //ioto
game.state.add('BlackDragonStage',Game.States.BlackDragonStage); //ioto
game.state.add('FirstPass',Game.States.FirstPass); //ioto


// Starts the initial state.
game.state.start('Boot');
