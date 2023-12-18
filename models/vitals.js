
const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientID: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  spO2: String,
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
