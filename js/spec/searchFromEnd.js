var searchFromEnd;

searchFromEnd = require("../src/searchFromEnd");

describe("searchFromEnd()", function() {
  it("starts at the end", function() {
    var obj, spy;
    obj = {
      foo: 1,
      bar: 2
    };
    spy = jasmine.createSpy();
    searchFromEnd(obj, function(value, key) {
      spy(key);
      return true;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("bar");
    return expect(spy.calls.argsFor(1)).toContain("foo");
  });
  return it("stops iterating when false is returned", function() {
    var obj, spy;
    obj = {
      foo: 1,
      bar: 2
    };
    spy = jasmine.createSpy();
    searchFromEnd(obj, function(value, key) {
      spy(key);
      return false;
    });
    expect(spy.calls.count()).toBe(1);
    return expect(spy.calls.argsFor(0)).toContain("bar");
  });
});

//# sourceMappingURL=../../map/spec/searchFromEnd.map
