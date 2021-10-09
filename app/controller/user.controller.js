const userModel = require("../models/user.model");
const service = require("../service/service");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
  try {
    let body = req.body;
    if (body.name && !body.displayName) {
      body.displayName = body.name;
    }
    if (!body.password || body.password.length < 5) {
      return res.status(406).send("Password required");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);
    body.password = hashPassword;

    const user = await service.save(userModel, body);
    return res.status(202).send(user);
  } catch (err) {
    return res.status(400).send(err);
  }
};
