function Npcs(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = true;
}
//Declaration of variables
	var dukes;
	var dude;

Npcs.prototype.render = function(){


	this.dukes = game.add.group();
	this.dukes.enableBody = true;

	this.dude = this.dukes.create(250, 200, 'npcs');
	this.dude.body.immovable = true;
}

Npcs.prototype.load = function(){
	this.render();
}