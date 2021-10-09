exports.save = async (model, body) => {
  return await model.create(body);
};

exports.findOne = async (model, filter, projection) => {
  return await model.findOne(filter, projection);
};
