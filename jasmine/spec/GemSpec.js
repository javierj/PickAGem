describe("With a GemContainer ", function() {
  var gem;

  beforeEach(function() {
  	gem = new Gem();
  	gem.init("../assets/Blue70.png", 1);
  });
/* -- Get it from configuration
  it("gem has height and weight", function() {
    expect(gem.width).toBeDefined();
    expect(gem.height).toBeDefined();

  });
*/
it("gem is of typw 1", function() {
    expect(gem.isOfType(1)).toBeTruthy();

  });
 });