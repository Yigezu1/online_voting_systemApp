const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VoterSchema = new Schema({
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
  zipcode: String,
  candidates: [
    {
      type: Schema.Types.ObjectId,
      ref: "Candidate"
    }
  ]
});

const Voter = mongoose.model("User", VoterSchema);

module.exports = Voter;
