
reduce = require "../src/reduce"

describe "reduce()", ->

  it "must be passed a function to iterate with", ->
    obj = {}
    expect -> reduce obj, null
      .toThrow()
    expect -> reduce obj, emptyFunction
      .not.toThrow()

  it "sets the result to undefined if 2 arguments are passed", ->
    obj = { foo: null }
    reduce obj, (result) ->
      expect result
        .toBe undefined

  it "sets the result to the 2nd argument if 3 arguments are passed", ->
    obj = { foo: null }
    reduce obj, 1, (result) ->
      expect result
        .toBe 1

  it "passes the result to each iteration", ->
    spy = jasmine.createSpy()
    obj = { foo: spy, bar: spy }
    reduce obj, 1, (result, value) ->
      value result
      result + 1
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain 1
    expect spy.calls.argsFor 1
      .toContain 2

  it "supports object literals", ->
    obj = { foo: 0, bar: 1 }
    result = reduce obj, "", (result, value, key) ->
      result + key + value
    expect result
      .toBe "foo0bar1"

  it "supports array literals", ->
    arr = [ "foo", "bar" ]
    result = reduce arr, "", (result, value, index) ->
      result + value + index
    expect result
      .toBe "foo0bar1"

  it "does NOT support class instances", ->
    MyClass = ->
    obj = new MyClass
    expect -> reduce obj, emptyFunction
      .toThrowError "Expected an Array, Object, or PureObject!"

  it "supports null objects", ->
    obj = Object.create null
    obj.foo = 0
    obj.bar = 1
    result = reduce obj, "", (result, value, key) ->
      result + key + value
    expect result
      .toBe "foo0bar1"
