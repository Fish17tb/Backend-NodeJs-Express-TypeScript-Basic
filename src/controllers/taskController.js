const {
  CreateTaskService,
  GetTasksService,
  UpdateTaskService,
  DeleteTaskService,
} = require("../services/taskService");

module.exports = {
  CreateTaskAPI: async (req, res) => {
    // let data = { type, name, startDate, endDate, descriptio, status } = req.body;
    //   console.log("hnv-data:", data)
    let result = await CreateTaskService(req.body);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  GetTasksAPI: async (req, res) => {
    // console.log("hnv-data:", req.query)
    let result = await GetTasksService(req.query);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  UpdateTaskAPI: async (req, res) => {
    // console.log("hnv-test", req.body)
    let result = await UpdateTaskService(req.body);
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
  },

  DeleteTaskAPI: async (req, res) => {
    // console.log("hnv-test", req.body);
    let _id = req.body._id;
    let result = await DeleteTaskService(_id);
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        data: result,
        mess: "xóa task thành công",
      });
    } else {
      return res.status(400).json({
        errorCode: -1,
        data: null,
        mess: "task này không tồn tại trong hệ thống!",
      });
    }
  },
};
