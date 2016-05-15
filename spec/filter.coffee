
filter = require "../src/filter"

describe "filter()", ->

  it "must be passed a function to iterate with", ->
    obj = {}
    expect -> filter obj, null
      .toThrow()
    expect -> filter obj, emptyFunction
      .not.toThrow()

  it "supports object literals", ->
    spy = jasmine.createSpy()
    obj = { foo: spy, bar: spy }
    result = filter obj, (value, key) ->
      value key
      yes
    expect getType result
      .toBe Object
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"

  it "supports array literals", ->
    spy = jasmine.createSpy()
    arr = [ spy, spy ]
    result = filter arr, (value, key) ->
      value key
      yes
    expect getType result
      .toBe Array
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain 0
    expect spy.calls.argsFor 1
      .toContain 1

  it "supports class instances", ->
    spy = jasmine.createSpy()
    MyClass = ->
    MyClass::foo = spy
    obj = new MyClass
    obj.bar = spy
    result = filter obj, (value, key) ->
      value key
      yes
    expect getType result
      .toBe Object
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "bar"
    expect spy.calls.argsFor 1
      .toContain "foo"

  it "supports null objects", ->
    spy = jasmine.createSpy()
    obj = Object.create null
    obj.foo = spy
    obj.bar = spy
    result = filter obj, (value, key) ->
      value key
      yes
    expect getType result
      .toBe null
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"

  it "only copies object keys that return true", ->
    obj = { a: 1, b: 2, c: 3 }
    result = filter obj, (value) ->
      value isnt 2
    expect result.a
      .toBe 1
    expect result.b
      .toBe undefined
    expect result.c
      .toBe 3

  it "only copies array values that return true", ->
    arr = [ 1, 2, 3 ]
    result = filter arr, (value) ->
      value isnt 2
    expect result[0]
      .toBe 1
    expect result[1]
      .toBe 3
    expect result[2]
      .toBe undefined
