
assertType = require "assertType"

Iterable = require "./iterable"

module.exports =  (obj, iterator) ->

  assertType obj, Iterable
  assertType iterator, Function

  return eachIndex obj, iterator if Array.isArray obj
  return eachKey obj, iterator

eachIndex = (arr, iterator) ->
  index = arr.length
  while --index >= 0
    iterator arr[index], index, arr
  return

eachKey = (obj, iterator) ->
  keys = Object.keys obj
  index = keys.length
  while --index >= 0
    key = keys[index]
    iterator obj[key], key, obj
  return
