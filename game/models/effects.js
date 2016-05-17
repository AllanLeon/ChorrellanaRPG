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

    manager = this.game.plugins.add(Phaser.ParticleStorm);
    
    var data = {
        lifespan: 3000,
        image: 'rain',
        vy: 1,
        alpha: { value: 1, delta: -0.007 }
    };

    manager.addData('basic', data);

    var ellipse = manager.createEllipseZone(400, 100);

    emitter = manager.createEmitter();

    emitter.force.y = 0.02;

    emitter.addToWorld();

    emitter.emit('basic', 400, 160, { zone: ellipse, total: 16, repeat: -1, frequency: 40 });
}

Effects.prototype.update = function() {

}

Effects.prototype.render= function(){

    emitter.debug(432, 522);
}

Effects.prototype.load = function(){
	this.create();
	this.game.forceSingleUpdate = true;
    this.render();

}
