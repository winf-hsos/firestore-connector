var fc = require('./index.js');

fc.init("../smart-schmied/smart-schmied-firebase-adminsdk-a5sxk-435a219ed7.json",
    "https://smart-schmied.firebaseio.com")

fc.writeAvgForMinute('test', Date.now() - 60000, Date.now(), 1.5, 1);