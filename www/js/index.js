
/*var App = ('test', {'foo':'bar'}, function (response) {
    if (response && response.code) {
        if (response.code === 'SUCCESS') {
            PGproxy.navigator.notification.alert(response.foo);
        } else {
            console.log("error while phoning home!");
        }
    }
});*/
// should result in an alert box saying "bar"



var App = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'App.receivedEvent(...);'
    onDeviceReady: function() {
        App.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


if (App.testing_on_desktop) {
    console.log("PhoneGap finished loading");
    _onDeviceReady();
} else {
    document.addEventListener("deviceReady", function () {
        console.log("PhoneGap finished loading");
        _onDeviceReady();
    }, false);
}