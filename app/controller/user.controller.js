const userModel = require("../models/user.model");
const service = require("../service/service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.login = async (req, res) => {
  try {
    if (!req.body || !req.body.email || !req.body.password) {
      return res.status(400).send("error bad request");
    }
    const filter = {
      email: req.body.email,
    };
    const user = await service.findOne(userModel, filter);
    if (!user) {
      return res.status(404).send("User does not exist");
    }

    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(401).send("Incorrect Password");
    }
    console.log(result);
    const token = await jwt.sign({ name: user.name, email: user.email, _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.status(200).send({
      message: "Signin Successful",
      token: token,
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {}
};

module.exports.verifyToken = function (req, res, next) {
  //get the token from the header if present
  token = req.headers.authorization;
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    return res.status(400).send("Unauthorzied asd");
  }
  try {
    if (token.includes("Bearer")) {
      token = token.substr(7);
    }
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    return res.status(200).send(decoded);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invalid Token");
  }
};
