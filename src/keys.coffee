
assertType = require "assertType"

Iterable = require "./iterable"

module.exports =  (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  return eachIndex obj, iterator if Array.isArray obj
  return eachKey obj, iterator

eachIndex = (arr, iterator) ->
  index = -1
  length = arr.length
  while ++index < length
    iterator index
  return

eachKey = (obj, iterator) ->
  for key of obj
    iterator key
  return
