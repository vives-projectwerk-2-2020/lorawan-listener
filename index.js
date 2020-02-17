var mqtt = require('mqtt')

require('dotenv').config()
const appID = process.env.APP_ID
const accessKey = process.env.ACCESSKEY

var client  = mqtt.connect('mqtt://eu.thethings.network', {
  username: appID,
  password: accessKey
})
 
// client.on('connect', function () {
//   client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('presence', 'Hello mqtt')
//     }
//   })
// })

client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    client.subscribe('geylianloraproject/devices/sodaqboard1/up', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
            console.log("Received message on '" + topic + "'")
            console.log(message);
        });
    });
});
 