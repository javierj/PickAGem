function Gem() {
	

}

Gem.prototype = new createjs.Bitmap();

Gem.prototype.init = function(gemImg, gemType) {
	this.initialize(gemImg);
	
	this.gemType = gemType;
	//console.log("Gem::init() image: " +  this.image);
	
	//this.height = this.image.height;
	//this.width = this.image.width;
}

Gem.prototype.isOfType = function(newType) {
	return this.gemType == newType;
}