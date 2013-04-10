function GemContainer() { }

GemContainer.prototype = new createjs.Container();

GemContainer.prototype.RIGHT = 1;
GemContainer.prototype.LEFT = -1;

GemContainer.prototype.init = function(initX) {
	this.initialize();
	this.x = initX;
	this.y = 0;
	this.direction = this.RIGHT;
	//console.log("GemContainer::init");

	this.rightLimit = (Configuration.gemWidht * (Configuration.gemsInaRow-2));
	this.leftLimit = ((-1) * (Configuration.gemWidht * (Configuration.gemsInaRow-2) ) );
}

GemContainer.prototype.move = function() {
	this.x += this.direction * Configuration.gemsVelocity;
}

GemContainer.prototype.isOver = function() {
	if (this.direction == this.RIGHT) {
		if (this.x >  this.rightLimit) {
			return true;
		}
	}
	if (this.direction == this.LEFT) {
		if (this.x < this.leftLimit){
			return true;
		}
	}

	return false;
}
