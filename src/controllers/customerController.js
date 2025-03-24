// C2: write a function that doesn't need to be exported the same way as default
// (but must be written in object type {key: value})
// way default => apiControlller.js

const { uploadSingleFile } = require("../services/fileService");
const {
  customerService,
  customerArrayService,
  getCustomersService,
} = require("../services/customerService");
const Customer = require("../models/Customers");

module.exports = {
  CreateCustomerAPI: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    // console.log("check-value:", "name:", name, email)

    imageURL = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    } else {
      let result = await uploadSingleFile(req.files.image);
      //   console.log("check-path", result.path)
      imageURL = result.path;
    }

    const customerData = {
      // can be written as {key: value}
      //  but not here because key and value are the same (eg: name: name)
      name,
      address,
      phone,
      email,
      description,
      image: imageURL,
    };
    // console.log("check-customerData", customerData)

    let customer = await customerService(customerData);

    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },
  CreateArrayCustomerAPI: async (req, res) => {
    // console.log("check-data", req.body.customers)
    let customers = await customerArrayService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(400).json({
        errorCode: -1,
        data: null,
      });
    }
  },
  getCustomersAPI: async (req, res) => {
    let results = await getCustomersService();
    return res.status(200).json({
      errorCode: 0,
      data: results,
    });
  },
};
