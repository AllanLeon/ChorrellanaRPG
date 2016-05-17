//branch creation//asd
function Effects(game){
	this.game = game;
}

var music;
var manager = null;
var emitter = null;
var image = null;

Effects.prototype.create = function() {
    
    music = this.game.add.audio('bossanova');
    music.play();

    var emitter = game.add.emitter(game.world.centerX, 0, 800);

    emitter.width = game.world.width;
    emitter.height = game.world.height;
    // emitter.angle = 30; // uncomment to set an angle for the rain.

    emitter.makeParticles('rain');

    emitter.minParticleScale = 0.85;
    emitter.maxParticleScale = 0.85;

    emitter.setYSpeed(300, 500);
    emitter.setXSpeed(-5, 5);

    emitter.minRotation = 0;
    emitter.maxRotation = 0;

    emitter.start(false, 1600, 5, 0);
}

Effects.prototype.load = function(){
	this.create();
	this.game.forceSingleUpdate = true;

}
