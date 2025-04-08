const {
  CreateProjectService,
  GetProjectService,
} = require("../services/projectService");

const CreateProjectAPI = async (req, res) => {
  // let data = ({type,name,startDate,endDate,description,customerInfor,leader,} = req.body);
  //   console.log("test-reqBody", data);

  let result = await CreateProjectService(req.body);
  return res.status(201).json({
    errorCode: 0,
    data: result,
  });
};

const GetProjectAPI = async (req, res) => {
  // console.log("hnv-test", req.query)
  let result = await GetProjectService(req.query);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  CreateProjectAPI,
  GetProjectAPI,
};
