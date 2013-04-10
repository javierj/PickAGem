describe("With the game's world ", function() {
  var world;
  var gems;
  var expected;
  var demoImgs;
  var fakeQueue;

  beforeEach(function() {
    world = new World();
    gems = new Array();
		gems[0] = new GemContainer();
		gems[0].init();
		gems[1] = new GemContainer();
		gems[1].init();
    //gems = world.createGemContainer();
    expected = (Configuration.gemsInaRow *2);
    demoImgs = ["./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png"];
  	//world.gemImages = demoImgs;
  	fakeQueue = new FakeQueue();
  	world.gemImages = fakeQueue

  });

  it("class World should exists", function() {
    expect(world).toBeDefined();

  });

  it("world should create two gem containers", function() {
   
    expect(gems.length).toBe(2);

  });


  it("each gem container should have 40 elements", function() {
  	world.addGems(gems);
    expect(gems[0].getNumChildren() ).toBe(40);
	expect(gems[1].getNumChildren() ).toBe(40);
/*
	c1 = new createjs.Container();
	c2 = new createjs.Container();
	world.addGems_con(c1);
	expect(c1.getNumChildren() ).toBe(40);
	expect(c2.getNumChildren() ).toBe(0);
*/
  });

 it("each gem in the container should have a type between 0 and " + Configuration.typesOfGems, function() {
  	world.addGems(gems);

  	for (var i = 0; i < expected; i++) {
  		var g = gems[0].getChildAt (i);
  		//console.log(g);
  		expect(g).toBeDefined();
  		expect(g.gemType).toBeDefined();
  		expect(g.gemType).toBeLessThan(Configuration.typesOfGems);
  		expect(g.gemType).toBeGreaterThan(-1);
 
  	}
  });

 it("each container is in y = 0 " , function() {
  		expect(gems[0].y).toBe(0);
  		expect(gems[1].y).toBe(0);
 
  	
  });

 it("First container is in x = - gem size * num of gems ", function() {
  	gems = world.createGemContainer(fakeQueue);
  	var expected = (-1) * (Configuration.gemsInaRow * Configuration.gemWidht);
  	expect(gems[0].x).toBe(expected);
  });

it("Second container is in x = canvas width + 1 " , function() {
  	gems = world.createGemContainer(fakeQueue);
  	var expected = 801;
  	expect(gems[1].x).toBe(expected);
  	
  });

 it("First gem in first container is in x = 0, y = 20 " , function() {
 	world.addGems(gems);
  	var firstGem = gems[0].getChildAt(0);

  	expect(firstGem).toBeDefined();
  	expect(firstGem.x).toBe(0);
  	expect(firstGem.y).toBe(20);

  });

 it("Second gem in first container is in x = 0, y = 180 " , function() {
 	world.addGems(gems);
  	var firstGem = gems[0].getChildAt(1);

  	expect(firstGem).toBeDefined();
  	expect(firstGem.x).toBe(0);
    var yExpected = Configuration.upperMargin + (Configuration.gemHeight + Configuration.spaceBetweenGems) *2;
  	expect(firstGem.y).toBe(yExpected);

  });

 it("Third gem in first container is in x = 70, y = 20 " , function() {
 	world.addGems(gems);
  	var firstGem = gems[0].getChildAt(2);

  	expect(firstGem).toBeDefined();
  	expect(firstGem.x).toBe(70);
  	expect(firstGem.y).toBe(20);

  });

 it("First gem in Second container is in x = 0, y = 100 " , function() {
 	world.addGems(gems);
  	var firstGem = gems[1].getChildAt(0);

  	expect(firstGem).toBeDefined();
  	expect(firstGem.x).toBe(0);
    var yExpected = Configuration.upperMargin + (Configuration.gemHeight + Configuration.spaceBetweenGems) *1;
  	expect(firstGem.y).toBe(yExpected);

  });


 it("Second gem in Second container is in x = 0, y = 260 " , function() {
 	world.addGems(gems);
  	var firstGem = gems[1].getChildAt(1);

  	expect(firstGem).toBeDefined();
  	expect(firstGem.x).toBe(0);
    var yExpected = Configuration.upperMargin + (Configuration.gemHeight + Configuration.spaceBetweenGems) *3;
  	expect(firstGem.y).toBe(yExpected);

  });

 it("each gem in the container should have an image. ", function() {
  	world.addGems(gems);

  	for (var i = 0; i < expected; i++) {
  		var g = gems[0].getChildAt(i);
  		expect(g).toBeDefined();
  		expect(g.image).toBeDefined();
  		expect(g.imabe).not.toBeNull();
  	}
  });


it("First container should go to the richt, second should go to the left ", function() {
  	gems = world.createGemContainer(fakeQueue);
  	var c = new GemContainer();
  	expect(gems[0].direction).toBe(c.RIGHT);
  	expect(gems[1].direction).toBe(c.LEFT);
  });


it("a game is a gem type and the number of that type ", function() {
  	world.addGems(gems);
  	var game = world.createGame(gems);
  	
  	expect(game).toBeDefined();
  	
  	expect(game.gemType).toBeDefined();
  	expect(game.gemType).toBeLessThan(Configuration.typesOfGems);
  	expect(game.gemType).toBeGreaterThan(-1);

  	expect(game.maxGems).toBeDefined();
  	expect(game.maxGems).toBeGreaterThan(0);
 

  });


/*
  it("elements created should be  GemContainer", function() {
    r = world.createGemContainer();
    t = r[0];
    expect(Object.prototype.toString.call(t)).toBe("GemContainer");
    //expect(Object.prototype.toString.apply(t)).toBe("GemContainer");

  });
*/
    
	describe("When creatign a gem ", function() {
  		var gem;

		beforeEach(function() {
			var world = new World();
			 demoImgs = ["./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png", "./assets/Blue70.png"];
  			world.gemImages = new FakeQueue();
    		gem = world.createGem();
  		});

  		it("gem should be not null", function() {
    		expect(gem).toBeDefined();
  		});
  		it("gem should has a gem type", function() {
    		expect(gem.gemType).toBeDefined();
  		});
		it("gem should has x and y properties", function() {
    		expect(gem.gemType).toBeDefined();
  		});


	}); 
});