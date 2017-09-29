--DB setup, copy, paste and CMD+ENTER for blankDB slate
--Create a DB called CARS_DB 
--Tables for CARS_DB
--New Users
CREATE TABLE users (
	"id" serial PRIMARY KEY,
	"username" text,
	"password" text,
    "role" text
);

--New Customer
CREATE TABLE "customer_info" (
	"customer_id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"address" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip" text NOT NULL,
	"cellphone" text NOT NULL,
	"alternative_phone" text,
	"email_address" text,
    "date_timestamp" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

--Vehicle with new customer join
CREATE TABLE "vehicle_info" (
	"vehicle_id" serial PRIMARY KEY,
	"year" integer,
	"make" text,
	"model" text,
	"vin" text NOT NULL,
    "service_request" text,
	"customer_id" int REFERENCES "customer_info" ("customer_id")
);

--Checklist joined to vehicle info
CREATE TABLE "cars_checklist" (
    "checklist_id" serial PRIMARY KEY,
    "headlights_high" text,
    "headlights_low" text,
    "parkinglights_front" text,
    "turnsignals_front" text,
    "taillights" text,
    "turnsignals_rear" text,
    "brakelights" text,
    "backup_lights" text,
    "licensetabs_expiration" date,
    "sparetirepressure" integer,
    "currenttirepressure_lf" integer,
    "currenttirepressure_rf" integer,
    "currenttirepressure_lr" integer,
    "currenttirepressure_rr" integer,
    "finaltirepressure_lf" integer,
    "finaltirepressure_rf" integer,
    "finaltirepressure_lr" integer,
    "finaltirepressure_rr" integer,
    "tirecondition_lf" text,
    "tirecondition_rf" text,
    "tirecondition_lr" text,
    "tirecondition_rr" text,
    "wipercondition" text,
    "airfiltercondition" text,
    "brakefluid" text,
    "powersteeringfluid" text,
    "transmissionfluid" text,
    "oillevel" text,
    "washerfluid" text,
    "coolantlevel" text,
    "coolantlevel_strength" text,
    "radiatorhosecondition" text,
    "batterycondition" text,
    "serpentinebeltcondition" text,
    "otherbeltscondition" text,
    "lubehoodlatch" text,
    "shockstruttest" text,
    "frontwheelbearingtest" text,
    "tierodtest" text,
    "balljointtest" text,
    "controlarmcondition" text,
    "stabilizerbarlinkcondition" text,
    "cvbootcondition" text,
    "frontbrakecondition" text,
    "frontbrakecalipers" text,
    "reardiscbrakecondition" text,
    "rearbrakecalipers" text,
    "rearstabilizerbarlinkcondition" text,
    "torqueallwheelsremoved" text,
    "exhaustsystem" text,
    "enginescancodes" text,
    "oilchange" boolean,
	"addoil_amount" integer,
	"addoil_weight" integer,
	"oilfilter_brand" text,
	"oilfilter_number" integer,
	"oiltype" text,
	"finishup_checklist" boolean,
	"vehicle_observations" text,
	"recommended_repairs" text,
	"repairs_declined" text,
	"date_timestamp" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	"parts_installed" text,
	"cost" money,
	"checklist_status" text,
	"mechanics" text,
	"current_mileage" text,
	"vehicle_id" int REFERENCES "vehicle_info" ("vehicle_id")
);

--End DB setup



--Inserting a new customer with vehicle information
--Change to be dynamic
INSERT INTO customer_info (	"name", "address", "city", "state", "zip", "cellphone" ) VALUES
('john', 'address', 'city', 'state', 00000, 5555555);

INSERT INTO vehicle_info ( "customer_id" , "vin" ) VALUES
((SELECT "customer_id" FROM "customer_info" WHERE "name"='john'), 'VIN#AAAABBBBCC');

--Once a vehicle has been approved for service
--Creates an empty checklist for mechanics, timestamp is updated with every update.
--Change to be dynamic
INSERT INTO cars_checklist ( "vehicle_id", "checklist_status" ) VALUES
( (SELECT "vehicle_id" FROM "vehicle_info" WHERE "vehicle_id"='1'), 'ready');