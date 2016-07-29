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
  var index, length;
  index = -1;
  length = arr.length;
  while (++index < length) {
    if (!iterator(arr[index], index, arr)) {
      break;
    }
  }
};

searchKeys = function(obj, iterator) {
  var key, value;
  for (key in obj) {
    value = obj[key];
    if (!iterator(value, key, obj)) {
      break;
    }
  }
};

//# sourceMappingURL=map/search.map
