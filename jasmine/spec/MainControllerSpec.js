describe("With the main controller ", function() {
  var controller;

  beforeEach(function() {
    controller = new MainController();
    controller.queue =new FakeQueue();
  });

   it("Manifest has six entries " , function() {
  	expect(Configuration.manifest.length).toBe(6);
 
  });

 it("Controller has a queue of images." , function() {
  	expect(controller.queue).toBeDefined();
 
  });

 it("Controller creates a canvas in the body of 800x600." , function() {
 	var c2 = controller.createCanvas();

 	var c = document.getElementById("Game");
  	expect(c).not.toBeNull();
 	expect(c.width).toBe(800);
 	expect(c.height).toBe(Configuration.gameHeight);

 	expect(c2).toBeDefined();
  });


  it("When loading de graphs, the callback s called " , function() {
  	runs(function() {
  		controller.loadGraphs();
    }); 
    waitsFor(function() {
      return controller.queue != null;
    }, 
    "The Queue should be not null", 750);

    runs(function() {
      expect(controller.queue).toBeDefined();
    });
  });


/*
it("When loading de graphs, each image in gem matches its type. ", function() {
  	runs(function() {
  		controller.loadGraphs();
    }); 
    waitsFor(function() {
      return controller.queue != null;
    }, 
    "The Queue should be not null", 750);

    runs(function() {
    	expect(controller.containers).toBeDefined();
    	expect(controller.containers).not.toBeNull();

    	gems = controller.containers;
  		for (var i = 0; i < Configuration.gemsInaRow; i++) {
  			var g = gems[0].getChildAt(i);
  		expect(g.image).toBeDefined();
  		expect(g.image.src).toBeDefined();
  		expect(Configuration.manifest).toBeDefined();
		expect(Configuration.manifest[g.gemType]).toBeDefined();

		var file = Configuration.manifest[g.gemType].src.substring(1);
		var matches = g.image.src.lastIndexOf( file );
		console.log(g.image.src + " vs " + file + " == " + matches);
  		expect(matches).not.toBe(-1);
  		}
  	 });
  });
*/
it("Controller has a stage after loading graphs." , function() {
	//controller.queue =new FakeQueue();
	controller.initGame();
  	expect(controller.stage).toBeDefined();
 
  });

it("Controller has a world." , function() {
	//controller.queue = new FakeQueue();
	//controller.handleComplete();
  	expect(controller.world).toBeDefined();
 
  });

it("Controller has two containers." , function() {
	controller.stage = new FakeContainer();
	//controller.queue = new FakeQueue();
	controller.createContainers();
  	expect(controller.containers).toBeDefined();
  	expect(controller.containers.length).toBe(2);
 
  });

it("When movig te containers, first one increses the x and second one decreases it." , function() {
	controller.stage = new FakeContainer();
	//controller.queue = new FakeQueue();
	controller.createContainers();
	var firstX = controller.containers[0].x;
	var secondX = controller.containers[1].x;
	
	controller.move();
  	
  	expect(controller.containers[0].x).toBeGreaterThan(firstX);
 	expect(controller.containers[1].x).toBeLessThan(secondX);
  });


it("When updating, the controllers are moved." , function() {
	controller.stage = new FakeContainer();
	//controller.queue = new FakeQueue();
	controller.createContainers();
	var firstX = controller.containers[0].x;
	var secondX = controller.containers[1].x;
	
	controller.update();
  	
  	expect(controller.containers[0].x).toBeGreaterThan(firstX);
 	expect(controller.containers[1].x).toBeLessThan(secondX);
  });

 });