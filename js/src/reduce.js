var assertType, each;

assertType = require("type-utils").assertType;

each = require("./each");

module.exports = function(obj, result, iterator) {
  if (arguments.length === 2) {
    iterator = result;
    result = void 0;
  }
  assertType(iterator, Function);
  each(obj, function(value, key) {
    return result = iterator(result, value, key, obj);
  });
  return result;
};

//# sourceMappingURL=../../map/src/reduce.map
