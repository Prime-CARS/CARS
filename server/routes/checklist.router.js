var express = require('express');
var router = express.Router();

// Initial Checklist population
// Assuming that this is the first time mechanic has opened the checklist, checklist will populate with necessary information and is setting up for updates.
//Basic checklist form
router.get('/:customer_id/:status', function(req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT customer_info.name, vehicle_info.year, vehicle_info.make, vehicle_info.model, vehicle_info.vin, vehicle_info.service_requested, cars_checklist.* FROM cars_checklist JOIN vehicle_info ON vehicle_info.vehicle_id=cars_checklist.vehicle_id JOIN customer_info ON customer_info.customer_id=vehicle_info.customer_id WHERE customer_info.customer_id=$1 AND cars_checklist.checklist_status=$2;', 
            [req.params.customer_id, req.params.status],
            function(err, resut) {
                if (err) {
                    console.log('Error selecting checklist', err);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows[0]);
                }
            })
        }
    })
});

//Checklist status page
router.get('/checklist_status', function(req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT customer_info.name, vehicle_info.year, vehicle_info.make, vehicle_info.model, vehicle_info.vin, vehicle_info.service_requested, cars_checklist.checklist_status FROM cars_checklist JOIN vehicle_info ON vehicle_info.vehicle_id=cars_checklist.vehicle_id JOIN customer_info ON customer_info.customer_id=vehicle_info.customer_id;', 
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
})

module.exports = router;