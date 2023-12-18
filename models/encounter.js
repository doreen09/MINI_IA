
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: String,
  dateTime: Date,
  type: String, // 'Emergency', 'OPD', 'Specialist Care', etc.
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;

