const catchAsync = require("../utils/catchAsync");

const uploadImage = catchAsync(async (req, res) => {
// @Todo add file to queue and status to redis queue

  res.send('Upload Successful');
});

module.exports = {
  uploadImage,
}