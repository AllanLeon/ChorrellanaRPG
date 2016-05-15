// Declaration of writter data.
function Writer(game)
{
	this.game = game;
	this.sprite = null; 							//Sprite for the text box
	this.charIndex = 0; 							//Position of the next character in the string to write 
	this.writing = false; 							//If the writing animation is playing
	this.message = null;							//Current message on screen
	this.textQueue = new Queue();					//Storage for the messages to display in a dialogue. The text box closes when empty.
	this.text = null; 								//Text object to show text on screen
	this.buttonPressed = false;						//True when the button is pressed, false when it's released
	this.onScreen = false;							//For the text box sprite
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
	var style = { font: "18px Minecraft", fill: "#ffffff" };
	this.text = game.add.text(120, 80, null, style);
	this.text.fixedToCamera = true;
};

Writer.prototype.load = function(){
	this.render();
}

//Used to add NPC messages in a dialogue. 
Writer.prototype.addText = function(message){
	 this.textQueue.enqueue(message);
};

//Draws the text box on the screen and begin to write text on it
Writer.prototype.openTextBox = function(textBoxType){	
	if (!this.textQueue.isEmpty()){
		this.sprite.frame = textBoxType;
		this.onScreen = true;
		this.sprite.alpha = 0.8;
		this.startWriting();	
	}
};

//Closes the text box
Writer.prototype.closeTextBox = function(){
	this.onScreen = false;
	this.sprite.alpha = 0;
	this.text.setText("");
};

//Begins the writing animation of a single message
Writer.prototype.startWriting = function(){
	this.writing = true;
	this.message = this.textQueue.dequeue(); //Dequeue the first message of our queue and returns it
	this.charIndex = 0;
};


Writer.prototype.update = function(){
	this.write();
	this.testMessage(); //used only for testing
	this.pressButton();
	
};

//The procces of annimating a message's writing
Writer.prototype.write = function(){
	if (this.writing){
		if (this.charIndex <= this.message.length){
			this.text.setText(this.message.substring(0, this.charIndex));
			this.charIndex++;
		} else {
			this.writing = false;
		}
	}
};

//Used only for testing, will be replaced once the NPCs are located in the map
Writer.prototype.testMessage = function(){
	
	if (game.input.keyboard.downDuration(Phaser.Keyboard.M) && !this.onScreen){
		this.addText("PROBANDO, PROBANDO...");
		this.addText("¡PROBANDO MI AMOR POR VOS!");
		this.addText("...");
		this.addText("..................................................................................................................................................................");
		this.addText("git commit -m 'I just made a Simpson reference, again'");
	
		this.openTextBox(0);
	}
}

//When the action button (X) is pressed while the text box is on screen
Writer.prototype.pressButton = function(argument){
	if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
		if (!this.buttonPressed && this.onScreen){
			if (!this.writing){ //If the text is completely written
			if (this.textQueue.isEmpty()){
				this.closeTextBox();	
			} else {
				this.startWriting();
			}	
		 	} else {
		 		this.speedUpMessage();
		 	}	
		 	this.buttonPressed = true;
		}
	} else {
		this.buttonPressed = false;
	}
};

//If the action button is pressed while the writing animation is playing, the latter will be skipped entirely
Writer.prototype.speedUpMessage = function(){
	 this.charIndex = this.message.length;
};