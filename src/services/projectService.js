const Project = require("../models/Projects");

const CreateProjectService = async (data) => {
  try {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
};

module.exports = {
  CreateProjectService,
};
