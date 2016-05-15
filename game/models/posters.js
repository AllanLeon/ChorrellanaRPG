function Posters(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = true;
}
//Declaration of variables
	var carteles;
	var cartel;
	var message = [];
	

Posters.prototype.render = function(){


	this.carteles = game.add.group();
	this.carteles.enableBody = true;

	this.cartel = this.carteles.create(300, 600, 'poster');
	this.cartel.body.immovable = true;
}

Posters.prototype.load = function(){
	this.render();
}