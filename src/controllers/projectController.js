const Joi = require("joi");
const {
  CreateProjectService,
  GetProjectService,
  UpdateProjectService,
  DeleteProjectService,
  DeleteUserFromProjectService,
} = require("../services/projectService");

const CreateProjectAPI = async (req, res) => {
  // let data = ({type,name,startDate,endDate,description,customerInfor,leader,} = req.body);
  //   console.log("test-reqBody", data);

  // validate data
  const customerJoiSchema = Joi.object({
    name: Joi.string().required(),
    contact: Joi.string().required(),
  });

  const leaderJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  const projectSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    description: Joi.string(),
    customerInfor: customerJoiSchema,
    usersInfor: Joi.array().items(Joi.string().hex().length(24)),
    leader: leaderJoiSchema,
    tasks: Joi.array().items(Joi.string().hex().length(24)),
  });

  const { error } = projectSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: error,
    });
  } else {
    let result = await CreateProjectService(req.body);
    return res.status(201).json({
      errorCode: 0,
      data: result,
    });
  }
};

const GetProjectAPI = async (req, res) => {
  // console.log("hnv-test", req.query)
  let result = await GetProjectService(req.query);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const UpdateProjectAPI = async (req, res) => {
  let { _id, name, startDate, endDate, description } = req.body;
  // console.log("hnv-test", req.body)

  const projectData = {
    _id,
    name,
    startDate,
    endDate,
    description,
  };
  let project = await UpdateProjectService(projectData);
  if (project) {
    return res.status(200).json({
      errorCode: 0,
      data: project,
    });
  } else {
    return res.status(400).json({
      errorCode: -1,
      data: null,
    });
  }
};

const DeleteProjectAPI = async (req, res) => {
  let _id = req.body._id;
  // console.log("hnv-test:", _id)
  let result = await DeleteProjectService(_id);
  if (result) {
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } else {
    return res.status(400).json({
      errorCode: -1,
      data: null,
    });
  }
};

const DeleteUserFromProjectAPI = async (req, res) => {
  // console.log("hnv-data:", req.body);
  let result = await DeleteUserFromProjectService(req.body);
  if (result) {
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } else {
    return res.status(400).json({
      errorCode: -1,
      data: null,
    });
  }
};

module.exports = {
  CreateProjectAPI,
  GetProjectAPI,
  UpdateProjectAPI,
  DeleteProjectAPI,
  DeleteUserFromProjectAPI,
};
