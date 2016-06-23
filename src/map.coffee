
PureObject = require "PureObject"
assertType = require "assertType"

Iterable = require "./iterable"

module.exports = (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  return mapIndexes obj, iterator if Array.isArray obj
  return mapKeys obj, iterator

mapIndexes = (arr, iterator) ->

  results = []

  index = -1
  length = arr.length
  while ++index < length
    results.push iterator arr[index], index, arr

  return results

mapKeys = (obj, iterator) ->

  if PureObject.test obj
    results = Object.create null
  else results = {}

  for key, value of obj
    results[key] = iterator value, key, obj

  return results
