const mongoose = require('mongoose');

const dataEmployeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  phone: Number,
  email: String,
});

const DataEmployee = mongoose.model('DataEmployee', dataEmployeeSchema);

module.exports = DataEmployee;
