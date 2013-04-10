describe("Base specification", function() {
  var text;

  beforeEach(function() {
    text = "Hello";
  });

  it("should have a text variable saying hello", function() {
    expect(text).toEqual("Hello");

  });

 
});