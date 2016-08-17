
assertType = require "assertType"

module.exports = (maxIterations, iterator) ->

  assertType maxIterations, Number
  assertType iterator, Function

  if maxIterations < 0
    throw RangeError "'maxIterations' must be a positive number!"

  index = -1
  while ++index < maxIterations
    iterator index, maxIterations
  return
