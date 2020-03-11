# LoRaWan Listener

![Docker Image CI](https://github.com/vives-projectwerk-2-2020/lorawan-listener/workflows/Docker%20Image%20CI/badge.svg?branch=master)

## run program
node index.js

## install
npm install

## .env

add .env file with following data :
```.env
APP_ID=Type_Here_The_Device_ID
ACCESSKEY=Type_Here_The_Access_Key
REAL_TIME_IP=Type_Here_The_IP_Address_From_The_Broker
INFLUX_IP=Type_Here_The_InfluxDB_IP
INFLUX_PORT=Type_Here_The_InfluxDB_PORT
```
## Information
The Things Network mqtt API reference : 
[API reference](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html)

Topic : `<AppID>/devices/<DevID>/up`

## Libraries

- [The Things Network via mqtt lib](https://www.npmjs.com/package/ttn)
- [mqtt lib](https://www.npmjs.com/package/mqtt)


## Received Data Example 
Simulated data:
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
Data from LoRaWAN antenna :

```json
Received uplink from  lora-rfm95w-maximva
{
  app_id: 'maximva-loratest',
  dev_id: 'lora-rfm95w-maximva',
  hardware_serial: '00A13584F9D5E9D4',
  port: 1,
  counter: 9,
  payload_raw: <Buffer 01 00 09 00 f6 00 6d 00 67 00 91 00>,
  payload_fields: {
    device_id: 1,
    humidity: 246,
    pm10: 145,
    pm25: 103,
    pressure: 109,
    temperature: 9
  },
  metadata: {
    time: '2020-02-17T08:06:04.784265573Z',
    frequency: 868.3,
    modulation: 'LORA',
    data_rate: 'SF7BW125',
    airtime: 61696000,
    coding_rate: '4/5',
    gateways: [ [Object], [Object] ]
  }
}
```

## Simulate data

via the things network console :
applications -> <youre application> -> devices -> registered devices -> <youre device> -> simulate uplink 

=> insert payload and send
