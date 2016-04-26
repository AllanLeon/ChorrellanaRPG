States.Obstacles={
	// Draw rectangles to be limits for player duke
	draw:function (){
		var graphics = game.add.graphics(100,100);
		graphics.beginFill(0xFF3300);
    	graphics.lineStyle(10, 0xffd900, 1);
    	graphics.lineStyle(2, 0x0000FF, 1);
   		graphics.drawRect(50, 250, 100, 100);
	}
}