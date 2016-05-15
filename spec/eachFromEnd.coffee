
eachFromEnd = require "../src/eachFromEnd"

describe "eachFromEnd()", ->

  it "starts at the end", ->
    obj = { foo: 1, bar: 2 }
    spy = jasmine.createSpy()
    eachFromEnd obj, (value, key) ->
      spy key
      return yes
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "bar"
    expect spy.calls.argsFor 1
      .toContain "foo"
