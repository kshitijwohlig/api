const Prac2  = require("../models/prac2");

// 1. Create Data
// const createData = async (req, res) => {
//     try {
//             const addUser = new Prac2(req.body)
//             console.log("data",req.body);
//             const inserUser = await addUser.save({});
//             res.status(201).send(inserUser)
//     }
//     catch (err) {
//         res.status(500).json(err.message)
//     }
// }

module.exports = {
    createData: async(req,res)=>{
        // const { name,email } = req.body
        // console.log(name, email,"data");

        const data = await Prac2.create({
            title:req.body.title,
            postedBy:req.body.postedBy,
        })
        console.log(data,"data is here");
        const totaldata = await data.save();
        res.status(201).send(totaldata);
        console.log("totaldata",totaldata);
        return res.send(totaldata);
    },

    getPrac2: async(req,res)=>{
        // const data = await Prac2.find({_id:req.body.idfordata})
        const data = await Prac2.find({_id:req.body.idfordata}).populate("postedBy");
        console.log(data,"data is here");
        res.send(data);
    }
}


// 2. Get Data

// const getPrac2= async (req, res) => {
//     try {
//         const result = await Prac2.find().populate("postedBy")
//         res.status(200).json(result);
//         console.log(result,"result is here");
//     }
//     catch (err) {
//         res.status(500).json(err.message)
//     }
// }

// module.exports = { createData, getPrac2}


// /home/user/Downloads/api/controller/prac2.js






