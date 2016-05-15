
PureObject = require "PureObject"
assertType = require "assertType"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  if Array.isArray obj

    result = []

    for value, index in obj
      continue unless iterator value, index, obj
      result.push value

  else

    if PureObject.test obj
      result = Object.create null

    else
      result = {}

    for key, value of obj
      continue unless iterator value, key, obj
      result[key] = value

  return result
