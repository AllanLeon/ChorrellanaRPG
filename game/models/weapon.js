// Declaration of weapon data.
function Weapon(game) {
	this.game = game;
	this.sprite = null; // Use for HUD only
	this.bulletCooldownMaxTime = 10; // Max time between shots
	this.bulletCooldownTime = this.bulletCooldownMaxTime; // Time passed after the last shot
	this.bulletsOnScreen = 10; // Max number of bullets on screen
	this.bulletIndex = 0; 
	this.bulletArray = []; // Array to store our bullets
	this.weaponType = 1; // The weapon in use

	this.bomb = [];
	this.bombsOnScreen = 1;
	this.bombCooldown = 2;
}

// Use the weapon's sprite for the HUD only
// Initializes the weapon's sprites.
Weapon.prototype.render = function(x, y) {
	this.sprite = this.game.add.sprite(x, y, 'weapon' + this.weaponType);
}

// Loads the weapon's sprites
Weapon.prototype.load = function() {
	this.loadBullet();
	//this.loadBomb();
	//timer = game.time.create(false)
	//timer.start();
}

// Loads all of the bullets in our bullet array
Weapon.prototype.loadBullet = function() {
	for (var i=0; i < this.bulletsOnScreen; i++){
		this.bulletArray[i] = new Bullet(this.game);
		this.bulletArray[i].load(this.weaponType);
	}

	this.bomb = new Bomb(this.game);
	this.bomb.load(this.weaponType);
}

/*Weapon.prototype.loadBomb = function(){
	for (var i=0; i< this.bombsOnScreen; i++){
		this.bomb = new Bomb(this.game);
		this.bomb.load(this.weaponType);
	}
}
*/


// Changes the current weapon
Weapon.prototype.nextWeapon = function() {
	
	console.log(this.player.weapon.weaponType);
	this.player.weapon.weaponType = (this.player.weapon.weaponType % 5) + 1;
}

// Throws the bomb
Weapon.prototype.throwBomb = function() {
	//if(this.)
	this.bomb.throw(this.game.player.sprite.x, this.game.player.sprite.y, this.game.player.direction);
}

// Starts the shot of a bullet. 
Weapon.prototype.fireWeapon = function() {

	if (this.bulletCooldownTime == this.bulletCooldownMaxTime) {
		this.bulletArray[this.bulletIndex].fireBullet(this.game.player.sprite.x,this.game.player.sprite.y, this.game.player.direction,
		 this.game.player.weapon.weaponType);		

		this.bulletIndex = (this.bulletIndex + 1) % this.bulletsOnScreen;
		this.bulletCooldownTime = 0;	
	}
	
}

// Controls the time between shots
Weapon.prototype.cooldown = function() {
	if (this.bulletCooldownTime < this.bulletCooldownMaxTime){
		this.bulletCooldownTime++;
	}
}