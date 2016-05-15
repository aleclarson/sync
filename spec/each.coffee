
each = require "../src/each"

describe "each()", ->

  it "must be passed a function to iterate with", ->
    obj = {}
    expect -> each obj, null
      .toThrow()
    expect -> each obj, emptyFunction
      .not.toThrow()

  it "supports object literals", ->
    spy = jasmine.createSpy()
    obj = { foo: spy, bar: spy }
    each obj, (value, key) ->
      value key
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"

  it "supports array literals", ->
    spy = jasmine.createSpy()
    arr = [ spy, spy ]
    each arr, (value, key) ->
      value key
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
    each obj, (value, key) ->
      value key
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
    each obj, (value, key) ->
      value key
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "foo"
    expect spy.calls.argsFor 1
      .toContain "bar"
