var eachFromEnd;

eachFromEnd = require("../src/eachFromEnd");

describe("eachFromEnd()", function() {
  return it("starts at the end", function() {
    var obj, spy;
    obj = {
      foo: 1,
      bar: 2
    };
    spy = jasmine.createSpy();
    eachFromEnd(obj, function(value, key) {
      spy(key);
      return true;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("bar");
    return expect(spy.calls.argsFor(1)).toContain("foo");
  });
});

//# sourceMappingURL=../../map/spec/eachFromEnd.map
