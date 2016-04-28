//Adding Health Bar
function HUD(game)
{
	this.game = game;
	this.health = game.player.health;
	this.healthBar = null;
	this.availableHealth = null;
}

//Settingg the inital position for the healthbar and available life
var positionDataHud = 
{
	initialHUD: { healthBarx: 5, healthBary: 5 },
	availablelife: { lifeBarx: 15 , lifeBary : 15 }
};

HUD.prototype.render = function() 
{
	this.healthBar = this.game.add.sprite(positionDataHud.initialHUD.healthBarx, positionDataHud.initialHUD.healthBary, 'healthBar' )
	this.availableHealth = this.game.add.sprite(positionDataHud.availablelife.lifeBarx, positionDataHud.availablelife.lifeBary, 'lifeBar')
	this.availableHealth.scale.setTo((this.health/10),1);
};

HUD.prototype.load = function()
{
	this.render();
}

HUD.prototype.lifeBarUpdate = function()
{
	this.availableHealth.scale.setTo((this.health/10),1);
}

HUD.prototype.update = function() 
{
	this.lifeBarUpdate();
};

