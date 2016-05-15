
{ assertType } = require "type-utils"

each = require "./each"

module.exports = (obj, result, iterator) ->

  if arguments.length is 2
    iterator = result
    result = undefined

  assertType iterator, Function

  each obj, (value, key) ->
    result = iterator result, value, key, obj

  return result
