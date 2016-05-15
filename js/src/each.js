var Iterable, assertType;

assertType = require("type-utils").assertType;

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  var i, index, key, len, value;
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    for (index = i = 0, len = obj.length; i < len; index = ++i) {
      value = obj[index];
      iterator(value, index, obj);
    }
  } else {
    for (key in obj) {
      value = obj[key];
      iterator(value, key, obj);
    }
  }
};

//# sourceMappingURL=../../map/src/each.map
