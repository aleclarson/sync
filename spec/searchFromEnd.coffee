
searchFromEnd = require "../src/searchFromEnd"

describe "searchFromEnd()", ->

  it "starts at the end", ->
    obj = { foo: 1, bar: 2 }
    spy = jasmine.createSpy()
    searchFromEnd obj, (value, key) ->
      spy key
      return yes
    expect spy.calls.count()
      .toBe 2
    expect spy.calls.argsFor 0
      .toContain "bar"
    expect spy.calls.argsFor 1
      .toContain "foo"

  it "stops iterating when false is returned", ->
    obj = { foo: 1, bar: 2 }
    spy = jasmine.createSpy()
    searchFromEnd obj, (value, key) ->
      spy key
      return no
    expect spy.calls.count()
      .toBe 1
    expect spy.calls.argsFor 0
      .toContain "bar"
