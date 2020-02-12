var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mqtt.labict.be')
 
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    client.subscribe('#', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
        });
    });
});
 