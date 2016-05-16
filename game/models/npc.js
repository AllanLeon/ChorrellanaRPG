function Npc(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = true;
	this.message = ["Hola bro", "Esto es tan solo una ligera prueba", "Maybe we should start speaking english from now"];
}

//Declaration of variables
	var dukes;
	var dude;
	

Npc.prototype.render = function(){

	this.dukes = game.add.group();
	this.dukes.enableBody = true;

	this.dude = this.dukes.create(70, 1200, 'npcs');
	this.dude.body.immovable = true;
}

Npc.prototype.load = function(){
	this.render();
}

// Uses the Writer class to display a dialogue on screen
Npc.prototype.sendMessage = function(){
	 for (var i=0; i<this.message.length; i++){
	 	this.game.writer.addText(this.message[i]);
	 }
	 this.game.writer.openTextBox(0);
	 this.game.writer.buttonPressed = true;
};