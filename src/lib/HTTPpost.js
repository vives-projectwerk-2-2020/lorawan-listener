const Influx = require('influx')

// Connect to a single host with a full set of config details and
// a custom schema
class HttpReqest {
  sendData(sensor_id, location, temp, timestamp) {

    const influx = new Influx.InfluxDB('http://192.168.99.100:8086/database')

    influx.writePoints([
      {
        measurement: 'sensors',
        tags: {
          sensor_id: sensor_id,
          location: location,
        },
        fields: { temp: temp },
        timestamp: timestamp,
      }
    ], {
        database: 'particula',
        precision: 's',
      })
      .catch(error => {
        console.error(`Error saving data to InfluxDB! ${err.stack}`)
      });
  }
}

module.exports = HttpReqest;
