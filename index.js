var admin = require("firebase-admin");
var moment = require('moment')

exports.init = function (pathToServiceAccountKey, databaseURL) {

    var serviceAccount = require(pathToServiceAccountKey);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: databaseURL
    });

    const settings = { timestampsInSnapshots: true };
    admin.firestore().settings(settings);
}

exports.writeAvgForMinute = function (sensorName, start, end, avgValue, count) {

    var dateComponents = _getDateComponentsFromTs(end);

    var data = { startTime: start, endTime: end, avgValue: avgValue, count: count };

    var path = 'sensors/' + sensorName + "/"
        + dateComponents.year.toString() + "-" + _getWithZero(dateComponents.month) + "-" + _getWithZero(dateComponents.day);

    var doc = _getWithZero(dateComponents.hour) + _getWithZero(dateComponents.minute);

    console.log(path);
    _write(path, doc, data);
}

var _write = function (path, doc, value) {
    var db = admin.firestore();
    var setDoc = db.collection(path).doc(doc).set(value);
}

var _getDateComponentsFromTs = function (ts) {
    var m = moment(ts);
    console.log(m.year());

    return { year: m.year(), month: m.month() + 1, day: m.date(), hour: m.hour(), minute: m.minute() }
}

var _getWithZero = function (num) {
    if (num < 10)
        return "0" + num.toString();
    else return num.toString();
}

