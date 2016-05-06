
//branch creation//asd
function CollectableItems(game){
	this.game = game;
    this.stopped = true;
    this.sprite = null;
	this.spriteCollectable = null;
    this.colliderSprite = true;
    this.animation = 'cat';
    this.direction = 'Down';
    this.initial = Math.floor(Math.random() * (1356));
}
var coins;
var hearts;
var cat;

// Info of the cat's position.
var positionData = {
    initial: {x: 0, y: 0},
    colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
};

// Initializes the players sprites.
CollectableItems.prototype.render = function(){
	this.coins = game.add.group();
    this.hearts = game.add.group();

    //  We will enable physics for anything that is created in this group
    this.coins.enableBody = true;
    this.hearts.enableBody = true;

    //  Here we'll create coins
    for (var i = 0; i < 12; i++)
    {for (var j = 0; j < 12; j++){
        var coin=this.coins.create(i * 300,j * 300, 'coin');

    //Here we'll create hearts
    var heart = this.hearts.create(500, 1000, 'heart');
        }
    }
    game.physics.enable(this.coins, Phaser.Physics.ARCADE);

    // loads sprites
    this.colliderSprite = this.game.add.sprite(this.initial - positionData.colliderDifference.x, this.initial - positionData.colliderDifference.y);
    this.sprite = this.game.add.sprite(this.initial, this.initial, 'cat');
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    // sets sprite properties
    this.colliderSprite.alpha = 0; // invisible collider sprite
    this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
    this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
    this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds
};

CollectableItems.prototype.addAnimations = function () {
    this.sprite.animations.add(this.animation + 'Left', [3, 4, 5], 8, true);
    this.sprite.animations.add(this.animation + 'Right', [6, 7, 8], 8, true);
    this.sprite.animations.add(this.animation + 'Up', [9, 10, 11], 8, true);
    this.sprite.animations.add(this.animation + 'Down', [0, 1, 2], 8, true);
}

// Loads the cat's sprites and defines it's animations.
CollectableItems.prototype.load = function(){
	this.render();
    this.addAnimations();
}

// Moves the cat's colliderSprite with a given speed and direction.
CollectableItems.prototype.move = function(speed, direction){
    this.stopped = false;
    switch (direction) {
        //Vertical=0; Horizontal=1
        case 0:
            this.colliderSprite.body.velocity.y = speed;
            break;
        case 1:
            this.colliderSprite.body.velocity.x = speed;
            break;
    }
}

// Plays the current animation.
Enemy.prototype.playAnimation = function(){
    this.sprite.play(this.animation + this.direction);
}

// Stops the cat's movement.
CollectableItems.prototype.stop = function(){
    this.stopped = true;
    this.colliderSprite.body.velocity.x = 0;
    this.colliderSprite.body.velocity.y = 0;
}

// Moves the cat's sprite.
CollectableItems.prototype.setBodyPosition = function(x, y){
    this.sprite.x = x;
    this.sprite.y = y;
}

// Checks the input and handles the movement.
CollectableItems.prototype.handleMovement = function(){
    if (this.player.sprite.y > this.sprite.y){
        this.direction = "Down";
        this.move(this.speed, 0);
    }

    else if (this.player.sprite.y < this.sprite.y){
        this.direction = "Up";
        this.move(-this.speed, 0);
    }

    if(this.player.sprite.x > this.sprite.x){
        this.direction = "Right";
        this.move(this.speed, 1);
    }

    else if (this.player.sprite.x < this.sprite.x){
        this.direction = "Left";
        this.move(-this.speed,1);
    }
    this.setBodyPosition(this.colliderSprite.x - positionData.colliderDifference.x, this.colliderSprite.y - positionData.colliderDifference.x);   
}

//branch creation
//commit test
