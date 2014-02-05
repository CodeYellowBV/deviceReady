/**
 * deviceReady requirejs plugin, based on domReady plugin:
 * @license RequireJS deviceReady 0.1.0 Copyright (c) 2010-2012, The Dojo Foundation, (c) 2013-2014, Code Yellow B.V. All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://bitbucket.org/codeyellow/deviceready for details
 *
 * Usage: require('deviceready', function(isCordova) { ...});
 * Alternatively: var isCordova = require('deviceready!');
 *
 * isCordova will be true when running on a device with Cordova, and false in a browser.
 */
define(function () {
    'use strict';

    var isCordova = typeof window.cordova != 'undefined';

    /**
     * Registers a callback for deviceready. If device is already ready, the
     * callback is called immediately (this is handled automatically by Cordova).
     * If we're not on a device, invoke the callback immediately.
     * @param {Function} callback
     */
    function deviceReady(callback) {
        if (isCordova) {
            document.addEventListener('deviceready', function() { callback(true); }, false);
        } else {
            callback(false);
        }
        return deviceReady;
    }

    deviceReady.version = '0.1.0';

    /**
     * Loader Plugin API method
     */
    deviceReady.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            deviceReady(onLoad);
        }
    };

    return deviceReady;
});
