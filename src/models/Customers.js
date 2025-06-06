const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

// shape data
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

// soft delete mongodb (auto add deleted = true/false)
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
