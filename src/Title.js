function Title() { }

Title.prototype = new createjs.Container();


Title.prototype.init = function(game, image) {
	this.initialize();
	this.x = 0;
	this.y = Configuration.gameHeight - 90;

	this.total = game.maxGems;
	this.actual = 0;
	this.gemType = game.gemType;

	this.gemBitmap = new createjs.Bitmap(image);
	this.gemBitmap.x = 10;
	this.gemBitmap.y = 10;

	this.textTotal = new createjs.Text("/" + this.total, "40px Arial", "#ff7700");
 	this.textTotal.x = Configuration.gameWidth - 70;
 	this.textTotal.y = 20;

	this.textActual = new createjs.Text(this.actual, "40px Arial", "#ff7700");
 	this.textActual.x = Configuration.gameWidth - 100;
 	this.textActual.y = 20;

 	this.addChild(this.gemBitmap);
 	this.addChild(this.textTotal);
	this.addChild(this.textActual);

}

Title.prototype.addGem = function(gem) {
	if (gem.isOfType(this.gemType)) {
		this.actual++;
		this.textActual.text = this.actual;
		if (this.actual > 9) {
			this.textActual.x = Configuration.gameWidth - 120;
		}
		return true;
	}
	return false;
}
