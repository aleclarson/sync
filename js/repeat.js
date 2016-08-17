var assertType;

assertType = require("assertType");

module.exports = function(maxIterations, iterator) {
  var index;
  assertType(maxIterations, Number);
  assertType(iterator, Function);
  if (maxIterations < 0) {
    throw RangeError("'maxIterations' must be a positive number!");
  }
  index = -1;
  while (++index < maxIterations) {
    iterator(index, maxIterations);
  }
};

//# sourceMappingURL=map/repeat.map
