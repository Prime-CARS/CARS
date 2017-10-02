var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');

// post route for adding a customer to the db from the service request form
router.post('/', function(req,res){
    //this will make the db query insertions shorter
    var customer = req.body;
    console.log("customer information: ", customer);
    console.log("The post route for customers in requestService.router.js was hit");
    //connecting to db
    pool.connect (function(errorConnectingToDatabase, client, done){
        //checking the status of the connection
        if(errorConnectingToDatabase){ //if the connection failed
            console.log("error connecting to customer_info table in db: ", errorConnectingToDatabase);
            res.sendStatus(500);
        } else { //the connection is successful
            client.query('INSERT INTO customer_info (name, address, city, state, zip, cellphone, email_address, qualify_input) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);' [customer.name, customer.address, customer.city, customer.state, customer.zip, customer.cellphone, customer.email_address, customer.qualify_input], function(errorMakingQuery, result) {
                done();
                if(errorMakingQuery) {
                    console.log("Error making db query in customer_info table in requestService.router.js: ",errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            }
        )}
    })
})

// post route for adding a vehicle to the db from the service request form
router.post('/', function(req, res){
    //this will make the db query insertions shorter
    var vehicle = req.body;
    console.log("Vehicle information:", vehicle);
    console.log("The post route for vehicles in requestService.router.js was hit");
    //connecting to db
    pool.connect (function(errorConnectingToDatabase, client, done){
        //checking the status of the connection
        if(errorConnectingToDatabase){ //if the connection failed
            console.log("error connecting to vehicle_info table in db: ", errorConnectingToDatabase);
            res.sendStatus(500);
        } else { //the connection is successful
            client.query('INSERT INTO vehicle_info (year, make, model, vin, service_request) VALUES ($1, $2, $3, $4, $5);' [vehicle.year, vehicle.make, vehicle.model, vehicle.vin, vehicle.service_request],  function(errorMakingQuery, result) {
                done();
                if(errorMakingQuery) {
                    console.log("Error maaking db query in vehicle_info table in requestService.router.js: ",errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            }
        )}
    })
})

module.exports = router;