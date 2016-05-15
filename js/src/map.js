var Iterable, PureObject, assertType;

PureObject = require("PureObject");

assertType = require("assertType");

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  var i, index, key, len, result, value;
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    result = [];
    for (index = i = 0, len = obj.length; i < len; index = ++i) {
      value = obj[index];
      result.push(iterator(value, index, obj));
    }
  } else {
    if (PureObject.test(obj)) {
      result = Object.create(null);
    } else {
      result = {};
    }
    for (key in obj) {
      value = obj[key];
      result[key] = iterator(value, key, obj);
    }
  }
  return result;
};

//# sourceMappingURL=../../map/src/map.map
