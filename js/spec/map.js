var PureObject, getType, map;

PureObject = require("PureObject");

getType = require("getType");

map = require("../src/map");

describe("map()", function() {
  it("must be passed a function to iterate with", function() {
    var obj;
    obj = {};
    expect(function() {
      return map(obj, null);
    }).toThrow();
    return expect(function() {
      return map(obj, emptyFunction);
    }).not.toThrow();
  });
  it("supports object literals", function() {
    var obj, result;
    obj = {
      foo: null,
      bar: null
    };
    result = map(obj, function(value, key) {
      return key;
    });
    expect(getType(result)).toBe(Object);
    expect(result.foo).toBe("foo");
    return expect(result.bar).toBe("bar");
  });
  it("supports array literals", function() {
    var arr, result;
    arr = [null, null];
    result = map(arr, function(value, key) {
      return key;
    });
    expect(getType(result)).toBe(Array);
    expect(result[0]).toBe(0);
    return expect(result[1]).toBe(1);
  });
  it("does NOT support class instances", function() {
    var MyClass, obj;
    MyClass = function() {};
    obj = new MyClass;
    return expect(function() {
      return map(obj, emptyFunction);
    }).toThrowError("Expected an Array, Object, or PureObject!");
  });
  it("supports null objects", function() {
    var obj, result;
    obj = Object.create(null);
    obj.foo = null;
    obj.bar = null;
    result = map(obj, function(value, key) {
      return key;
    });
    expect(getType(result)).toBe(PureObject);
    expect(result.foo).toBe("foo");
    return expect(result.bar).toBe("bar");
  });
  return it("supports sparse arrays", function() {
    var arr, result;
    arr = [];
    arr[3] = null;
    arr[9] = null;
    result = map(arr, function(value, key) {
      return key;
    });
    expect(result[3]).toBe(3);
    return expect(result[9]).toBe(9);
  });
});

//# sourceMappingURL=../../map/spec/map.map
