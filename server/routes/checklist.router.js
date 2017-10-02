var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//Checklists status page
router.get('/', function(req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT customer_info.name, vehicle_info.year, vehicle_info.make, vehicle_info.model, vehicle_info.vin, vehicle_info.service_requested, cars_checklist.checklist_status, cars_checklist.checklist_id FROM cars_checklist JOIN vehicle_info ON vehicle_info.vehicle_id=cars_checklist.vehicle_id JOIN customer_info ON customer_info.customer_id=vehicle_info.customer_id WHERE NOT cars_checklist.checklist_status=\'finished\';', 
            function(err, result) {
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
router.get('/:checklist_id', function(req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT customer_info.name, customer_info.year, customer_info.make, customer_info.model, customer_info.vin, customer_info.service_requested, cars_checklist.* FROM cars_checklist JOIN customer_info ON customer_info.customer_id=cars_checklist.customer_id WHERE cars_checklist.checklist_id=$1;', 
            [req.params.checklist_id],
            function(err, result) {
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

module.exports = router;