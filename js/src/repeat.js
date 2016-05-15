var assertType;

assertType = require("assertType");

module.exports = function(n, iterator) {
  var index;
  assertType(n, Number);
  assertType(iterator, Function);
  index = 0;
  while (index < n) {
    iterator(index);
    index += 1;
  }
};

//# sourceMappingURL=../../map/src/repeat.map
