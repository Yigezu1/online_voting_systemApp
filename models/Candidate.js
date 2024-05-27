const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  county: {
    type:String,
    unique: true
  },
  email: {
    type:String,
    unique: true
  },
  streetAddress: String,
  city: String,
  state: String,
  zipcode: String
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;
