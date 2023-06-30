const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Reserve = require('../models/reserveModel');

exports.reserve = catchAsync(async (req, res, next) => {
  const reserve = await Reserve.create(req.body);

  res.status(200).json({
    status: 'success',
    reserve,
  });
});
