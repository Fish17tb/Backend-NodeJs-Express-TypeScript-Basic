const mongoose = require("mongoose");

// shape data
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  // https://mongoosejs.com/docs/timestamps.html
  { timestamps: true }
);
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
