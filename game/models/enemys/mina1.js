// Declaration of Mina1 data.
function Mina1(game){
	this.game = game;
	this.health = 100;
	this.sprite = null;
	this.colliderSprite = null;
	this.animation = 'redMina1';
	this.direction = 'Down';
	this.stopped = true;
	this.initial = Math.floor(Math.random() * (1356));
	this.enableBody = true;
	this.explotion = null;
	this.positionData = {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the Mina1s sprites.
Mina1.prototype.render = function(){
	// loads sprites

	this.colliderSprite = this.game.add.sprite(this.initial - this.positionData.colliderDifference.x, this.initial - this.positionData.colliderDifference.y, 'Mina1Collider');
	this.sprite = this.game.add.sprite(this.initial, this.initial, 'mina1');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds

};

// Loads the Mina1's sprites and defines it's animations.
Mina1.prototype.load = function(){
	this.render();

}

// Moves the Mina1's sprite.
Mina1.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the input and handles the movement.
Mina1.prototype.handleMovement = function(){


	this.setBodyPosition(this.colliderSprite.x - this.positionData.colliderDifference.x, this.colliderSprite.y - this.positionData.colliderDifference.x);



	this.game.physics.arcade.overlap(this.sprite, this.game.player.sprite, null, this._Mina1Attack, this);

	if(this.explotion != null){
			if(this.explotion.frame == 24){
		this.explotion.kill();
	}
	}
	
	
}

// Updates the Mina1.
Mina1.prototype.update = function(){
	this.handleMovement();
	
	
}

//Mina1 Attack

Mina1.prototype._Mina1Attack = function() {
    
    this.game.player.health -= 35;
    
    this.explotion = this.game.add.sprite(this.sprite.x - 20 ,this.sprite.y - 20,'explotion');
    this.game.physics.enable(this.explotion, Phaser.Physics.ARCADE);
	this.explotion.animations.add('boom', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 10, true);


	this.explotion.animations.play('boom');

	this.sprite.kill();

}
