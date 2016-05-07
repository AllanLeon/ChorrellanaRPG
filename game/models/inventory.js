//Creating HUD wwhit its properties
function Inventory(game)
{
	this.game = game;
	this.coinImage = null;
	this.keyImage = null;
}

var positionInventoryTopRight = 
{
	topRightCorner : {topRightX: 620, topRightY:10}
};


Inventory.prototype.render = function() 
{
	this.coinImage = this.game.add.sprite(positionInventoryTopRight.topRightCorner.topRightX, positionInventoryTopRight.topRightCorner.topRightY, 'coin');
	this.coinImage.scale.setTo(1.5,1.5);
	this.keyImage = this.game.add.sprite(positionInventoryTopRight.topRightCorner.topRightX+80, positionInventoryTopRight.topRightCorner.topRightY, 'key');
	this.keyImage.scale.setTo(1.5,1.5);
};	

//Function to load all assets in HUD
Inventory.prototype.load = function()
{
	this.render();
}


//Functino encharge of updating HUD items
Inventory.prototype.update = function() 
{

};