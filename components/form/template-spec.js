/**
* @Author: deepak
* @Date:   2017-01-08T15:07:43+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-08T17:42:24+11:00
*/



describe("Check maths", function() {
  it("Addition: expect a+b to be equal to c", function() {
    expect(1+3).toBe(4);
  });

  it("Substract: expect a-b to be equal to value", function() {
    expect(3-1).toBe(2);
  });
});


describe("Check boolean", function() {
  it("expect true to be true", function() {
    expect(true).toBe(true);
  });
});
