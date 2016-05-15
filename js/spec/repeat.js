var repeat;

repeat = require("../src/repeat");

describe("repeat()", function() {
  it("must be passed the number of desired iterations", function() {
    expect(function() {
      return repeat(null, emptyFunction);
    }).toThrow();
    return expect(function() {
      return repeat(5, emptyFunction);
    }).not.toThrow();
  });
  it("must be passed a function to iterate with", function() {
    expect(function() {
      return repeat(5, null);
    }).toThrow();
    return expect(function() {
      return repeat(5, emptyFunction);
    }).not.toThrow();
  });
  return it("iterates up to the given number", function() {
    var spy;
    spy = jasmine.createSpy();
    repeat(5, function(index) {
      return spy(index);
    });
    expect(spy.calls.count()).toBe(5);
    expect(spy.calls.argsFor(0)).toContain(0);
    return expect(spy.calls.argsFor(4)).toContain(4);
  });
});

//# sourceMappingURL=../../map/spec/repeat.map
