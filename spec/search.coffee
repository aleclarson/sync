
search = require "../src/search"

describe "search()", ->

  it "must be passed a function to iterate with", ->
    obj = {}
    expect -> search obj, null
      .toThrow()
    expect -> search obj, emptyFunction
      .not.toThrow()

  it "stops when the iterator returns false", ->
    obj = { foo: 1, bar: 2, win: 3 }
    spy = jasmine.createSpy()
    search obj, (value, key) ->
      spy key
      value isnt 2
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"

  it "supports array literals", ->
    arr = [ "foo", "bar", "win" ]
    spy = jasmine.createSpy()
    search arr, (value, index) ->
      spy value
      index isnt 1
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"

  it "does NOT support class instances", ->
    MyClass = ->
    obj = new MyClass
    expect -> search obj, emptyFunction
      .toThrowError "Expected an Array, Object, or PureObject!"

  it "supports null objects", ->
    obj = Object.create null
    obj.foo = 0
    obj.bar = 1
    obj.win = 2
    spy = jasmine.createSpy()
    search obj, (value, key) ->
      spy key
      value isnt 1
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"
