//Adding Health Bar
function HUD(game)
{
	this.game = game;
	this.health = game.player.health;
	this.healthBar = null;
	this.availableHealth = null;
}

var positionDataHud = 
{
	initialHUD: { healthBarx: 0, healthBary: 0 },
	availablelife: { lifeBarx: 10 , lifeBary : 10 }
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


HUD.prototype.move = function()
{
	this.player.position.x
}



