const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    pay_type:{
        type:String,
        required:true,
        enum : ['COD','UPI','CARD'],
    },
    pay_status:{
        type:String,
        enum : ['Paid','Unpaid'],
        default: 'Unpaid'
    },
    // reference from order 
    // means taking id from orders
    oid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders' 
    },
    // reference from customer_info 
    // means taking id from customer_infos
    cid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer_Infos' 
    },
    pay_date_time:{
        type:Date,
        default:Date.now()
    },
    total:{
        type:Number,
        required:true
    },
    tax:{
        type:Number,
        default:18
    }
},
{ timestamps: true })

module.exports = mongoose.model('Payments', PaymentsSchema)

// Payments
// pay_id : Objectid
// amount : Number
// pay_type : String enum
// pay_status : String enum
// oid : Objectid
// cid : Objectid
// pay_date_time: Date
// subtotal : Number
// tax : Number
// discount : Number