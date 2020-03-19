const ttn = require("ttn");
const Influx = require('influx');
const timezone = 1; //  = +1h

require('dotenv').config();

const appID = process.env.APP_ID;
const accessKey = process.env.ACCESSKEY;
const influxIp = process.env.INFLUX_IP;
const influxPort = process.env.INFLUX_PORT;
const database = process.env.INFLUX_DB_NAME;

const influx = new Influx.InfluxDB(`http://${influxIp}:${influxPort}/database`);
console.log("timestamp server: " + Math.round((new Date()).getTime() / 1000))
console.log("local timestamp : " + (Math.round((new Date()).getTime() / 1000)+ (timezone *3600)))

// discover handler and open mqtt connection
ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID);
      console.log(payload);

      influx.writePoints([
        {
          measurement: 'sensors',
          tags: {
            sensor_id: payload.dev_id
          },
          fields: { 
            temperature: payload.payload_fields.temperature,
            humidity: payload.payload_fields.humidity,
            pressure: payload.payload_fields.pressure,
            pm10: payload.payload_fields.pm10,
            pm25: payload.payload_fields.pm25
           },
          timestamp: payload.time
        }
      ], {
        database: `${database}`,
        precision: 's',
      })
      .catch(error => {
        console.error(`Error saving data to InfluxDB! ${error.stack}`);
      });
      console.log("send to influx db success");
    });
  })
  .catch(function (err) {
    console.error(`Error communication The Things Network API! ${err}`);
  })
