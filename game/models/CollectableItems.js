
//branch creation//asd
function CollectableItems(game){
	this.game = game;
	this.spriteCollectable = null;
}
var coins;

// Initializes the players sprites.
CollectableItems.prototype.render = function(){
	this.coins = game.add.group();

    //  We will enable physics for any star that is created in this group
    this.coins.enableBody = true;


    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {for (var j = 0; j < 12; j++){
        //  Create a star inside of the 'stars' group
        var coin=this.coins.create(i * 300,j * 300, 'coin');
        //game.physics.enable(this.coin, Phaser.Physics.ARCADE);
        //this.coins.body.collideWorldBounds = true;
    }
}
    game.physics.enable(this.coins, Phaser.Physics.ARCADE);
    //this.coins.body.collideWorldBounds = true;
};

function CollectCoin(player, coin){
    //Removes the coin from the screen
    coin.kill();
}

// Loads the player's sprites and defines it's animations.
CollectableItems.prototype.load = function(){
	this.render();
}

// Plays the current animation.
//CollectableItems.prototype.update = function(){
	//this.handleMovement();

    //  Collide the player and the coins
    //game.physics.arcade.collide(player, coins);

     //  Checks to see if the player overlaps with any of the coins, if he does, call the collectCoin function
    //game.physics.arcade.overlap(game.player.colliderSprite, this.coins, CollectCoin, null, this);
//}
//branch creation
//commit test
