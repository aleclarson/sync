
{ isType
  isKind
  assertType } = require "type-utils"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  if Array.isArray obj

    result = []

    for value, index in obj
      result.push iterator value, index, obj

  else

    if isType obj, null
      result = Object.create null

    else
      result = {}

    for key, value of obj
      result[key] = iterator value, key, obj

  return result
