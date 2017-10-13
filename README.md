# C.A.R.S. Ministry

Christian Auto Repair Shop (C.A.R.S.) is a non profit organization that provides low-cost automotive repair to people in need.

## Built With

HTML5, Javscript, PostgreSQL, AngularJS, Angular Material, Angular Routing, Jquery, Jquery Mask Plugin, Sweetalert2, Node, Express, 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here


### Installing

Steps to get the development environment running.

```sql
CREATE TABLE users (
  "id" serial PRIMARY KEY,
  "username" text,
  "password" text,
  "role" text
);

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
  "qualify_input" text,
  "service_status" text DEFAULT 'requested',
  "year" integer,
  "make" text,
  "model" text,
  "vin" text NOT NULL,
  "service_requested" text,
  "current_mileage" text,
  "date_of_request" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

--Checklist joined to vehicle info
CREATE TABLE "cars_checklist" (
  "checklist_id" serial PRIMARY KEY,
  "customer_id" int REFERENCES "customer_info" ("customer_id"),
  "headlights_high" text,
  "headlights_low" text,
  "parkinglights_front" text,
  "turnsignals_front" text,
  "taillights" text,
  "turnsignals_rear" text,
  "brakelights" text,
  "backup_lights" text,
  "licensetabs_expiration" text,
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
  "checkoil_level" text,
  "oilcap_secure" text,
  "start_idle" text,
  "enginescancodes" text,
  "oilchange" boolean,
  "drain_oil" boolean,
  "remove_filter_gasket" boolean,
  "install_drain_plug" boolean,
  "install_tighten_filter" boolean,
  "addoil_amount" text,
  "addoil_weight" text,
  "checkoil_plug" boolean,
  "check_filter" boolean,
  "oilchange_sticker" boolean,
  "oilfilter_brand" text,
  "oilfilter_number" text,
  "oiltype" text,
  "finishup_checklist" boolean,
  "oilcapsecure" text,
  "oilsticksecure" text,
  "transmissionsticksecure" text,
  "powersteeringcapsecure" text,
  "brakereservoircap" text,
  "coolantcapsecure" text,
  "washerfluidcapsecure" text,
  "toolcheck" text,
  "testdrive" text,
  "retorquelugnuts" text,
  "giftpack" text,
  "reviewchecklist" text,
  "vehicle_observations" text,
  "recommended_repairs" text,
  "repairs_declined" text,
  "date_completed" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "parts_installed" text,
  "engine_size" text,
  "cost" money,
  "checklist_status" text,
  "mechanics" text,
  "checkout_completed" boolean
);
```

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Feature a
- [x] Feature b

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Feature c

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Abdi Suliman
* Alecia Hodges
* Alex Jung
* Eric Austin
* Ian Lehfeldt
* Julie Zimmer


## Acknowledgments

* Hat tip to anyone who's code was used
