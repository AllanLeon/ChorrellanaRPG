// Declaration of Enemy data.
function EnemyScorpion(game, x, y, direction){
	this.game = game;
	this.health = 100;
	this.sprite = null;
	this.colliderSprite = null;
	//this.collide = false;
	this.animation = 'scorpion';
	this.direction = direction;
	this.initialX = x;
	this.initialY = y;
	this.enableBody = true;
	this.positionData = {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Info of the Enemy's position.

/*var positionData = {
	initial: {x: 0, y: 0},
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};*/

// Initializes the Enemys sprites.
EnemyScorpion.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initialX - this.positionData.colliderDifference.x, 5+this.initialY - this.positionData.colliderDifference.y, 'scorpionCollider');

	this.sprite = this.game.add.sprite(this.initialX, this.initialY, 'scorpion');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
	//this.collider.body.collider

	

	//this.game.physics.arcade.enable(this.sprite);
};

// Defines the Enemy's animations with their respective frames.
EnemyScorpion.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation+'Right', [0,1,2,3,4,5,6], 8, true);
	this.sprite.animations.add(this.animation+'Left', [7,8,9,10,11,12,13], 8, true);
}

// Loads the Enemy's sprites and defines it's animations.
EnemyScorpion.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
EnemyScorpion.prototype.playAnimation = function(){
	this.sprite.play(this.animation+this.direction);
}

// Checks the input and handles the movement.
EnemyScorpion.prototype.handleCollider = function(){
	if(this.direction=="Right")
	{
		if(this.sprite.animations.currentAnim.frame==0 || this.sprite.animations.currentAnim.frame==6)
		{
			this.colliderSprite.scale.setTo(1,1); 
		}
		else if(this.sprite.animations.currentAnim.frame==1 || this.sprite.animations.currentAnim.frame==5)
		{	
			this.colliderSprite.scale.setTo(0.76,1);
		}
		else if(this.sprite.animations.currentAnim.frame==2 || this.sprite.animations.currentAnim.frame==4)
		{
			this.colliderSprite.scale.setTo(0.6,1);
		}
		else if(this.sprite.animations.currentAnim.frame==3)
		{
			this.colliderSprite.scale.setTo(0.5,1);
		}
	}
	else if(this.direction=="Left")
	{	
		if(this.sprite.animations.currentAnim.frame==7 || this.sprite.animations.currentAnim.frame==13)
		{
			this.colliderSprite.x = this.initialX;
			this.colliderSprite.scale.setTo(1,1); 	
		}
		else if(this.sprite.animations.currentAnim.frame==8 || this.sprite.animations.currentAnim.frame==12)
		{
			this.colliderSprite.x = this.initialX + 26;
			this.colliderSprite.scale.setTo(0.76,1);
		}
		else if(this.sprite.animations.currentAnim.frame==9 || this.sprite.animations.currentAnim.frame==11)
		{
			this.colliderSprite.x = this.initialX + 42;
			this.colliderSprite.scale.setTo(0.6,1);
		}
		else if(this.sprite.animations.currentAnim.frame==10)
		{
			this.colliderSprite.x = this.initialX + 54;
			this.colliderSprite.scale.setTo(0.5,1);
		}

	}

	this.game.physics.arcade.overlap(this.colliderSprite, this.game.player.sprite, null, this._enemyAttack, this);
	
}

// Updates the Enemy.
EnemyScorpion.prototype.update = function(){
	this.handleCollider();
	this.playAnimation();
	
	
}

//Enemy Attack
var contador = 0;
EnemyScorpion.prototype._enemyAttack = function() {
    
	contador += 1;

	if(contador == 10) {

    this.game.player.health -= 5;
    contador = 0;

	}
}

EnemyScorpion.prototype._enemyTouchPlayer= function (enemySprite, player) {

       
       //this.collide = true;
       var texto = game.add.text(50, 50, 'CHOQUE', { fontSize: '32px', fill: '#000' });
    }