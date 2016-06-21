//Creating Inventory whit its properties
function inventory(game)
{
	this.game = game;
	this.coinImage = null;
	this.keyImage = null;
	this.numberCoins = 0;
	this.numberKeys = 0;
	this.numberCoinsText = null;
	this.numberKeysText = null;
	this.inventoryImage = null;
	this.isInventoryDisplay = false;
	this.inventoryDisplayKey = game.input.keyboard.addKey(Phaser.Keyboard.I);
}
//Variable containing all the initial position for inventory grid, coin and key sprites
var	inventoryData = 
{
	topRightCorner : {topRightX: 620, topRightY:10},
	keyCoinSize : 48,
	inventorySlotSize: 47,
	inventoryPosition : {inventoryPosX : 190 , inventoryPosY : 123.75} 
};


inventory.prototype.render = function() 
{
	//Render the coins and keys images with their respective texts
	this.coinImage = this.game.add.sprite(inventoryData.topRightCorner.topRightX, inventoryData.topRightCorner.topRightY, 'coin');
	this.coinImage.scale.setTo(1.5,1.5);
	this.numberCoinsText = game.add.text(inventoryData.topRightCorner.topRightX + inventoryData.keyCoinSize , inventoryData.topRightCorner.topRightY +(0.15*inventoryData.keyCoinSize), this.numberCoins, { fontSize: '32px', fill: '#000' });
	this.keyImage = this.game.add.sprite(inventoryData.topRightCorner.topRightX + (2*inventoryData.keyCoinSize), inventoryData.topRightCorner.topRightY, 'key');
	this.keyImage.scale.setTo(1.5,1.5);
	this.numberKeysText  = game.add.text(inventoryData.topRightCorner.topRightX + (3*inventoryData.keyCoinSize) , inventoryData.topRightCorner.topRightY + (0.15*inventoryData.keyCoinSize), this.numberKeys, { fontSize: '32px', fill: '#000' });
	//Render the Inventory
	this.inventoryImage = this.game.add.sprite(	inventoryData.inventoryPosition.inventoryPosX , inventoryData.inventoryPosition.inventoryPosY, this);
	this.inventoryImage.scale.setTo(1.5,1.5);
	this.inventoryImage.alpha = 0;
};	

//Function to load all assets in Inventory
inventory.prototype.load = function()
{
	this.render();
}

// Checks if inventory is displayed, and shows it
inventory.prototype.showInventory = function()
{
	this.inventoryDisplayKey.onDown.add(function(){
		if(this.isInventoryDisplay)
		{
			this.inventoryImage.alpha = 0;
			this.isInventoryDisplay = false;
			game.pause = false;
		}
		else
		{
			this.inventoryImage.alpha = 1;
			this.isInventoryDisplay = true;
			game.pause = true;
		}
		//game.input.keyboard.removeKeyCapture(Phaser.Keyboard.I);
	}, this);


}


//Function encharge of updating inventory items
inventory.prototype.update = function() 
{
	this.showInventory();
	this.numberKeysText.text = this.numberKeys;
	this.numberCoinsText.text = this.numberCoins;
};