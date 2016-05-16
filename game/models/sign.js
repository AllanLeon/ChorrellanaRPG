function Sign(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = true;
	this.message = ["Press X to speed up the dialogue", "I hope you are not doing it right now,\nyou may be losing some important information", "Wait... Are you really reading this?"];
}
//Declaration of variables
	var carteles;
	var cartel;
	

Sign.prototype.render = function(){

	this.carteles = game.add.group();
	this.carteles.enableBody = true;

	this.cartel = this.carteles.create(300, 600, 'poster');
	this.cartel.body.immovable = true;
}

Sign.prototype.load = function(){
	this.render();
}

// Uses the Writer class to display a dialogue on screen
Sign.prototype.sendMessage = function(){
	 for (var i=0; i<this.message.length; i++){
	 	this.game.writer.addText(this.message[i]);
	 }
	 this.game.writer.openTextBox(1);
};