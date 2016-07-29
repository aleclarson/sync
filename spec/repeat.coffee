
repeat = require "../src/repeat"

describe "repeat()", ->

  it "must be passed the number of desired iterations", ->
    expect -> repeat null, emptyFunction
      .toThrow()
    expect -> repeat 5, emptyFunction
      .not.toThrow()

  it "must be passed a function to iterate with", ->
    expect -> repeat 5, null
      .toThrow()
    expect -> repeat 5, emptyFunction
      .not.toThrow()

  it "iterates up to the given number", ->
    spy = jasmine.createSpy()
    repeat 5, (index) ->
      spy index
    expect spy.calls.count()
      .toBe 5
    expect spy.calls.argsFor 0
      .toContain 0
    expect spy.calls.argsFor 4
      .toContain 4
