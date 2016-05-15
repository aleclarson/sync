var Iterable, assertType;

assertType = require("type-utils").assertType;

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  var index, key, keys;
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    index = obj.length;
    while (--index >= 0) {
      if (!iterator(obj[index], index, obj)) {
        break;
      }
    }
  } else {
    keys = Object.keys(obj);
    index = keys.length;
    while (--index >= 0) {
      key = keys[index];
      if (!iterator(obj[key], key, obj)) {
        break;
      }
    }
  }
};

//# sourceMappingURL=../../map/src/searchFromEnd.map
