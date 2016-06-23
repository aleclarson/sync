var each;

each = require("../src/each");

describe("each()", function() {
  it("must be passed a function to iterate with", function() {
    var obj;
    obj = {};
    expect(function() {
      return each(obj, null);
    }).toThrow();
    return expect(function() {
      return each(obj, emptyFunction);
    }).not.toThrow();
  });
  it("supports object literals", function() {
    var obj, spy;
    spy = jasmine.createSpy();
    obj = {
      foo: spy,
      bar: spy
    };
    each(obj, function(value, key) {
      return value(key);
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
  it("supports array literals", function() {
    var arr, spy;
    spy = jasmine.createSpy();
    arr = [spy, spy];
    each(arr, function(value, key) {
      return value(key);
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain(0);
    return expect(spy.calls.argsFor(1)).toContain(1);
  });
  it("does NOT support class instances", function() {
    var MyClass, obj;
    MyClass = function() {};
    obj = new MyClass;
    return expect(function() {
      return each(obj, emptyFunction);
    }).toThrowError("Expected an Array, Object, or PureObject!");
  });
  return it("supports null objects", function() {
    var obj, spy;
    spy = jasmine.createSpy();
    obj = Object.create(null);
    obj.foo = spy;
    obj.bar = spy;
    each(obj, function(value, key) {
      return value(key);
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
});

//# sourceMappingURL=../../map/spec/each.map
