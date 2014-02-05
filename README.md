# deviceReady

An AMD loader plugin for detecting the device ready event on Apache
Cordova (aka Phonegap) devices.  When running in the desktop browser,
it will "detect" this event immediately.  It also signals the
environment in which the code is running (Cordova or desktop browser)
to make dispatching on environment more convenient.

Known to work in RequireJS, but should work in other AMD loaders that
support the same loader plugin API.

## Docs

This plugin works mostly like the RequireJS DOM Ready plugin:

```JavaScript
require(['deviceReady'], function(deviceReady) {
  deviceReady(function(isCordova) {
    // ...
  });
});
```

Alternatively, you can use it through the RequireJS *Loader Plugin API*:

```JavaScript
require(['deviceReady!'], function(isCordova) {
  // ...
});
```

The `isCordova` argument is a boolean which will be `false` in desktop
browsers and `true` in Cordova.

## License

Dual-licensed -- new BSD or MIT.