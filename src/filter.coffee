
PureObject = require "PureObject"
assertType = require "assertType"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  return filterIndexes obj, iterator if Array.isArray obj
  return filterKeys obj, iterator

filterIndexes = (arr, iterator) ->

  results = []

  index = -1
  length = arr.length
  while ++index < length
    value = arr[index]
    continue if not iterator value, index, arr
    results.push value

  return results

filterKeys = (obj, iterator) ->

  if PureObject.test obj
    results = Object.create null
  else results = {}

  for key, value of obj
    continue if not iterator value, key, obj
    results[key] = value

  return results
