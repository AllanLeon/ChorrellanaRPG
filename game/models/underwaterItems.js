//Declare the Item
function UnderwaterItem(game, x , y , index){
	this.game = game;
	this.startingX = x;
	this.staringY = y;
	this.item = null;
	this.index = index;

}

//set position for the items
//var positionDataItem = {
//	initial: {x:startingX, y:staringY }//generic position

//}
UnderwaterItem.prototype.render = function()
{
	this.item = this.game.add.sprite(this.startingX, this.staringY, 'underwaterItem');
	this.item.enableBody = true;
	this.game.physics.enable(this.item, Phaser.Physics.ARCADE);
}

UnderwaterItem.prototype.load = function(){
	this.render();
	this.addAnimation();
	this.playAnimation();
}

UnderwaterItem.prototype.addAnimation = function(){
	this.item.animations.add('anim', [0 + this.index*4, 1 + this.index*4, 2 + this.index*4, 3 + this.index*4], 10, true);
}

UnderwaterItem.prototype.playAnimation = function()
{
	this.item.play('anim');
}

UnderwaterItem.prototype.collectItem = function(player, item)
{
	game.player.collected = true;
	item.kill();
}
