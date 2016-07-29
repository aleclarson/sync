var Iterable, assertType, searchIndexes, searchKeys;

assertType = require("assertType");

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    return searchIndexes(obj, iterator);
  }
  return searchKeys(obj, iterator);
};

searchIndexes = function(arr, iterator) {
  var index;
  index = arr.length;
  while (--index >= 0) {
    if (!iterator(arr[index], index, arr)) {
      break;
    }
  }
};

searchKeys = function(obj, iterator) {
  var index, key, keys;
  keys = Object.keys(obj);
  index = keys.length;
  while (--index >= 0) {
    key = keys[index];
    if (!iterator(obj[key], key, obj)) {
      break;
    }
  }
};

//# sourceMappingURL=map/searchFromEnd.map