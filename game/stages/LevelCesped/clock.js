//Declaration of variables
function Clock(game){
	this.game = game;
	this.timer = null;
	this.total = 0;
}

Clock.prototype.render = function(){

 //  Create our Timer
    this.timer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds
    this.timer.loop(2000, this.updateCounter, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    this.timer.start();

}

Clock.prototype.updateCounter = function(){

	this.total++;


    game.debug.text('Hora: ' + this.total, 32, 64);

}
Clock.prototype.load = function(){
	this.render();
	this.updateCounter();

	

}
