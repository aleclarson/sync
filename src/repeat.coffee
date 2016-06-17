
assertType = require "assertType"

module.exports = (maxIterations, iterator) ->

  assertType maxIterations, Number
  assertType iterator, Function

  index = -1
  while ++index < maxIterations
    iterator index, maxIterations
  return
