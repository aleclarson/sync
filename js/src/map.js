var Iterable, PureObject, assertType, mapIndexes, mapKeys;

PureObject = require("PureObject");

assertType = require("assertType");

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    return mapIndexes(obj, iterator);
  }
  return mapKeys(obj, iterator);
};

mapIndexes = function(arr, iterator) {
  var index, length, results;
  results = [];
  index = -1;
  length = arr.length;
  while (++index < length) {
    results.push(iterator(arr[index], index, arr));
  }
  return results;
};

mapKeys = function(obj, iterator) {
  var key, results, value;
  if (PureObject.test(obj)) {
    results = Object.create(null);
  } else {
    results = {};
  }
  for (key in obj) {
    value = obj[key];
    results[key] = iterator(value, key, obj);
  }
  return results;
};

//# sourceMappingURL=../../map/src/map.map