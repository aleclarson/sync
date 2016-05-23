
assertType = require "assertType"

Iterable = require "./iterable"

module.exports =  (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  if Array.isArray obj
    for value, index in obj
      iterator index

  else
    for key, value of obj
      iterator key

  return
