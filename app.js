let ttn = require("ttn")

require('dotenv').config()
const appID = process.env.APP_ID
const accessKey = process.env.ACCESSKEY

// discover handler and open mqtt connection
ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID)
      console.log(payload)
    })
  })
  .catch(function (err) {
    console.error(err)
    process.exit(1)
  })
 