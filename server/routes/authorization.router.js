var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')


router.get('/', function (req, res) {
    console.log('get authorization route hit');
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
                        console.log('result.rows', result.rows);
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

// router.put('/', function (req, res) {

//     //connecting to db

//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         //checking the status of the connection
//         if (errorConnectingToDatabase) { //if the connection failed
//             console.log("error connecting to customer_info table in db: ", errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else { //the connection is successful
//             client.query('UPDATE customer_info SET service_status = $1 WHERE customer_id = $2;', [service_status, index], function (errorMakingQuery, result) {
//                 done;
//                 if (errorMakingQuery) {
//                     console.log("Error making db query in customer_info table in requestService.router.js: ", errorMakingQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.send('Update Service Put Route OK', service_status, index);
//                 }
//             });
//         }
//     });
// });

module.exports = router;