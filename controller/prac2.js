const Prac2  = require("../models/prac2");

// 1. Create Data
const createData = async (req, res) => {
    try {
            const addUser = new Prac2(req.body)
            console.log("data",req.body);
            const inserUser = await addUser.save({});
            res.status(201).send(inserUser)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

// 2. Get Data

const getPrac2= async (req, res) => {
    try {
        const result = await Prac2.find().populate("postedBy")
        res.status(200).json(result);
        console.log(result,"result is here");
//         Post.find()
// .populate("postedBy")
// .then(p=>console.log(p))
// .catch(error=>console.log(error));
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = { createData, getPrac2}


// /home/user/Downloads/api/controller/prac2.js






