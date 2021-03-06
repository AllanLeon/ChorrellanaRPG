//Creating HUD wwhit its properties
function HUD(game, minimap)
{
	var graphics;
	this.game = game;
	this.healthHUD = game.player.health;
	this.healthBar = null;
	this.availableHealth = null;
	this.miniMap = minimap;
	this.playerPosMiniMapX = game.player.sprite.x;
	this.playerPosMiniMapY = game.player.sprite.y;
	this.miniMapPosX = 640;
	this.miniMapPosY = 440;
}

//Settingg the inital position for the healthbar and available life
var positionDataHud = 
{
	initialHUD: { healthBarX: 5, healthBarY: 5 },
	availablelife: { lifeBarX: 15 , lifeBarY : 15 }
};

//Function to render the items in HUD
HUD.prototype.render = function() 
{
	this.healthBar = this.game.add.sprite(positionDataHud.initialHUD.healthBarX, positionDataHud.initialHUD.healthBarY, 'healthBar' );
	this.availableHealth = this.game.add.sprite(positionDataHud.availablelife.lifeBarX, positionDataHud.availablelife.lifeBarY, 'lifeBar');
	this.availableHealth.scale.setTo((this.healthHUD/10),1);
	this.miniMap = this.game.add.sprite(this.miniMapPosX, this.miniMapPosY, this.miniMap);
	this.miniMap.scale.setTo(0.50,0.50);		
	this.drawPlayerPos();
};

//Function to load all assets in HUD
HUD.prototype.load = function()
{
	this.render();
}

//Fuction to update the amount of life available of the player
HUD.prototype.lifeBarUpdate = function()
{
	this.healthHUD = game.player.health;
	this.availableHealth.scale.setTo((this.healthHUD/10),1);
}

//Fuction to draw the initial position of the player
HUD.prototype.drawPlayerPos = function()
{
	graphics = game.add.graphics(0, 0);
    graphics.beginFill(0x0000FF);
    graphics.drawCircle(this.playerPosMiniMapX+this.miniMap.x, this.playerPosMiniMapY+this.miniMap.y, 5);
    graphics.endFill();

    window.graphics = graphics;
}

//Fuction to update the position of the player
HUD.prototype.updatePlayerPos = function()
{
	graphics.clear();
	this.playerPosMiniMapX = game.player.sprite.x/10;
	this.playerPosMiniMapY = game.player.sprite.y/10;

	graphics.beginFill(0x0000FF);
    graphics.drawCircle(this.playerPosMiniMapX+this.miniMap.x+3, this.playerPosMiniMapY+this.miniMap.y+2, 5);
    graphics.endFill();

    window.graphics = graphics;

}

//Functino encharge of updating HUD items
HUD.prototype.update = function() 
{
	this.lifeBarUpdate();
	this.updatePlayerPos();
};

HUD.prototype.clearMinimap = function()
{
	this.miniMap.alpha = 0;
}