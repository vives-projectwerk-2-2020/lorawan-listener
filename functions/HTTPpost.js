const Influx = require('influx')

// Connect to a single host with a full set of config details and
// a custom schema
const client = new Influx.InfluxDB({
  database: 'my_db',
  host: 'localhost',
  port: 8086,
  username: 'connor',
  password: 'pa$$w0rd',
  schema: [
    {
      measurement: 'sensors',
      fields: {
        sensor_id: "sensor_01",
        location: "sensor_01",
        memory_usage: Influx.FieldType.INTEGER,
        cpu_usage: Influx.FieldType.FLOAT,
        is_online: Influx.FieldType.BOOLEAN
      }
      tags: [
        'hostname'
      ]
    }
  ]
})

sensors,sensor_id="sensor_01",location="lab2.80" temp=21.5 1581880118