// Declaration of Enemy data.
function EnemyForest(game, x, y){
	this.game = game;
	this.health = 100;
	this.sprite = null;
	this.colliderSprite = null;
	this.animation = 'pikachu';
	this.direction = up;
	this.initialX = x;
	this.initialY = y;
	this.enableBody = true;
	this.positionData = {
	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

}

// Initializes the Enemys sprites.
EnemyForest.prototype.render = function(){
	// loads sprites
	this.colliderSprite = this.game.add.sprite(this.initialX - this.positionData.colliderDifference.x, 5+this.initialY - this.positionData.colliderDifference.y, 'blockf');
	this.sprite = this.game.add.sprite(this.initialX, this.initialY, 'pikachu');
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

	// sets sprite properties
	this.colliderSprite.alpha = 0; // invisible collider sprite
	this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
	this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
};

// Defines the Enemy's animations with their respective frames.
EnemyForest.prototype.addAnimations = function () {
	this.sprite.animations.add(this.animation+'up', [0,1,2,3], 8, true);
	/*this.sprite.animations.add(this.animation+'up2', [1], 8, true);
	this.sprite.animations.add(this.animation+'down', [2], 8, true);
	this.sprite.animations.add(this.animation+'down2', [3], 8, true);*/
}

// Loads the Enemy's sprites and defines it's animations.
EnemyForest.prototype.load = function(){
	this.render();
	this.addAnimations();
}

// Plays the current animation.
EnemyForest.prototype.playAnimation = function(){
	this.sprite.play(this.animation+this.direction);
}

// Checks the input and handles the movement.
EnemyForest.prototype.handleCollider = function(){
	/*if(this.direction=="up")
	{
		if(this.sprite.animations.currentAnim.frame==0)
		{
			this.colliderSprite.scale.setTo(1,1);
		}
	else if(this.sprite.animations.currentAnim.frame==1)
		{
			this.colliderSprite.x = this.initialX;
			this.colliderSprite.scale.setTo(0.7,1.3); 	
		}
	else if(this.sprite.animations.currentAnim.frame==2)
		{
			this.colliderSprite.x = this.initialX;
			this.colliderSprite.scale.setTo(0.5,1.5); 	
		}
	else if(this.sprite.animations.currentAnim.frame==3)
		{
			this.colliderSprite.x = this.initialX;
			this.colliderSprite.scale.setTo(0.3,1.7); 	
		}

	}*/
	this.game.physics.arcade.overlap(this.colliderSprite, this.game.player.sprite, null, this._enemyAttack, this);
}

// Updates the Enemy.
EnemyForest.prototype.update = function(){
	this.handleCollider();
	this.playAnimation();
}

//Enemy Attack
var contador = 0;
EnemyForest.prototype._enemyAttack = function() { 
	contador += 1;
	if(contador == 10) {
    this.game.player.health -= 5;
    contador = 0;
	}
}

EnemyForest.prototype._enemyTouchPlayer= function (enemySprite, player) {   
       //this.collide = true;
       //var texto = game.add.text(50, 50, 'CHOQUE', { fontSize: '32px', fill: '#000' });
    }