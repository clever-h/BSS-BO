const DataEmployee = require('../models/dataEmployee');

const fetchEmployee = async (req, res) => {
  const dataE = await DataEmployee.find();

  res.json(dataE);
};

const fetchDataEmployee = async (req, res) => {
  const EmployeeId = req.params._id;
  const dataE = await DataEmployee.findById(EmployeeId);

  res.json(dataE);
};

const createDataEmployee = async (req, res) => {
  const { name, position, phone, email } = req.body;

  const dataE = await DataEmployee.create({
    name,
    position,
    phone,
    email,
  });

  res.json(dataE);
};

const updateDataEmployee = async (req, res) => {
  const EmployeeId = req.params._id;

  const name = req.body.name;
  const position = req.body.position;
  const phone = req.body.phone;
  const email = req.body.email;

  await DataEmployee.findByIdAndUpdate(EmployeeId, {
    name: name,
    position: position,
    phone: phone,
    email: email,
  });

  const dataE = await DataEmployee.findById(EmployeeId);

  res.json({ dataE });
};

const deleteDataEmployee = async (req, res) => {
  const EmployeeId = req.params.id;

  await DataEmployee.deleteOne({ id: EmployeeId });

  res.json({ Success: 'Employee Deleted' });
};

module.exports = {
  fetchEmployee: fetchEmployee,
  fetchDataEmployee: fetchDataEmployee,
  createDataEmployee: createDataEmployee,
  updateDataEmployee: updateDataEmployee,
  deleteDataEmployee: deleteDataEmployee,
};
