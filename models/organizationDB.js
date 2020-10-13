const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  legalEntityname: {
    type: String,
    trim: true,
  },
  issuingBalance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("organizations", organizationSchema);
