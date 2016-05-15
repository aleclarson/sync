var search;

search = require("../src/search");

describe("search()", function() {
  it("must be passed a function to iterate with", function() {
    var obj;
    obj = {};
    expect(function() {
      return search(obj, null);
    }).toThrow();
    return expect(function() {
      return search(obj, emptyFunction);
    }).not.toThrow();
  });
  it("stops when the iterator returns false", function() {
    var obj, spy;
    obj = {
      foo: 1,
      bar: 2,
      win: 3
    };
    spy = jasmine.createSpy();
    search(obj, function(value, key) {
      spy(key);
      return value !== 2;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
  it("supports array literals", function() {
    var arr, spy;
    arr = ["foo", "bar", "win"];
    spy = jasmine.createSpy();
    search(arr, function(value, index) {
      spy(value);
      return index !== 1;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
  it("supports class instances", function() {
    var MyClass, obj, spy;
    MyClass = function() {};
    MyClass.prototype.foo = 2;
    obj = new MyClass;
    obj.bar = 0;
    obj.win = 1;
    spy = jasmine.createSpy();
    search(obj, function(value, key) {
      spy(key);
      return value !== 1;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("bar");
    return expect(spy.calls.argsFor(1)).toContain("win");
  });
  return it("supports null objects", function() {
    var obj, spy;
    obj = Object.create(null);
    obj.foo = 0;
    obj.bar = 1;
    obj.win = 2;
    spy = jasmine.createSpy();
    search(obj, function(value, key) {
      spy(key);
      return value !== 1;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
});

//# sourceMappingURL=../../map/spec/search.map
