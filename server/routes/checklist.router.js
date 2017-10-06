var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//Checklists status page
router.get('/', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT customer_info.name, customer_info.year, customer_info.make, customer_info.model, customer_info.vin, customer_info.service_requested, cars_checklist.checklist_status,cars_checklist.checklist_id FROM cars_checklist JOIN customer_info ON customer_info.customer_id=cars_checklist.customer_id WHERE NOT cars_checklist.checklist_status=\'finished\';',
                function (err, result) {
                    if (err) {
                        console.log('Error selecting checklists', err);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
        }
    })
});

// Initial Checklist population
// Assuming that this is the first time mechanic has opened the checklist, checklist will populate with necessary information and is setting up for updates.
//This could also work with checklist histories(??)

//Basic checklist form
router.get('/:checklist_id', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT customer_info.name, customer_info.year, customer_info.make, customer_info.model, customer_info.vin, customer_info.service_requested, cars_checklist.* FROM cars_checklist JOIN customer_info ON customer_info.customer_id=cars_checklist.customer_id WHERE cars_checklist.checklist_id=$1;',
                [req.params.checklist_id],
                function (err, result) {
                    if (err) {
                        console.log('Error selecting checklist', err);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
        }
    })
});

//Checklists are inserted when client has approved them for service
// Adding checklist to approved services
router.post('/addChecklist', function (req, res) {
    // only logged in users with admin roles can approve for service.
    if (req.isAuthenticated()) {
        if (req.user.role === 'admin') {
            index = req.body.index;
            console.log("The put route for customers in requestService.router.js was hit to update status");
            //connecting to db
            pool.connect(function (errorConnectingToDatabase, client, done) {
                //checking the status of the connection
                if (errorConnectingToDatabase) { 
                    //if the connection failed
                    console.log("error connecting to customer_info table in db: ", errorConnectingToDatabase);
                    res.sendStatus(500);
                } else { 
                    //the connection is successful
                    client.query('INSERT INTO cars_checklist (customer_id, checklist_status) VALUES ((SELECT "customer_id" FROM "customer_info" WHERE "customer_id"=$1), \'ready\');',
                        [index],
                        function (err, result) {
                            done();
                            if (err) {
                                console.log('Error saving new checklist: ', err);
                                res.sendStatus(500);
                            } else {
                                res.sendStatus(200);
                            }
                        });
                }
            });
        } else {
            console.log('Not an admin');
            res.send('Current user is not an admin');
        }
    } else {
        console.log('Not logged in');
        res.send('Not logged in, cant approve for service');
    }
});


module.exports = router;