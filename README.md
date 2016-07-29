
# sync v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

A simple library for traversing the keys of an object.

Does support:
- Object literals `{}`
- Array literals  `[]`
- Pure objects    `Object.create(null)`

Does not support:
- Sparse arrays   `a = []; a[100] = true`
- Class instances `obj instanceof Object`

Provides these methods:
- `each` - Call the iterator with each `(value, key)` in the given object.
- `reduce` - Call the iterator with the result of the previous iteration.
- `map` - Create a new object with the result of each iteration.
- `filter` - Create a new object with the values your iterator returns `true` for.
- `search` - Stops iterating when your iterator returns `false`.
- `repeat` - Call the iterator `x` number of times.
