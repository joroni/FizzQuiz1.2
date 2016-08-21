cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.alexwasner.plugins.orientationlock/www/OrientationLock.js",
        "id": "com.alexwasner.plugins.orientationlock.OrientationLock",
        "clobbers": [
            "OrientationLock"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.OrientationLock/www/orientationLock.js",
        "id": "com.phonegap.plugins.OrientationLock.OrientationLock",
        "clobbers": [
            "OrientationLock"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-camera": "2.1.1",
    "cordova-plugin-whitelist": "1.2.1",
    "com.alexwasner.plugins.orientationlock": "0.0.1",
    "com.phonegap.plugins.OrientationLock": "0.1"
};
// BOTTOM OF METADATA
});