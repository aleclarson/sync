var Iterable, assertType, eachIndex, eachKey;

assertType = require("assertType");

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    return eachIndex(obj, iterator);
  }
  return eachKey(obj, iterator);
};

eachIndex = function(arr, iterator) {
  var index, length;
  index = -1;
  length = arr.length;
  while (++index < length) {
    iterator(arr[index], index, arr);
  }
};

eachKey = function(obj, iterator) {
  var key, value;
  for (key in obj) {
    value = obj[key];
    iterator(value, key, obj);
  }
};

//# sourceMappingURL=../../map/src/each.map
