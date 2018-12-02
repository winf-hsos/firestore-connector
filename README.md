# A connector to write sensor data to Google Firestore
This library writes sensor data in an opiniated way to firestore.

# Usage

```js
var fc = require('firestore-connector');

// Replace with your service account credentials
fc.init("./<service-account-credentials>.json", "<database-url>")

fc.writeAvgForMinute('test', Date.now() - 60000, Date.now(), 1.5, 1);
```