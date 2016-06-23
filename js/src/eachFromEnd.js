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
  var index;
  index = arr.length;
  while (--index >= 0) {
    iterator(arr[index], index, arr);
  }
};

eachKey = function(obj, iterator) {
  var index, key, keys;
  keys = Object.keys(obj);
  index = keys.length;
  while (--index >= 0) {
    key = keys[index];
    iterator(obj[key], key, obj);
  }
};

//# sourceMappingURL=../../map/src/eachFromEnd.map
