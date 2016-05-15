
map = require "../src/map"

describe "map()", ->

  it "must be passed a function to iterate with", ->
    obj = {}
    expect -> map obj, null
      .toThrow()
    expect -> map obj, emptyFunction
      .not.toThrow()

  it "supports object literals", ->
    obj = { foo: null, bar: null }
    result = map obj, (value, key) ->
      key
    expect getType result
      .toBe Object
    expect result.foo
      .toBe "foo"
    expect result.bar
      .toBe "bar"

  it "supports array literals", ->
    arr = [ null, null ]
    result = map arr, (value, key) ->
      key
    expect getType result
      .toBe Array
    expect result[0]
      .toBe 0
    expect result[1]
      .toBe 1

  it "supports class instances", ->
    MyClass = ->
    MyClass::foo = null
    obj = new MyClass
    obj.bar = null
    result = map obj, (value, key) ->
      key
    expect getType result
      .toBe Object
    expect result.foo
      .toBe "foo"
    expect result.bar
      .toBe "bar"

  it "supports null objects", ->
    obj = Object.create null
    obj.foo = null
    obj.bar = null
    result = map obj, (value, key) ->
      key
    expect getType result
      .toBe null
    expect result.foo
      .toBe "foo"
    expect result.bar
      .toBe "bar"

  it "supports sparse arrays", ->
    arr = []
    arr[3] = null
    arr[9] = null
    result = map arr, (value, key) ->
      key
    expect result[3]
      .toBe 3
    expect result[9]
      .toBe 9
