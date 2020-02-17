const Influx = require('influx')

// Connect to a single host with a full set of config details and
// a custom schema
const influx = new Influx.InfluxDB('http://192.168.99.100:8086/database')

influx.writePoints([
    {
      measurement: 'sensors',
      tags: {
        sensor_id: "sensor_01",
        location: "lab2.80",
      },
      fields: { temp: 21.5 },
      timestamp: 1581880128,
    }
  ], {
    database: 'particula',
    precision: 's',
  })
  .catch(error => {
    console.error(`Error saving data to InfluxDB! ${err.stack}`)
  });
