
// Declaration of writter data.
function Writer(game)
{
	this.game = game;
	this.sprite = null; 							//Sprite for the text box
	this.writingCooldown = 1; 						//Controls the peed of text writing (Time between letters)
	this.frame = this.writingCooldown; 				//Time passed after last letter 
	this.charIndex = 0; 							//Position of the next character in the string to write 
	this.writing = false; 							//If the game is showing text
	this.message = "Erase una vez\nUn pequeño niño de piel blanca y ojos azules... (?)\n\n\n Esta letra es horrible.";
	this.text = null; 								//Text object to show text on screen
}

// Initializes the textbox sprite and the text object.
Writer.prototype.render = function(){
	// loads sprites
	this.sprite = this.game.add.sprite(100, 60, 'textBox');
	this.sprite.frame = 1;										// 0: NPCs , 1: Signs
	
	// sets sprite properties
	this.sprite.alpha = 0; 
	this.sprite.fixedToCamera = true;

	// sets text properties
	var style = { font: "16px Minecraft", fill: "#ffffff" };
	this.text = game.add.text(120, 80, null, style);
	this.text.fixedToCamera = true;
    

};

Writer.prototype.load = function(){
	this.render();
}

Writer.prototype.startWriting = function(){
	this.writing = true;
	this.sprite.alpha = 0.8; 
	this.charIndex = 0;
};


Writer.prototype.update = function(){
	this.write();
	this.testMessage();
};

Writer.prototype.write = function(){
	if (this.writing){
		if (this.frame == this.writingCooldown){
			if (this.charIndex <= this.message.length){
				this.text.setText(this.message.substring(0, this.charIndex));
				this.charIndex++;
			}
			this.frame = 0;
		} else {
			this.frame ++;
		}
	}
};

Writer.prototype.testMessage = function(){
	if (game.input.keyboard.isDown(Phaser.Keyboard.M)) {
		this.startWriting();
	}
}




