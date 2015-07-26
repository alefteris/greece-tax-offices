# greece-tax-offices [![Build Status](https://travis-ci.org/alefteris/greece-tax-offices.svg?branch=master)](https://travis-ci.org/alefteris/greece-tax-offices)

> List of all tax offices (Δ.Ο.Υ.) in Greece.

## Installation

```sh
$ npm install greece-tax-offices
```

## Usage

Get a list of the tax offices:

```js
const taxOffices = require('greece-tax-offices');

taxOffices.forEach(function(office) {
  console.log(office.code);
});
```

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
