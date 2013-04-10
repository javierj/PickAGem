function Sounds() {
	
	this.init = function() {
		createjs.Sound.registerSound("./assets/sounds/right.wav", "right");
		createjs.Sound.registerSound("./assets/sounds/wrong.wav", "wrong");

	}

	this.playRight = function() {
		var instance = createjs.Sound.play("right");  
	}
	this.playWrong = function() {
		var instance = createjs.Sound.play("wrong");  
	}
}