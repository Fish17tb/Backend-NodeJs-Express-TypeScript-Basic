const Project = require("../models/Projects");

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

module.exports = {
  CreateProjectService,
};
