var Iterable, PureObject, assertType, filterIndexes, filterKeys;

PureObject = require("PureObject");

assertType = require("assertType");

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    return filterIndexes(obj, iterator);
  }
  return filterKeys(obj, iterator);
};

filterIndexes = function(arr, iterator) {
  var index, length, results, value;
  results = [];
  index = -1;
  length = arr.length;
  while (++index < length) {
    value = arr[index];
    if (!iterator(value, index, obj)) {
      continue;
    }
    results.push(value);
  }
  return results;
};

filterKeys = function(obj, iterator) {
  var key, results, value;
  if (PureObject.test(obj)) {
    results = Object.create(null);
  } else {
    results = {};
  }
  for (key in obj) {
    value = obj[key];
    if (!iterator(value, key, obj)) {
      continue;
    }
    results[key] = value;
  }
  return results;
};

//# sourceMappingURL=../../map/src/filter.map
