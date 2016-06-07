//Declaration of variables
function NpcPlantas(game){
	this.game = game;
	this.sprite = null;
	this.colliderSprite = true;
	this.message = ["Hi dude", "Well this is only a simple cesped", "You can walk in this but careful with 4:20"];
}	

NpcPlantas.prototype.render = function(){

	this.plantas = game.add.group();
	this.plantas.enableBody = true;

	this.plant = this.plantas.create(0, 100, 'plant');
	this.plant.body.immovable = true;
}

NpcPlantas.prototype.load = function(){
	this.render();
}

// Uses the Writer class to display a dialogue on screen
NpcPlantas.prototype.sendMessage = function(){
	 for (var i=0; i<this.message.length; i++){
	 	this.game.writer.addText(this.message[i]);
	 }
	 this.game.writer.openTextBox(0);
	 this.game.writer.buttonPressed = true;
};

/**
 * Checks for collision between the NPPlants and the player, so the writer can show a message.
 */
NpcPlantas.prototype.checkNPCCollission = function(){
	if(this.game.physics.arcade.collide(this.game.player.colliderSprite, this.plantas)){
		if (game.input.keyboard.isDown(Phaser.Keyboard.X) && !this.game.writer.buttonPressed){
			this.sendMessage();
			this.game.writer.buttonPressed = true;
		}
	}  
};

/**
 * Updates the NPPlants.
 */
NpcPlantas.prototype.update = function() {
	this.checkNPCCollission();
}