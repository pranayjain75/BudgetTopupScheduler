const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  budget: {
    type: Number,
    required: true,
  },
  expenseLimit: {
    type: Number,
    trim: true,
  },
  teamSize: {
    type: Number,
  },
  name: {
    type: String,
    trim: true,
  },
  organizationId: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("teams", teamSchema);
