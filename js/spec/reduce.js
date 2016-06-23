var reduce;

reduce = require("../src/reduce");

describe("reduce()", function() {
  it("must be passed a function to iterate with", function() {
    var obj;
    obj = {};
    expect(function() {
      return reduce(obj, null);
    }).toThrow();
    return expect(function() {
      return reduce(obj, emptyFunction);
    }).not.toThrow();
  });
  it("sets the result to undefined if 2 arguments are passed", function() {
    var obj;
    obj = {
      foo: null
    };
    return reduce(obj, function(result) {
      return expect(result).toBe(void 0);
    });
  });
  it("sets the result to the 2nd argument if 3 arguments are passed", function() {
    var obj;
    obj = {
      foo: null
    };
    return reduce(obj, 1, function(result) {
      return expect(result).toBe(1);
    });
  });
  it("passes the result to each iteration", function() {
    var obj, spy;
    spy = jasmine.createSpy();
    obj = {
      foo: spy,
      bar: spy
    };
    reduce(obj, 1, function(result, value) {
      value(result);
      return result + 1;
    });
    expect(spy.calls.count()).toBe(2);
    expect(spy.calls.argsFor(0)).toContain(1);
    return expect(spy.calls.argsFor(1)).toContain(2);
  });
  it("supports object literals", function() {
    var obj, result;
    obj = {
      foo: 0,
      bar: 1
    };
    result = reduce(obj, "", function(result, value, key) {
      return result + key + value;
    });
    return expect(result).toBe("foo0bar1");
  });
  it("supports array literals", function() {
    var arr, result;
    arr = ["foo", "bar"];
    result = reduce(arr, "", function(result, value, index) {
      return result + value + index;
    });
    return expect(result).toBe("foo0bar1");
  });
  it("does NOT support class instances", function() {
    var MyClass, obj;
    MyClass = function() {};
    obj = new MyClass;
    return expect(function() {
      return reduce(obj, emptyFunction);
    }).toThrowError("Expected an Array, Object, or PureObject!");
  });
  return it("supports null objects", function() {
    var obj, result;
    obj = Object.create(null);
    obj.foo = 0;
    obj.bar = 1;
    result = reduce(obj, "", function(result, value, key) {
      return result + key + value;
    });
    return expect(result).toBe("foo0bar1");
  });
});

//# sourceMappingURL=../../map/spec/reduce.map
