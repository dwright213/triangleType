describe('triangleType', function() {

  it("returns eqilateral if all sides of a tringle are the same length ", function() {
    expect(triangleType(3, 3, 3)).to.eql("equilateral");
  });

  it("returns isosceles if two sides of a triangle are the same length ", function() {
    expect(triangleType(3, 3, 1)).to.eql("isosceles");
  });

  it("returns scalene if all sides of a tringle are different lengths ", function() {
    expect(triangleType(1, 2, 3)).to.eql("scalene");
  });

  it("returns invalid if side lengths can't add up to an actual honest to goodness triangle ", function() {
    expect(triangleType(1, 988, 3)).to.eql("invalid");
  });

});
