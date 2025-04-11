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

const UpdateProjectService = async (projectData) => {
  try {
    let result = await Project.updateOne(
      { _id: projectData._id },
      {
        name: projectData.name,
        startDate: projectData.startDate,
        endDate: projectData.endDate,
        description: projectData.description,
      }
    );
    return result;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

const DeleteProjectService = async (_id) => {
  try {
    let result = await Project.deleteById(_id);
    return result;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

const DeleteUserFromProjectService = async (data) => {
  try {
    if (data.type === "REMOVE-USERS") {
      let myProject = await Project.findById(data.projectId);
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

module.exports = {
  CreateProjectService,
  GetProjectService,
  UpdateProjectService,
  DeleteProjectService,
  DeleteUserFromProjectService,
};
