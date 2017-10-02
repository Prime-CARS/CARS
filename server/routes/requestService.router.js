var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');

// post route for adding a customer to the db from the service request form
router.post('/', function(req,res){
    //this will make the db query insertions shorter
    // var customer = req.body;
    console.log("this is the customer on line 10 of the router file: ", req.body);
    // console.log("customer information: ", customer);
    // console.log("customer name" , customer.name);
    console.log("The post route for customers in requestService.router.js was hit");
    //connecting to db
    pool.connect (function(errorConnectingToDatabase, client, done){
        //checking the status of the connection
        if(errorConnectingToDatabase){ //if the connection failed
            console.log("error connecting to customer_info table in db: ", errorConnectingToDatabase);
            res.sendStatus(500);
        } else { //the connection is successful
            client.query('INSERT INTO customer_info (name, address, city, state, zip, cellphone, alternative_phone, email_address, qualify_input, year, make, model, vin, service_request) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);', [req.body.name, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.cellPhone, req.body.altPhone, req.body.email, req.body.qualification, req.body.year, req.body.make, req.body.model,req.body.vin, req.body.problem], function(errorMakingQuery, result) {
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
});

module.exports = router;