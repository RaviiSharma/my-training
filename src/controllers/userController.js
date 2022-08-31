const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length > 0) {
      let user = await userModel.create(req.body);
      res.status(201).send({ status: true, msg: user }); //201 the request has succeeded and has led to the creation of a resource.
    } else {
      res.status(400).send({ error: "Please provide input data" }); //400 Bad request the server cannot or will not process the (invalid request).
    }
  } catch (error) {
        res.status(500).send({ error: error.message }); //500 This error is usually returned by the server when no other error code is suitable.
  }
};

const userLogin = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (userName && password) {
      let user = await userModel.findOne({
        emailId: userName,
        password: password,
      });
      if (!user)
        return res
          .status(404)  //404 is a status code that tells a web user that a requested page is not available. 
          .send({ status: false, msg: "username or password is incorrect " });

      let userToken = jwt.sign({ userId: user._id.toString() }, "ravikumarsharma");

      res.status(200).send({ status: true, msg: userToken }); //200 OK success status response code indicates that the request has succeeded.
    } else {
      res.status(400).send({ status: false, error: "Please provide user inputs" }); //400 Bad request the server cannot or will not process the (invalid request)
    }                                                                             //  request due to something that is perceived to be a client error.
  } catch (error) {
    res.status(500).send({ error: error.message }); //500 This error is usually returned by the server when no other error code is suitable.
  }
};

const getUser = async function (req, res) {
  try{

    let id = req.params.userId;
    let userById = await userModel.findById(id);
    
      res.status(200).send({ status: true, msg: userById });
    
  }catch (error) {
    res.status(500).send({error: error.message}) //500 This error is usually returned by the server when no other error code is suitable.
  }
};

const updateUserData = async function (req, res) {
  try{
  let id = req.params.userId;
  let data = req.body;
  if(Object.keys(data).length > 0){

    let updateUser = await userModel.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    res.status(200).send({ status: true, msg: updateUser }); //200 OK success status response code indicates that the request has succeeded.
  }else{
    res.status(400).send({status : false, msg: "provide input data"}) //400 Bad request the server cannot or will not process the (invalid request).
  }
  }
  catch (error) {
    res.status(500).send({error : error.message}) //500 This error is usually returned by the server when no other error code is suitable.
  }
};

const deleteUserData = async function (req, res) {
  try {

    let id = req.params.userId;
    let deleteUser = await userModel.findByIdAndUpdate(
      { _id: id },
      { $set: { isDeleted: true } },
      { new: true }
      );
      res.status(201).send({ status: true, msg: deleteUser }) //201 the request has succeeded and has led to the creation of a resource.
    }catch (error){
        res.status(500).send({error :error.message}) //500 This error is usually returned by the server when no other error code is suitable.
    }
  }
    

module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.getUser = getUser;
module.exports.updateUserData = updateUserData;
module.exports.deleteUserData = deleteUserData