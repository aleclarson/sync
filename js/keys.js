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
    iterator(index);
  }
};

eachKey = function(obj, iterator) {
  var key;
  for (key in obj) {
    iterator(key);
  }
};

//# sourceMappingURL=map/keys.map