function Clock(game){
	this.game = game;
	}

//Declaration of variables

	var timer;
	var total = 0;

Clock.prototype.render = function(){

 //  Create our Timer
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds
    timer.loop(2000, this.updateCounter, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

}

Clock.prototype.updateCounter = function(){

	this.total++;


    game.debug.text('Hora: ' + total, 32, 64);

}
Clock.prototype.load = function(){
	this.render();
	this.updateCounter();

	

}
