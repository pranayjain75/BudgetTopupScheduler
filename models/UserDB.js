const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  status: {
    type: String,
    trim: true,
  },
  teamId: {
    type: String,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  organizationId: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("users", userSchema);
