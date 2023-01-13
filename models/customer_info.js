const mongoose = require("mongoose");
var validator = require("validator");

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 55,
    },
    phone: {
      // type:Number,
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Phone is invalid");
        }
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    dob: {
      type: Date,
      validate(value) {
        if (!validator.isDate(value)) {
          throw new Error("Date is invalid");
        }
      },
    },
    pass: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer_Infos',CustomerSchema)
// module.exports = CustomerSchema



// Customer_Infos
// cid : Objectid
// c_name : String
// c_phone : Number
// c_email : String
// dob : Date '1999-06-02'
// c_pass : String
// c_address : String


// {
//     "name":"Kshitij Gaikwad",
//     "phone":"+9664359608",
//     "email":"kmgaikwad97@gmail.com",
//     "dob":"1997-9-25",
//     "pass":"kmg@123",
//     "address":"Bandra"
// }
