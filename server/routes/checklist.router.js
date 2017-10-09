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

router.put('/submit', function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.role) {
            var checklist = req.body;
            console.log('Checklist to submit: ', checklist);
            pool.connect(function (err, client, done) {
                if (err) {
                    console.log('Error connecting to DB', err);
                    res.sendStatus(500);
                } else {
                    client.query('UPDATE cars_checklist SET cars_checklist.headlights_high=$1, cars_checklist.headlights_low=$2, cars_checklist.parkinglights_front=$3, cars_checklist.turnsignals_front=$4, cars_checklist.taillights=$5, cars_checklist.turnsignals_rear=$6, cars_checklist.brakelights=$7, cars_checklist.backup_lights=$8, cars_checklist.licensetabs_expiration=$9, cars_checklist.sparetirepressure=$10, cars_checklist.currenttirepressure_lf=$11, cars_checklist.currenttirepressure_rf=$12, cars_checklist.currenttirepressure_lr=$13, cars_checklist.currenttirepressure_rr=$14, cars_checklist.finaltirepressure_lf=$15, cars_checklist.finaltirepressure_rf=$16, cars_checklist.finaltirepressure_lr=$17, cars_checklist.finaltirepressure_rr=$18, cars_checklist.tirecondition_lf=$19, cars_checklist.tirecondition_rf=$20, cars_checklist.tirecondition_lr=$21, cars_checklist.tirecondition_rr=$22, cars_checklist.wipercondition=$23, cars_checklist.airfiltercondition=$24, cars_checklist.brakefluid=$25, cars_checklist.powersteeringfluid=$26, cars_checklist.transmissionfluid=$27, cars_checklist.oillevel=$28, cars_checklist.washerfluid=$29, cars_checklist.coolantlevel=$30, cars_checklist.coolantlevel_strength=$31, cars_checklist.radiatorhosecondition=$32, cars_checklist.batterycondition=$33, cars_checklist.serpentinebeltcondition=$34, cars_checklist.otherbeltscondition=$35, cars_checklist.lubehoodlatch=$36, cars_checklist.shockstruttest=$37, cars_checklist.frontwheelbearingtest=$38, cars_checklist.tierodtest=$39, cars_checklist.balljointtest=$40, cars_checklist.controlarmcondition=$41, cars_checklist.stabilizerbarlinkcondition=$42, cars_checklist.cvbootcondition=$43, cars_checklist.frontbrakecondition=$44, cars_checklist.frontbrakecalipers=$45, cars_checklist.reardiscbrakecondition=$46, cars_checklist.rearbrakecalipers=$47, cars_checklist.rearstabilizerbarlinkcondition=$48, cars_checklist.torqueallwheelsremoved=$49, cars_checklist.exhaustsystem=$50, cars_checklist.enginescancodes=$51, cars_checklist.oilchange=$52, cars_checklist.addoil_amount=$53, cars_checklist.addoil_weight=$54, cars_checklist.oilfilter_brand=$55, cars_checklist.oilfilter_number=$56, cars_checklist.oiltype=$57, cars_checklist.finishup_checklist=$58, cars_checklist.vehicle_observations=$59, cars_checklist.recommended_repairs=$60, cars_checklist.repairs_declined=$61, cars_checklist.date_timestamp=now(), cars_checklist.parts_installed=$62, cars_checklist.cost=$63, cars_checklist.checklist_status=$64, cars_checklist.mechanics=$65, cars_checklist.current_mileage=$66 WHERE cars_checklist.checklist_id=$67;'),
                    [checklist.headlights_high, 
                        checklist.headlights_low, 
                        checklist.parkinglights_front, 
                        checklist.turnsignals_front, 
                        checklist.taillights, 
                        checklist.turnsignals_rear, 
                        checklist.brakelights, 
                        checklist.backup_lights, 
                        checklist.licensetabs_expiration, 
                        checklist.sparetirepressure, 
                        checklist.currenttirepressure_lf, 
                        checklist.currenttirepressure_rf, 
                        checklist.currenttirepressure_lr, 
                        checklist.currenttirepressure_rr, 
                        checklist.finaltirepressure_lf, 
                        checklist.finaltirepressure_rf, 
                        checklist.finaltirepressure_lr, 
                        checklist.finaltirepressure_rr, 
                        checklist.tirecondition_lf, 
                        checklist.tirecondition_rf, 
                        checklist.tirecondition_lr, 
                        checklist.tirecondition_rr, 
                        checklist.wipercondition, 
                        checklist.airfiltercondition, 
                        checklist.brakefluid, 
                        checklist.powersteeringfluid, 
                        checklist.transmissionfluid, 
                        checklist.oillevel, 
                        checklist.washerfluid, 
                        checklist.coolantlevel, 
                        checklist.coolantlevel_strength, 
                        checklist.radiatorhosecondition, 
                        checklist.batterycondition, 
                        checklist.serpentinebeltcondition, 
                        checklist.otherbeltscondition, 
                        checklist.lubehoodlatch, 
                        checklist.shockstruttest, 
                        checklist.frontwheelbearingtest, 
                        checklist.tierodtest, 
                        checklist.balljointtest, 
                        checklist.controlarmcondition, 
                        checklist.stabilizerbarlinkcondition, 
                        checklist.cvbootcondition, 
                        checklist.frontbrakecondition, 
                        checklist.frontbrakecalipers, 
                        checklist.reardiscbrakecondition, 
                        checklist.rearbrakecalipers, 
                        checklist.rearstabilizerbarlinkcondition, 
                        checklist.torqueallwheelsremoved, 
                        checklist.exhaustsystem, 
                        checklist.enginescancodes, 
                        checklist.oilchange, 
                        checklist.addoil_amount, 
                        checklist.addoil_weight, 
                        checklist.oilfilter_brand, 
                        checklist.oilfilter_number, 
                        checklist.oiltype, 
                        checklist.finishup_checklist, 
                        checklist.vehicle_observations, 
                        checklist.recommended_repairs, 
                        checklist.repairs_declined, 
                        checklist.date_timestamp, 
                        checklist.parts_installed, 
                        checklist.cost,  
                        checklist.mechanics, 
                        checklist.current_mileage,
                        checklist.checklist_id],
                    function (err, result) {
                        done();
                        if (err) {
                            console.log('Error saving checklist: ', err);
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(200);
                        }
                    }
                }
            })
        } else {
            console.log('No user role');
            res.sendStatus(403);
        }
    } else {
        console.log('User not logged in');
        res.sendStatus(403);
    }
});


module.exports = router;