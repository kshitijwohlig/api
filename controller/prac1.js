const Prac1 = require("../models/prac1");

// 1. Create Data
// const createData = async (req, res) => {
//     try {
//             const addUser = new Prac1(req.body)
//             console.log("data",req.body);
//             const inserUser = await addUser.save({});
//             res.status(201).send(inserUser)
//     }
//     catch (err) {
//         res.status(500).json(err.message)
//     }
// }

module.exports = {
  createData: async (req, res) => {
    const { name, email } = req.body;
    console.log(name, email, "data");
    const data = await Prac1.create({
      name,
      email,
    });
    res.status(201).send(data);
    console.log("data", data);
    return res.send(data);
  },
  getPrac1: async (req, res) => {
    try {
      const result = await Prac1.find();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

// 2. Get Data

// const getPrac1= async (req, res) => {
//     try {
//         const result = await Prac1.find()
//         res.status(200).json(result)
//     }
//     catch (err) {
//         res.status(500).json(err.message)
//     }
// }

// module.exports = { createData, getPrac1}
