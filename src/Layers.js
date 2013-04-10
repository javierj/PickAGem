function Layers() {
	
	this.init = function() {

		this.letsGo = new createjs.Bitmap("./assets/layers/letsGo.png");
		this.letsGo.x = 150;
		this.letsGo.y = 100;
		this.letsGo.visible = false;

		this.gameOver =  new createjs.Bitmap("./assets/layers/gameOver.png");
		this.gameOver.x = 100;
		this.gameOver.y = 100;
		this.gameOver.visible = false;

		

	}

	this.addInStage = function(stage) {
		this.gameOver.visible = false;
			this.letsGo.visible = false;
		stage.addChild(this.letsGo);
		stage.addChild(this.gameOver);

	}

	this.showLetsGo = function() {
		this.letsGo.visible = true;
		this.hideGameOver();
	}

	this.hideLetsGo = function() {
		this.letsGo.visible = false;
	}

	this.showGameOver = function() {
		this.gameOver.visible = true;
		this.hideLetsGo();
	}

	this.hideGameOver = function() {
		this.gameOver.visible = false;
	}
}