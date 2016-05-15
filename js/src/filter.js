var Iterable, assertType, isType, ref;

ref = require("type-utils"), isType = ref.isType, assertType = ref.assertType;

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  var i, index, key, len, result, value;
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    result = [];
    for (index = i = 0, len = obj.length; i < len; index = ++i) {
      value = obj[index];
      if (!iterator(value, index, obj)) {
        continue;
      }
      result.push(value);
    }
  } else {
    if (isType(obj, null)) {
      result = Object.create(null);
    } else {
      result = {};
    }
    for (key in obj) {
      value = obj[key];
      if (!iterator(value, key, obj)) {
        continue;
      }
      result[key] = value;
    }
  }
  return result;
};

//# sourceMappingURL=../../map/src/filter.map
