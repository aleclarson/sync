var Iterable, assertType;

assertType = require("assertType");

Iterable = require("./iterable");

module.exports = function(obj, iterator) {
  var i, index, key, len, value;
  assertType(obj, Iterable);
  assertType(iterator, Function);
  if (Array.isArray(obj)) {
    for (index = i = 0, len = obj.length; i < len; index = ++i) {
      value = obj[index];
      iterator(index);
    }
  } else {
    for (key in obj) {
      value = obj[key];
      iterator(key);
    }
  }
};

//# sourceMappingURL=../../map/src/keys.map
