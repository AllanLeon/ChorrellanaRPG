//branch creation//asd
function effects(game){
	this.game = game;
}

var music;
var manager = null;
var emitter = null;
var image = null;

effects.prototype.clickBoom = function(pointer) {

    var x = pointer.x;
    var y = pointer.y;

    //  This will apply the radiateFrom to only those particles emitted in this call
    emitter.emit('basic', x - 48, y - 40, { zone: image, full: true, spacing: 8, setColor: true, radiateFrom: { x: x, y: y, velocity: 1 } });
}

effects.prototype.render = function() {

    emitter.debug(432, 522);
}

effects.prototype.create = function() {

    this.game.stage.backgroundColor = '#182d3b';
    this.game.input.touch.preventDefault = false;

    music = this.game.add.audio('bossanova');

    music.play();

    manager = this.game.plugins.add(Phaser.ParticleStorm);

    var data = {
        lifespan: 3000
    };

    manager.addData('basic', data);

    emitter = manager.createEmitter(Phaser.ParticleStorm.PIXEL);

    emitter.renderer.pixelSize = 8;

    emitter.addToWorld();

    //  12 x 10 = 96 x 80 px
    image = manager.createImageZone('heart');

    game.input.onDown.add(clickBoom, this);
}

effects.prototype.changeVolume = function(pointer) {

    if (pointer.y < 100)
    {
        music.mute = false;
    }
    else if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }
}

effects.prototype.load = function(){
	this.create();
	game.forceSingleUpdate = true;
}