# LoRaWan Listener
## run program
node index.js

## install
npm install

## .env

add .env file with following data :
```.env
APP_ID=Type_Here_The_Device_ID
ACCESSKEY=Type_Here_The_Access_Key
```
## Information
The Things Network mqtt API reference : 
[API reference](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html)

Topic : `<AppID>/devices/<DevID>/up`

## Libraries

[The Things Network via mqtt lib](https://www.npmjs.com/package/ttn)

## Received Data Example 
```json
{
  app_id: 'geylianloraproject',
  dev_id: 'sodaqboard1',
  hardware_serial: '0004A30B0023CB4A',
  port: 1,
  counter: 0,
  payload_raw: <Buffer 00 11 22 33 44 55 66>,
  metadata: { time: '2020-02-13T15:04:43.34724278Z' }
}
```

## Simulate data

via the things network console :
applications -> <youre application> -> devices -> registered devices -> <youre device> -> simulate uplink 

=> insert payload and send