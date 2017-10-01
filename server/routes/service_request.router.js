var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')


router.get('/', function (req, res) {
    console.log('get requests route hit');
    if (req.isAuthenticated()) {
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("Error connecting: ", err);
                res.sendStatus(500);
            }
            client.query("SELECT * FROM vehicle_info JOIN customer_info ON customer_info.customer_id = vehicle_info.customer_id;",
                function (err, result) {
                    client.end();
                    if (err) {
                        console.log("Error inserting data: ", err);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows)
                    }
                });
    })
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.send(false);
    }
});

module.exports = router;