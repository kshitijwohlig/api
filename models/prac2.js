const mongoose = require("mongoose");

const Prac2 = new mongoose.Schema(
  {
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pracdata"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('pracdatas',Prac2)




