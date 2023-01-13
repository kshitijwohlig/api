const mongoose = require("mongoose");

const Prac2 = new mongoose.Schema(
  {
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "postedfirstdata"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('posteddata',Prac2)




