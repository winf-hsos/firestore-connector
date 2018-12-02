var fc = require('./index.js');

fc.init("./osna-iot-db3115252755.json", "https://osna-iot.firebaseio.com")

fc.writeAvgForMinute('test', Date.now() - 60000, Date.now(), 1.5, 1);