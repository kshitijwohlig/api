const mongoose = require("mongoose");

const Prac1 = new mongoose.Schema(
  {
    name:{
      type:String,
    },
    email:{
      type:String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('pracdata',Prac1)
