
assertType = require "assertType"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  if Array.isArray obj
    for value, index in obj
      break unless iterator value, index, obj

  else
    for key, value of obj
      break unless iterator value, key, obj

  return
