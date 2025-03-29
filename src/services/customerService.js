// logic connect to DB

const Customer = require("../models/Customers");
const aqp = require("api-query-params");

const customerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const customerArrayService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const getCustomersService = async (limit, page, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter, skip } = aqp(queryString);
      delete filter.page;

      // console.log("hnv-filer", filter);
      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const UpdateCustomerService = async (customerData) => {
  try {
    let result = await Customer.updateOne(
      { _id: customerData._id },
      {
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        description: customerData.description,
      }
    );
    return result;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

const DeleteCustomerService = async (_id) => {
  try {
    //
    let result = await Customer.deleteById(_id);
    return result;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

const DeleteArrayCustomerService = async (arrayId) => {
  try {
    let result = await Customer.delete({ _id: { $in: arrayId } });
    return result;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

module.exports = {
  customerService,
  customerArrayService,
  getCustomersService,
  UpdateCustomerService,
  DeleteCustomerService,
  DeleteArrayCustomerService,
};
