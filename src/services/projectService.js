const Project = require("../models/Projects");
const aqp = require("api-query-params");

const CreateProjectService = async (data) => {
  try {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      // console.log("hnv-testData", data)
      let myProject = await Project.findById(data.projectId);
      // console.log("hnv-projectId", myProject);
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};

const GetProjectService = async (queryString) => {
  try {
    let result = null;
    const page = queryString.page;
    const limit = queryString.limit;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter, population } = aqp(queryString);
      delete filter.page;
      // console.log("hnv-filer", filter);
      result = await Project.find(filter)
        .skip(offset)
        .limit(limit)
        .populate(population)
        .exec();
    } else {
      result = await Project.find({});
    }
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  CreateProjectService,
  GetProjectService,
};
