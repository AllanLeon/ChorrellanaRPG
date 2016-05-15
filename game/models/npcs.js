function Npcs(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = true;
}
//Declaration of variables
	var dukes;
	var dude;
	var message = [];
	

Npcs.prototype.render = function(){


	this.dukes = game.add.group();
	this.dukes.enableBody = true;

	this.dude = this.dukes.create(70, 1200, 'npcs');
	this.dude.body.immovable = true;
}

Npcs.prototype.load = function(){
	this.render();
}