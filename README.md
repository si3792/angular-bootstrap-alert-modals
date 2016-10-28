# angular-bootstrap-alert-modals
A very simple angular service, providing a prettier alternative to alert(), using bootstrap modals.

![Success alert](/sample/success.png)
![Info alert](/sample/info.png)
![Warning alert](/sample/warning.png)
![Danger alert](/sample/danger.png)

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [How to use](#how-to-use)
4. [Development](#development)
5. [Thanks](#thanks)
6. [License](#license)


## Installation

Install using npm:
`npm install angular-bootstrap-alert-modals`

## Configuration

* First, reference the minified script and its dependencies:

```html
<!-- Boostrap -->
<script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">

<!-- Angular -->
<script src="/node_modules/angular/angular.min.js"></script>

<!-- angular-modal-service -->
<script src="/node_modules/angular-modal-service/dst/angular-modal-service.min.js"></script>

<!-- angular-bootstrap-alert-modals  -->
<script src="/node_modules/angular-bootstrap-alert-modals/dist/angular-bootstrap-alert-modals.min.js"></script>
```

* Second, specify `BootstrapAlertModals` as dependency of you app:

```javascript
  var app = angular.module('SomeApp', ['BootstrapAlertModals']);
```

* Then, inject `AlertModalService` into a controller, service or directive:

```javascript
  app.controller("sampleController", function($scope, AlertModalService) { ...
```

* Now, you can call `AlertModalService.alert()` to display a modal alert.

## How to use

To call `AlertModalService.alert(title, text, type)` you must provide the following arguments:
* `title` - The title of the alert (string)
* `texts` - The body of the alert (array of strings, each representing a new line)
* `type` - Can be `success`, `info`, `warning` or `danger`, which applies the corresponding bootstrap styling to the modal.

__Additionally__, `AlertModalService.alert()` returns a promise, which is
resolved after the user closes the modal.

## Development

Run
`npm install`
to download developer dependencies.

Check out the sample by running `npm start` and navigating to
`http://localhost:8080/sample/`

To generate minified version to `dist/`, run
`npm run minify`

It should also be noted that there are no tests currently for the
package, but a testing framework is set up (Jasmine + Karma), with istanbul for coverage generation. Tests should go to `/test/` and the command for running them is `npm test`.

## Thanks

I would like to thank [dwmkerr](https://github.com/dwmkerr) for creating
 `angular-modal-service`, on which this package is based.

## License

MIT License

Copyright (c) 2016 si3792

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
