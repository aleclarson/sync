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
      iterator(obj[index], index, obj);
    }
  } else {
    keys = Object.keys(obj);
    index = keys.length;
    while (--index >= 0) {
      key = keys[index];
      iterator(obj[key], key, obj);
    }
  }
};

//# sourceMappingURL=../../map/src/eachFromEnd.map
