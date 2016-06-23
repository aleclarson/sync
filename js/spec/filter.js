var PureObject, filter, getType;

PureObject = require("PureObject");

getType = require("getType");

filter = require("../src/filter");

describe("filter()", function() {
  it("must be passed a function to iterate with", function() {
    var obj;
    obj = {};
    expect(function() {
      return filter(obj, null);
    }).toThrow();
    return expect(function() {
      return filter(obj, emptyFunction);
    }).not.toThrow();
  });
  it("supports object literals", function() {
    var obj, result, spy;
    spy = jasmine.createSpy();
    obj = {
      foo: spy,
      bar: spy
    };
    result = filter(obj, function(value, key) {
      value(key);
      return true;
    });
    expect(getType(result)).toBe(Object);
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
  it("supports array literals", function() {
    var arr, result, spy;
    spy = jasmine.createSpy();
    arr = [spy, spy];
    result = filter(arr, function(value, key) {
      value(key);
      return true;
    });
    expect(getType(result)).toBe(Array);
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain(0);
    return expect(spy.calls.argsFor(1)).toContain(1);
  });
  it("does NOT support class instances", function() {
    var MyClass, obj;
    MyClass = function() {};
    obj = new MyClass;
    return expect(function() {
      return filter(obj, emptyFunction);
    }).toThrowError("Expected an Array, Object, or PureObject!");
  });
  it("supports null objects", function() {
    var obj, result, spy;
    spy = jasmine.createSpy();
    obj = Object.create(null);
    obj.foo = spy;
    obj.bar = spy;
    result = filter(obj, function(value, key) {
      value(key);
      return true;
    });
    expect(getType(result)).toBe(PureObject);
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain("foo");
    return expect(spy.calls.argsFor(1)).toContain("bar");
  });
  it("only copies object keys that return true", function() {
    var obj, result;
    obj = {
      a: 1,
      b: 2,
      c: 3
    };
    result = filter(obj, function(value) {
      return value !== 2;
    });
    expect(result.a).toBe(1);
    expect(result.b).toBe(void 0);
    return expect(result.c).toBe(3);
  });
  return it("only copies array values that return true", function() {
    var arr, result;
    arr = [1, 2, 3];
    result = filter(arr, function(value) {
      return value !== 2;
    });
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(3);
    return expect(result[2]).toBe(void 0);
  });
});

//# sourceMappingURL=../../map/spec/filter.map
