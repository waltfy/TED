TED [![npm version](https://badge.fury.io/js/ted.svg)](http://badge.fury.io/js/ted)
===

A simple configuration manager.

## Setup
Simply add a `config` folder to the root of your project containing a file called `config.json`. The keys to the file will match your `NODE_ENV` environment varibale or it will default to `development`. An example file may be as follows:

```js
// config.json
{
  "development": {
    "api_base": "http://api.devmyapp.io/v1"
  },
  "production": {
    "api_base": "http://api.myappforreal.io/v1"
  }
}
```

You may provide an override file `config/config.json`:

```js
// overrides.json
{
  "SOME_API_KEY": "953532842asdax6sdasd866505047"
}
```

Require **TED** on your app:

```js
// yourapp.js
var CONFIG = require('ted');
console.log(CONFIG);
```

By running `NODE_ENV=production yourapp.js` the output should be:
```js
{
  "api_base": "http://api.myappforreal.io/v1",
  "SOME_API_KEY": "953532842asdax6sdasd866505047"
}
```

## TODO
- [ ] Add ability to specify custom path for configuration files.

## License

The MIT License (MIT)

Copyright (c) 2015 Walter Carvalho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
