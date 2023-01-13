const userData = require("../../models/user");

// Get All User
const getUser = async (req, res) => {
  try {
    const getUser = await userData.find({});
    res.send(getUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get Single User
const getParticularUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const _id = req.params.id;
    const getThatUser = await userData.findById(_id);
    res.send(getThatUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Save User

const postUser = async (req, res) => {
  try {
    const addUser = new userData(req.body);
    console.log(addUser,"adddddddd");
    const inserUser = await addUser.save({});
    res.status(201).send(inserUser);
  } catch (err) {
    res.status(409).send(err);
    console.log("Email already exist");
  }
};

// Update User

const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(req.params.id);
    const updateUser = await userData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete User

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await userData.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getUser,
  getParticularUser,
  postUser,
  updateUser,
  deleteUser,
};
