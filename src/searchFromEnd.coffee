
assertType = require "assertType"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  return searchIndexes obj, iterator if Array.isArray obj
  return searchKeys obj, iterator

searchIndexes = (arr, iterator) ->
  index = arr.length
  while --index >= 0
    break if not iterator arr[index], index, arr
  return

searchKeys = (obj, iterator) ->
  keys = Object.keys obj
  index = keys.length
  while --index >= 0
    key = keys[index]
    break if not iterator obj[key], key, obj
  return
