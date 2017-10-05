var express = require('express');
var router = express.Router();
//this brings in the nodemailer module
var nodemailer = require('nodemailer');


router.post('/', function (req, res, next) {//this contacts the modemailer service through the server
    var transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: process.env.SENDER,
            pass: process.env.GMAIL
        }
    });

    var mailOptions = {
        from: process.env.SENDER,
        to: 'julie.berthiaume@gmail.com', /* this will be Mitch's email account, whatever he chooses to use to receive theses notifications */
        subject: 'New request for service form',
        text: 'A new Request for Services form has just been created and submitted.' 
    };

    transporter.sendMail (mailOptions, function(error, info){
        if(error){
            console.log("There was an error sending the email: ", error);
        } else {
            console.log("Email sent: " + info.response);
            res.sendStatus(201);
        }
    });
}); //end of router.post 

module.exports = router;