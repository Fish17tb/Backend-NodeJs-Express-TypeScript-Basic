const { default: aqp } = require("api-query-params");
const Task = require("../models/Tasks");

module.exports = {
  CreateTaskService: async (data) => {
    try {
      if (data.type === "EMPTY-TASK") {
        let result = await Task.create(data);
        return result;
      }
    } catch (error) {
      console.log("ERROR:", error);
      return null;
    }
  },

  GetTasksService: async (queryString) => {
    try {
      let result = null;
      const page = queryString.page;
      const limit = queryString.limit;
      if (limit && page) {
        let offset = (page - 1) * limit;
        const { filter } = aqp(queryString);
        delete filter.page;
        result = await Task.find(filter).skip(offset).limit(limit).exec();
      } else {
        result = await Task.find({});
      }
      return result;
    } catch (error) {
      console.log("ERROR:", error);
      return null;
    }
  },

  UpdateTaskService: async (data) => {
    try {
      // let t = {...data}
      let result = await Task.updateOne({ _id: data._id }, { ...data });
      console.log("result", result)
      return result;
    } catch (error) {
      console.log("ERROR", error);
      return null;
    }
  },

  DeleteTaskService: async (_id) => {
    try {
      let result = await Task.deleteById(_id);
      return result;
    } catch (error) {
      console.log("ERROR", error);
      return null;
    }
  },
};
