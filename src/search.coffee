
assertType = require "assertType"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  return searchIndexes obj, iterator if Array.isArray obj
  return searchKeys obj, iterator

searchIndexes = (arr, iterator) ->
  index = -1
  length = arr.length
  while ++index < length
    break if not iterator arr[index], index, arr
  return

searchKeys = (obj, iterator) ->
  for key, value of obj
    break if not iterator value, key, obj
  return
