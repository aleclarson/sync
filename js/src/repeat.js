var assertType;

assertType = require("assertType");

module.exports = function(maxIterations, iterator) {
  var index;
  assertType(maxIterations, Number);
  assertType(iterator, Function);
  index = -1;
  while (++index < maxIterations) {
    iterator(index, maxIterations);
  }
};

//# sourceMappingURL=../../map/src/repeat.map
