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
            client.query("SELECT * FROM customer_info WHERE service_status = 'requested' order by date_of_request asc;",
                function (err, result) {
                    done;
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

router.get('/printable', function (req, res) {
    console.log('get requests route hit');
    if (req.isAuthenticated()) {
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("Error connecting: ", err);
                res.sendStatus(500);
            }
            client.query("SELECT * FROM customer_info WHERE service_status = 'scheduled' order by date_of_request asc;",
                function (err, result) {
                    done;
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
//route when Search History is clicked on Admin page. Will search by name and/or VIN.
router.get('/search/:z', function (req, res) {
    console.log('search route hit');
    var search = req.params.z;
    if (req.isAuthenticated()) {
        if (req.user.role === "admin") {
            pool.connect(function (err, client, done) {
                if (err) {
                    console.log("Error connecting: ", err);
                    res.sendStatus(500);
                }
                client.query("SELECT * FROM customer_info WHERE name ILIKE $1 OR vin ILIKE $1;", ['%' + search + '%'],
                    function (err, result) {
                        done;
                        if (err) {
                            console.log("Error retreiving data: ", err);
                            res.sendStatus(500);
                        } else {
                            res.send(result.rows)
                        }
                    });
            })
        } else {
            res.sendStatus(403)
        }
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
});





module.exports = router;