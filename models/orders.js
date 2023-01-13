const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    // reference from Product 
    // means taking id from products
    pid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },

    // reference from Product 
    // means taking id from products
    cid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer_Infos'
    },

    // reference from payments 
    // means taking id from paymentss
    pay_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Payments'
    },


    o_date_time:{
        type:Date,
        default:Date.now()
    },
    delivery_status:{
        type:String,
        enum : ['Complete','Incomplete'],
        default: 'Incomplete'
    },
    quantity:{
        type:Number,
        required:true
    },
    colors:{
        type:Array,
        required:true
    },
    sizes:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true
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
module.exports =mongoose.model('Orders', OrdersSchema)


// Orders
// oid : Objectid,
// pid : [Objectid],
// sid : Objectid,
// cid : Objectid,
// pay_id : Objectid,
// o_date_time: Date,
// delivery-status :String,
// quantity : Number,
// o_address : String,
// amount : Number,
// subtotal : Number,
// tax : Number,
// discount : Number,

// const a={
//     pid:"6371d87c1355ca19814edcd0",
//     cid:"6371cec11a6937501246fcbc",
//     pay_id:"",
//     delivery_status:'Complete',
//     quantity:1,
//     amount:780,
//     subtotal:920.4
// }