# prettier-plugin-align-object-properties

A prettier plugin that aligns properties of object literals.

```
  Align by 'colon':            Algn by 'value':

    a = {                        a = {
        name   : 'foo',              name:   'foo',
        width  : 100,                width:  100,
        height : 20,                 height: 20,
    };                           };
```
.

## Installation

For Prettier v2:

```sh
npm install -D prettier@^2 @yikes2000/prettier-plugin-preserve-line
```

For Prettier v3:[^1]

```sh
npm install -D prettier @yikes2000/prettier-plugin-preserve-line
```
.


## Configuration

JSON example:

```json
{
  "plugins": ["@yikes2000/prettier-plugin-align-object-properties"]
}
```

JS example (CommonJS module):

```javascript
module.exports = {
  plugins: ['@yikes2000/prettier-plugin-align-object-properties'],
  alignObjectProperties: 'colon',
};
```

JS example (ES module):

```javascript
export default {
  plugins: ['@yikes2000/prettier-plugin-align-object-properties'],
  alignObjectProperties: 'value',
};
```
.

## Options

### Align Object Properties

Align properties of object literals.

Properties are grouped by consecutive lines properties and inline comments:
```
  const a = {
    be  : true,
    cat : 123,

    door  : "knob",
    // inline comment, continues group
    extra : true,

    east : 123,
    foo  : [
      // multi-line, breaks group
      1, 2, 3,
    ],
    g : "new group",
    h : "hi",
  }
```
Alignment options: 'colon' (default), 'value', 'none'
```
  Align by 'colon':            Algn by 'value':

    a = {                        a = {
        name   : 'foo',              name:   'foo',
        width  : 100,                width:  100,
        height : 20,                 height: 20,
    };                           };
```
<!-- prettier-ignore -->
Default | CLI&nbsp;Override | API&nbsp;Override
--- | --- | ---
`colon` | `--align-object-propertiens=none` | `alignObjectProperties: <string>`

.

### Align Single Property

Single property is not aligned by default.
```
  const a = {
    // force multi-line
    bar: true,
  }
```
<!-- prettier-ignore -->
Default | CLI&nbsp;Override | API&nbsp;Override
--- | --- | ---
`false` | `--align-single-property` | `alignSingleProperty: <boolean>`

.

## Compatibility with other Prettier plugins

See [prettier-plugin-merge-preserve](https://github.com/yikes2000/prettier-plugin-merge-preserve) and [prettier-plugin-merge](https://github.com/ony3000/prettier-plugin-merge).

.


## Limitations

<!-- prettier-ignore -->
Language | Supported | Notes
--- | --- | ---
Javascript | Yes |
Typescript | Yes |

Implemented using RegExp, which has limitations.  Please kindly report issues for evaluation.
.


## Credits

This plugin was templated from Hyeonjong's
[prettier-plugin-brace-style](https://github.com/ony3000/prettier-plugin-brace-style).
