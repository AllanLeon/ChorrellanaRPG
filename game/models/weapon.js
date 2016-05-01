// Declaration of weapon data.
function Weapon(game){
	this.game = game;
	this.sprite = null; // Use for HUD only
	this.bulletCooldownMaxTime = 10; // Max time between shots
	this.bulletCooldownTime = this.bulletCooldownMaxTime; // Time passed after the last shot
	this.bulletsOnScreen = 10; // Max number of bullets on screen
	this.bulletIndex = 0; 
	this.bulletArray = []; // Array to storage our bullets
	this.weaponType = 0; // The weapon in use
}

// Use the weapon's sprite for the HUD only
// Initializes the weapon's sprites.
Weapon.prototype.render = function(x, y){
	this.sprite = this.game.add.sprite(x, y, 'weapon'.concat(this.weaponType));
};

// Loads the weapon's sprites
Weapon.prototype.load = function(){
	this.loadBullet();
}

// Loads all of the bullets in our bullet array
Weapon.prototype.loadBullet = function(){
	for (var i=0; i < this.bulletsOnScreen; i++){
		this.bulletArray[i] = new Bullet(this.game);
		this.bulletArray[i].load(this.weaponType);
	}
}

// Starts the shot of a bullet. 
Weapon.prototype.fireWeapon = function(){

	if (this.bulletCooldownTime == this.bulletCooldownMaxTime) {
		this.bulletArray[this.bulletIndex].fireBullet(this.game.player.sprite.x,this.game.player.sprite.y, this.game.player.direction);		
		this.bulletIndex = (this.bulletIndex + 1) % this.bulletsOnScreen;
		this.bulletCooldownTime = 0;	
	}
	
}

// Controls the time between shots
Weapon.prototype.cooldown = function(){
	if (this.bulletCooldownTime < this.bulletCooldownMaxTime){
		this.bulletCooldownTime++;
	}
}