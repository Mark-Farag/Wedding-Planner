const mongoose = require('mongoose');
const AppError = require('./../utils/appError');

const reserveSchema = new mongoose.Schema({
  event: {
    type: String,
  },
  date: { type: Date },
  venue: { type: String },
  dj: { type: String },
  decoration: { type: String },
  catering: { type: String },
  photographers: String,
});
const Reserve = new mongoose.model('Reserve', reserveSchema);
module.exports = Reserve;
