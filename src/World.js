function World() {

	this.createGemContainer = function(images) {
		containers = new Array();
		containers[0] = new GemContainer();
		containers[0].init( (-1) * (Configuration.gemsInaRow * Configuration.gemWidht) );
		containers[0].direction = containers[0].RIGHT;
		containers[1] = new GemContainer();
		containers[1].init( 801 );
		containers[1].direction = containers[0].LEFT;

		this.gemImages = images;

		this.addGems(containers, images);

		return containers; 
	}

	this.createGem = function(initX, initY) {
		var g = new Gem();
		var gType= this.getRandomGem();
		g.init ( this.gemImages.getResult(Configuration.manifest[gType].id), gType);
		g.x = initX;
		g.y = initY;

		return g;
	}

	this.addGems = function(containers) {
		//console.log("World::addGems");
		var y = Configuration.upperMargin;
		var space = Configuration.gemHeight + Configuration.spaceBetweenGems ;
		var x = Configuration.gemWidht;
		for (var i = 0; i < Configuration.gemsInaRow; i++) {
			containers[0].addChild(this.createGem(x*i, y));
			containers[0].addChild(this.createGem(x*i, y + (space * 2)));
			containers[1].addChild(this.createGem(x*i, y + space));
			containers[1].addChild(this.createGem(x*i, y + (space *3)));
		}

	}

	this.createGame = function(containers) {
		var total = 0;
		var gType = this.getRandomGem();
		for (var count = 0; count < 2; count++) {
			for (var i = 0; i < (Configuration.gemsInaRow*2); i++) {
				if (containers[count].getChildAt(i).gemType == gType) {
					total++;
				}
			}
		}
		return {gemType: gType, maxGems: total};
	}

	this.createTitle = function(game, images) {
		var title = new Title();
		title.init(game, images.getResult(Configuration.manifest[game.gemType].id));
		return title;
	}

	this.getRandomGem = function() {
		return Math.floor(Math.random()*Configuration.typesOfGems);
	}


}