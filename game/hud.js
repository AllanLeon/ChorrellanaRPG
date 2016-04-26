//Adding Health Bar
function HUD(game)
{
	this.game = game;
	this.health = 100;
	this.healthBar = null;
	this.availableHealth = null;
}

var positionDataHud = 
{
	initialHUD: { healtBarx: 0, healtBary: 0 },
	availablelife: { lifeBarx: 10 , lifeBary : 10 }
};

HUD.prototype.render = function() 
{
	this.healthBar = this.game.add.sprite(positionDataHud.initialHUD.healtBarx, positionDataHud.initialHUD.healtBary, 'healthBar' )
	this.availableHealth = this.game.add.sprite(positionDataHud.availablelife.lifeBarx, positionDataHud.availablelife.lifeBary, 'lifeBar')
	this.availableHealth.scale.setTo(10,1);
};

HUD.prototype.load = function()
{
	this.render();
}

function updateLife()
{

}



