var mqtt = require('mqtt')

require('dotenv').config()
const appID = process.env.APP_ID
const accessKey = process.env.ACCESSKEY
const realTimeIp = process.env.REAL_TIME_IP

var ttnClient  = mqtt.connect('mqtt://eu.thethings.network', {
  username: appID,
  password: accessKey
})
 
var realTimeClient = mqtt.connect(`mqtt://${realTimeIp}`)

ttnClient.on('connect', function() { // When connected
    console.log('connected ttn broker');
    // subscribe to a topic
    ttnClient.subscribe('geylianloraproject/devices/sodaqboard1/up', function() {
        // when a message arrives, do something with it
        ttnClient.on('message', function(topic, message, packet) {
            console.log("Received message on '" + topic + "'");
            console.log(message);
        });
    });
});

realTimeClient.on('connect', function() { // When connected
    console.log('connected realTimebroker');
    // publish to a topic
    realTimeClient.publish('Firsttry', 'Hello mqtt');
});
