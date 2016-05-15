
{ assertType } = require "type-utils"

Iterable = require "./iterable"

module.exports =  (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  if Array.isArray obj
    for value, index in obj
      iterator value, index, obj

  else
    for key, value of obj
      iterator value, key, obj

  return
