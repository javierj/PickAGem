function MainController() {
	this.queue = null;
	this.world = new World();
	this.sounds = new Sounds();
	this.gameLayers = new Layers();

	this.handleComplete = function() {
     	//console.log("Ok: " + this.queue);
     	this.stage.removeAllChildren();
     	this.stage.addChild(this.bg);
     	this.gameLayers.addInStage(this.stage);
     	
/*
     	this.letsGo = new createjs.Bitmap("./assets/layers/letsGo.png");
		this.letsGo.x = 150;
		this.letsGo.y = 100;
		this.letsGo.visible = true;
		this.stage.addChild(this.letsGo);
*/
		//this.stage.update();

     	this.createContainers();

     	this.createTitle();

     	// Test code
     	//this.containers[0].x = 0;
     	//this.containers[1].x = 0;
 

     	createjs.EventDispatcher.initialize(MainController.prototype);
     	this.stage.enableDOMEvents(true);
		this.stage.addEventListener("stagemousedown", this.clickEvent.bind(this) );
		//this.containers[0].addEventListener("click", this.clickEvent.bind(this) );
		
     	this.stage.update();

		this.setStatePlaying();     

     }

	this.loadGraphs = function() {
		this.queue = new createjs.LoadQueue(false);
		this.queue.addEventListener("complete", this.setStateBeginGame.bind(this));
		this.queue.loadManifest(Configuration.manifest);
	}

	this.createCanvas = function() {
		
		var canvas = document.createElement('canvas');
		//console.log("MainController:createCanvas "+ canvas );
		canvas.id     = "Game";
		canvas.width  = Configuration.gameWidth;
		canvas.height = Configuration.gameHeight;
		//canvas.style.zIndex   = 8;
		canvas.style.position = "absolute";
		canvas.style.border   = "1px solid";
		document.body.appendChild(canvas);

		return canvas;
		
		//return document.getElementById("testCanvas");
	}

	this.createContainers = function() {
		this.containers = this.world.createGemContainer(this.queue);
     	
     	this.stage.addChild(containers[0]);
     	this.stage.addChild(containers[1]);
	}

	this.createTitle = function() {
		this.title = this.world.createTitle(this.world.createGame(this.containers), this.queue);
		this.stage.addChild(this.title);
	}


	this.move = function() {
		this.containers[0].move();
		this.containers[1].move();
	}




	this.clickEvent = function(event) {
		//console.log("Click");
		
		for (var i = 0; i < this.containers.length; i++) {
			var c = this.containers[i];
			var localPoint = c.globalToLocal(event.rawX, event.rawY);

			for (var j = 0; j < 40; j++) {
				var gem = c.getChildAt(j);
				
				if ((this.pointInBitmap(localPoint, gem)) && (gem.visible)) 
				{
					if (this.title.addGem(gem)) {
						gem.visible = false;
						this.sounds.playRight();
					} else {
						this.sounds.playWrong();
					}
					console.log("MainController:: loaclpoint: " + localPoint + " gem:" + gem.x + ", " + gem.y);
					return;
				} 
				
			} 
		}

	}

	this.pointInBitmap = function(point, bitmap) {

		if (point.x < bitmap.x)
			return false;
		if (point.y < bitmap.y)
			return false;
		if (point.x > (bitmap.x + Configuration.gemWidht))
			return false;
		if (point.y > (bitmap.y + Configuration.gemHeight))
			return false;
		return true;

	}

	this.update = function() {
		//console.log("tick");
		this.move();
		this.stage.update();
		if (this.containers[0].isOver() && this.containers[1].isOver()) {
			//console.log("Game Over");
			//this.setStateGameOver();
			Configuration.gemsVelocity++;
			this.setStateBeginGame();
		}
	}


	this.updateGameOver = function() {
		//console.log("Updaye Game Over" + createjs.Ticker.getTime());
		if (createjs.Ticker.getTime() > 3000) {
			Configuration.gemsVelocity++;
			this.setStateBeginGame();
		}
	}

	this.updateBeginGame = function() {
		//console.log("Updaye Game Over" + createjs.Ticker.getTime());
		if (createjs.Ticker.getTime() > 3000) {
			this.handleComplete();
		}
	}

	this.setStatePlaying = function() {
		createjs.Ticker.init ();
		createjs.Ticker.addEventListener("tick", this.update.bind(this));
		createjs.Ticker.setFPS (Configuration.FPS);
	}

	this.setStateGameOver = function() {
		this.gameLayers.showGameOver();
		this.stage.update();
		createjs.Ticker.init ();
		createjs.Ticker.addEventListener("tick", this.updateGameOver.bind(this));
		createjs.Ticker.setFPS (Configuration.FPS);
	}

	this.setStateBeginGame = function() {
		this.gameLayers.showLetsGo();
		this.stage.update();
		createjs.Ticker.init ();
		createjs.Ticker.addEventListener("tick", this.updateBeginGame.bind(this));
		createjs.Ticker.setFPS (Configuration.FPS);
	}


	this.initGame = function() {
		this.sounds.init();

    	var c = this.createCanvas();
     	this.stage = new createjs.Stage(c);
     	//console.log("MainConTroller::handleComplete - Canvas: " + c);

     	this.bg = new createjs.Bitmap("./assets/titlescreenBG.png");
     	this.stage.addChild(this.bg);

     	this.gameLayers.init();
     	this.gameLayers.addInStage(this.stage);
	}

	this.main = function() {
		this.initGame();
		this.loadGraphs();
	}
}