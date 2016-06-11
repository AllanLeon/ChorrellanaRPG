//branch creation//asd
function Effects(game, music, particle){
	this.game = game;
    this.song = music;
    this.particle = particle;
    if(this.particle == 'sand')
    {
        this.position = -500;
    }
    else
    {
        this.position = game.world.centerX
    }
}

var music;
var manager = null;
var emitter = null;
var image = null;

Effects.prototype.create = function() {
    
    music = this.game.add.audio(this.song);
    music.play();

    var emitter = game.add.emitter(this.position, 0, 800);

    emitter.width = game.world.width;
    emitter.height = game.world.height;
    if(this.particle=='sand')
    {
        emitter.angle = -80;
    }
    else
    {
        emitter.angle = 20;
    }

    emitter.makeParticles(this.particle);

    emitter.minParticleScale = 0.65;
    emitter.maxParticleScale = 0.65;

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
