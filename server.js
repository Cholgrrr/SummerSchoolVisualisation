const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
const request = require('ajax-request');

app.use(express.static('public'));
app.listen(process.env.PORT || 8080);




//--------------------------------------------------------------
//Database access
//--------------------------------------------------------------

const pgp = require('pg-promise')({
    // Initialization Options 
});

const connection = {

  user: 'postgres', 																		// name of the user account
  database: 'newdb', 																	// name of the database
  password: 'postgres', 																	// env var: PGPASSWORD 
  host: 'localhost', 				// Server hosting the postgres database (host: '35.187.21.114')
  port: 5432, 																				// env var: PGPORT 
  max: 10, 																					// max number of clients in the pool
  idleTimeoutMillis: 30000 																	// how long a client is allowed to remain idle before being closed

}

const db = pgp(connection);
console.log('successful connected to DB: newdb!')


//#########################################################################################################
app.post('/loadspaceheating', function (req, res) {
    console.log('command angekommen!')
    try {

        const data = req.body;

		let query_string = "SELECT * "
        query_string += "FROM public.simstadtout "
 
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!\n' + err);
    }

});
//--------------------------------------------------------------
app.post('/loadPV', function(req, res) {
  console.log('command angekommen!')
	try {
		
	const data = req.body;
		console.log(Object.keys(data).length)
		console.log(data[0])
		
		let query_string = "SELECT pv.id, pv.cityobject_id, pv.building_class, pv.type, pv.area, pv.pv_potential_normal, pv.pv_potential_yield, Co.gmlid "
			query_string += "FROM citydb.nrg8_solar_potential as pv "
			query_string += "Inner Join citydb.cityobject as Co On pv.cityobject_id=Co.ID "
			query_string += "Where pv.pv_potential_normal <= " + data[0] + ";"
		
		//request the data
		console.log(query_string)
		db.result(query_string)
		.then(result => {
			res.json(result.rows);
		})
		.catch(error => {
			console.log('ERROR:',error);
		});
		console.log('.../loadPV successful!');
		
	}
	catch(err) {
		console.log('.../loadPV failed!\n' + err);
	}
		
 });
 //-------------------------------------------------------------
app.post('/postSetP', function(req, res) {
  console.log('command angekommen!')
	try {
		
	const data = req.body;
		console.log(Object.keys(data).length)
		console.log(data[0])
		//#########################################################################
		// ADD
		//#########################################################################
		let query_string = "SELECT pv.id, pv.cityobject_id, pv.building_class, pv.type, pv.area, pv.pv_potential_normal, pv.pv_potential_yield, Co.gmlid "
			query_string += "FROM citydb.nrg8_solar_potential as pv "
			query_string += "Inner Join citydb.cityobject as Co On pv.cityobject_id=Co.ID "
			query_string += "Where pv.pv_potential_normal <= " + data[0] + ";"
		
		//request the data
		console.log(query_string)
		db.result(query_string)
		.then(result => {
			res.json(result.rows);
		})
		.catch(error => {
			console.log('ERROR:',error);
		});
		console.log('.../loadPV successful!');
		
	}
	catch(err) {
		console.log('.../loadPV failed!\n' + err);
	}
		
 });
//--------------------------------------------------------------
app.post('/loadSetPDB', function (req, res) {
    console.log('command angekommen!')
    try {

        const data = req.body;
        //console.log(Object.keys(data).length)
        //console.log(data[0])

		let query_string = "SELECT obj.gmlid as gmlid, sch.value1 as setpointtemp "
		query_string += "FROM citydb.nrg8_schedule as sch inner join citydb.nrg8_usage_zone as uzone on sch.id = uzone.heat_sched_id "
		query_string += "inner join citydb.cityobject as obj on uzone.id = obj.id "
		
        //request the data
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!\n' + err);
    }

}); 
//--------------------------------------------------------------
app.post('/loadgetgas', function (req, res) {
    console.log('command angekommen!')
    try {

        const data = req.body;
        //console.log(Object.keys(data).length)
        //console.log(data[0])

		let query_string = "SELECT * "
        query_string += "FROM public.tbl_building_electricity "
		//query_string += "FROM citydb.nrg8_schedule as sch inner join citydb.nrg8_usage_zone as uzone on sch.id = uzone.heat_sched_id "
		//query_string += "inner join citydb.cityobject as obj on uzone.id = obj.id "
		
        //request the data
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!\n' + err);
    }

});
//--------------------------------------------------------------
app.post('/loadgetheat', function (req, res) {
    console.log('command angekommen!')
    try {

        const data = req.body;
        //console.log(Object.keys(data).length)
        //console.log(data[0])

		let query_string = "SELECT * "
        query_string += "FROM public.tbl_simstadt "
		//query_string += "FROM citydb.nrg8_schedule as sch inner join citydb.nrg8_usage_zone as uzone on sch.id = uzone.heat_sched_id "
		//query_string += "inner join citydb.cityobject as obj on uzone.id = obj.id "
		
        //request the data
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!\n' + err);
    }

}); 

