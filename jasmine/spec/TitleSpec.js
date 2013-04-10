describe("With a Title ", function() {
  var title;
  var game;
  var gem;

  beforeEach(function() {
  	game =  {gemType: 1, maxGems: 10};
  	title = new Title();
  	title.init(game, "../assets/Blue70.png", 1);
  	gem = new Gem();
  });

  it("al the begining, the total of gems is 0.", function() {
    expect(title.actual).toBeDefined();
    expect(title.actual).toBe(0);

  });

 it("al the begining, the maximum num of gems is the gems in the game.", function() {
    expect(title.total).toBeDefined();
    expect(title.total).toBe(game.maxGems);

  });

 it("should keep the same value if a gem of a diferent type is clicked.", function() {
    gem.gemType = 2;
    var b = title.addGem(gem);
    expect(title.actual).toBe(0);
    expect(b).toBeFalsy();
  });

it("should keep the same value if a gem of the same type is clicked.", function() {
    gem.gemType = 1;
    var b = title.addGem(gem);
    expect(title.actual).toBe(1);
     expect(b).toBeTruthy();
  });


 });