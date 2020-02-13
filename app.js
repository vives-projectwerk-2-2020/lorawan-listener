// no auth
const Influx = require('influxdb-nodejs');
const client = new Influx('http://127.0.0.1:8086/mydb');

// normal auth (user and password will be added to URL query parameters)
const Influx = require('influxdb-nodejs');
const client = new Influx('http://user:pwd@127.0.0.1:8086/mydb');

// basic auth (will be used http basic auth)
const Influx = require('influxdb-nodejs');
const client = new Influx('http://user:pwd@127.0.0.1:8086/mydb?auth=basic'

// i --> integer
// s --> string
// f --> float
// b --> boolean
const fieldSchema = {
  use: 'i',
  bytes: 'i',
  url: 's',
};
const tagSchema = {
  spdy: ['speedy', 'fast', 'slow'],
  method: '*',
  // http stats code: 10x, 20x, 30x, 40x, 50x
  type: ['1', '2', '3', '4', '5'],
};
client.schema('http', fieldSchema, tagSchema, {
  // default is false
  stripUnknown: true,
});
client.write('http')
  .tag({
    spdy: 'fast',
    method: 'GET',
    type: '2',  
  })
  .field({
    use: 300,
    bytes: 2312,
    url: 'https://github.com/vicanso/influxdb-nodejs',
  })
  .then(() => console.info('write point success'))
  .catch(console.error);