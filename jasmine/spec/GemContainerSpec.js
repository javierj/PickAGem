describe("With a GemContainer ", function() {
  var gems;

  beforeEach(function() {
    gems = new GemContainer();
    gems.init(0);
  });

  it("class GemContainer should exists", function() {
    expect(gems).toBeDefined();

  });

  it("class GemContainer should has childers", function() {
    expect(gems.children).toBeDefined();

  });
 
 
  it("when moving a GemContainer to right, the x is increased", function() {
    gems.direction = gems.RIGHT;
    var oldX = gems.x;

    gems.move();

    //expect(gems.x).toBeGreaterThan(oldX);
    expect(gems.x).toBe(Configuration.gemsVelocity);

  });

  it("when moving a GemContainer to left, the x is decreased", function() {
    gems.direction = gems.LEFT;
    var oldX = gems.x;

    gems.move();

    //expect(gems.x).toBeGreaterThan(oldX);
    expect(gems.x).toBe((-1 * Configuration.gemsVelocity));

  });

 it("in 0,0 the container is not over yet", function() {
    gems.direction = gems.LEFT;
    expect(gems.isOver()).toBeFalsy();
    gems.direction = gems.RIGHT;
    expect(gems.isOver()).toBeFalsy();

  });
 
it("going right, the container is over when x is bigger than the last gem", function() {
    gems.direction = gems.RIGHT;
    gems.x = (Configuration.gemWidht * (Configuration.gemsInaRow-2));
    expect(gems.isOver()).toBeFalsy();
    
    gems.x++;
    expect(gems.isOver()).toBeTruthy();


  });

it("going left, the container is over when x is lower than the last gem", function() {
    gems.direction = gems.LEFT;
    gems.x = (-1)* (Configuration.gemWidht * (Configuration.gemsInaRow-2));
    expect(gems.isOver()).toBeFalsy();
    
    gems.x--;
    expect(gems.isOver()).toBeTruthy();


  });
 

/*
  it("Demos", function() {
    g1 = new GemContainer();
    g1.init();
    g2 = new GemContainer();
    g2.init();
    g1.addChild({});

    expect(g1.getNumChildren() ).toBe(1);
    expect(g2.getNumChildren() ).toBe(0);

  });
 */
});