app.post('/loadgetheatnew', function (req, res) {
    console.log('command angekommen!')
    try {

        const data = req.body;
        //console.log(Object.keys(data).length)
        //console.log(data[0])

		let query_string = "SELECT * "
        query_string += "FROM public.tbl_simstadt_new "
		//query_string += "FROM citydb.nrg8_schedule as sch inner join citydb.nrg8_usage_zone as uzone on sch.id = uzone.heat_sched_id "
		//query_string += "inner join citydb.cityobject as obj on uzone.id = obj.id "
		
        //request the data
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!\n' + err);
    }

}); 
//--------------------------------------------------------------
app.post('/loadSetP', function(req, res) {
  console.log('command angekommen!')
	try {
		
    const city = req.body;
    console.log(city)
		
		let query_string = "Select citydb.building.function, citydb.cityobject.gmlid "
			query_string += "FROM citydb.building "
            query_string += "Inner join citydb.cityobject on citydb.building.id = citydb.cityobject.id "
            query_string += "Left join citydb.address_to_building on citydb.building.id = citydb.address_to_building.building_id "
            query_string += "inner join citydb.address on citydb.address_to_building.address_id = citydb.address.id "
            query_string += "Where citydb.cityobject.gmlid Like 'DEBW%'and citydb.address.city = '" + city[0] + "';"
		
		//request the data
		console.log(query_string)
		db.result(query_string)
		.then(result => {
			res.json(result.rows);
		})
		.catch(error => {
			console.log('ERROR:',error);
		});
		console.log('.../loadSetP successful!');
		
	}
	catch(err) {
		console.log('.../loadSetP failed!\n' + err);
	}
		
 }); 


app.post('/saveTemp', function (req, res) {
    console.log('command angekommen!')
    try {

        const data = req.body;


        let query_string = "Select citydb.building.function, citydb.cityobject.gmlid "
        query_string += "FROM citydb.building "
        query_string += "Inner join citydb.cityobject on citydb.building.id = citydb.cityobject.id ;"

        //request the data
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!\n' + err);
    }

}); 
app.post('/askSetPoint', function (req, res) {
    console.log('command angekommen!')

    try {

        const data = req.body;
        console.log(Object.keys(data).length)
        console.log(data[0])

        //Version V2
		let query_string = "UPDATE citydb.nrg8_schedule SET value1='" + data[1] + "' WHERE gmlid='" + data[0] + "'; "
			query_string += "INSERT INTO citydb.nrg8_schedule (value1, gmlid, objectclass_id) "
			query_string += "SELECT '" + data[1] + "', '" + data[0] + "', (Select t.objectclass_id From citydb.cityobject as t Where t.gmlid = '" + data[0] + "') "
			query_string += "WHERE NOT EXISTS (SELECT 1 FROM citydb.nrg8_schedule WHERE gmlid='" + data[0] + "');"
		

        //request the data
        console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!!!\n' + err);
    }


});

app.post('/putSetPoint', function (req, res) {
    console.log('command angekommen!')

	//------------------------------------------------------------------------------------------------------
	try {

        const data = req.body;
        console.log(Object.keys(data).length)
        console.log(data[0])


		//Version V3
		let query_string = "INSERT INTO citydb.nrg8_usage_zone (id, objectclass_id, heat_sched_id) "
			query_string += "Values ((Select o.id FRom citydb.cityobject as o Where o.gmlid = '" + data[0] + "'), "
			query_string += "(Select n.objectclass_id From citydb.cityobject as n Where n.gmlid='" + data[0] + "'), "
			query_string += "(Select i.id From citydb.nrg8_schedule as i where i.gmlid = '" + data[0] + "')) "
			query_string += "ON CONFLICT (id) DO UPDATE "
			query_string += "SET objectclass_id = (Select n.objectclass_id From citydb.cityobject as n Where n.gmlid='" + data[0] + "'), "
			query_string += "heat_sched_id = (Select i.id From citydb.nrg8_schedule as i where i.gmlid = '" + data[0] + "');"
        
		console.log(query_string)
        db.result(query_string)
            .then(result => {
                res.json(result.rows);
            })
            .catch(error => {
                console.log('ERROR:', error);
            });
        console.log('.../loadSetP successful!');

    }
    catch (err) {
        console.log('.../loadSetP failed!!!\n' + err);
    }

});