const utils = require("../utils/datecheck");

const getDate = (req, res) => {
  const date = req.body;
  let message = "ee";
  try {
    const resDate = utils.isValidDate(date);
    message = resDate.message;
    console.log(resDate);
    console.log(message);
  } catch (err) {
    message = err;
  }
  return res.status(200).send(message);
};

module.exports = {
  getDate,
};
