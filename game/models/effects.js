//branch creation//asd
function effects(game){
	this.game = game;
}

var music;

effects.prototype.create = function() {

    this.game.stage.backgroundColor = '#182d3b';
    this.game.input.touch.preventDefault = false;

    music = this.game.add.audio('bossanova');

    music.play();

    //game.input.onDown.add(changeVolume, this);
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
}