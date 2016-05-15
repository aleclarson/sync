
assertType = require "assertType"

module.exports = (n, iterator) ->

  assertType n, Number
  assertType iterator, Function

  index = 0

  while index < n
    iterator index
    index += 1

  return
