//load env Variables
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

// Import Dependencies

const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');
const DataEmployeeController = require('./Controllers/employeController');

//Create an Express App

const app = express();

//Configure Express App
app.use(express.json());
app.use(cors());

//Connect to Database
connectToDb();

//Routing

//Fetch DataEmployee (DataEmployee)
app.get('/DataEmployee', DataEmployeeController.fetchEmployee);

//Fetch DataEmployee ByID (DataEmployee)
app.get('/DataEmployee/:_id', DataEmployeeController.fetchDataEmployee);

//Create DataEmployee (DataEmployee)

app.post('/DataEmployee', DataEmployeeController.createDataEmployee);

//Update DataEmployee (DataEmployee)
app.put('/DataEmployee/:_id', DataEmployeeController.updateDataEmployee);

//Delete DataEmployee ByID (DataEmployee)
app.delete('/DataEmployee/:id', DataEmployeeController.deleteDataEmployee);

//Start Our Server

app.listen(process.env.PORT);
